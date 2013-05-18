var http = require('http');

http.createServer(function(request, response){
  response.writeHead(200);
  response.write("<h1>Hello</h1>");
  response.end("world");
}).listen(8080);
console.log('Listening on port 8080...');
