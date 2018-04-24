
angular.module('app', ['ngComponentRouter', 'heroes', 'crisis-center'])

.config(function($locationProvider) {
  $locationProvider.html5Mode(true);
})

.value('$routerRootComponent', 'app')

.component('app', {
  template:
    '<nav>\n' +
    '  <a ng-link="[\'CrisisCenter\']">Crisis Center</a>\n' +
    '  <a ng-link="[\'Heroes\']">Heroes</a>\n' +
    '</nav>\n' +
    '<ng-outlet></ng-outlet>\n',
  $routeConfig: [
    {path: '/crisis-center/...', name: 'CrisisCenter', component: 'crisisCenter', useAsDefault: true},
    {path: '/heroes/...', name: 'Heroes', component: 'heroes' }
  ]
})

/*
Copyright 2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/