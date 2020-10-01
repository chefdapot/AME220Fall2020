var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var methodOverride = require('method-override');
var hostname = process.env.HOSTNAME || 'localhost';
var port = 1234;

app.get("/add", function (req, res) {
    var a = parseFloat(req.query.a);
    var b = parseFloat(req.query.b);
    res.send((a+b).toString()); // send response body
});


app.get("/div", function (req, res) {
    var a = parseFloat(req.query.a);
    var b = parseFloat(req.query.b);
    res.send((a/b).toString()); // send response body
});

app.get("/mul", function (req, res) {
    var a = parseFloat(req.query.a);
    var b = parseFloat(req.query.b);
    res.send((a*b).toString()); // send response body
});

app.get("/sub", function (req, res) {
    var a = parseFloat(req.query.a);
    var b = parseFloat(req.query.b);
    res.send((a-b).toString()); // send response body
});

app.use(methodOverride());
app.use(errorHandler());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


console.log("Simple static server listening at http://" + hostname + ":" + port);
app.listen(port);
