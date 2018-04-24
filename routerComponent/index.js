$rootConfig: [
  { path: 'a/b/c', component: 'childComponent' }
]

myModule.value('$routerRootComponent', 'myApp')

//html5模式必须要指定base href
// <head>
// <base href="/">
// </head>

//useAsDefault

// ng-link="['heroDetails', {id: $ctrl.id}]"

function HeroListComponent(heroService) {
  this.$routeCanActivate = function() {
    // return false
    Promise.resolve()
  }
}

function HeroListComponent(heroService) {
  this.$routeCanActivate = function(next, previous) {
    var id = next.params.id
  }
}

//access to current router

app.component('hero', {
  bindings: { // property of controller
    $router: '<'
  },
  $canActivate: function (next, previous) {
    if (!next.params.id) return false
    return true
  },
  controller: function (heroService) {
    var $ctrl = this
    this.$routeCanActivate = function (next, previous) {
      var id = next.params.id
      if (!id) return false

      $ctrl.id = id
    }

    this.navigateToNext = function () {
      $ctrl.$router.navigate(['heroList', { id: $ctrl.id }])

      // var instruction = this.$router.generate(['HeroList']);
      // this.$router.navigateByInstruction(instruction);
    }
  } 
})

// Each Component can provide the $canActivate and $routerCanDeactivate Lifecycle Hooks.
//  The $routerCanDeactivate hook is an instance method on the Component. The $canActivate 
//  hook is used as a static method defined on the Component Definition Object.

// Router will call the $routerCanDeactivate and $canActivate hooks, if they are provided. 
// If any of the hooks resolve to false then the navigation is cancelled.