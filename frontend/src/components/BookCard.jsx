import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import axios from 'axios';

const BookCard = ({ book, isFavorite, onFavoriteToggle }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [loading, setLoading] = useState(false);

  const bookId = String(book.id);

  const highRes = `https://covers.openlibrary.org/b/title/${encodeURIComponent(
    book.title
  )}-L.jpg`;

  const lowRes = `https://covers.openlibrary.org/b/title/${encodeURIComponent(
    book.title
  )}-S.jpg`;

  const fallbackCover = "https://via.placeholder.com/300x500?text=No+Cover";

  const handleFavoriteClick = async (e) => {
    e.preventDefault();

    if (loading) return;
    setLoading(true);

    try {
      if (isFavorite) {
        await axios.delete(`http://localhost:5000/api/favorites/${bookId}`);
        onFavoriteToggle(bookId, false);
      } else {
        await axios.post('http://localhost:5000/api/favorites', {
          bookId,
          title: book.title,
          author: book.author,
          genre: book.genre,
          description: book.description
        });

        onFavoriteToggle(bookId, true);
      }
    } catch (err) {
      console.error(
        "Favorite toggle error:",
        err.response?.data || err.message
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="book-card glass-panel animate-fade-in" style={{ position: 'relative' }}>

      {/* <img
        src={lowRes}
        alt="preview"
        style={{
          objectFit: "contain",
          filter: "blur(20px)",
          transform: "scale(1.1)",
          position: "absolute",
          top: 0,
          left: 0,
          opacity: imgLoaded ? 0 : 1,
          transition: "opacity 0.4s ease"
        }}
      /> */}

      <img
        src={highRes}
        alt={`${book.title} cover`}
        onLoad={() => setImgLoaded(true)}
        onError={(e) => {
          e.target.src = fallbackCover;
          setImgLoaded(true);
        }}
        style={{
          objectFit: "contain",
          position: "relative",
          opacity: imgLoaded ? 1 : 0,
          transition: "opacity 0.6s ease"
        }}
        className="book-cover"
      />

      <div className="book-info">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">{book.author}</p>
        <span className="book-genre">{book.genre}</span>

        <div className="book-actions">
          <Link to={`/book/${bookId}`} className="btn-primary">
            View
          </Link>

          <button
            className="btn-icon"
            onClick={handleFavoriteClick}
            disabled={loading}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            style={{ opacity: loading ? 0.5 : 1 }}
          >
            <Heart
              size={24}
              fill={isFavorite ? "var(--accent-danger)" : "none"}
              color={isFavorite ? "var(--accent-danger)" : "var(--text-secondary)"}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;