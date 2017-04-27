'use strict'; 

var app = angular.module('app', ['ngResource', 'ui.router', 'ngCookies', 'ngAnimate']);  
var $urlRouterProviderRef = null;
var $stateProviderRef = null;   

angular.module('app')
.config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $urlMatcherFactoryProvider) {

  $urlRouterProvider.otherwise('/');
  $urlMatcherFactoryProvider.strictMode(false); 

  $locationProvider.hashPrefix('!');
  $locationProvider.html5Mode(true);
   
  $urlRouterProviderRef = $urlRouterProvider;
  $stateProviderRef = $stateProvider  
});