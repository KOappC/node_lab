var express = require("express");
var app = express();
var pg = require("pg");
var bodyParser = require("body-parser");
var toDos = require("./to-do.js");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use("/", toDos);

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log("Server is up and running.  Listening on local host port :3000");
});

