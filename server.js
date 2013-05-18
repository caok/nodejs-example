var http = require('http');

function start() {
  function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'test/plain'});
    response.write("Hello world");
    response.end();
  }

  http.createServer(onRequest).listen(3000);
  console.log('Listening on port 3000...');
}

exports.start = start;
