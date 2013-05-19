function start() {
  console.log("requestHandlers: Request handler 'start' was called.");

  function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
  }

  sleep(1000);
  return "Hello Start";
}

function upload() {
  console.log("requestHandlers: Request handler 'upload' was called.");
  return "Hello Upload";
}

exports.start = start;
exports.upload = upload;
