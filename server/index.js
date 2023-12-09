const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello World');
});
    
server.listen(3050, () => {
    console.log('Server running at port 3050');
});