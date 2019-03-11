
//dependencies
var express = require("express");
var path = require("path");

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Listener to start server
server.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });
  