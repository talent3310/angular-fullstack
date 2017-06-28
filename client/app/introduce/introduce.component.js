'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './introduce.routes';

export class IntroduceComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('wkMeanApp.introduce', [uiRouter])
  .config(routes)
  .component('introduce', {
    template: require('./introduce.html'),
    controller: IntroduceComponent,
    controllerAs: 'introduceCtrl'
  })
  .name;
