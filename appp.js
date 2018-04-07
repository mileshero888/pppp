var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var appp = express();

appp.get('/', function(req, res){
	res.send('hello world');
});
appp.listen(3000, function(){
	console.log('server started on port 3000...');
})