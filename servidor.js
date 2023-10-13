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
    '.woof': 'application/font-woof',
    '.ttf': 'application/font-ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'application/font-otf',
    '.svg': 'application/image/svg+xml',    
};

contentType = mimeTypes[extname] || 'application/octet-stream';

fs.readFile(filePath, function (error, content) {
    if (error) {
        if (error.code == 'ENOENT') {
            fs.readFile('./404.html', function(error, content){
                response.writeHead(200, {'Content-Type': contentType});
                response.end(content, 'utf-8');
            }); 
        }
        else {
            response.writeHead(500);
            response.end('Sorry, check with the site admin for error:' + error.code + '..\n');
        }        
    }
    else {
        response.writeHead(200, {'Content-Type': contentType});
        response.end(content, 'utf-8');
    }    
});