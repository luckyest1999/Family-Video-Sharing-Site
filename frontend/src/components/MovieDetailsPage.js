import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const MovieDetailsPage = () => {
  const { movieId } = useParams(); // Get the movieId (file name) from the URL
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Fetch movie details based on movieId (file name)
    axios
      .get(`https://luckybackend.rstechub.com/api/movies/${movieId}`)
      .then((response) => setMovie(response.data))
      .catch((error) => console.error("Error fetching movie details:", error));
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-details">
      <h1 className="text-center text-3xl my-5">{movie.title}</h1>
      <div className="flex flex-col lg:flex-row items-center p-5">
        <div className="w-full lg:w-3/5 mt-5 lg:mt-0 lg:ml-5">
          <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
            {movie.url ? (
              <video controls loading="lazy" className="w-full h-auto rounded-md border border-gray-300">
                <source src={movie.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <p>Loading video...</p>
            )}
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
  <p className="mt-3 text-gray-700 text-base">{movie.description}</p>
  <p className="mt-3 text-gray-700 text-base">{movie.description}</p>

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
