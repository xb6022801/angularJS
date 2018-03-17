angular.module('docsIsolateScopeDirective', [])
  .controller('Ctrl', function($scope) {
    $scope.naomi = { name: 'Naomi', address: '1600 Amphitheatre' };
    $scope.myClick = function() {
      console.log('my click')
      // alert('alert!');
    }
  })
  .directive('myCustomer', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        customerInfo: '=info',
        // info: '=',
        clickMe: '&onClick'
        // onClick: '&'
      },
      // template: 'Name: {{ customerInfo.name }}  Address: {{ customerInfo.address }} parent name is {{parentName}}'
      template: '{{naomi.name}} <div ng-transclude></div><br>'
      + '<button ng-click="clickMe()">click me</button>',
      link: function(scope, element, attr) {
        scope.naomi = {name: 'happy'}
        element.css({
          border: '1px solid red',
          backgroundColor: 'lightgrey'
        })
        console.log(attr)
      }
    };
  });