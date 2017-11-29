var express = require("express");
var routes = express.Router();

/*var list = {
    tasks: ["study", "write code", "dream about databases", "fly spaceships"]
};*/

routes.get("/tasks", function(req, res) {
    res.send("this is a get");
    console.log("GET request successful");
});

routes.post("/tasks", function(req, res) {
    res.send("this is a post");
    console.log("POST request successful");
});

routes.put("/tasks/:id", function(req, res) {
    res.send("this is a put");
    console.log("PUT request successful");
});

routes.delete("/tasks/:id", function(req, res) {
    res.send("this is a delete");
    console.log("DELETE request successful");
});

module.exports = routes;