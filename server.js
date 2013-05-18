var http = require('http');
var url = require('url');

// 传递函数route
function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log('Server: Request for ' + pathname + ' received.');

    route(handle, pathname);

    response.writeHead(200, {'Content-Type': 'test/plain'});
    response.write("Hello world");
    response.end();
  }

  http.createServer(onRequest).listen(3000);
  console.log('Listening on port 3000...');
}

exports.start = start;
