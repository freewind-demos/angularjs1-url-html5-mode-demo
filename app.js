const app = angular.module('app', ['ngRoute'])

app.config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) => {
  $routeProvider
    .when('/page-a', {
      templateUrl: './templates/a.html'
    })
    .when('/page-b', {
      templateUrl: './templates/b.html'
    })
    .otherwise('/page-a');

  $locationProvider.html5Mode(true);
  
}]);

