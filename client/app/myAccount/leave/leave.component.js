'use strict';
const angular = require('angular');

export class leaveComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
  }
}

export default angular.module('angularFullstackApp.leave', [])
  .component('leave', {
    template: require('./leave.html'),
    controller: leaveComponent
  })
  .name;
