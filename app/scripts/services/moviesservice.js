'use strict';

/**
 * @ngdoc service
 * @name movieReviewAppApp.moviesService
 * @description
 * # moviesService
 * Service in the movieReviewAppApp.
 */
angular.module('movieReviewAppApp')
  .service('moviesService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var movies = [
        {
            title: 'The Third Man',
            description: 'In this Cold War spy classic, Holly Martins (Joseph Cotten), a third-rate American pulp novelist, arrives in postwar Vienna, where he has been promised a job by his old friend Harry Lime (Orson Welles).',
            rating: 5
        },
        {
            title: 'Zootopia',
            description: 'The modern mammal metropolis of Zootopia is a city like no other.',
            rating: 3
        },
        {
            title: 'Frankenstein',
            description: '"Frankenstein" is a film about a mad, obsessed scientist, Dr. Henry Frankenstein", who creates a monster, by taking body parts from dead people.',
            rating: 4
        }
    ];

    // Get all movies
    this.getMovies = function() {
        return movies;
    };

    // Add movie
    this.addMovie = function(movie) {
        alert(movie.length);
        movies.push(movie);
    };

    // Delete Movie
    this.deleteMovie = function(movie) {
        var index = movies.indexOf(movie);

        if(confirm('Are you sure you want to delete this movie?') == true) {
            movies.splice(index, 1);
        }
    };

    // Edit Movie
    this.editMovie = function(movie) {
        var index = movies.indexOf(movie),
            selected = movies[index];

            return selected;
    }

  });
