'use strict';
const angular = require('angular');

export class notificationComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
  }
}

export default angular.module('wkMeanApp.notification', [])
  .component('notification', {
    template: '<h1>Hello {{ $ctrl.message }}</h1>',
    bindings: { message: '<' },
    controller: notificationComponent
  })
  .name;
