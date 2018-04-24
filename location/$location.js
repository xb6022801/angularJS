var app = angular.module('myApp', [])
app.config('$locationProvider', function($locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!')
})

$location.path('/newvalue') // return $location
$location.path('/newvalue').search({key: value})