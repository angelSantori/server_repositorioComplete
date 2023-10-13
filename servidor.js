//Estructura del servidor
var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (request, response){
    console.log('request', request.url);

    var filePath = '.' + request.url;

    if (filePath == './'){
        filePath = './index.html';
    }
});


//Tipo de archivos que puede leer el sitio web
var extname = String(path.extname(filePath)).toLowerCase();
var contentType = 'text/html';

var mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.wav': 'audio/wav',
    //woof, ttf, eot, otf = application/ font-woof, font-ttf,vnd.ms-fontobject, font-otf
    //svg = application /image/svg+xml

};