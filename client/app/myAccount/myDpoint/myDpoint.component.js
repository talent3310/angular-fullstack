'use strict';
const angular = require('angular');

export class myDpointComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
    this.radioModel = 'Left';
    this.rowCollection = [
        {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
        {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
        {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'}
    ];
  }
}

export default angular.module('angularFullstackApp.myDpoint', [])
  .component('myDpoint', {
    template: require('./myDpoint.html'),
    controller: myDpointComponent
  })
  .name;
