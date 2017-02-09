'use strict';

define(['jquery', 'app'], function ($, app) {
  app.controller('initCtrl', ['$scope', '$location', 'hashService',
    function ($scope, $location, hashService) {

      // $scope.archiveFilter = function(event, archive){
      //   event.preventDefault();
      //   hashService.setArchiveHash(archive);
      // };

    }
  ]);
});