var express = require("express");
var app = express()
var db = require("./DB_Manager");


app.get('/', function (req, res) {
    db.getAllTasks();
    res.send("The Table is created");
})

var server = app.listen(8000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at htttp://%s:%s", host, port)
})