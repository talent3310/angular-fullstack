'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('myAccount', {
      url: '/myAccount',
      template: '<my-account></my-account>'
    })
    .state('myAccount.bettingResult', {
      url: '/bettingResult',
      template: '<betting-result></bettin-rResult>'
    })
    .state('myAccount.myDpoint', {
      url: '/myDpoint',
      template: '<my-dpoint></my-dpoint>'
    })
    .state('myAccount.myMile', {
      url: '/myMile',
      template: '<my-mile></my-mile>'
    })
    .state('myAccount.myInfo', {
      url: '/myInfo',
      template: '<my-info></my-info>'
    })
    .state('myAccount.changePass', {
      url: '/changePass',
      template: '<change-pass></change-pass>'
    })
    .state('myAccount.leave', {
      url: '/leave',
      template: '<leave></leave>'
    });
}
