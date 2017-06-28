'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './guidance.routes';

export class GuidanceComponent {
  /*@ngInject*/
  constructor() {
    console.log('guidanceControler');
    this.message = 'Hello';
  }
}

export default angular.module('wkMeanApp.guidance', [uiRouter])
  .config(routes)
  .component('guidance', {
    template: require('./guidance.html'),
    controller: GuidanceComponent,
    controllerAs: 'guidanceCtrl'
  })
  .name;
