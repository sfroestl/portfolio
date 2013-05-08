'use strict';

// Declare app level module which depends on filters, and services
angular.module('portfolio', ['portfolio.filters', 'portfolio.services', 'portfolio.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', { templateUrl: 'html/welcome.html', controller: 'WelcomeCtrl'});
    $routeProvider.when('/projects', {templateUrl: 'html/projects.html', controller: 'ProjectsCtrl'});
    $routeProvider.when('/about', {templateUrl: 'html/about.html', controller: 'AboutCtrl'});
    $routeProvider.when('/imprint', {templateUrl: 'html/imprint.html', controller:'ImprintCtrl'});
    $routeProvider.otherwise({redirectTo: '/about'});
  }]);
