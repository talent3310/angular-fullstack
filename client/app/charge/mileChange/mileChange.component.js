'use strict';
const angular = require('angular');

export class mileChangeComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
  }
}

export default angular.module('angularFullstackApp.mileChange', [])
  .component('mileChange', {
    template: require('./mileChange.html'),
    controller: mileChangeComponent
  })
  .name;
