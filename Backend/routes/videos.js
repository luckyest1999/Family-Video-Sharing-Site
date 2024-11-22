const express = require("express");
const path = require("path");
const fs = require("fs");

const router = express.Router();

// Helper function to get video files
const getVideoFiles = () => {
  const videosDir = path.join(__dirname, "../videos");
  const files = fs.readdirSync(videosDir);
  
  return files.map((file, index) => ({
    id: index + 1,
    title: file.replace(/\.[^/.]+$/, ""), // Remove file extension for title
    url: `http://localhost:5000/videos/${file}`, // Generate video URL
    thumbnail: `http://localhost:5000/thumbnails/${file.replace(/\.[^/.]+$/, ".jpg")}` // Assume thumbnails with the same base name
  }));
};

// API endpoint to fetch video metadata
router.get("/", (req, res) => {
  try {
    const videos = getVideoFiles();
    res.json(videos);
  } catch (error) {
    console.error("Error reading video files:", error);
    res.status(500).json({ error: "Unable to fetch videos." });
  }
});

module.exports = router;
