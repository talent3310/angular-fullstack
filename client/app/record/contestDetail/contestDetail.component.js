'use strict';
const angular = require('angular');

export class contestDetailComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
  }
}

export default angular.module('angularFullstackApp.contestDetail', [])
  .component('contestDetail', {
    template: require('./contestDetail.html'),
    controller: contestDetailComponent
  })
  .name;
