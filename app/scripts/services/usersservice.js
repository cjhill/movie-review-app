'use strict';

/**
 * @ngdoc service
 * @name movieReviewAppApp.usersService
 * @description
 * # usersService
 * Service in the movieReviewAppApp.
 */
angular.module('movieReviewAppApp')
    .service('usersService', function () {
        var users = [
            {
                firstname: 'Chris',
                lastname: 'Hill',
                username: 'cjhill0',
                password: 'test',
                loggedIn: false
            },
            {
                firstname: 'Myron',
                lastname: 'Maglott',
                username: 'mm67',
                password: 'test2',
                loggedIn: false
            }
        ];

        this.loggedInUser;

        // Get all users
        this.getUsers = function() {
            return users;
        };

        // Sign In
        this.signIn = function(username) {
            for (var i = 0; i < users.length; i++) {
                if (users[i].username == username.username) {
                    if (users[i].password == username.password) {
                        this.loggedInUser = users[i];
                        users[i].loggedIn = true;
                        return true;
                    } else {
                        alert('Incorrect password');
                    }
                }
            }
        };

    });
