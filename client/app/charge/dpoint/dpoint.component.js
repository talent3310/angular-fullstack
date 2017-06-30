'use strict';
const angular = require('angular');

export class dpointComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
  }
}

export default angular.module('angularFullstackApp.dpoint', [])
  .component('dpoint', {
    template: require('./dpoint.html'),
    controller: dpointComponent
  })
  .name;
