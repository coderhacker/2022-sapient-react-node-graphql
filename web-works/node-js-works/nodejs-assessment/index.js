var http = require('http');
var fs = require('fs');
var url = require('url');

const { parse } = require('querystring');



http.createServer((request, response) => {
    let pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    if (request.method === 'POST' && pathname === '/validate') {
        let body = '';
        request.on('data', chunk => {
            body += chunk.toString();
        });
        request.on('end', () => {
            console.log(
                parse(body)
            );
            response.end('ok');
        });
    } else if (request.method === 'GET' && pathname === '/login-form.html') {
        const readStream = fs.createReadStream('./login-form.html');
        response.writeHead(200, { 'content-type': 'text/html' });
        readStream.pipe(response);

    } else if (request.method === 'GET' && pathname === '/') {
        debugger;
        const readStream = fs.createReadStream('./home.html');
        response.writeHead(200, { 'content-type': 'text/html' });
        readStream.pipe(response);
    }
}).listen(3000);
