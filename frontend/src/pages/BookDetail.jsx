import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Heart, ArrowLeft } from 'lucide-react';

const BookDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBookAndFav = async () => {
      try {
        const bookRes = await axios.get(`http://localhost:5000/api/books/${id}`);
        setBook(bookRes.data);
        
        const favRes = await axios.get('http://localhost:5000/api/favorites');
        const favs = favRes.data.map(b => b.id);
        setIsFavorite(favs.includes(bookRes.data.id));
      } catch (err) {
        setError('Failed to load book details');
      }
      setLoading(false);
    };
    
    fetchBookAndFav();
  }, [id]);

  const handleFavoriteClick = async () => {
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
          imageUrl: book.imageUrl,
        });
      }
      setIsFavorite(!isFavorite);
    } catch (err) {
      console.error('Error toggling favorite', err);
    }
  };

  if (loading) return <div className="container" style={{ padding: '3rem', textAlign: 'center' }}>Loading...</div>;
  if (error || !book) return <div className="container" style={{ padding: '3rem', textAlign: 'center', color: 'var(--accent-danger)' }}>{error || 'Book not found'}</div>;

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
        <img 
          src={book.imageUrl || 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=800&auto=format&fit=crop'} 
          alt={book.title} 
          className="book-detail-cover" 
          loading="lazy"
        />
        <div className="book-detail-info">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <h1 className="book-detail-title">{book.title}</h1>
              <p className="book-detail-author">by {book.author}</p>
              <span className="book-genre" style={{ display: 'inline-block', padding: '0.25rem 0.75rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '16px', marginTop: '0.5rem' }}>
                {book.genre}
              </span>
            </div>
            
            <button 
              className="btn-icon" 
              onClick={handleFavoriteClick}
              title={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
              style={{ background: 'var(--bg-card)', padding: '1rem' }}
            >
              <Heart size={32} fill={isFavorite ? "var(--accent-danger)" : "none"} color={isFavorite ? "var(--accent-danger)" : "var(--text-primary)"} />
            </button>
          </div>
          
          <div className="book-detail-desc">
            <h3>Description</h3>
            <p style={{ marginTop: '0.5rem' }}>{book.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
