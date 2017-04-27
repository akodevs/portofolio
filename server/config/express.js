var express = require('express'),
	bodyParser = require('body-parser'),
	morgan = require('morgan'),
	cookieParser = require('cookie-parser'), 
	errorHandler = require('errorhandler'),
	session = require('express-session'),
	mongoose = require('mongoose'),
	mongoStore = require('connect-mongo')(session),
	passport = require('passport'); 


module.exports = function(app, config) { 
	var env = app.get('env');

    app.set('views', config.root + '/public');
    app.set('view engine', 'jade');

    app.use(cookieParser()); 
    app.use(bodyParser.urlencoded({ extended: true })); 
    app.use(bodyParser.json());
	//app.use(passport.initialize());
	//app.use(passport.session());   

	// Persist sessions with mongoStore
	//  We nned to enable sessions for passport twitter because its an auth 1.0 strategy
	app.use(session({
		secret: config.secrets.session,
		resave: true,
		saveUninitialized: true, 
		store: new mongoStore({ mongooseConnection: mongoose.connection })
	})); 
 
    app.use(morgan('dev'));
    app.use(express.static(config.root + '/public')); 
	app.use(errorHandler());
}


 