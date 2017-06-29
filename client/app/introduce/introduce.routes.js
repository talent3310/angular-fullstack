'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('introduce', {
      url: '/introduce',
      template: '<introduce></introduce>'
    })
    .state('introduce.info', {
      url: '/info',
      template: require('./info.html')
    })
    .state('introduce.screen', {
      url: '/screen',
      template: require('./screen.html')
    })
    .state('introduce.words', {
      url: '/words',
      template: require('./words.html')
    })
    .state('introduce.rule', {
      url: '/rule',
      template: require('./rule.html')
    })
    .state('introduce.guid', {
      url: '/guid',
      template: require('./guid.html')
    });
}
