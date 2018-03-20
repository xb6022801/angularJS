angular.module('myReverseFilterApp', [])
.filter('reverse', function() {
  return function(input, uppercase) {
    input = input || ''
    var currentChar = ''
    for(var i =0; i<input.length; i++) {
      currentChar = input.charAt(i) + currentChar
    }
    if (uppercase) {
      return currentChar.toUpperCase()
    }
    return currentChar
  }
})
.controller('MyController', ['$scope', 'reverseFilter', function($scope, reverseFilter) {
  $scope.greeting = 'hello';
  $scope.filteredGreeting = reverseFilter($scope.greeting);
}]);


//stateful filter: not recommend
angular.module('myStatefulFilterApp', [])
.filter('decorate', ['decoration', function(decoration) {

  function decorateFilter(input) {
    return decoration.symbol + input + decoration.symbol;
  }
  decorateFilter.$stateful = true; //mandatory

  return decorateFilter;
}])
.controller('MyController', ['$scope', 'decoration', function($scope, decoration) {
  $scope.greeting = 'hello';
  $scope.decoration = decoration;
}])
.value('decoration', {symbol: '*'});