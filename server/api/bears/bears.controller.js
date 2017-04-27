'use strict';

var Bear = require('./bears.model');

exports.create = function (req, res, next) {
    var bear = new Bear(req.body); 
    bear.save(function (err, user) {
        if (err) { return handleError(res, err); }
        if (!found) { return res.sendStatus(404); }
    });
};
 
exports.findById = function(req, res) { 
	Bear.findOne({_id: req.params.id}, function(err, found) {    
		if(err) { return handleError(res, err); }
   	if(!found) { return res.sendStatus(404); }

   	return res.json(found);
	}); 
};

exports.findAll = function(req, res) { 
	Bear.find({}).lean().exec(function(err, found) {     
    if(err) { return handleError(res, err); }
    if(!found) { return res.sendStatus(404); }

 		return res.json(found);
	}); 
};
 
// Handles the response to database errors
function handleError(res, err) {
  return res.status(500).send(err);
}