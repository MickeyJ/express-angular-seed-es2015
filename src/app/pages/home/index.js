import 'angular'

import HomeCtrl from './home.controller.js'
import HomeComp from './home.component.js'
import HomeConfig from './home.config.js'

export default (
  angular.module('app.home', [])
    .controller( 'HomeCtrl', HomeCtrl )
    .component( 'homeComponent', HomeComp )
    .config( HomeConfig )
)