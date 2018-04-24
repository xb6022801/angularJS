var googleKeep = angular.module('googleKeep', ['ngRoute'])

googleKeep.component('home', {
  // templateUrl: 'index.html',
  template: '<h1>Home</h1><p>Hello, {{ $ctrl.user.name }} !</p>',
  bindings: {
    user: '<'
  }
})

googleKeep.config(function($routeProvider) {
  $routeProvider.when('/', {
    template: '<home user="resolveStore.user">', //use $resolve in order to avoid extra controller
    resolve: {
      user: function($http) {return $http.get('..')}
    },
    resolveAs: 'resolveStore', //by default $resolve
  })
})\
