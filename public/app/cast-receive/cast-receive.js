angular.module('mainApp')
.controller('CastReceiveController', function ($rootScope, $scope, $sce, $http, $routeParams, $cookies, $timeout, $interval) {
	
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

			for (j = 0; j < $scope.contentList.length; j++)
			{
				if ($scope.contentList[j].url.indexOf('youtube') != -1)
				{
					$scope.contentList[j].url = $scope.contentList[j].url + '?autoplay=1';
				}
				$scope.contentList[j].url = $scope.contentList[j].url.replace("watch?v=", "v/"); 
			}

			var len = $scope.contentList.length;

			playMedia = function()
			{

				callTimeOut = function(len)
				{
					tr = bkp;
					a = $scope.contentList[count].url;
					if(a.indexOf("youtube") == -1)
					{
						$scope.image.show = true;
					}
					else
					{	
						$scope.image.show = false;
						tr = $scope.contentList[count].len * 1000 + 2000;
					}
					$scope.a = $sce.trustAsResourceUrl(a);
					count++;
					if (count >= len)
					{
						count = 0;
					}
					$interval.cancel(p);
					p = $interval (function () { callTimeOut(len) }, tr);
				}

				for( k = 0; k < $scope.playlists.length; k++)
				{
					if($scope.playlists[k].device_id == $scope.device_id)
					{
						$scope.t = $scope.playlists[k].timer;
					}
				}
				var tr = $scope.t * 1000;
				var bkp = tr;
				$scope.image.show = true;
				var a = $scope.contentList[0].url;
				$scope.a = $sce.trustAsResourceUrl(a);
				count++;
				var p = $interval( function () { callTimeOut(len) }, tr);
			} 

			count = 0;
			$scope.t = 0;
			$http.get('/playlists.json').then(function (response) {
				$scope.playlists = response.data.playlists;
				playMedia();
			},function (error) {
				console.log(error);
			})



			
		}, function (error) {
			console.log(error);
		})



	}, function (error) {
		console.log(error);
	})

});
