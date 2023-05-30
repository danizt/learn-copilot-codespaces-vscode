// Create web server
const express = require("express");
const app = express();

// Create server
const http = require("http");
const server = http.createServer(app);

//Set portgit add comments.js
const PORT = process.env.PORT || 3000;

//Run server
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));