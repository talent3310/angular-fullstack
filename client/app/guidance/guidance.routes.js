'use strict';
import GuidanceComponent from './guidance.component';
export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('guidance', {
      url: '/guidance',
      template: '<guidance></guidance>',
      controller:function($scope, $state){
            $state.go('guidance.answer');
        }    	
    })
    .state('guidance.answer', {
      url: '/answer',
      template: '<answer></answer>',
    })
    .state('guidance.notify', {
   	  url: '/notify',
      template: '<guidance></guidance>'
    })
    .state('guidance.findID', {
   	  url: '/findID',
      template: '<guidance></guidance>'
    })
    .state('guidance.findPassword', {
   	  url: '/findPassword',
      template: '<guidance></guidance>'
    });
}
