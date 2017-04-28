// Api Factory
'use strict'

app.factory('ApiService', function(EndpointsService) {
	return {
		email: new EndpointsService('email'), 
	}  
});