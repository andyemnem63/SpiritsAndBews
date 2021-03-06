var express = require('express');
var router = express.Router();
var port = process.env.PORT || 8000;

var pug = require('pug');
var mysql = require('mysql');
var md5 = require('md5');
var bodyParser = require('body-parser');

var app = express();

app.set('view engine', 'pug');

app.use(express.static('public/img/page-elements'));

app.get('/', function(req, res) {
	res.render('index');
});

app.listen(port, function(){
	console.log("server on: " + port);
});