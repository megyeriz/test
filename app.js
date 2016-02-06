var http = require('http');
var port = process.env.PORT || 11010;

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Running on port: " + port);
});

server.listen(port);
