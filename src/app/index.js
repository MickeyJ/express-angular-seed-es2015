import 'angular'
import 'angular-ui-router'

import AppCtrl from './controller.js'
import AppConfig from './config.js'

import './layout'
import './pages/home'
import './pages/auth'

const DEPENDS = [
  'ui.router',
  'app.layout',
  'app.home',
  'app.auth'
];

angular.module( 'app', DEPENDS )
  .controller( 'AppCtrl', AppCtrl )
  .config( AppConfig );