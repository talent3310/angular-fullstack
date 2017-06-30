'use strict';

import angular from 'angular';
// import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';

import 'angular-socket-io';

import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import 'angular-validation-match';
import 'angular-smart-table';

import {
  routeConfig
} from './app.config';

import _Auth from '../components/auth/auth.module';
import account from './account';
import admin from './admin';
import navbar from '../components/navbar/navbar.component';
import footer from '../components/footer/footer.component';
import main from './main/main.component';
import IntroduceComponent from './introduce/introduce.component';
import GuidanceComponent from './guidance/guidance.component';
import subNav from '../components/subNav/subNav.component';
import answer from './guidance/answer/answer.component';
import notification from './guidance/notification/notification.component';
import findId from './guidance/findId/findId.component';
import findPass from './guidance/findPass/findPass.component';
import introduce from './introduce/introduce.component';
import RecordComponent from './record/record.component';
import result from './record/result/result.component';
import playerResult from './record/playerResult/playerResult.component';
import contestDetail from './record/contestDetail/contestDetail.component';
import ChargeComponent from './charge/charge.component';
import dpoint from './charge/dpoint/dpoint.component';
import mileChange from './charge/mileChange/mileChange.component';

import constants from './app.constants';
import util from '../components/util/util.module';
import socket from '../components/socket/socket.service';

import './app.scss';

angular.module('wkMeanApp', [ngCookies, ngResource, ngSanitize, 'btford.socket-io', uiRouter,
  uiBootstrap, _Auth, 'smart-table', account, admin, 'validation.match', navbar, footer, main, IntroduceComponent, GuidanceComponent, constants,
  socket, util, subNav, answer, notification, findId, findPass, introduce, RecordComponent, result, playerResult, ChargeComponent, dpoint, mileChange
])
  .config(routeConfig)
  .run(function($rootScope, $location, Auth) {
    'ngInject';
    // Redirect to login if route requires auth and you're not logged in

    $rootScope.$on('$stateChangeStart', function(event, next) {
      Auth.isLoggedIn(function(loggedIn) {
        if(next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });
  });

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['wkMeanApp'], {
      strictDi: true
    });
  });
