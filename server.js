var http = require("http");
var toDo = require("./to-do.js");

http.createServer(onRequest).listen(3000);

function onRequest(request, response) {
    response.writeHead(200, {"content-type": "text/plain"});
    var x = Math.floor(Math.random() * toDo.items.tasks.length);
    response.write(toDo.items.tasks[x]);
    response.end();
}