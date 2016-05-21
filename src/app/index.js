import 'angular'
import 'angular-ui-router'

import AppConfig from './app.config'

const DEPENDS = [
  'ui.router'
];

angular.module('app', DEPENDS)
  .config( AppConfig );