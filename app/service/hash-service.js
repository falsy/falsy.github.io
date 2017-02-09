'use strict';

define(['jquery', 'app'], function ($, app) {
  app.factory('hashService', ['$window', '$location', function($window, $location) {

    var archive = ['201606', '201605'],
        hashManu = ['about', 'portfolio', 'essay'],
        archiveLength = archive.length,
        hash = {},
        init,
        hashData;

    init = function(){
      var urlHash = $location.hash(),
          hashOptions = urlHash.split('&'),
          optionLength = hashOptions.length,
          i, j,
          option,
          optionKey,
          optionValue,
          useHash = {};

      for(i=0;i<optionLength;i++) {
        option = hashOptions[i].split('=');
        if(option.length > 1) {
          if(option[0] === 'menu') {
            for(var menuName in hashManu) {
              if(option[1] === hashManu[menuName]) {
                useHash[option[0]] = option[1];
                useHash[option[1]] = true;
              }
            }
          }
          if(option[0] === 'archive') {
            for(j=0;j<archiveLength;j++) {
              if(option[1] === archive[j]) {
                useHash[option[0]] = option[1];
              }
            }
          }
        }
      }
      return hashData = useHash;
    };

    hash.hashInit = function() {
      init();
      hashData.menu = hashData.menu ? hashData.menu : 'index';
      return hashData;
    };

    // hash.setArchiveHash = function(archive) {
    //   hashData = this.hashInit();
    //   if(hashData.archive == archive) {
    //     this.moveArchiveSection();
    //   } else {
    //     $location.hash('menu='+hashData.menu+'&archive='+archive);
    //   }
    // };

    // hash.moveArchiveSection = function() {
    //   if(hashData.archive) {
    //     var $archiveSection = $('.archive-'+hashData.archive);
    //     if($archiveSection.length) {
    //       $('html, body').scrollTop($archiveSection.offset().top);
    //     }
    //   }
    // };

    return hash;

  }]);
});