var app = angular.module('signIn', ['ngMaterial']);

app.config(function($mdThemingProvider) {
       $mdThemingProvider.theme('default')
         .primaryPalette('deep-purple')
         .accentPalette('blue-grey')
         .warnPalette('orange');
      });

app.controller('SignInController', function ($scope, $http, $location) {
 	$scope.option = {
    title: 'Sign In'
  }

 	$scope.test = function() {
 		// $http.get('/users.json').then(function (response) {
   //    // $scope.users = response.data.users;
   //  }, function (error) {
   //    console.log(error);
   //  });
   $http.post('/users/signin', { inputEmail: $scope.inputEmail, inputPassword: $scope.inputPassword }).then(function (response) 
    { console.log("Request done") }, function (error) { console.log("Not requested") })
  }
});