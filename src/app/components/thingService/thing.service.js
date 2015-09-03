/**
 *
 * Created by githop on 8/31/15.
 */

(function() {
  'use strict';
  angular.module('gloo')
    .factory('ThingService', ThingService);

  ThingService.$inject = ['$mdDialog', '$mdToast', 'Resource'];

  function ThingService($mdDialog, $mdToast, Resource) {
    var manager = {};
    var _things = [];

    _init();

    manager.create = create;
    manager.update = update;
    manager.destroy = destroy;
    manager.getAll = getAll;

    function _init() {
      var martian = {
        type: 'Book',
        title: 'The Martian by Andy Weir',
        content: 'A Mars Survival Story',
        url: 'http://www.amazon.com/The-Martian-Novel-Andy-Weir-ebook/dp/B00EMXBDMA'
      };

      _things.push(new Resource(martian))
    }

    var _getOpts = function() {
      var vals = ['Movie', 'Book', 'Website'];
      return _.map(vals, function(v) {
        return v = {key: v};
      });
    };

    function getAll() {
      return _things;
    }

    function create() {
      var _ctrl = function($mdDialog) {
        var ctrl = this;
        ctrl.opts = _getOpts();
        ctrl.add = function(data) {
          if (data.type) {
            $mdDialog.hide({data: data});
          }
        };

        ctrl.cancel = function() {
          $mdDialog.cancel();
        };
      };

      _ctrl.$inject = ['$mdDialog'];

      var dialog = {
        controller: _ctrl,
        controllerAs: 'ctrl',
        templateUrl: 'create.tmpl.html',
        parent: angular.element(document.body),
        bindToController:true,
        clickOutsideToClose:true
      };

      $mdDialog.show(dialog).then(function(result) {
        var inst = new Resource(result.data);
        _things.push(inst);
        $mdToast.show($mdToast.simple().content(result.data.type + ' created!'));
      });
    }

    function update(thing) {
      var _ctrl = function() {
        var ctrl = this;
        ctrl.copy = angular.copy(ctrl.data);
        ctrl.opts = _getOpts();

        ctrl.onSelect = function(selected) {
          ctrl.copy.type = selected;
        };

        ctrl.update = function(data) {
          $mdDialog.hide({data: data})
        };

        ctrl.cancel = function() {
          $mdDialog.cancel();
        }
      };

      var dialog = {
        controller: _ctrl,
        controllerAs: 'ctrl',
        templateUrl: 'edit.tmpl.html',
        parent: angular.element(document.body),
        locals: {data: thing},
        bindToController: true,
        clickOutsideToClose:true
      };

      $mdDialog.show(dialog).then(function(result) {
        thing.setData(result.data);
        $mdToast.show($mdToast.simple().content(result.data.title + ' updated!'))
      });

    }

    function destroy(thing) {
      var cya = _.find(_things, thing);
      if (cya) {
        _.remove(_things, cya);
        $mdToast.show($mdToast.simple().content('Item Deleted :('));
      }
    }

    return manager;
  }
})();

