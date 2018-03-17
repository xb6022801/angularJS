
myApp.value('clientId', Math.round(Math.random() * 10))

/**
 * 
The Factory recipe adds the following abilities:
  ability to use other services (have dependencies)
  service initialization
  delayed/lazy initialization
 */
myApp.factory('clientId', function() {
  return Math.round(Math.random() * 10)
})

myApp.factory('encrptService', ['clientId', function(clientId) {
  var encrypt = function(val1, val2) {
    return (val1 + ':' + val2).toUpperCase()
  }

  var secret = window.localStorage.getItem('myApp.secret')

  return encrypt(clientId, secret)
}])


//
function unicornLauncher(apiToken) {
  this.unicornLaunchCount = 0
  this.launch = function(apiToken) {
    /** to do */
    this.unicornLaunchCount ++
  }
}

myApp.factory('unicornLauncher', ['apiToken', function(apiToken) {
  return new unicornLauncher(apiToken)
}])
// or
myApp.service('unicornLauncher', ['apiToken', unicornLauncher])

function factory(name, fn) {
  return provide(name, {
    $get: fn
  })
}

//provider使用简介
myApp.provider('unicornLauncher', function () {
  var currentVersion = 1.0

  //在bootstrap中可配置的， 运行阶段就不可以了。
  this.updateVersion = function (newVersion) {
    currentVersion = newVersion
  }
  this.$get = ['apiToken', function(apiToken) {
    return new unicornLauncher(apiToken, currentVersion)
  }]
})

angular.config('unicornLauncher', function(unicornLauncher) {
  unicornLauncher.updateVersion('3.0')
})

//constant
myApp.constant('planetName', 'earth')

//既然Constant图纸使得值像Value图纸创建的服务一样在运行时可访问，那么我们也可以在控制器和模板里使用它：
myApp.controller('DemoController', ["clientId", "planetName", function DemoController(clientId, planetName) {
  this.clientId = clientId;
  this.planetName = planetName;
}]);

//专用对象(specialized object) 举例：
myApp.directive('myPlanet', ['planetName', function(planetName) {
  return {
    restrict: 'E',
    scope: {},
    link: function(scope, element) {
      element.text('Planet is ' + planetName)
    }
  }
}])