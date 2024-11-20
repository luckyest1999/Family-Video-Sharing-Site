const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the "videos" folder
app.use('/videos', express.static(path.join(__dirname, 'videos')));

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
