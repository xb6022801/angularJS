var injector = angular.injector(['ng', 'myModule'])
var greeter = injector.get('greeter')

// 让你的函数的参数名直接使用依赖名
function MyController($scope, $window) {
  $scope.localVersion = '1.0'
  $window.alert('??')
}

// $inject注释
//为了让重命名了参数名的压缩版的 JavaScript 代码能够正确地注入相关的依赖服务。
//函数需要通过 $inject 属性进行标注，这个属性是一个存放需要注入的服务的数组。
function MyController($scope, $window) {
  $scope.localVersion = '1.0'
  $window.alert('??')
}

MyController.$inject = ['$scope', '$window'] //顺序需要保持一直

//行内注释
someMondule.factory('someService', [$scope, $window, function($scope, $window) {
  /* to do */
}])

//ng-strict-di， manual bootstrapping
angular.bootstrap(document, ['myApp'], {
  strictDi: true
})