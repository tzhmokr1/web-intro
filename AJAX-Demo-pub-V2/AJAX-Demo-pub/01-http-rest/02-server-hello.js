const http = require("http");
const PORT = 8080;

function requestHandler(req, res) {
  res.write("<h1>Hello ");
  res.end("World</h1>");
}

const server = http.createServer(requestHandler);
server.listen(8080);
console.log("Node listening on Port", PORT);
