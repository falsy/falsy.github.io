'use strict';

define(['app'], function (app) {
  return app.config(function($stateProvider, $urlRouterProvider, $locationProvider){

    $stateProvider.state('ar', {
      url : '/ar',
      templateUrl : '../app/views/main.html',
      controller : 'falsyCtrl'
    });

    $urlRouterProvider.otherwise("/ar");
    $locationProvider.html5Mode(true);

  });
});
