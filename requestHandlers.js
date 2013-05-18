function start() {
  console.log("requestHandlers: Request handler 'start' was called.");
}

function upload() {
  console.log("requestHandlers: Request handler 'upload' was called.");
}

exports.start = start;
exports.upload = upload;
