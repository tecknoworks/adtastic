angular.module('mainApp')
.controller('UserManagementController', function ($rootScope, $scope, $http, $location, logOptions) {

  $scope.options.menuVisible = true;

  if ($scope.button.visible == false) 
  {
    $scope.options.menuVisible = false;
    $location.path('/content');

  }

  if (logOptions.getLogState() == false )
  {
    $rootScope.options = {
      menuVisible: false
    }
    $location.path('/');
  }

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

  $scope.edit = function(uid){

    for (var count = 0; count < $scope.users.length; count++) 

    {

      if ($scope.users[count].id == uid) $scope.editEmail = $scope.users[count].email,$scope.variable = uid;

    }
    $scope.editUser = function(){
     $http.put('/users.json/?id=' + $scope.variable, {user: {email: $scope.editEmail } } ).then(function (response) {
       for (var count = 0; count < $scope.users.length; count++) 

       {

         if ($scope.users[count].id == $scope.variable) $scope.users[count].email = $scope.editEmail;

       }

     }, function (error) { console.log("Not requested") })


   }

 }

});