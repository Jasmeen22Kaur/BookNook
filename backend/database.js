const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const { seedBooks } = require('./seed');

const dbPath = path.resolve(__dirname, 'database.sqlite');

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database', err.message);
    } else {
        console.log('Connected to the SQLite database.');
        
        // Initialize schema
        db.serialize(() => {
            db.run(`CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT UNIQUE,
                password TEXT
            )`);
            
            db.run(`CREATE TABLE IF NOT EXISTS favorites (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                userId INTEGER,
                bookId TEXT,
                title TEXT,
                author TEXT,
                genre TEXT,
                description TEXT,
                FOREIGN KEY (userId) REFERENCES users(id),
                UNIQUE(userId, bookId)
            )`);
            
            db.run(`CREATE TABLE IF NOT EXISTS books (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT,
                author TEXT,
                genre TEXT,
                description TEXT
            )`);

            db.get('SELECT COUNT(*) AS count FROM books', (countErr, row) => {
                if (countErr) {
                    console.error('Error checking books count', countErr.message);
                    return;
                }
                if (row.count === 0) {
                    seedBooks(db);
                }
            });
        });
    }
});

module.exports = db;
