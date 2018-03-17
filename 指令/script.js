angular.module('docsIsolateScopeDirective', [])
  .controller('Ctrl', function($scope) {
    $scope.naomi = { name: 'Naomi', address: '1600 Amphitheatre' };
    $scope.igor = { name: 'Igor', address: '123 Somewhere' };
    $scope.parentName = 'parent'
  })
  .directive('myCustomer', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        customerInfo: '=info'
      },
      // template: 'Name: {{ customerInfo.name }}  Address: {{ customerInfo.address }} parent name is {{parentName}}'
      template: '{{naomi.name}} <div ng-transclude></div>',
      link: function(scope) {
        scope.naomi = {name: 'happy'}
      }
    };
  });