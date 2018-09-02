const helloModule = angular.module('helloModule', [])

helloModule.controller('helloController', function ($scope) {
    $scope.moduleName = 'HelloModule'
})

helloModule.directive('helloDirective', function () {
    return {
        link: function ($scope, $element, $attrs) {
            $element.append('<div class="bg-yellow">(Hello from ' + $scope.moduleName + ')</div>')
        }
    }
})