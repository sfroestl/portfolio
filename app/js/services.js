'use strict';

/* Services */

var module = angular.module('portfolio.services', []);
module.factory('contentService', function($http) {
  var contentService = {
    projects: function() {
      // $http returns a promise, which has a then function, which also returns a promise
      var promise = $http.get('content/projects.json').then(function (response) {
        // The then function here is an opportunity to modify the response

        // The return value gets picked up by the then in the controller.
        return response.data;
      });
      // Return the promise to the controller
      return promise;
    },
    about: function() {
      var promise = $http.get('content/about.json').then(function (response) {
        return response.data;
      });
      return promise;
    },
    imprint: function() {
      var promise = $http.get('content/imprint.json').then(function (response) {
        return response.data;
      });
      return promise;
    },
    weather: function() {
      var promise = $http.get('http://weather.yahooapis.com/forecastrss?w=22186809&u=c').then(function (response) {
        console.log(response);
        return response.data;
      });
      return promise;
    }
  };
  return contentService;
});