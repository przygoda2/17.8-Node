'use strict';

var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/hello') {
        fs.readFile('./index.html', 'utf-8', function(err, data) {
            response.writeHead(200, {'Content-type':'text/html'});
            response.write(data);
            response.end();
        });
    } else {
        fs.readFile('./404.html', 'utf-8', function(err, data) {
            response.statusCode = 404;
            response.write(data);
            response.end();
        })
    }
});
server.listen(9000);

/*
// 1
var http = require('http');

var server = http.createServer();
server.on('request', function (request, response) {
    response.write('Hello world');
    response.end();
});

// 2

var http = require('http');

var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/hello') {
        response.write('<h1>Hello World!</h1>');
            response.end();
    } else {
            response.statusCode = 404;
            response.write('<h1>404: Zła ścieżka!</h1>');
            response.end();
    }
});

server.listen(9000);
// http://localhost:9000
*/