
import 'angular'

import AuthCtrl from './auth.controller.js'
import AuthComp from './auth.component.js'
import AuthConfig from './auth.config.js'

export default (
  angular.module('app.auth', [])
    .controller( 'AuthCtrl', AuthCtrl )
    .component( 'authComponent', AuthComp )
    .config( AuthConfig )
)