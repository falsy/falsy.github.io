'use strict';

define(['app'], function (app) {
  return app.config(function($stateProvider, $urlRouterProvider, $locationProvider){

    $stateProvider.state('falsy', {
      url : '/',
      templateUrl : '../app/views/main.html',
      controller : 'falsyCtrl'
    });

    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(true);

  });
});
