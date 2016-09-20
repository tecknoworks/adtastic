angular.module('mainApp')
.controller('CastReceiveController', function ($rootScope, $scope, $sce, $routeParams, $cookies, $interval) {
	
	$http.get('/playlist/play.json').then(function (response) {
		$scope.media = response.data;
		console.log($scope.media);
	}, function (error) {
		console.log(error);
	})

	// getListIndex = function() 
	// {
	// 	for (i = 0; i < $scope.playlist.item.length; i++)
	// 	{
	// 		if ($scope.playlist.item[i].device_name == $routeParams.device_name)
	// 		{
	// 			return (i);
	// 		}
	// 	}
	// }



	// $scope.idx = getListIndex();
	// for (j = 0; j<$scope.playlist.item[$scope.idx].content_url.length; j++)
	// {
	// 	$scope.playlist.item[$scope.idx].content_url[j] = $scope.playlist.item[$scope.idx].content_url[j].replace("watch?v=", "v/"); 
	// 	$scope.playlist.item[$scope.idx].content_url[j] = $sce.trustAsResourceUrl($scope.playlist.item[$scope.idx].content_url[j]);
	// }

	// var len = $scope.playlist.item[$scope.idx].content_url.length;

	// count = 0;
	// callTimeOut = function(len)
	// {
	// 	$scope.a = $scope.playlist.item[$scope.idx].content_url[count];
	// 	count++;
	// 	if (count == len)
	// 	{
	// 		count = 0;
	// 	}
	// }
	// var t = $scope.playlist.item[$scope.idx].interval*1000;
	// callTimeOut(len);
	// $interval(function() {callTimeOut(len)}, t);

});
