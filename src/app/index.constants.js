/* global malarkey:false, toastr:false, moment:false */
(function() {
  'use strict';

  angular
    .module('gloo')
    .constant('toastr', toastr)
    .constant('moment', moment);

})();
