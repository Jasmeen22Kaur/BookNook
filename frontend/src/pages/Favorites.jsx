import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from '../components/BookCard';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFavorites = async () => {
    setLoading(true);
    try {
      const res = await axios.get('http://localhost:5000/api/favorites');
      setFavorites(res.data);
    } catch (err) {
      console.error('Failed to fetch favorites', err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  const handleFavoriteToggle = (bookId, isFav) => {
    if (!isFav) {
      setFavorites(favorites.filter(book => book.id !== bookId));
    }
  };

  return (
    <div className="container animate-fade-in" style={{ padding: '2rem 1.5rem' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Your Favorite Books</h1>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-secondary)' }}>Loading favorites...</div>
      ) : (
        <div className="book-grid">
          {favorites.length > 0 ? favorites.map(book => (
            <BookCard 
              key={book.id} 
              book={book} 
              isFavorite={true} 
              onFavoriteToggle={handleFavoriteToggle} 
            />
          )) : (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem', color: 'var(--text-secondary)' }}>
              You haven't added any books to your favorites yet.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Favorites;
