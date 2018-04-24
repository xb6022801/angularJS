function editableFieldController($scope, $element, $attrs) {
  var ctrl = this
  ctrl.reset = function() {
    this.fieldValue = this.filedValueCopy
  }

  ctrl.update = function(newval) {
    ctrl.onUpdate({ newval })
  }

  ctrl.$onInit = function () {
    ctrl.filedValueCopy = ctrl.fieldValue
  }
}

//component communication
var googleKeep = angular.module('googleKeep', ['ngRoute'])

googleKeep.component('myTabs', {
  require: {
    parentPanel: '^parentPanel', //require other directive
  },
  transclude: true,
  controller: function() {
    this.$onInit = () => { // parentPanel only guaranteed to be instantialized upon $onInit.
      parentPanel.update({ message: 'child panel initialized! '})
    }
  },
  templateUrl: 'index.html'
})