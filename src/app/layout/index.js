import 'angular'

import HeaderComp from './header.component.js'

export default (
  angular.module('app.layout', [])
    .component( 'headerComponent', HeaderComp )
)