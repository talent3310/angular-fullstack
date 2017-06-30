'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './charge.routes';

export class ChargeComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('angularFullstackApp.charge', [uiRouter])
  .config(routes)
  .component('charge', {
    template: require('./charge.html'),
    controller: ChargeComponent,
    controllerAs: 'chargeCtrl'
  })
  .name;
