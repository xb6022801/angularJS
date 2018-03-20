angular.module('myApp', [])
.controller('MyController', ['$scope', function($scope) {
  $scope.expr = '3+10 | currency'
  var exprs  = $scope.exprs = []
  // expres.push($scope.expre)
  $scope.addExp= function(newExpre) {
    exprs.push(newExpre)
  }
  $scope.removeExp = function(index) {
    exprs.splice(index, 1)
  }
}])

function simpleKeys(original) {
  return Object.keys(original).reduce(function(obj, key) {
    obj[key] = typeof original[key] === 'object'? '{...}': original[key]
    return obj
  }, {version: '1.0'})
}

console.log(simpleKeys({
  prototype: { constructor: function() { return 'prototype'}},
  isTrusted: true,
  originalName: 'original'
}))