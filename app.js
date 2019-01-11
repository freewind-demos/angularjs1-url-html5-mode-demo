const app = angular.module('app', ['ngRoute'])

app.config(['$routeProvider', ($routeProvider) => {
  $routeProvider
    .when('/page-a', {
      templateUrl: './templates/a.html'
    })
    .when('/page-b', {
      templateUrl: './templates/b.html'
    })
    .otherwise('/page-a');
}]);

