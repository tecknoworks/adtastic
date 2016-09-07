var app = angular.module('mainApp', ['ngRoute', 'ngMaterial']);

 app.config(function($routeProvider) {
 	$routeProvider
 		.when('/welcome', {
		templateUrl: '/app/welcome/welcome.html'
	})
 		.when('/index', {
 		templateUrl: '/app/log-in/prima.html'
 		});
 });

app.config(function($mdThemingProvider) {
       $mdThemingProvider.theme('docs-dark')
         .primaryPalette('deep-purple')
         .accentPalette('blue-grey')
         .warnPalette('orange');
      });

app.controller('SignInController', function ($scope, $http, $location) {
 	$scope.option = {
    title: 'Sign In'
  }
  	$scope.test1 = function(){
  		$location.path('/index')
  	}
 	$scope.test = function() {
 		var uname = $scope.inputEmail;
 		var password = $scope.inputPassword;
 		// if($scope.inputEmail == 'admin' && $scope.inputPassword == 'admin') {
 		// 	$location.path('/welcome');
 		// }
 		// $http.get('/users.json').then(function (response) {
   //    // $scope.users = response.data.users;
   //  }, function (error) {
   //    console.log(error);
   //  });
   $http.post('/users/signin', { inputEmail: $scope.inputEmail, inputPassword: $scope.inputPassword }).then(
     function (response) 
      { $location.path('/welcome'); }, 
         function (error) { 
           alert("Incorrect login") })
  }
});