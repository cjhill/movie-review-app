'use strict';

/**
 * @ngdoc function
 * @name movieReviewAppApp.controller:UserscontrollerCtrl
 * @description
 * # UserscontrollerCtrl
 * Controller of the movieReviewAppApp
 */
angular.module('movieReviewAppApp')
    .controller('UserCtrl', ['usersService', '$location', function (usersService, $location) {
        // User Sign In
        this.user = {};
        this.loggedIn = false;

        this.signIn = function(username) {
            if (this.loggedIn === false) {
                this.loggedIn = usersService.signIn(this.user) ? true : false;

                if (this.loggedIn === true) {
                    $location.path('/main');
                    this.user = {};
                }
            } else {
                alert('User already logged in');
                this.user = {};
            }
        };
    }]);
