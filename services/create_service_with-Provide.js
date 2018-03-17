  /**
   * register services via the $provide service inside of a module's config function
   */
  angular.module('myModule', []).config(['$provide', function($provide) {
    $provide.factory('serviceId', function() {
      var shinyNewServiceInstance;
      // factory function body that constructs shinyNewServiceInstance
      return shinyNewServiceInstance;
    });
  }]);