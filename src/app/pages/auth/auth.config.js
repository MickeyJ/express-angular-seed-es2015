
function AuthConfig($stateProvider){
  $stateProvider
    .state('app.login', {
      url: '/login',
      template: '<auth-component></auth-component>',
      title: 'Login'
    })
    .state('app.register', {
      url: '/register',
      template: '<auth-component></auth-component>',
      title: 'Signup'
    });
}

export default [
  '$stateProvider',
  AuthConfig
]
