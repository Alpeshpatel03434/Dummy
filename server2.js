const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

// Serve all files from the 'test' directory
app.use('/test', express.static(path.join(__dirname, 'test')));

// Serve an HTML file outside the 'test' directory
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'test2.html')); // Replace 'index.html' with the actual HTML file name
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
