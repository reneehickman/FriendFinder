
// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give the server useful functionality
// ==============================================================================
var express = require("express");
var path = require("path");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for the express server
// ==============================================================================
// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8081;

app.use(express.static('app/public'));
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// ================================================================================
// ROUTER
// The below points the server to a series of "route" files.
// These routes give the server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" the server
// =============================================================================
app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});
