angular.module('myApp', ['xml.service'])
.run(function(greeter) {
  greeter.localize('你好')
})
.controller('MainController', function ($scope, greeter) {
  $scope.greeting = greeter.greeting('binbin')
})

angular.module('xml.service', [])
.value('greeter', {
  localize: function (salutation) {
    this.salutation = salutation
  },
  greeting: function (name) {
    return this.salutation +', ' + name
  }
})