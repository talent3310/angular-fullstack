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
    template: '<h1>Hello {{ $ctrl.message }}</h1>',
    controller: mileChangeComponent
  })
  .name;
