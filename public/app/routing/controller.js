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
app.controller('ContentManagerController', function ($scope, $http, $location) {

  $http.get('/photos.json').then(function (response) {
    $scope.photos = response.data.photos;
  }, function (error) {
    console.log(error);
  })

  $http.get('/videos.json').then(function (response) {
    $scope.videos = response.data.videos;
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


  $scope.deletep = function(pid) {

    $http.delete('/photos/' + pid + '.json', {}).then(function (response) 

    { 

      for (var count = 0; count < $scope.photos.length; count++) 

      {

        if ($scope.photos[count].id == pid) $scope.photos.splice(count,1);

      }

    }, function (error) { console.log("Not requested") })

  }

  $scope.deletev = function(vid) {

    $http.delete('/videos/' + vid + '.json', {}).then(function (response) 

    { 

      for (var count = 0; count < $scope.videos.length; count++) 

      {

        if ($scope.videos[count].id == vid) $scope.videos.splice(count,1);

      }

    }, function (error) { console.log("Not requested") })

  }

  $scope.addphoto = function() {

    $http.post('/photos.json', { photo: { name: $scope.inputName, url: $scope.inputUrl } } ).then(function (response) {

      $scope.photos.push(response.data);

    }, function (error) { console.log("Not requested") });

  }

  $scope.addvideo = function() {

    $http.post('/videos.json', { video: { name: $scope.inputName, url: $scope.inputUrl } } ).then(function (response) {

      $scope.videos.push(response.data);

    }, function (error) { console.log("Not requested") });

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

app.controller('CastMenuController', function ($scope, $location, $http) {
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

  $http.get('/users.json').then(function (response) {
    $scope.users = response.data.users;
  }, function (error) {
    console.log(error);
  })

  $http.get('/photos.json').then(function (response) {
    $scope.photos = response.data.photos;
  }, function (error) {
    console.log(error);
  })

  $http.get('/videos.json').then(function (response) {
    $scope.videos = response.data.videos;
  }, function (error) {
    console.log(error);
  })

});
