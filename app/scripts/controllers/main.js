'use strict';

/**
 * @ngdoc function
 * @name movieReviewAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieReviewAppApp
 */
angular.module('movieReviewAppApp')
    .controller('MainCtrl', ['moviesService', 'usersService', function (movieService, usersService) {
        this.movies = movieService.getMovies();
        this.users = usersService.getUsers();

        // Add movie
        this.newMovie = {};

        this.addMovie = function(movie) {
            movieService.addMovie(this.newMovie);
            this.newMovie = {};
        };

        // Delete Movie
        this.deleteMovie = function(movie) {
            movieService.deleteMovie(movie);
        };

        // Edit Movie
        this.editMovie = function(movie) {
            this.newMovie = movieService.editMovie(movie);
        };

        // Logged In User
        this.loggedInUser = usersService.loggedInUser;
    }]);
