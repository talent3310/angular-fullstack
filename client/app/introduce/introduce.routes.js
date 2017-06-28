'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('introduce', {
      url: '/introduce',
      template: '<introduce></introduce>'
    });
}
