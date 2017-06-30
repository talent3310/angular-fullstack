'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './myAccount.routes';

export class MyAccountComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('angularFullstackApp.myAccount', [uiRouter])
  .config(routes)
  .component('myAccount', {
    template: require('./myAccount.html'),
    controller: MyAccountComponent,
    controllerAs: 'myAccountCtrl'
  })
  .name;
