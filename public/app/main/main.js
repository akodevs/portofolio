﻿'use strict'; 

app.config(function ($stateProvider) {
    $stateProvider.state('main', {
        url: '/',   
        templateUrl: '/app/main/main',
        controller: 'MainController'
    });
})
