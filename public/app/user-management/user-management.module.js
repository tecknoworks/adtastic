var app = angular.module('user-management', ['ngMaterial']);

app.config(function($mdThemingProvider) {
 $mdThemingProvider.theme('docs-darkt')
 .primaryPalette('blue')
 .accentPalette('blue-grey')
 .warnPalette('orange');
});

app.controller('user-management-controller', function ($scope, $http, $location) {

  $http.get('/users.json').then(function (response) {
    $scope.users = response.data.users;
  }, function (error) {
    console.log(error);
  })

  $scope.loadData = function () 
  {
    $http.get('/users.json').then(function (response) {
      $scope.users = response.data.users;
      var vm = this;  
      vm.reload = function()        
      {           
        vm.users = $scope.users;           
      };


      }
    }, function (error) { console.log("Not requested") })
  }

  $scope.add = function() {
    $http.post('/users.json', { user: { email: $scope.inputEmail, password: $scope.inputPassword } } ).then(function (response) {
      $scope.users.push(response.data);
    }, function (error) { console.log("Not requested") });
  }

});
