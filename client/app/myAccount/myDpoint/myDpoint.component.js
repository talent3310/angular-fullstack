'use strict';
const angular = require('angular');

export class myDpointComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
  }
}

export default angular.module('angularFullstackApp.myDpoint', [])
  .component('myDpoint', {
    template: require('./myDpoint.html'),
    controller: myDpointComponent
  })
  .name;
