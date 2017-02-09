'use strict';

require.config({

    baseUrl:'',

    paths:{
        'jquery': '../assets/lib/jquery/jquery-2.2.0.min',
        'angular': '../assets/lib/angular/angular.min',
        'ngResource': '../assets/lib/angular/angular-resource.min',
        'uiRoute' : '../assets/lib/angular/angular-ui-router.min',
        'satellizer': '../assets/lib/angular/satellizer.min',
        'routes' : '../app/routes',
        'app' : '../app/app',
        'bootstrap' : '../assets/lib/bootstrap/bootstrap.min',
        'script' : '../assets/js/falsy',
        'init' : '../app/controllers/init-controller',
        'hash' : '../app/service/hash-service',
        'falsy' : '../app/controllers/falsy-controller'
    },

    shim:{
        'jquery':{
            exports: 'jquery'
        },
        'angular':{
            deps: ['jquery'],
            exports: 'angular'
        },
        'ngResource':{
            deps: ['angular']
        },
        'satellizer':{
            deps: ['angular']
        },
        'uiRoute':{
            deps: ['angular']
        },
        'app':{
            deps: ['uiRoute']
        },
        'bootstrap':{
            deps: ['app']
        },
        'script':{
            deps: ['app']
        },
        'init':{
            deps: ['app']
        },
        'hash':{
            deps: ['app']
        },
        'falsy':{
            deps: ['app', 'hash']
        }
    }
});

require( [
        'jquery',
        'angular',
        'ngResource',
        'uiRoute',
        'satellizer',
        'app',
        'routes',
        'bootstrap',
        'script',
        'init',
        'hash',
        'falsy'
    ],

    function ($, angular) {
        $(document).ready(function () {
            angular.bootstrap(document, ['Falsy']);
        });
    }
);
