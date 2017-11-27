var express = require("express");
var app = express();
var toDos = require("./to-do.js");

app.use(express.static(__dirname + "/public"));

app.use("/", toDos);

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log("the server is up and running");
});


/*

// from 11/22/2017

var http = require("http");
var toDo = require("./to-do.js");

http.createServer(onRequest).listen(3000);

function onRequest(request, response) {
    response.writeHead(200, {"content-type": "text/plain"});
    var x = Math.floor(Math.random() * toDo.items.tasks.length);
    response.write(toDo.items.tasks[x]);
    response.end();
}*/
