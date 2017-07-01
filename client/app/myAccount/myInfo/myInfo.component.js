'use strict';
const angular = require('angular');

export class myInfoComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
    this.state = 1;
  }
}

export default angular.module('angularFullstackApp.myInfo', [])
  .component('myInfo', {
    template: require('./myInfo.html'),
    controller: myInfoComponent
  })
  .name;
