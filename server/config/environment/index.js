'use strict';

var path = require('path');
var _ = require('lodash');

var all = {
  	env: process.env.NODE_ENV,

	// Root path of the server
	root: path.normalize(__dirname + '/../../../'), 

	// Secret for session, you will want to change this and make it an environment variable
	secrets: {
		session: 'flyingMonkey' //requiredProcessEnv('APP_SECRET')
	},

	resetData: true,
	
	// Server port
	port: process.env.PORT || 3000, 

	// List of user roles 
	userRoles: ['user', 'admin', 'superadmin'],

	// MongoDB connection options
	mongo: {
		options: {
		  db: {
		    safe: true
		  }
		}
	}, 

	seedDb: true
}; 

var sharedVariables = {
  // shared Express App variable
  app: null
};


// Export the config object based on the NODE_ENV 
module.exports = _.merge(all, sharedVariables, require('./' + process.env.NODE_ENV + '.js') || {});