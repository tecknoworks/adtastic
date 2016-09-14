angular.module('mainApp')
.controller('UserManagementController', function ($scope, $http, $location) {

  $scope.options.menuVisible = true;

  $http.get('/users.json').then(function (response) {
    $scope.users = response.data.users;
  }, function (error) {
    console.log(error);
  })



  $scope.delete = function(uid) {

    $http.delete('/users.json/?id=' + uid, {}).then(function (response) 
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