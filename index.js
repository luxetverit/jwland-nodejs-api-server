var http = require('http');
var hostname = '127.0.0.1';
var port = 8080;

const server = http.createServer(function (req, res) {
    console.log('REQUEST : ', req);
    res.end('server on');

    const path = req.url;
    const method = req.method;

    if (path === '/products') {
        if (method === 'GET') {
            res.send();
        } else if (method === 'POST') {
        }
    }
});

server.listen(port, hostname);

console.log('api test server on!');
