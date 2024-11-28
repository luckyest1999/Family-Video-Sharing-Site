import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Ensure this import is correct
import MoviesPage from './pages/MoviesPage'; // Your MoviesPage component
import Header from './components/Header'; // Your Header component
import Footer from './components/Footer';
import VideoList from './components/VideoList';
import MovieDetailsPage from './components/MovieDetailsPage';

const App = () => {
  return (
    <Router> {/* Wrap your app in the Router */}
      <div className="App">
        <Header /> {/* Include the header for navigation */}
        <Routes>
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        </Routes>
      </div>
      <main className="flex-grow container mx-auto p-4">
      <Routes>
          <Route path="/" element={<VideoList />} />
        </Routes>
        
      </main>

      {/* Footer */}
      <Footer />
    </Router>
  );
};

export default App;
