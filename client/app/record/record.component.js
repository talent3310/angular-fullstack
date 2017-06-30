'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './record.routes';

export class RecordComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('angularFullstackApp.record', [uiRouter])
  .config(routes)
  .component('record', {
    template: require('./record.html'),
    controller: RecordComponent,
    controllerAs: 'recordCtrl'
  })
  .name;
