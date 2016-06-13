var express = require('express');
var browserify = require('browserify-middleware');
var livereload = require('livereload');
var corsProxy = require('cors-anywhere');

var app = express();

app.use('/', express.static(__dirname + '/static'));
app.use('/client', browserify(__dirname + '/client'));
app.use('/swf', express.static(__dirname + '/node_modules/soundmanager2/swf'));

app.listen(9000, function () {
  console.log('Started listening on port 9000!');
});

corsProxy.createServer().listen(9001, '127.0.0.1', function() {
  console.log('CORS proxy running');
});

var liveReloadServer = livereload.createServer();
liveReloadServer.watch(__dirname + '/client');
liveReloadServer.watch(__dirname + '/static');
