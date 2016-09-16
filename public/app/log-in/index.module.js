angular.module('mainApp')
.controller('SignInController', function ($scope, $http, $location, logOptions) {

	$scope.test = function() {

		var uname = $scope.inputEmail;
		var password = $scope.inputPassword;
		$http.post('/users/signin', { inputEmail: $scope.inputEmail, inputPassword: $scope.inputPassword }).then(
			function (response) {
				logOptions.setLogState(true);
				$http.get('/users.json').then(function (response) {
					$scope.users =response.data.users;
					
					for (var count = 0; count < $scope.users.length; count++) 
      				{
        				if ($scope.users[count].email == $scope.inputEmail)
        				{
        					if($scope.users[count].user_type == true)
        					{
        						$scope.button.visible = true;
        						
        					}
        				}
      				}
      			


				})
				$location.path('/content');
			},
			function (error) { 
				alert("Incorrect login") })
	}
});