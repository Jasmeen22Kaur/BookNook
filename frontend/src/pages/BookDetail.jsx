import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Heart, ArrowLeft } from 'lucide-react';

const BookDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [imgLoaded, setImgLoaded] = useState(false);

  const bookId = String(id);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const [bookRes, favRes] = await Promise.all([
          axios.get(`http://localhost:5000/api/books/${id}`),
          axios.get('http://localhost:5000/api/favorites')
        ]);

        setBook(bookRes.data);

        setFavorites(
          favRes.data.map(b => String(b.id || b.bookId))
        );

      } catch (err) {
        setError('Failed to load book details');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  
  const isFavorite = favorites.includes(bookId);

  
  const handleFavoriteClick = async () => {
    try {
      if (isFavorite) {
        await axios.delete(`http://localhost:5000/api/favorites/${bookId}`);

        setFavorites(prev =>
          prev.filter(x => x !== bookId)
        );
      } else {
        await axios.post('http://localhost:5000/api/favorites', {
          bookId,
          title: book.title,
          author: book.author,
          genre: book.genre,
          description: book.description,
        });

        setFavorites(prev => [...prev, bookId]);
      }
    } catch (err) {
      console.error('Error toggling favorite', err.response?.data || err.message);
    }
  };

  if (loading) {
    return (
      <div className="container" style={{ padding: '3rem', textAlign: 'center' }}>
        Loading...
      </div>
    );
  }

  if (error || !book) {
    return (
      <div className="container" style={{ padding: '3rem', textAlign: 'center', color: 'red' }}>
        {error || 'Book not found'}
      </div>
    );
  }

  const highRes = `https://covers.openlibrary.org/b/title/${encodeURIComponent(book.title)}-L.jpg`;
  const lowRes = `https://covers.openlibrary.org/b/title/${encodeURIComponent(book.title)}-S.jpg`;

  return (
    <div className="container animate-fade-in">

      <button
        onClick={() => navigate(-1)}
        className="btn-icon"
        style={{ marginTop: '2rem', display: 'flex', gap: '0.5rem' }}
      >
        <ArrowLeft size={20} /> Back
      </button>

      <div className="book-detail-container">

        <div style={{ position: "relative", width: "30%", margin: "0 auto", overflow: "hidden" }}>

          {/* <img
            src={lowRes}
            alt="blur preview"
            style={{
              width: "100%",
              height: "500px",
              objectFit: "contain",
              filter: "blur(20px)",
              transform: "scale(1.1)",
              position: "absolute",
              top: 0,
              left: 0,
              opacity: imgLoaded ? 0 : 1,
            }}
          /> */}

          <img
            src={highRes}
            alt={book.title}
            onLoad={() => setImgLoaded(true)}
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/300x500?text=No+Cover";
              setImgLoaded(true);
            }}
            style={{
              width: "100%",
              height: "500px",
              objectFit: "contain",
              position: "relative",
              opacity: imgLoaded ? 1 : 0,
            }}
          />
        </div>

        <div className="book-detail-info">

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>

            <div>
              <h1 className="book-detail-title">{book.title}</h1>
              <p className="book-detail-author">by {book.author}</p>

              <span className="book-genre">
                {book.genre}
              </span>
            </div>

            <button
              className="btn-icon"
              onClick={handleFavoriteClick}
              >
              <Heart
                size={32}
                fill={isFavorite ? "var(--accent-danger)" : "none"}
                color={isFavorite ? "var(--accent-danger)" : "var(--text-primary)"}
              />
            </button>

          </div>

          <div className="book-detail-desc">
            <h3>Description</h3>
            <p>{book.description}</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BookDetail;