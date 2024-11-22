// MovieDetailsPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MovieDetailsPage = () => {
  const { movieId } = useParams(); // Get the movieId from the URL
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Fetch movie details based on movieId (which is the filename)
    axios.get(`http://localhost:5000/api/movies/${movieId}`)
      .then(response => {
        setMovie(response.data); // Set the movie details
      })
      .catch(error => {
        console.error("Error fetching movie details:", error);
      });
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-details">
      <h1 className="text-center text-3xl my-5">{movie.title}</h1>
      <div className="flex flex-col lg:flex-row items-center p-5">
        <div className="w-full lg:w-3/5 mt-5 lg:mt-0 lg:ml-5">
        <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
  <video 
    controls
    className="w-full h-auto rounded-md border border-gray-300"
  >
    <source src={movie.url} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <p className="mt-3 mb-3 text-center text-sm text-gray-500">
    {movie.Title ? `Now Playing: ${movie.Title}` : "Enjoy the movie!"}
  </p>
</div>

          <div className="bg-white rounded-lg shadow-md p-6">
  <p className="mt-3 text-gray-700 text-base">{movie.description}</p>

  <p className="mt-4 text-sm text-gray-600">
    <strong className="text-gray-800">Director:</strong> {movie.Director}
  </p>

  <p className="mt-2 text-sm text-gray-600">
    <strong className="text-gray-800">Actors:</strong> {movie.Actors}
  </p>

  <p className="mt-2 text-sm text-gray-600">
    <strong className="text-gray-800">Language:</strong> {movie.Language}
  </p>

  <p className="mt-2 text-sm text-gray-600">
    <strong className="text-gray-800">Plot:</strong> {movie.Plot}
  </p>

  <p className="mt-2 text-sm text-gray-600">
    <strong className="text-gray-800">IMDB Rating:</strong> {movie.imdbRating}
  </p>
</div>

        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
