/**
 * Created by githop on 8/31/15.
 */

(function() {
  'use strict';
  angular.module('gloo')
    .controller('GlooCtrl', GlooCtrl);

  GlooCtrl.$inject = ['ThingService'];

  function GlooCtrl(ThingService) {
    var Gloo = this;

    Gloo.things = ThingService.getAll();

    Gloo.greeting = "Hello Gloo!";

    Gloo.create = function() {
      ThingService.create();
    };

    Gloo.update = function(thing) {
      ThingService.update(thing);
    };

    Gloo.remove = function(thing) {
      ThingService.destroy(thing);
    };



  }


})();
