import React from "react";
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => (
  <div className="bg-white shadow-md rounded overflow-hidden hover:shadow-lg transition duration-300">
    <img src={movie.poster || "default-poster.jpg"} alt={movie.title} className="w-full h-48 object-cover" />
    <div className="p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-gray-800">{movie.title}</h2>
      <p className="text-sm text-gray-600">{movie.genre}</p>
      <Link 
                to={`/movies/${movie.title}`} 
                className="mt-3 inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition"
              >
                View Details
              </Link>

    </div>
  </div>
);
export default MovieCard;
