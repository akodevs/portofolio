var Bear = require('../../api/bears/bears.model');
 
module.exports = function(cb) { 
	Bear.remove({}, function (err, users) {
	  if(err) { return handleError(err); }
	  if(!users) { return false; }
	  console.log('deleted bears');
	});
};

function handleError(err) {
	console.log('Deleting All Data Error', err);
}