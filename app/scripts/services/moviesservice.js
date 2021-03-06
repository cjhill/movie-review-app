'use strict';

/**
 * @ngdoc service
 * @name movieReviewAppApp.moviesService
 * @description
 * # moviesService
 * Service in the movieReviewAppApp.
 */
angular.module('movieReviewAppApp')
  .service('moviesService', ['$firebaseObject', function ($firebaseObject) {

    // Firebase
    // List of movies
    var fire = new Firebase('https://google-showtimes.firebaseio.com/movies'),
        movies = $firebaseObject(fire);


    // var movies = [
    //     {
    //         title: 'The Third Man',
    //         description: 'In this Cold War spy classic, Holly Martins (Joseph Cotten), a third-rate American pulp novelist, arrives in postwar Vienna, where he has been promised a job by his old friend Harry Lime (Orson Welles).',
    //         image: 'the.jpg',
    //         rating: 5
    //     },
    //     {
    //         title: 'Zootopia',
    //         description: 'The modern mammal metropolis of Zootopia is a city like no other.',
    //         image: 'zoo.jpg',
    //         rating: 3
    //     },
    //     {
    //         title: 'Frankenstein',
    //         description: '"Frankenstein" is a film about a mad, obsessed scientist, Dr. Henry Frankenstein", who creates a monster, by taking body parts from dead people.',
    //         image: 'frank.jpg',
    //         rating: 4
    //     },
    //     {
    //         title: 'Metropolis',
    //         description: 'In a futuristic city sharply divided between the working class and the city planners, the son of the city\'s mastermind falls in love with a working class prophet who predicts the coming of a savior to mediate their differences.',
    //         image: 'metro.jpg',
    //         rating: 2
    //     },
    //     {
    //         title: 'King Kong',
    //         description: 'How would you like to star opposite the tallest, darkest leading man in Hollywood?',
    //         image: 'gorilla.jpg',
    //         rating: 4
    //     },
    //     {
    //         title: 'Toy Story 2',
    //         description: '"Toy Story 2" is the exciting, all-new sequel to the landmark 1995 computer-animated blockbuster from Walt Disney Pictures and Pixar Animation Studios.',
    //         image: 'toy.jpg',
    //         rating: 2
    //     }
    // ];

    // Get all movies
    this.getMovies = function() {
        return movies;
    };

    // Add movie
    this.addMovie = function(movie) {
        fire.push(movie);
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

  }]);
