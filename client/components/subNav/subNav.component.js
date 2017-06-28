'use strict';
const angular = require('angular');

export class subNavComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
  }
}

export default angular.module('wkMeanApp.subNav', [])
  .component('subNav', {
    template: '<h1>Hello {{ $ctrl.message }}</h1>',
    bindings: { message: '<' },
    controller: subNavComponent
  })
  .name;
