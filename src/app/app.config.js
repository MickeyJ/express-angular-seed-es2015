
function AppConfig($stateProvider, $urlRouterProvider, $locationProvider){
  $stateProvider
    .state('app', {
      url: '/',
      template: '<h1>Hi</h1>'
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
