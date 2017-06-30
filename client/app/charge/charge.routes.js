'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('charge', {
      url: '/charge',
      template: '<charge></charge>'
    })
    .state('charge.dpoint', {
      url: '/dpoint',
      template: '<dpoint></dpoint>'
    })
    .state('charge.mileChange', {
      url: '/mileChange',
      template: '<mile-change></mile-change>'
    });
}
