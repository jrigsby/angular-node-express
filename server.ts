//https://stackoverflow.com/questions/41853422/how-to-compile-typescript-using-npm-command
//https://inviqa.com/blog/using-typescript-node-js
const express_module = require("express");
const path = require("path");
const http = require("http");
const bodyParser = require("body-parser");

//Get our API routes
const api = require("./server/routes/api");

const app = express_module();

//Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express_module.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
//angular will handle routes as well
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '1337';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 *
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
