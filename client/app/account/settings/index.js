'use strict';

import angular from 'angular';
import SettingsController from './settings.controller';

export default angular.module('wkMeanApp.settings', [])
  .controller('SettingsController', SettingsController)
  .name;
