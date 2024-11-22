const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const axios = require("axios");

const videoRoutes = require("./routes/videos");
const movieRoutes = require("./routes/movies");

const app = express();
const PORT = 5000;


// Middleware
app.use(cors());
app.use(express.json());

// Static file serving for videos and thumbnails
app.use("/videos", express.static(path.join(__dirname, "videos")));
app.use("/thumbnails", express.static(path.join(__dirname, "thumbnails")));
app.use("/movies", express.static(path.join(__dirname,  "movies")));
// Use the videos route
app.use("/api/videos", videoRoutes);
app.use("/api/movies", movieRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
