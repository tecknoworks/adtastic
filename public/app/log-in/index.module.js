angular.module('mainApp')
.controller('SignInController', function ($scope, $http, $location, logOptions) {

	$scope.test = function() {

		var uname = $scope.inputEmail;
		var password = $scope.inputPassword;
		$http.post('/users/signin', { inputEmail: $scope.inputEmail, inputPassword: $scope.inputPassword }).then(
			function (response) {
				logOptions.setLogState(true);
				$location.path('/content');
			},
			function (error) { 
				alert("Incorrect login") })
	}
});