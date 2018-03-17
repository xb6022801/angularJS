var app = angular.module('myApp', [])

app.controller('Ctrl', ['$scope', 'utilService', function($scope, utilService) {
  $scope.randomNumber = 3
  // $scope.generateRandom = function() {
  //   $scope.randomNumber = utilService.generateRandom()
  // }

  // version 2
  $scope.generateRandom = function() {
    $scope.randomNumber = utilService()
  }
}])

app.factory('utilService',function() {
  // return {
  //   generateRandom: function() {
  //     return Math.random()
  //   }
  // }

  //version 2
  return function() {
    return Math.random()
  }
})