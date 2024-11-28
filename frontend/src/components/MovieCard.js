import React from "react";
import { Link } from "react-router-dom";
import  '../styles/MovieCard.scss';
import styled from "styled-components";

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={movie.poster || "https://via.placeholder.com/150"}
        alt={movie.title}
        className="w-full thumb-height"
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
const Movie = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 10px;
  overflow: hidden;
  transition: ${({ theme }) => theme.transitions.default};
  color: ${({ theme }) => theme.colors.text};

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


export default MovieCard;
