"use strict";

global.appGlobals = {};

var express = require('express');
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var app = express();
var config = require('./server/config/environment');
var mongoose = require('mongoose');


// Connect to database
mongoose.Promise = global.Promise;
mongoose.connect(config.mongo.uri);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback() {
	console.log('db just opened')
});  
 
// Populate db with Sample Data 
if (config.seedDb) { require('./server/config/seed')(); }

// Setup server
var app = express(); 
config.app = app; 

var server = require('http').createServer(app);
require('./server/config/express')(app, config); 
require('./server/config/routes')(app);  

// Start server
server.listen(config.port, config.ip, function() { 
	console.log('Express server listening to port %s in %s mode ',config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;