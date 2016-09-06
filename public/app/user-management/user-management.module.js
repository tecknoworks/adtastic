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
    });

 		$scope.add = function() {
   		$http.post('/users.json', { user: { email: $scope.inputEmail, password: $scope.inputPassword } } ).then(function (response) 
    	{ console.log("Request done") }, function (error) { console.log("Not requested") })

    $scope.delete = function(uid, event) {
    	console.log("It's here!")
   		$http.delete('/users.json', { id: $scope.user.id } ).then(function (response) 
    	{ console.log("Request done") }, function (error) { console.log("Not requested") })
   	}

// $scope.doSecondaryAction = function(event) {
//     $mdDialog.show(
//       $mdDialog.alert()
//         .title('Secondary Action')
//         .textContent('Secondary actions can be used for one click actions')
//         .ariaLabel('Secondary click demo')
//         .ok('Neat!')
//         .targetEvent(event)
//     );
//   };

  }

});
