angular.module('mainApp')
.controller('DeviceManagerController', function ($rootScope, $scope, $location, $http, logOptions) {

  $scope.options.menuVisible = true;
  if (logOptions.getLogState() == false)
  {
    $rootScope.options = {
      menuVisible: false
    }
    $location.path('/');
  }

  $http.get('/devices.json').then(function (response) {
    $scope.devices = response.data.devices;
  }, function (error) {
    console.log(error);
  })



  $scope.deleted = function(did) {

    $http.delete('/devices.json/?id=' + did, {}).then(function (response) 

    { 

      for (var count = 0; count < $scope.devices.length; count++) 

      {

        if ($scope.devices[count].id == did) $scope.devices.splice(count,1);

      }

    }, function (error) { console.log("Not requested") })

  }

  $scope.addDevice = function() {

    $http.post('/devices.json', { device: { name: $scope.inputName } } ).then(function (response) {

      $scope.devices.push(response.data);
      $scope.inputName = "";

    }, function (error) { console.log("Not requested") });

  }

  $scope.variable = null ;

  $scope.editd = function(did){

    for (var count = 0; count < $scope.devices.length; count++) 

    {

      if ($scope.devices[count].id == did) $scope.inputName = $scope.devices[count].name,$scope.variable = did;

    }
    $scope.editDevice = function(){
      $http.put('/devices.json/?id=' + $scope.variable, {device: {name: $scope.inputName}}).then(function (response) {
        for (var count = 0; count < $scope.devices.length; count++) 

        {

          if ($scope.devices[count].id == $scope.variable) $scope.devices[count].name = $scope.inputName;

        }
        $scope.inputName = "";

      }, function (error) { console.log("Not requested") })
    }
  }
});