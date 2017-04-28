'use strict'
 
angular.module('app').controller('MainController', MainController);

function MainController($scope, ApiService, $window) {

	$scope.sendEmail = function(form) { 
    $scope.email = {
      body: "hello"
    };
    if(form.$valid) { 
      ApiService.email.transport($scope.email).then(function (data) {   

      if(data === undefined || data.status == 404 )
			  return   

    		$window.location.href = '/'; 

      }, function (error) {
        console.log(error);
      });    
    }
  } 
} 
 