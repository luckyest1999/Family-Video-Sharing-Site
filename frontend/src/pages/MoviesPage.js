import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel styles
import { API_DOMAIN } from '../constants';
import styled from "styled-components";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    axios
      .get(`${API_DOMAIN}/api/movies`)
      .then((response) => setMovies(response.data))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  return (
    <div >
      <Placeholder>Movies</Placeholder>
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
            <div key={movie.id}>
              <MovieCard movie={movie} />
            </div>
          ))}
        </Carousel>
      </div>



      {/* Grid layout for larger screens */}
      <GridContainer>
      {movies.map((movie) => (
          <MovieCard key={movie.id}>
            <img src={movie.poster} alt={movie.title} />
          <CardContent>
            <h3>{movie.title}</h3>
            <p>{movie.genre}</p>
            <div className="text-container">
      <div className={`text-content ${isExpanded ? "expanded" : ""}`}>
      {movie.description}
      </div>
      <span className="toggle-link" onClick={toggleText}>
        {isExpanded ? "See Less" : "See More"}
      </span>
    </div> 
            <button>Watch Now</button>
          </CardContent>
          </MovieCard>
        ))}
        
        </GridContainer>
      </div>
  );
};


const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const Placeholder = styled.h1`
  font-size: 24px;
  color: #ff385c;
  padding-top: 25px;
  text-align: center;
`;

const MovieCard = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 10px;
  overflow: hidden;
  transition: ${({ theme }) => theme.transitions.default};
  color: ${({ theme }) => theme.colors.text};
  grid-template-rows: auto 1fr auto; 

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 8px 15px rgba(255, 56, 92, 0.2);
  }

  img {
    width: 100%;
    height: auto;
  }

  h3 {
    margin: 10px;
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSizes.large};
    transition: ${({ theme }) => theme.transitions.default};

    &:hover {
      color: ${({ theme }) => theme.colors.hover};
    }
  }

  p {
    margin: 5px 10px;
    color: ${({ theme }) => theme.colors.mutedText};
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
  
`;



const CardContent = styled.div`
  padding: 10px;

  h3 {
    margin: 0 0 5px;
    color: #ff385c;
    font-size: 18px;
  }

  p {
    margin: 5px 0;
    color: #ccc;
    font-size: 14px;
  }
    button {
     align-self: end;
     }

     .text-container {
  position: relative;
  width: 300px; /* Adjust based on your layout */
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
}

.text-content {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3; /* Initially show only 3 lines */
  max-height: calc(1.5em * 3); /* 3 lines of text with line height */
  line-height: 1.5em;
  transition: max-height 0.3s ease;
}

.text-content.expanded {
  -webkit-line-clamp: unset; /* Removes truncation */
  max-height: 150px; /* Adjust this height for scrollable content */
  overflow-y: auto; /* Adds vertical scroll for overflowing text */
}

.toggle-link {
  margin-top: 10px;
  display: inline-block;
  color: #007bff;
  text-decoration: underline;
  cursor: pointer;
  font-size: 14px;
  margin-top: 8px;
}

.toggle-link:hover {
  color: #0056b3;
}

`;


export default MoviesPage;
