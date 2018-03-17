//demonstrate how to bootstrap the app manually
angular.element(document).ready(function() {
    angular.module('myApp', [])
    angular.bootstrap(document, ['myApp'])
})

var app = angular.module('myApp', [])
app.controller('MyFirstController',['$scope', function($scope) {
    $scope.greeting = 'Hola!'
}])