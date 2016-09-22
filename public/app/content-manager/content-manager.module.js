angular.module('mainApp')
.controller('ContentManagerController', function ($rootScope, $scope, $http, $location, logOptions) {

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
  $scope.myTags = [];

  $http.get('/contents.json').then(function (response) {
    $scope.media = response.data.contents;
  }, function (error) {
    console.log(error);
  })

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

  $scope.isvideo = function(url)
  {
   
    if (url.indexOf("youtube") != -1)
    {
     
      return true
    }
    else
      return false
  }

  $scope.delete = function(pid) {

    $http.delete('/contents.json/?id=' + pid, {}).then(function (response) 

    { 

      for (var count = 0; count < $scope.media.length; count++) 

      {

        if ($scope.media[count].id == pid) $scope.media.splice(count,1);

      }

    }, function (error) { console.log("Not requested") })

  }

  $scope.add = function() {
    $http.post('/contents.json', { content: { name: $scope.inputName, url: $scope.inputUrl, content_type: "photo" } } ).then(function (response) {
      $scope.media.push(response.data);
      $http.post('/tags/multiple', { tags: $scope.myTags } ).then(function (response) {

        $http.post('/content_tags/multiple', { nr_of_tags: $scope.myTags.length } ).then(function (response) {
          console.log("Hooray");
        }, function (error) { console.log("Not requested") });

      }, function (error) { console.log("Not requested") });
    }, function (error) { console.log("Not requested") });

  }

  $scope.edit = function(pid){
    for (var count = 0; count < $scope.media.length; count++) 
    {
      if ($scope.media[count].id == pid) $scope.inputName = $scope.media[count].name, $scope.inputUrl = $scope.media[count].url, $scope.variable = pid;
    }

    edit2 = function(){
     $http.put('/contents.json/?id=' + $scope.variable, {content: {name: $scope.inputName, url: $scope.inputUrl } } ).then(function (response) {
       for (var count = 0; count < $scope.media.length; count++) 
       {
         if ($scope.media[count].id == $scope.variable) $scope.media[count].name = $scope.inputName,$scope.media[count].url = $scope.inputUrl;
       }
     }, function (error) { console.log("Not requested") })
   }
   edit2();
 }

});