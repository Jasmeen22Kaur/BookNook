const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('./database');

const app = express();
app.use(cors());
app.use(express.json());

const JWT_SECRET = 'supersecretjwtkeyforlocaldev';

// Middleware to verify JWT
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.sendStatus(401);
    
    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

// Auth: Register
app.post('/api/auth/register', async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ error: 'Username and password required' });
    
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], function(err) {
            if (err) {
                if (err.message.includes('UNIQUE constraint failed')) {
                    return res.status(400).json({ error: 'Username already exists' });
                }
                return res.status(500).json({ error: err.message });
            }
            res.status(201).json({ id: this.lastID, username });
        });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Auth: Login
app.post('/api/auth/login', (req, res) => {
    const { username, password } = req.body;
    db.get('SELECT * FROM users WHERE username = ?', [username], async (err, user) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!user) return res.status(400).json({ error: 'Invalid Username or Password' });
        
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return res.status(400).json({ error: 'Invalid Username or Password' });
        
        const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '7d' });
        res.json({ token, username: user.username });
    });
});


app.get('/api/cover', async (req, res) => {
    const { title, author } = req.query;

    try {
        const response = await axios.get(
        'https://openlibrary.org/search.json',
        {
            params: { title, author }
        }
        );

        const docs = response.data.docs;

        const validDoc = docs.find(d => d.cover_i);

        res.json({
        coverId: validDoc ? validDoc.cover_i : null
        });

    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch cover' });
    }
});

const formatDbBook = (row) => ({
    id: row.id,
    title: row.title,
    author: row.author,
    genre: row.genre,
    description: row.description,
});

// Books: Get all or search
app.get('/api/books', (req, res) => {
    const query = req.query.q ? req.query.q.trim() : '';
    const likeQuery = `%${query}%`;
    const sql = query
        ? 'SELECT * FROM books WHERE title LIKE ? OR author LIKE ? OR genre LIKE ? COLLATE NOCASE LIMIT 100'
        : 'SELECT * FROM books LIMIT 100';
    const params = query ? [likeQuery, likeQuery, likeQuery] : [];

    db.all(sql, params, (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows.map(formatDbBook));
    });
});

// Books: Get by ID
app.get('/api/books/:id', (req, res) => {
    db.get('SELECT * FROM books WHERE id = ?', [req.params.id], (err, row) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!row) return res.status(404).json({ error: 'Book not found' });
        res.json(formatDbBook(row));
    });
});

// Favorites: Get user's favorites
app.get('/api/favorites', authenticateToken, (req, res) => {
    db.all('SELECT * FROM favorites WHERE userId = ?', [req.user.id], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        
        // Map backend favorites to standard book object structure
        const favorites = rows.map(row => ({
            id: row.bookId,
            title: row.title,
            author: row.author,
            genre: row.genre,
            description: row.description,
        }));
        
        res.json(favorites);
    });
});

// Favorites: Add to favorites
app.post('/api/favorites', authenticateToken, (req, res) => {
    const { bookId, title, author, genre, description } = req.body;
    if (!bookId) return res.status(400).json({ error: 'bookId is required' });
    
    db.run(
        'INSERT INTO favorites (userId, bookId, title, author, genre, description) VALUES (?, ?, ?, ?, ?, ?)', 
        [req.user.id, bookId, title, author, genre, description], 
        function(err) {
            if (err) {
                if (err.message.includes('UNIQUE constraint failed')) {
                    return res.status(400).json({ error: 'Book already in favorites' });
                }
                return res.status(500).json({ error: err.message });
            }
            res.status(201).json({ message: 'Added to favorites' });
        }
    );
});

// Favorites: Remove from favorites
app.delete('/api/favorites/:bookId', authenticateToken, (req, res) => {
    db.run('DELETE FROM favorites WHERE userId = ? AND bookId = ?', [req.user.id, req.params.bookId], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Removed from favorites' });
    });
});

// recommendation
app.get('/api/recommendations', authenticateToken, (req, res) => {
    db.all(
        'SELECT * FROM favorites WHERE userId = ?',
        [req.user.id],
        (err, favorites) => {
            if (err) return res.status(500).json({ error: err.message });

            if (!favorites || favorites.length === 0) {
                return res.status(200).json({
                    message: 'No favorites found. Add some books to get recommendations.',
                    recommendations: []
                });
            }

            const favoriteBookIds = favorites.map(f => f.bookId);

            const favoriteGenres = [...new Set(
                favorites.map(f => f.genre).filter(Boolean)
            )];

            const favoriteAuthors = [...new Set(
                favorites.map(f => f.author).filter(Boolean)
            )];

            const exclusionClause =
                favoriteBookIds.length > 0
                    ? `AND id NOT IN (${favoriteBookIds.map(() => '?').join(',')})`
                    : '';

            const exclusionParams =
                favoriteBookIds.length > 0 ? favoriteBookIds : [];

            const genreCond = favoriteGenres.map(() => 'LOWER(genre) LIKE LOWER(?)').join(' OR ');
            const authorCond = favoriteAuthors.map(() => 'LOWER(author) LIKE LOWER(?)').join(' OR ');

            const genreParams = favoriteGenres.map(g => `%${g}%`);
            const authorParams = favoriteAuthors.map(a => `%${a}%`);

            const strictSQL = `
                SELECT * FROM books
                WHERE (${genreCond}) AND (${authorCond})
                ${exclusionClause}
            `;

            db.all(strictSQL, [...genreParams, ...authorParams, ...exclusionParams], (err1, rows1) => {
                if (err1) return res.status(500).json({ error: err1.message });

                if (rows1.length > 0) {
                    return res.json(rows1.map(formatDbBook));
                }

                const looseSQL = `
                    SELECT * FROM books
                    WHERE (${genreCond} OR ${authorCond})
                    ${exclusionClause}
                `;

                db.all(looseSQL, [...genreParams, ...authorParams, ...exclusionParams], (err2, rows2) => {
                    if (err2) return res.status(500).json({ error: err2.message });

                    res.json(rows2.map(formatDbBook));
                });
            });
        }
    );
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
