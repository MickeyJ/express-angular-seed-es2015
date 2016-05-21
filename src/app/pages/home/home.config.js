
function HomeConfig($stateProvider){
  $stateProvider
    .state('app.home', {
      url: '/',
      template: '<home-component></home-component>'
    });
}

export default [
  '$stateProvider',
  HomeConfig
]
