'use strict';

function ProjectsCtrl($scope, $http, contentService) {
  $scope.projects = null;
  $scope.claim = null;
  fetchProjects();


  function fetchProjects() {
    var res = contentService.projects();

    res.then(function(data) {
      $scope.projects = data.projects;
      $scope.claim = data.claim;
    }, function(error){
    });
  }
}
// ProjectsCtrl.$inject = ['portfolio.services'];


function AboutCtrl($scope, $http, contentService) {
  $scope.claim = null;
  $scope.about = null;
  fetchAbout();

  $scope.mail2 = "mailto";

  function fetchAbout() {
    var res = contentService.about();

    res.then(function(data) {
      $scope.claim = data.claim;
      $scope.about = data.about;
    }, function(error){
    });
  }
}
// AboutCtrl.$inject = [];

function ImprintCtrl($scope, $http, contentService) {
  $scope.imprint = null;
  fetchImprint();

  function fetchImprint() {
    var res = contentService.imprint();
    res.then(function(data) {
      $scope.imprint = data.imprint;
    }, function(error){
    });
  }
}

function WelcomeCtrl($scope, $http,contentService) {
  // var weatherUrl = "http://weather.yahooapis.com/forecastjson?w=22186809&u=c&format=json&callback=JSON_CALLBACK";
  var weatherUrl = "http://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20weather.bylocation%20WHERE%20location%3D'dresden'%20AND%20unit%3D%22c%22&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=JSON_CALLBACK";
  $http.jsonp(weatherUrl).success(
    function(data, status, headers, config){
      $scope.weather = data.query.results.weather.rss.channel.item;
  });

  var twitterApiUrl = "http://api.twitter.com/1/statuses/user_timeline.json"
      , username = "sfroestl"
      , config = {
          params : {
              screen_name: username
              , callback : "JSON_CALLBACK"
              , include_rts : true
              , count: 3
              , clientsource : "TWITTERINC_WIDGET"
              , "1340767850386": "cachebus"
          }
      };
  $http.jsonp( twitterApiUrl, config ).success(
      function(data, status, headers, config){
          $scope.tweets = data;
      }
  );

}