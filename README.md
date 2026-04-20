# BookNook - Book Recommendation App

A full-stack web application for discovering, managing, and getting personalized book recommendations. Built with React, Node.js, Express, and SQLite for a seamless reading experience.

## 🚀 Features

- **User Authentication**: Secure registration and login system
- **Book Discovery**: Browse through a curated collection of classic and modern literature
- **Smart Search**: Search books by title, author, or genre
- **Favorites Management**: Save and organize your favorite books
- **Personalized Recommendations**: Get book suggestions based on your reading preferences
- **Responsive Design**: Optimized for desktop and mobile devices
- **Real-time Updates**: Instant feedback on user actions

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern UI framework
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **Lucide React** - Beautiful icons
- **CSS3** - Custom styling with glassmorphism effects

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **SQLite3** - Lightweight database
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd novel-recommendation-app
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install

   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Set up the database**
   ```bash
   # From the backend directory
   cd ../backend
   node seed.js
   ```

4. **Start the development servers**
   ```bash
   # From the root directory
   npm run dev
   ```

   This will start both the backend (port 5000) and frontend (port 5173) servers concurrently.

## 🎯 Usage

### For Users

1. **Register**: Create a new account with username and password
2. **Login**: Access your personalized dashboard
3. **Browse Books**: Explore the collection of books
4. **Search**: Use the search bar to find specific books
5. **Add to Favorites**: Click the heart icon on any book
6. **View Favorites**: Access your saved books from the favorites tab
7. **Get Recommendations**: Click "Auto-Recommend" for personalized suggestions

### API Endpoints

#### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

#### Books
- `GET /api/books` - Get all books (with optional search query `?q=`)
- `GET /api/books/:id` - Get book by ID

#### Favorites
- `GET /api/favorites` - Get user's favorite books
- `POST /api/favorites` - Add book to favorites
- `DELETE /api/favorites/:bookId` - Remove book from favorites

#### Recommendations
- `GET /api/recommendations` - Get personalized book recommendations

## 🏗️ Project Structure

```
novel-recommendation-app/
├── backend/
│   ├── database.js          # Database connection and schema
│   ├── seed.js             # Database seeding script
│   ├── server.js           # Express server and API routes
│   └── package.json        # Backend dependencies
├── frontend/
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── context/       # React context for state management
│   │   └── index.css      # Global styles
│   ├── index.html         # HTML template
│   └── package.json       # Frontend dependencies
├── package.json           # Root package.json for concurrent dev
└── README.md             # Project documentation
```

## 🎨 Design Features

- **Glassmorphism UI**: Modern glass-like effects with backdrop blur
- **Smooth Animations**: Fade-in effects and hover transitions
- **Responsive Grid**: Adaptive book card layout
- **Intuitive Navigation**: Clean navbar with user profile
- **Loading States**: User feedback during data fetching
- **Error Handling**: Graceful error messages and fallbacks

## 🔒 Security Features

- **Password Hashing**: bcryptjs for secure password storage
- **JWT Authentication**: Token-based user sessions
- **Input Validation**: Server-side validation for all endpoints
- **CORS Protection**: Configured cross-origin policies
- **SQL Injection Prevention**: Parameterized queries

## 🚀 Deployment

### Backend Deployment
```bash
cd backend
npm run build  # If using a build process
npm start      # Production server
```

### Frontend Deployment
```bash
cd frontend
npm run build
# Deploy the 'dist' folder to your hosting service
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Book data sourced from public domain literature
- Icons provided by [Lucide React](https://lucide.dev/)
- UI inspiration from modern web design trends

## 📞 Support

For questions or issues, please open an issue on GitHub or contact the development team.

---

**Happy Reading! 📚**