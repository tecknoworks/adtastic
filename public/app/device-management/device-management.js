angular.module('mainApp')
.controller('DeviceManagerController', function ($scope, $location, $http) {

  $scope.options.menuVisible = true;

  

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

    }, function (error) { console.log("Not requested") });

  }

  $scope.variable = null ;

  $scope.editd = function(did){

    for (var count = 0; count < $scope.devices.length; count++) 

    {

      if ($scope.devices[count].id == did) $scope.editName = $scope.devices[count].name,$scope.variable = did;

    }
    $scope.editDevice = function(){
      $http.put('/devices.json/?id=' + $scope.variable, {device: {name: $scope.editName}}).then(function (response) {
        for (var count = 0; count < $scope.devices.length; count++) 

        {

          if ($scope.devices[count].id == $scope.variable) $scope.devices[count].name = $scope.editName;

        }

      }, function (error) { console.log("Not requested") })


    }

  }
});