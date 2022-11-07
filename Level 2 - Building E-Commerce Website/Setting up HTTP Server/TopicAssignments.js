/*
 * Assignment 1.Let us try to create a web server on port 8448 instead of
8080. 
*/

// Solution :

/*
//Add required library
const http = require ('http');

//Add Listener
const listener = function (req, res) {
    console.log ("Server processing request");
    res.writeHead (200);
    res.end ('Our first http server');
}

// Create simple server
const simpleServer = http.createServer (listener);

// Listen on a given port
simpleServer.listen (8448);
*/



/*
 * Assignment 2. Let us try to return a 400 error message! 
*/

// Solution :

//Add required library
const http = require ('http');

//Add listener
const listener = function (req, res) {
    console.log ("Server processing request");
    res.writeHead (400);
    res.end ('Our first http server');
}

// Create simple server
const simpleServer = http.createServer(listener);
