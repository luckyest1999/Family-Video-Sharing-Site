import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={movie.poster || "https://via.placeholder.com/150"}
        alt={movie.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{movie.title}</h3>
        <p className="text-sm text-gray-600">{movie.genre}</p>
        <Link
          to={`/movies/${movie.id}`}
          className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded"
        >
          Play Now
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
