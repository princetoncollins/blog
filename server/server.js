var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var config = require('./config.js');

var app = express();

var port = config.port;

app.use(bodyParser.json());
app.use(express.static(__dirname + "/../public"));
app.use('/../bower_components', express.static(__dirname + '/../bower_components'));


app.listen(port, function() {
  console.log('Listening on port: ', port);
});