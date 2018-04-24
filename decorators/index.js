var app = angular.module('myApp', [])
// .config(['$provide', function ($provide) {
//   $provide.decorator('$log', ['$delegate', function $logDecorator($delegate) {
//     var originalWarn = $delegate.warn
//     $delegate.warn = function(msg) {
//       msg = 'decarated msg: ' + msg
//       originalWarn.apply($delegate, arguments)
//       return $delegate
//     }
//   }])
// }])
// .decorator('$originalService', newDecoratedService)
.factory('customService', function() {
  return {
    warn: function(msg) {
      console.log('warning: ' + msg)
    }
  }
})
.decorator('customService', function($delegate) {
  $delegate.info = function(msg) {
    console.log('cust info: ' + msg)
  }
  return $delegate
})
.directive('myDirective', function() {
  return {
    restrict: 'E',
    scope: {
      customer: '='
    },
    template: '<p>{{customer.name}}</p>',
    link: function(scope, ele, attr) {
      console.log(attr)
    }
  }
})
.controller('MyController', ['customService', function(customService) {
  customService.info('binbin')
}])

function newDecoratedService($delegate) {
  $delegate.newFn = function () {
    console.log('newFn')
  }
  return $delegate
}
