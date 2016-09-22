angular.module('mainApp')
.controller('UserManagementController', function ($rootScope, $scope, $http, $location, logOptions, $mdDialog) {

  $scope.options.menuVisible = true;

  if ($scope.button.visible == false) 
  {
    $scope.options.menuVisible = false;
    $location.path($scope.curent.url);

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

  $scope.showPrompt = function(ev, uid) {
    // Appending dialog to document.body to cover sidenav in docs app
    var name = '';
    for (var count = 0; count < $scope.users.length; count++) 
    {
      if ($scope.users[count].id == uid) name = $scope.users[count].email, $scope.variable = uid;
    }

    var confirm = $mdDialog.prompt()
    .title('Edit a user')
    .textContent('User name / Email')
    .placeholder('User name / Email')
    .ariaLabel('User name / Email')
    .initialValue(name)
    .targetEvent(ev)
    .ok('Save')
    .cancel('Cancel')
    .openFrom({
      top: -50,
      width: 30,
      height: 80
    })
    .closeTo({
      left: 1500
    });

    $mdDialog.show(confirm).then(function(result) {

      editUser = function(){
        $http.put('/users.json/?id=' + $scope.variable, {user: {email: result } } ).then(function (response) {
          for (var count = 0; count < $scope.users.length; count++) 
          {
            if ($scope.users[count].id == $scope.variable) $scope.users[count].email = result;
          }
        }, function (error) { console.log("Not requested") })
      }

      editUser()
    }, function() {
    });

  };

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

    $http.post('/users.json', { user: { email: $scope.inputEmail, password: $scope.inputPassword, user_type: false } } ).then(function (response) {

      $scope.users.push(response.data);

    }, function (error) { console.log("Not requested") });

  }

});