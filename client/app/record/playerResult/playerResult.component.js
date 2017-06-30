'use strict';
const angular = require('angular');

export class playerResultComponent {
  /*@ngInject*/
  constructor() {
    this.state = 1;
    this.message = 'World';
    this.rowCollection = [
        {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
        {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
        {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'}
    ];
    this.getters={
        firstName: function (value) {
            //this will sort by the length of the first name string
            return value.firstName.length;
        }
    }
  }
}

export default angular.module('angularFullstackApp.playerResult', [])
  .component('playerResult', {
    template: require('./playerResult.html'),
    controller: playerResultComponent
  })
  .name;
