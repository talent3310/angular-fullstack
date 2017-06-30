'use strict';
const angular = require('angular');

export class bettingResultComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
  }
}

export default angular.module('angularFullstackApp.bettingResult', [])
  .component('bettingResult', {
    template: require('./bettingResult.html'),
    controller: bettingResultComponent
  })
  .name;
