angular.module('mainApp')
.controller('CastMenuController', function ($rootScope, $scope, $location, $http, logOptions, $cookies) {

  $scope.options.menuVisible = true;
  $scope.curent.url = $location.url();
  if (logOptions.getLogState() == false)
  {
    $rootScope.options = {
      menuVisible: false
    }
    $location.path('/');
  }
  $scope.sortOption = ['Name Ascending','Name Descending'];
  $scope.sortOptions = 'Name Ascending';
  $scope.media = [];

  $scope.selectedDevices = [];
  $scope.urls = [];

  $scope.cast = function() {

    // findIndexOfDevice = function(dev_name)
    // {
    //   for (count = 0; count < $scope.devicesList.length; count++)
    //   {
    //     if (dev_name == $scope.devicesList[count].name)
    //     {
    //       return $scope.devicesList[count].id;
    //     }
    //   }
    //   return -1;
    // }

    findIndexesOfDevices = function()
    {
      idx = [];
      for (j = 0; j < $scope.selectedDevices.length; j++)
      {
        for (count = 0; count < $scope.devicesList.length; count++)
        {
          if ($scope.selectedDevices[j] == $scope.devicesList[count].name)
          {
            idx.push($scope.devicesList[count].id)
          }
        }
      }
      return idx;
    }

    $scope.ids = [];
    for (i = 0; i < $scope.media.length; i++)
    {
      $scope.ids.push($scope.media[i].id);
    }
    console.log(findIndexesOfDevices());
    $http.post('/playlists/multiple', { device_ids: findIndexesOfDevices() } ).then(function (response) {
      $http.post('/playlist_items/multiple' , { nr: findIndexesOfDevices().length, contents: $scope.ids } ).then(function (response) {
        console.log("double bloody working")
      }, function (error) { console.log("Not bloody requested") });
    }, function (error) { console.log("Not requested") });

  }

  $scope.selectDevice = function(name)
  {
    if ($scope.selectedDevices.indexOf(name) != -1)
    {
      $scope.selectedDevices.splice($scope.selectedDevices.indexOf(name),1);
    }
    else
    {
      $scope.selectedDevices.push(name);
    }
  }

  $scope.moveUp = function(index)
  {
    idk = index;
    if (idk > 0)
    {
      aux = $scope.media[idk - 1];
      $scope.media[idk - 1] = $scope.media[idk];
      $scope.media[idk] = aux;
    }
  }

  $scope.moveDown = function(index)
  {
    idk = index;
    if (idk < $scope.media.length - 1)
    {
      aux = $scope.media[idk];
      $scope.media[idk] = $scope.media[idk + 1];
      $scope.media[idk + 1] = aux;
    }
  }

  $scope.sortMedia = function() 
  {
    if ($scope.sortOptions == "Name Ascending")
    {
      $scope.media.sort(function(a, b){
        var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
      if (nameA < nameB) //sort string ascending
        return -1 
      if (nameA > nameB)
        return 1
      return 0
    })
    }
    else
    {
      $scope.media.sort(function(a, b){
        var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
      if (nameA < nameB) //sort string ascending
        return 1 
      if (nameA > nameB)
        return -1
      return 0
    })
    }


  }

  $http.get('/devices.json').then(function (response) {
    $scope.devicesList = response.data.devices;
  }, function (error) {
    console.log(error);
  })

  function getMedia()
  {
    $http.get('/contents.json').then(function (response) {
      $scope.media = response.data.contents;
    }, function (error) {
      console.log(error);
    })
  }

  getMedia();


});