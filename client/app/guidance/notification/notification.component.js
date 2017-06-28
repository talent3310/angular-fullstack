'use strict';
const angular = require('angular');

export class notificationComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
    this.state = '1';
  }
}

export default angular.module('wkMeanApp.notification', [])
  .component('notification', {
    template: require('./notification.html'),
    controller: notificationComponent
  })
  .name;
