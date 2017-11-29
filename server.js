var express = require("express");
var app = express();
var toDos = require("./to-do.js");

app.use(express.static(__dirname + "/public"));

app.use("/", toDos);

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log("the server is up and running on localhost:3000");
});

