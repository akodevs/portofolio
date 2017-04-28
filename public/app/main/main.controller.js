'use strict'
 
angular.module('app').controller('MainController', MainController);

function MainController($scope, ApiService, $window) {
  $scope.email = {};

	$scope.sendEmail = function(form) {  

    if(form.$valid) { 
      console.log($scope.email)
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
 