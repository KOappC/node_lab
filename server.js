var http = require("http");
var toDo = require("./to-do.js");

console.log(toDo);

http.createServer(onRequest).listen(3000);

function onRequest(request, response) {
    response.writeHead(200, {"content-type": "text/plain"});
    response.write("displaying");
    response.end();
}