angular.module('mainApp')
.controller('CastReceiveController', function ($rootScope, $scope, $sce, $http, $routeParams, $cookies, $interval) {
	
	$scope.devs = [];
	$scope.device_id = -1;

	$http.get('/devices.json').then(function (response) {
		$scope.devs = response.data.devices;
		$scope.contentList = [];

		findIDofDevice = function()
		{
			for (i = 0; i < $scope.devs.length; i++)
			{
				if ($routeParams.device_name == $scope.devs[i].name)
				{
					$scope.device_id = $scope.devs[i].id;
					return $scope.devs[i].id
				}
			}
			return -1
		}

		findIDofDevice();

		$http.get('/playlists/play.json/?device_id=' + $scope.device_id).then(function (response) {
			$scope.contentList = response.data.contents;
			console.log($scope.contentList);

			for (j = 0; j < $scope.contentList.length; j++)
			{
				$scope.contentList[j].url = $scope.contentList[j].url.replace("watch?v=", "v/"); 
				$scope.contentList[j].url = $sce.trustAsResourceUrl($scope.contentList[j].url);
			}

			var len = $scope.contentList.length;

			count = 0;
			$scope.t = 0;
			$http.get('/playlists.json').then(function (response) {
				$scope.playlists = response.data.playlists;
				for( k = 0; k < $scope.playlists.length; k++)
				{
					if($scope.playlists[k].device_id == $scope.device_id)
					{
						$scope.t = $scope.playlists[k].timer;
						console.log($scope.t);
					}
				}
				var tr = $scope.t * 1000;
				console.log(tr);
				callTimeOut(len);
				$interval(function() {callTimeOut(len)},tr);
			},function (error) {
				console.log(error);
			})
			callTimeOut = function(len)
			{
				$scope.a = $scope.contentList[count].url;
				count++;
				if (count == len)
				{
					count = 0;
				}
			}
			

			
		}, function (error) {
			console.log(error);
		})



}, function (error) {
	console.log(error);
})

});
