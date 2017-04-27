'use strict';

module.exports = function(app) {  
 
 	// Declare routes here 
  	app.use('/api/bears', require('../api/bears'));  
 
	app.get('/api/*', function(req, res) {
		res.render('404');
	}); 

	app.get('/app/*', function(req, res) {
		res.render('app/' + req.params[0]);
	});  

	//Using get function to get any request will be in  this routes (js,css,index). 
	app.get('/*', function(req, res) { 
		res.render('app/index');
	}); 
}