'use strict';
const angular = require('angular');

export class myMileComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
  }
}

export default angular.module('angularFullstackApp.myMile', [])
  .component('myMile', {
    template: require('./myMile.html'),
    controller: myMileComponent
  })
  .name;
