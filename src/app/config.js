
function AppConfig($stateProvider, $urlRouterProvider, $locationProvider){
  $stateProvider
    .state('app', {
      abstract: true,
      template: '@@import _layout.html',
      controllerAs: '$ctrl',
      controller: 'AppCtrl'
    });

  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);
}

export default [
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  AppConfig
]
