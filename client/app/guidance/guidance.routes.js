'use strict';
import GuidanceComponent from './guidance.component';
export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('guidance', {
      url: '/guidance',
      template: '<guidance></guidance>',
      controller:function($scope, $state){
            // $state.go('guidance.answer');
        }    	
    })
    .state('guidance.answer', {
      url: '/answer',
      template: '<answer></answer>',
    })
    .state('guidance.notify', {
   	  url: '/notify',
      template: '<notification></notification>'
    })
    .state('guidance.findid', {
   	  url: '/findid',
      template: '<find-id></find-id>'
    })
    .state('guidance.findPassword', {
   	  url: '/findpassword',
      template: '<find-pass></find-pass>'
    });
}
