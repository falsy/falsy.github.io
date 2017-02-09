'use strict';

define([
    'angular',
    'satellizer'
  ],
  function (ng) {
    return ng.module('Falsy', [
      'ui.router', 'satellizer', 'ngResource'
      ]);
  }
);
