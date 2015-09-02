(function() {
  'use strict';

  angular
    .module('gloo', ['ngAnimate', 'ngCookies', 'ngTouch', 'ui.router', 'ngMaterial', 'ngMessages'])
    .config(function($mdThemingProvider) {
      $mdThemingProvider.definePalette('bloo', {"50":"#ebf7fa","100":"#c3e8f0","200":"#9cd9e7","300":"#7accde","400":"#59c0d6","500":"#38b3ce","600":"#319db4","700":"#2a869b","800":"#237081","900":"#1c5a67","A100":"#c3e8f0","A200":"#9cd9e7","A400":"#59c0d6","A700":"#2a869b"});

      $mdThemingProvider.definePalette('accent', {"50":"#f0f9ef","100":"#d1ecd0","200":"#b3dfb0","300":"#99d496","400":"#7fc97b","500":"#66be61","600":"#59a655","700":"#4d8f49","800":"#40773d","900":"#335f31","A100":"#d1ecd0","A200":"#b3dfb0","A400":"#7fc97b","A700":"#4d8f49"});

      $mdThemingProvider.definePalette('background', {"50":"#f3f3f3","100":"#dcdcdc","200":"#c4c4c4","300":"#b0b0b0","400":"#9d9d9d","500":"#898989","600":"#787878","700":"#676767","800":"#565656","900":"#454545","A100":"#dcdcdc","A200":"#c4c4c4","A400":"#9d9d9d","A700":"#676767"});

      $mdThemingProvider.theme('gloo')

        .primaryPalette('bloo')

        .accentPalette('accent');
    });

})();
