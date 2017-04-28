// Endpoint Service
'use strict';

app.factory('EndpointsService', function($http){
	//constructor
	function EndpointsService(endpoint){
		this.endpoint = endpoint || ''; 

		if(endpoint.indexOf('http://') > -1 || endpoint.indexOf('https://') > -1) { 
		// it's a third party endpoint, don't change it
			this.url = endpoint; 
		} 
		else { 
		// it's our server endpooint so prefix with /api
			this.url = '/api/' + this.endpoint;
		}
	}

	// Incorporating prototypes(recipe for an object) to constructor
	// Ideal for defining methods once for ALL objects of a given type.
	// Eliminating code redunduncy (method, properties) every time you declare instance,
	EndpointsService.prototype.findOne = function(id) {
		var self = this;
		return $http.get(this.url + '/' + id).then(function (data) {
		    return data;
		}, function (error){ 
		    //self.errorHandler(data, status, headers, config);
		    // create error handler 
          console.log(error)
		}); 
	} 

	
	/// Adds content in the server database for the endpoint passed into the constructor function. Calls generic error handler `errorHandler()` if error.
	/// @param  {object} content the item to be added to the database
	/// @return {promise}         An object or array of items that were created 	
	EndpointsService.prototype.create = function(content) {
		var self = this;
		return $http.post(this.url, content).then(function(data, status, headers, config) {
			self.errorHandler(data, status, headers, config);
		});
	};


	// SEED IT
	EndpointsService.prototype.transport = function(content) {
		var self = this;
		return $http.post(this.url + '/', content);
	}; 

	return EndpointsService;
});