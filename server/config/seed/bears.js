'use strict'

module.exports = function() {
	console.log('creating bear...');
	var Bear = require('../../api/bears/bears.model');

	Bear.find(function (err, bears) {
	  if(err) { return handleError(err); }
	  if(bears.length === 0) {  
    	var bear1 = new Bear();
    	bear1.name = "BEAR 1";
    	var bear2 = new Bear();
    	bear2.name = "BEAR 2";
 
    	bears.push(bear1, bear2);
	  	Bear.create(bears, function(err, bear) {
  		  if(err) { return handleError(err); }
  		  console.log('Bears initialized');
  		});
	  }
	}); 

	function handleError(err) {
	  return console.log('Initializing pages error: ', err);
	}
};