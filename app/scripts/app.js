'use strict';

/**
 * @ngdoc overview
 * @name movieReviewAppApp
 * @description
 * # movieReviewAppApp
 *
 * Main module of the application.
 */
angular
    .module('movieReviewAppApp', [
    'ngAnimate',
    'ngRoute'
    ])
    .config(function ($routeProvider) {
    $routeProvider
        .when('/main', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            controllerAs: 'main'
        })
        .when('/', {
            templateUrl: 'views/signup.html',
            controller: 'UserCtrl',
            controllerAs: 'user'
        })
        .otherwise({
            redirectTo: '/'
        });
    });
