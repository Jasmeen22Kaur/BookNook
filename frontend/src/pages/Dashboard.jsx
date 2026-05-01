import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Search, Sparkles } from 'lucide-react';
import BookCard from '../components/BookCard';

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  const location = useLocation();


  const fetchBooks = useCallback(async (query = '') => {
    setLoading(true);
    try {
      const res = await axios.get(
        `http://localhost:5000/api/books${query ? `?q=${query}` : ''}`
      );
      setBooks(res.data || []);
    } catch (err) {
      console.error('Failed to fetch books', err);
    } finally {
      setLoading(false);
    }
  }, []);


  const fetchFavorites = useCallback(async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/favorites');

      setFavorites(res.data.map(b => String(b.id || b.bookId)));
    } catch (err) {
      console.error('Failed to fetch favorites', err);
    }
  }, []);

 
  useEffect(() => {
    fetchBooks(searchQuery);
    fetchFavorites();
  }, []);


  const handleSearch = (e) => {
    e.preventDefault();
    fetchBooks(searchQuery);
  };


  const handleAutoRecommend = async () => {
    setLoading(true);
    try {
      const res = await axios.get('http://localhost:5000/api/recommendations');
      setBooks(res.data || []);
      setSearchQuery('');
    } catch (err) {
      console.error('Failed to get recommendations', err);
    } finally {
      setLoading(false);
    }
  };


  const handleFavoriteToggle = (bookId, isFav) => {
    const id = String(bookId);

    setFavorites(prev =>
      isFav
        ? [...prev, id]
        : prev.filter(x => x !== id)
    );
  };

  return (
    <div
      className="container animate-fade-in"
      style={{ padding: '2rem 1.5rem' }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}
      >
        <h1 style={{ fontSize: '2rem' }}>Discover Books</h1>

        <button
          onClick={handleAutoRecommend}
          className="btn-primary"
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        >
          <Sparkles size={20} />
          Auto-Recommend
        </button>
      </div>

      <form onSubmit={handleSearch} className="search-container">
        <div className="search-input-wrapper">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            placeholder="Search by book name, author, or genre..."
            className="input-field search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button type="submit" className="btn-primary">
          Search
        </button>
      </form>

      {loading ? (
        <div
          style={{
            textAlign: 'center',
            padding: '3rem',
            color: 'var(--text-secondary)'
          }}
        >
          Loading books...
        </div>
      ) : (
        <div className="book-grid">
          {books.length > 0 ? (
            books.map((book) => {
              const bookId = String(book.id);

              return (
                <BookCard
                  key={bookId}
                  book={book}
                  isFavorite={favorites.includes(bookId)}
                  onFavoriteToggle={handleFavoriteToggle}
                />
              );
            })
          ) : (
            <div
              style={{
                gridColumn: '1 / -1',
                textAlign: 'center',
                padding: '3rem',
                color: 'var(--text-secondary)'
              }}
            >
              No books found.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;