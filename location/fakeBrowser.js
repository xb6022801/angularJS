angular.module('fake-browser', [])

.config(function($provide) {
 $provide.decorator('$browser', function($delegate, baseHref, initUrl) {
  console.log($delegate)
  
  $delegate.onUrlChange = function(fn) {
     this.urlChange = fn;
   };

  $delegate.url = function() {
     return initUrl;
  };

  $delegate.defer = function(fn, delay) {
     setTimeout(function() { fn(); }, delay || 0);
   };

  $delegate.baseHref = function() {
     return baseHref;
   };

   return $delegate;
 });
});

