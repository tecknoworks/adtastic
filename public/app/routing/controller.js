var app = angular.module('mainApp', ['ngRoute', 'ngMaterial']);

app.config(function($routeProvider) {
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
  .otherwise({
    redirectTo: '/'
  });
});

app.config(function($mdThemingProvider) {
 $mdThemingProvider.theme('docs-dark')
 .primaryPalette('deep-purple')
 .accentPalette('blue-grey')
 .warnPalette('orange');
});

app.controller('SignInController', function ($scope, $http, $location) {
  $scope.options = {
    title: 'Sign In',
    menuVisible: true
  }

  $scope.test = function() {
   var uname = $scope.inputEmail;
   var password = $scope.inputPassword;
   $http.post('/users/signin', { inputEmail: $scope.inputEmail, inputPassword: $scope.inputPassword }).then(
     function (response) 
     { $location.path('/content'); }, 
     function (error) { 
       alert("Incorrect login") })
 }
});
app.controller('ContentManagerController', function ($scope, $location) {
  $scope.content = function(){
    $location.path('/content');
  }
  $scope.users = function(){
    $location.path('/users');
  }
  $scope.cast = function(){
    $location.path('/cast');
  }

});

app.controller('UserManagementController', function ($scope, $http, $location) {

  $http.get('/users.json').then(function (response) {
    $scope.users = response.data.users;
  }, function (error) {
    console.log(error);
  })

  $scope.content = function(){
    $location.path('/content');
  }
  $scope.users = function(){
    $location.path('/users');
  }
  $scope.cast = function(){
    $location.path('/cast');
  }


  $scope.delete = function(uid) {

    $http.delete('/users/' + uid + '.json', {}).then(function (response) 

    { 

      for (var count = 0; count < $scope.users.length; count++) 

      {

        if ($scope.users[count].id == uid) $scope.users.splice(count,1);

      }

    }, function (error) { console.log("Not requested") })

  }

  $scope.add = function() {

    $http.post('/users.json', { user: { email: $scope.inputEmail, password: $scope.inputPassword } } ).then(function (response) {

      $scope.users.push(response.data);

    }, function (error) { console.log("Not requested") });

  }

});

app.controller('CastMenuController', function ($scope, $location) {
  $scope.content = function(){
    $location.path('/content');
  }
  $scope.users = function(){
    $location.path('/users');
  }
  // $scope.device = function(){
  //   $location.path('/device');
  // }
  $scope.cast = function(){
    $location.path('/cast');
  }


});
