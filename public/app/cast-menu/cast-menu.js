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

  $scope.photos = [];
  $scope.videos= [];

  $scope.selectedDevices = [];
  $scope.urls = [];

  removeDuplicates = function(dict) {
    //removes duplicate entries in the playlist
    var count = 0;
    var idk = -1;
    for (j = 0; j < $scope.playlist.item.length; j++)
    {
      if ($scope.playlist.item[j].device_name == dict.device_name)
      {
        count++;
        if (count == 1)
        {
          idk = j
;        }
      }
    }
    if (count > 1)
    {
      $scope.playlist.item.splice(idk,1);
    }
  }

  $scope.cast = function() {
    $scope.urls = [];
    for (i = 0; i < $scope.media.length; i++)
    {
      $scope.urls.push($scope.media[i].url);
    }

    for (i = 0; i < $scope.selectedDevices.length; i++)
    {
      var dict = {device_name: $scope.selectedDevices[i], content_url: $scope.urls, interval: $scope.inputTime};
      $scope.playlist.item.push(dict);
      removeDuplicates(dict);
    }
    $cookies.putObject('objSocket', $scope.playlist);
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
    $http.get('/photos.json').then(function (response) {
      $scope.photos = response.data.photos;
      getVideos();
    }, function (error) {
      console.log(error);
    })
  }

  function getVideos()
  {
    $http.get('/videos.json').then(function (response) {
      $scope.videos = response.data.videos;
      $scope.media = $scope.photos.concat($scope.videos);
    }, function (error) {
      console.log(error);
    })
  }

  getMedia();


});