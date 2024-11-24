import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel styles
import MovieCard from "../components/MovieCard";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("https://luckybackend.rstechub.com/api/movies")
      .then((response) => setMovies(response.data))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Movies</h1>

      {/* Carousel for smaller screens */}
      <div className="block lg:hidden">
        <Carousel 
          showThumbs={false} 
          infiniteLoop={true} 
          autoPlay={true} 
          showStatus={false} 
          swipeable={true} 
          emulateTouch={true}
        >
          {movies.map((movie) => (
            <div key={movie.title}>
              <MovieCard movie={movie} />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Grid layout for larger screens */}
      <div className="hidden lg:grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;
