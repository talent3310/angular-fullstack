'use strict';
const angular = require('angular');

export class changePassComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
  }
}

export default angular.module('angularFullstackApp.changePass', [])
  .component('changePass', {
    template: require('./changePass.html'),
    controller: changePassComponent
  })
  .name;
