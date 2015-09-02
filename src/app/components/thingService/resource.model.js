/**
 *
 * Created by githop on 8/31/15.
 */

(function() {
  'use strict';
  angular.module('gloo')
    .factory('Resource', Resource);

  function Resource() {
    var Model = function(data) {
      this.setData(data);
    };

    Model.prototype.setData = function(data) {
      var self = this;
      self.type = data.type;
      self.title = data.title;
      self.url = data.url;
      self.content = data.content;
    };

    return Model;
  }
})();
