'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	validators = require('mongoose-validators');

var BearSchema = new  Schema({
	name: { 
		type: String,
		required: true
	}, 
}); 
 
module.exports = mongoose.model('Bear', BearSchema); 
 
 
 