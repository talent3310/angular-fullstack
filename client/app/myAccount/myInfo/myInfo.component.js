'use strict';
const angular = require('angular');

export class myInfoComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
  }
}

export default angular.module('angularFullstackApp.myInfo', [])
  .component('myInfo', {
    template: require('./myInfo.html'),
    controller: myInfoComponent
  })
  .name;
