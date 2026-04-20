import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import axios from 'axios';

const BookCard = ({ book, isFavorite, onFavoriteToggle }) => {
  const handleFavoriteClick = async (e) => {
    e.preventDefault();
    try {
      if (isFavorite) {
        await axios.delete(`http://localhost:5000/api/favorites/${book.id}`);
      } else {
        await axios.post('http://localhost:5000/api/favorites', { 
          bookId: book.id,
          title: book.title,
          author: book.author,
          genre: book.genre,
          description: book.description,
          imageUrl: book.imageUrl
        });
      }
      onFavoriteToggle(book.id, !isFavorite);
    } catch (err) {
      console.error('Error toggling favorite', err);
    }
  };

  return (
    <div className="book-card glass-panel animate-fade-in">
      <img src={book.imageUrl || 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=800&auto=format&fit=crop'} alt={book.title} className="book-cover" loading="lazy" />
      <div className="book-info">
        <h3 className="book-title" title={book.title}>{book.title}</h3>
        <p className="book-author">{book.author}</p>
        <span className="book-genre">{book.genre}</span>
        
        <div className="book-actions">
          <Link to={`/book/${book.id}`} className="btn-primary">
            View Book
          </Link>
          <button 
            className="btn-icon" 
            onClick={handleFavoriteClick}
            title={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          >
            <Heart size={24} fill={isFavorite ? "var(--accent-danger)" : "none"} color={isFavorite ? "var(--accent-danger)" : "var(--text-secondary)"} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(BookCard);
