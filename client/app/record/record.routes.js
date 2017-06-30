'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('record', {
      url: '/record',
      template: '<record></record>'
    })
    .state('record.result', {
      url: '/result',
      template: '<result></result>',
    })
    .state('record.playerResult', {
      url: '/playerResult',
      template: '<player-result></player-result>',
    });
}



