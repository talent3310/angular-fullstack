'use strict';
const angular = require('angular');

export class findIdComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
    this.state = 1;
  }
}

export default angular.module('wkMeanApp.findId', [])
  .component('findId', {
    template: require('./findId.html'),
    controller: findIdComponent
  })
  .name;
