angular.module('docsTimeDirective', [])
  .controller('Ctrl2', function($scope) {
    // $scope.naomi = { name: 'Naomi', address: '1600 Amphitheatre' };
    // $scope.igor = { name: 'Igor', address: '123 Somewhere' };
    // $scope.parentName = 'parent'
    $scope.format = 'M/d/yy h:mm:ss a'
  })
  .directive('myCurrentTime', ['$interval', 'date', function($interval, dataFilter) {
    function link(scope, element, attrs) {
      var format,
          timeoutId;
  
      function updateTime() {
        element.text(date(new Date(), format));
      }
  
      scope.$watch(attrs.myCurrentTime, function(value) {
        format = value;
        updateTime();
      });
  
      element.on('$destroy', function() {
        $interval.cancel(timeoutId);
      });
  
      // start the UI update process; save the timeoutId for canceling
      timeoutId = $interval(function() {
        updateTime(); // update DOM
      }, 1000);
    }

    return { link }
  }]);