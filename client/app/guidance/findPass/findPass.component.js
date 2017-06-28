'use strict';
const angular = require('angular');

export class findPassComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
    this.state = 1;
  }
}

export default angular.module('wkMeanApp.findPass', [])
  .component('findPass', {
    template: require('./findPass.html'),
    controller: findPassComponent
  })
  .name;
