//demonstrate how to bootstrap the app manually
angular.element(document).ready(function() {
    angular.module('myApp', [])
    angular.bootstrap(document, ['myApp'])
})

var app = angular.module('myApp', [])
app.controller('MyFirstController',['$scope', function($scope) {
    $scope.greeting = 'Hola!'
}])
.directive('myCurrentTime', ['$interval', 'date', function($interval, dateFilter) {
  function link(scope, element, attrs) {  
    var format,
        timeoutId

    scope.$watch(attrs.myCurrentTime, (value) => {
        format = value
        updateTime()
    })

    function updateTime() {
        element.text(date(new Date(), format))  
    }

    element.on('$destory', () => {
        $interval.cancel(timeoutId)
    })

    timeoutId = $interval(function() {
        updateTime()
    }, 1000)

    return { link } 
  }
}])