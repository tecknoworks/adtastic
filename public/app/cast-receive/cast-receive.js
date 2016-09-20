angular.module('mainApp')
.controller('CastReceiveController', function ($rootScope, $scope, $sce, $routeParams, $cookies, $interval) {
	$scope.playlist = $cookies.getObject('objSocket');
	getListIndex = function() 
	{
		for (i = 0; i < $scope.playlist.item.length; i++)
		{
			if ($scope.playlist.item[i].device_name == $routeParams.device_name)
			{
				return (i);
			}
		}
	}



	$scope.idx = getListIndex();
	for (j = 0; j<$scope.playlist.item[$scope.idx].content_url.length; j++)
	{
		$scope.playlist.item[$scope.idx].content_url[j] = $scope.playlist.item[$scope.idx].content_url[j].replace("watch?v=", "v/"); 
		$scope.playlist.item[$scope.idx].content_url[j] = $sce.trustAsResourceUrl($scope.playlist.item[$scope.idx].content_url[j]);
	}

	var len = $scope.playlist.item[$scope.idx].content_url.length;

	count = 0;
	callTimeOut = function(len)
	{
		$scope.a = $scope.playlist.item[$scope.idx].content_url[count];
		count++;
		if (count == len)
		{
			count = 0;
		}
	}
	callTimeOut(len);
	$interval(function() {callTimeOut(len)}, 3000);

});
