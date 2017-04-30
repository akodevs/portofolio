'use strict'
 
angular.module('app').controller('MainController', MainController);

function MainController($scope, ApiService, $window) {
  $scope.email = {};
  $scope.formAlert = {
    status: false,
    state: "Success",
    class: "alert-success",
    message: "Message Sent. I'll get back to you asap."
  };
 
 
	$scope.sendEmail = function(form) {  

    if(form.$valid) {  
     // TODO: ADD this inside the service
     $scope.formAlert = {
        status: true,
        state: "Success",
        class: "alert-success",
        message: "Message Sent. I'll get back to you asap"
      } 

      ApiService.email.transport($scope.email).then(function (data) {    
      if(data === undefined || data.status == 404 )
			  return     

      }, function (error) {
        console.log(error);
      });    
    } else {
      $scope.formAlert = {
        status: true,
        state: "Error",
        class: "alert-danger",
        message: "All fields are valid."
      }

    }
 
  } 
 
} 
 