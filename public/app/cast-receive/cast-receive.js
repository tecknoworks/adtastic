angular.module('mainApp')
.controller('CastReceiveController', function ($rootScope, $scope, $sce, $routeParams) {

	$scope.$on("myEvent", function (event, args) {
		$scope.playlist = args.play;
		console.log($scope.playlist);
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

		var idx = getListIndex();
		for (j = 0; j<$scope.playlist.item[idx].content_url.length; j++)
		{
			console.log($scope.playlist.item[idx].content_url[j]);
			$scope.playlist.item[idx].content_url[j] = $scope.playlist.item[idx].content_url[j].replace("watch?v=", "v/"); 
			$scope.playlist.item[idx].content_url[j] = $sce.trustAsResourceUrl($scope.playlist.item[idx].content_url[j]);
		}

		$scope.a = $scope.playlist.item[idx].content_url[0];
	});


});