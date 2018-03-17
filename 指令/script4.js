angular.module('communicateDirectiveApp', [])
.directive('myTab', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    controller: ['$scope', function ($scope) {
      $scope.panes = []

      $scope.select = function (panel) {
        $scope.panes.forEach(panel => {
          panel.selected = false
        })
        panel.selected = true       
      }

      this.addPane = function (panelScope) {
        $scope.panes.push(panelScope)
        $scope.select(panelScope)
      }
    }],
    template: `
      <ul>
        <li ng-repeat="panel in panes">
          <span ng-click="select(panel)">{{ panel.title }}</span>
        </li>
      </ul>
      <div ng-transclude></div>
      `
  }
})
.directive('myPanel', function() {
  return {
    restrict: 'E',
    require: '^^myTab',
    transclude: true,
    scope: { title: '@' },
    link: function(scope, element, attrs, ctrl) {
      ctrl.addPane(scope)
    },
    template: `
      <div ng-show="selected">
        <h4>{{ title }}</h4>
        <p ng-transclude></p>
      </div>    
    `
  }
})