//https://stackoverflow.com/questions/41853422/how-to-compile-typescript-using-npm-command
//https://inviqa.com/blog/using-typescript-node-js
var express_module = require("express");
var path = require("path");
var http = require("http");
var bodyParser = require("body-parser");
//Get our API routes
var api = require("./server/routes/api");
var app = express_module();
//Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Point static path to dist
app.use(express_module.static(path.join(__dirname, 'dist')));
// Set our api routes
app.use('/api', api);
// Catch all other routes and return the index file
//angular will handle routes as well
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});
/**
 * Get port from environment and store in Express.
 */
var port = process.env.PORT || '1337';
app.set('port', port);
/**
 * Create HTTP server.
 */
var server = http.createServer(app);
/**
 *
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, function () { return console.log("API running on localhost:" + port); });
//# sourceMappingURL=server.js.map