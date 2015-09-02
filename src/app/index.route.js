(function() {
  'use strict';

  angular
    .module('gloo')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/gloo/gloo.html',
        controller: 'GlooCtrl',
        controllerAs: 'Gloo'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
