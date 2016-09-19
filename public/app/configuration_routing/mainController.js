angular.module('mainApp')
.config(function($routeProvider) {
  $routeProvider
  .when('/content', {
    templateUrl: '/app/content-manager/content-manager.html',
    controller:"ContentManagerController"
  })
  .when('/', {
   templateUrl: '/app/log-in/prima.html',
   controller:"SignInController"
 })
  .when('/users',{
    templateUrl: '/app/user-management/user-management.html',
    controller:"UserManagementController"
  })
  .when('/cast',{
    templateUrl: '/app/cast-menu/cast-menu.html',
    controller:"CastMenuController"
  })
  .when('/device',{
    templateUrl: '/app/device-management/device-management.html',
    controller:'DeviceManagerController'
  })
  .when('/receive/:device_name',{
    templateUrl: '/app/cast-receive/cast-receive.html',
    controller: 'CastReceiveController'
  })
  .otherwise({
    redirectTo: '/'
  });
});