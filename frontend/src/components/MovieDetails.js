import React from "react";

const MovieDetails = ({ movie, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg overflow-hidden shadow-lg w-4/5 max-w-3xl">
      <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>✕</button>
      <video controls className="w-full">
        <source src={movie.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
        <p><strong>Genre:</strong> {movie.genre}</p>
        <p><strong>Year:</strong> {movie.year}</p>
        <p><strong>Rating:</strong> {movie.rating}</p>
        <p>{movie.description}</p>
      </div>
    </div>
  </div>
);

export default MovieDetails;
