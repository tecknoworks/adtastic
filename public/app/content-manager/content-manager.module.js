angular.module('mainApp')
.controller('ContentManagerController', function ($scope, $http, $location) {
  $scope.options.menuVisible = true;

  $scope.sortOption = ['Name Ascending','Name Descending'];
  $scope.sortOptions = 'Name Ascending';

  $scope.myTags = [];

  $http.get('/photos.json').then(function (response) {
    $scope.photos = response.data.photos;
  }, function (error) {
    console.log(error);
  })

  $http.get('/videos.json').then(function (response) {
    $scope.videos = response.data.videos;
  }, function (error) {
    console.log(error);
  })

  $scope.sortMedia = function() 
  {
    if ($scope.sortOptions == "Name Ascending")
    {
      $scope.photos.sort(function(a, b){
        var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
      if (nameA < nameB) //sort string ascending
        return -1 
      if (nameA > nameB)
        return 1
      return 0
    })
      $scope.videos.sort(function(a, b){
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
      $scope.photos.sort(function(a, b){
        var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
      if (nameA < nameB) //sort string ascending
        return 1 
      if (nameA > nameB)
        return -1
      return 0
    })
      $scope.videos.sort(function(a, b){
        var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
      if (nameA < nameB) //sort string ascending
        return 1 
      if (nameA > nameB)
        return -1
      return 0
    })
    }
  }



  $scope.deletep = function(pid) {

    $http.delete('/photos.json/?id=' + pid, {}).then(function (response) 

    { 

      for (var count = 0; count < $scope.photos.length; count++) 

      {

        if ($scope.photos[count].id == pid) $scope.photos.splice(count,1);

      }

    }, function (error) { console.log("Not requested") })

  }

  $scope.deletev = function(vid) {

    $http.delete('/videos.json/?id=' + vid, {}).then(function (response) 

    { 

      for (var count = 0; count < $scope.videos.length; count++) 

      {

        if ($scope.videos[count].id == vid) $scope.videos.splice(count,1);

      }

    }, function (error) { console.log("Not requested") })

  }

  $scope.addphoto = function() {


    $http.post('/photos.json', { photo: { name: $scope.inputName, url: $scope.inputUrl } } ).then(function (response) {
      $scope.photos.push(response.data);
    }, function (error) { console.log("Not requested") });


    $http.post('/tags/multiple', { tags: $scope.myTags } ).then(function (response) {

      $http.post('/photo_tags/multiple', { nr_of_tags: $scope.myTags.length } ).then(function (response) {
        console.log("Hooray");
      }, function (error) { console.log("Not requested") });

    }, function (error) { console.log("Not requested") });

  }

  $scope.addvideo = function() {

    $http.post('/videos.json', { video: { name: $scope.inputName, url: $scope.inputUrl } } ).then(function (response) {

      $scope.videos.push(response.data);

    }, function (error) { console.log("Not requested") });

    $http.post('/tags/multiple', { tags: $scope.myTags } ).then(function (response) {
      console.log("hooray1");
      $http.post('/video_tags/multiple', { nr_of_tags: $scope.myTags.length } ).then(function (response) {
        console.log("Hooray");
      }, function (error) { console.log("Not requested") });

    }, function (error) { console.log("Not requested") });

  }

  $scope.editp = function(pid){

    for (var count = 0; count < $scope.photos.length; count++) 

    {

      if ($scope.photos[count].id == pid) $scope.inputName = $scope.photos[count].name,$scope.inputUrl = $scope.photos[count].url,$scope.variable = pid;

    }
    $scope.edit = function(){
       $http.put('/photos.json/?id=' + $scope.variable, {photo: {name: $scope.inputName, url: $scope.inputUrl } } ).then(function (response) {
         for (var count = 0; count < $scope.photos.length; count++) 

         {

           if ($scope.photos[count].id == $scope.variable) $scope.photos[count].name = $scope.inputName,$scope.photos[count].url = $scope.inputUrl;

         }

       }, function (error) { console.log("Not requested") })


     }

  }

  $scope.editv = function(pid){

    for (var count = 0; count < $scope.videos.length; count++) 

    {

      if ($scope.videos[count].id == pid) $scope.inputName = $scope.videos[count].name,$scope.inputUrl = $scope.videos[count].url,$scope.variable = pid;

    }
    $scope.edit = function(){
       $http.put('/videos.json/?id=' + $scope.variable, {video: {name: $scope.inputName, url: $scope.inputUrl } } ).then(function (response) {
         for (var count = 0; count < $scope.videos.length; count++) 

         {

           if ($scope.videos[count].id == $scope.variable) $scope.videos[count].name = $scope.inputName,$scope.videos[count].url = $scope.inputUrl;

         }

       }, function (error) { console.log("Not requested") })


     }

  }

});