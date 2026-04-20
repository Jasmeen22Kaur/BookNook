import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { BookOpen, Heart, LogOut, User } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar glass-panel">
      <div className="container nav-content">
        <Link to="/" className="nav-brand">
          <BookOpen className="text-accent" />
          <span>NovelNook</span>
        </Link>
        
        {user && (
          <div className="nav-actions">
            <div className="user-profile">
              <User size={20} />
              <span>{user.username}</span>
            </div>
            <Link to="/favorites" className="btn-icon" title="Favorites">
              <Heart size={20} />
            </Link>
            <button onClick={handleLogout} className="btn-icon" title="Logout">
              <LogOut size={20} />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
