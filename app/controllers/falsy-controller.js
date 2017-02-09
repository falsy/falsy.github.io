'use strict';

define(['jquery', 'app'], function ($, app) {
  app.controller('falsyCtrl', ['$scope', '$location', 'hashService',
    function ($scope, $location, hashService) {
      $scope.$watch(function() { return $location.hash();
        }, function (value) {
          $scope.hash = hashService.hashInit();
        }
      );

      $scope.onLoadSection = function(menu){
        if(window.innerWidth > 700) {
          $('#content').scrollTop(0);
        } else {
          if(menu !== 'index') {
            $('html, body').animate({
              scrollTop : 500 
            }, 200);
          }
        }
      };

    }
  ]);
});