'use strict';
const angular = require('angular');

export class answerComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'AWorldQ';
    this.radioModel = 'Left';
  }
}

export default angular.module('wkMeanApp.answer', [])
  .component('answer', {
    template: require('./answer.html'),
    controller: answerComponent,
  })
  .name;

