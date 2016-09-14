angular.module('mainApp')
.controller('CastMenuController', function ($scope, $location, $http) {

  $scope.options.menuVisible = true;

  $scope.sortOption = ['Name Ascending','Name Descending'];
  $scope.sortOptions = 'Name Ascending';
  $scope.media = [];

  $scope.photos = [];
  $scope.videos= [];

  $scope.moveUp = function(xname)
  {
    var i = 0;
    idk = 0;
    for (i=0; i< $scope.media.length; i++)
    {
      if ($scope.media[i].name == xname)
      {
        idk = i;
      }
    }
    if ($scope.media[0].name != xname)
    {
      aux = $scope.media[idk - 1];
      $scope.media[idk - 1] = $scope.media[idk];
      $scope.media[idk] = aux;
    }
  }

  $scope.moveDown = function(xname)
  {
    var i = 0;
    idk = 0;
    for (i=0; i< $scope.media.length; i++)
    {
      if ($scope.media[i].name == xname)
      {
        idk = i;
      }
    }
    if ($scope.media[$scope.media.length - 1].name != xname)
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

  $http.get('/users.json').then(function (response) {
    $scope.usersList = response.data.users;
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