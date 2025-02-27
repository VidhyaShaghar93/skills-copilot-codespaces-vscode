// create web server
// create a web server that listens for requests on port 3000. 
// The server should respond with a resource that has a status code of 200 and a body of "ok"

const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('ok');
});

server.listen(3000, 'localhost', () => {
    console.log('Server is running at http://localhost:3000');
});