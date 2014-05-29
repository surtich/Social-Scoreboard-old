var debug = require('debug')('social-scoreboard');
var http = require('http');
var express = require('express');
var path = require('path');

// Configure express app
//
var app = express();

app.set('port', process.env.PORT || 3000);
app.use( '/', express.static(path.join(__dirname, 'static')) );

app.get('/score', function(req, res) {
	res.json({
		local: 10,
		guest: 12
	});
});

http.createServer(app).listen(app.get('port'), '0.0.0.0', function(){
	debug('Application listening on port ' + app.get('port'));
});


