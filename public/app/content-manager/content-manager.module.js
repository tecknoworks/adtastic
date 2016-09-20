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

  $scope.myTags = [];

  $http.get('/content.json').then(function (response) {
    $scope.media = response.data.content;
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



  $scope.delete = function(pid) {

    $http.delete('/media.json/?id=' + pid, {}).then(function (response) 

    { 

      for (var count = 0; count < $scope.media.length; count++) 

      {

        if ($scope.media[count].id == pid) $scope.media.splice(count,1);

      }

    }, function (error) { console.log("Not requested") })

  }

  $scope.add = function() {

    $http.post('/content.json', { content: { name: $scope.inputName, url: $scope.inputUrl } } ).then(function (response) {
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
      if ($scope.media[count].id == pid) $scope.inputName = $scope.content[count].name, $scope.inputUrl = $scope.content[count].url, $scope.variable = pid;
    }
    $scope.edit = function(){
     $http.put('/content.json/?id=' + $scope.variable, {content: {name: $scope.inputName, url: $scope.inputUrl } } ).then(function (response) {
       for (var count = 0; count < $scope.content.length; count++) 
       {
         if ($scope.content[count].id == $scope.variable) $scope.content[count].name = $scope.inputName,$scope.content[count].url = $scope.inputUrl;
       }
     }, function (error) { console.log("Not requested") })
   }
 }

});