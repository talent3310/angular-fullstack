'use strict';
const angular = require('angular');

export class resultComponent {
  /*@ngInject*/
  constructor() {
    this.year = 2017;
    this.month = 6;
    this.state = 1;
    this.options = {
      years: [2017, 2016, 2015, 2014, 2013],
      months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    };

  }
}

export default angular.module('angularFullstackApp.result', [])
  .component('result', {
    template: require('./result.html'),
    controller: resultComponent
  })
  .name;
