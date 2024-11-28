const express = require("express");
const path = require("path");
const fs = require("fs");
const axios = require("axios");

const router = express.Router();
const { API_DOMAIN } = require('../constants');

const OMDB_API_KEY = "bc31f731";
const movieCache = {};

// Helper function to get movie details dynamically
const fetchMovieDetails = async (movieName, fileName) => {
  if (movieCache[movieName]) {
    return movieCache[movieName]; // Return cached movie details
  }

  const apiUrl = `http://www.omdbapi.com/?t=${encodeURIComponent(movieName)}&apikey=${OMDB_API_KEY}`;
  try {
    const response = await axios.get(apiUrl);
    const movieDetails = response.data;

    // Append the correct file URL to the movie details
    movieDetails.url = `${API_DOMAIN}/movies/${fileName}`;
    movieDetails.id = fileName; // Ensure the original file name is returned

    // Cache the movie details
    movieCache[movieName] = movieDetails;
    return movieDetails;
  } catch (error) {
    console.error(`Error fetching details for ${movieName} from OMDB:`, error.message);
    return { id: fileName, title: movieName, error: "Details not found" };
  }
};

// Helper function to scan the movies folder and fetch metadata
const getMoviesData = async () => {
  const moviesDir = path.join(__dirname, "../movies");
  const files = fs.readdirSync(moviesDir);

  const movies = await Promise.all(
    files.map(async (file) => {
      const movieName = file.replace(/\.[^/.]+$/, ""); // Remove file extension
      const details = await fetchMovieDetails(movieName, file);
      return {
        id: file, // Return the original file name as id
        title: details?.Title || movieName,
        url: details?.url || `${API_DOMAIN}/movies/${file}`,
        poster: details?.Poster || "",
        description: details?.Plot || "No description available.",
        genre: details?.Genre || "Unknown",
        rating: details?.imdbRating || "N/A",
        year: details?.Year || "Unknown",
        error: details?.error || null, // Include error details, if any
      };
    })
  );

  return movies;
};

// API endpoint to serve movies data
router.get("/", async (req, res) => {
  try {
    const movies = await getMoviesData();
    res.json(movies);
  } catch (error) {
    console.error("Error fetching movies:", error.message);
    res.status(500).json({ error: "Unable to fetch movies." });
  }
});

// API endpoint to fetch a single movie's details based on movieId (filename)
router.get("/:movieName", async (req, res) => {
  try {
    const { movieName } = req.params;
    const fileName = movieName; // Preserve the original file name for the URL
    const movieNameWithoutExtension = fileName.replace(/\.[^/.]+$/, ""); // Remove file extension
    const movie = await fetchMovieDetails(movieNameWithoutExtension, fileName);
    res.json(movie);
  } catch (error) {
    console.error("Error fetching movie details:", error.message);
    res.status(500).json({ error: "Unable to fetch movie details." });
  }
});

module.exports = router;
