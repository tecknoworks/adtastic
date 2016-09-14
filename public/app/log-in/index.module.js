angular.module('mainApp')
.controller('SignInController', function ($scope, $http, $location) {

  $scope.test = function() {
   var uname = $scope.inputEmail;
   var password = $scope.inputPassword;
   $http.post('/users/signin', { inputEmail: $scope.inputEmail, inputPassword: $scope.inputPassword }).then(
     function (response) {

      $location.path('/content');
    },
    function (error) { 
     alert("Incorrect login") })
 }
});