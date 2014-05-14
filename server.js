var express = require('express');
var http = require('http');
var mongoose = require('mongoose');

var app = express();

app.set('port', process.env.PORT || 3000);

var server = http.createServer(app);

server.listen(app.get('port'), function() {
    console.log('server listening on port' + app.get('port'));
});

