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

      
      $scope.delete = function(uid) {
        console.log(uid);
        $http.delete('/users/' + uid + '.json', {}).then(function (response) 
        { console.log("Request done") }, function (error) { console.log("Not requested") })
      }

 		$scope.add = function() {
   		$http.post('/users.json', { user: { email: $scope.inputEmail, password: $scope.inputPassword } } ).then(function (response) {
        console.log(response.data);
        $scope.users.push(response.data);
      }, function (error) { console.log("Not requested") });
    }

});
