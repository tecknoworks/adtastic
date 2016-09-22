angular.module('mainApp')
.controller('ContentManagerController', function ($rootScope, $scope, $http, $location, logOptions, $mdDialog) {

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

 $scope.showAdvanced = function(ev2, pid) {
  $rootScope.med = $scope.media;
  $rootScope.pid = pid;
  $mdDialog.show({
    controller: DialogController,
    templateUrl: 'dialog.tmpl.html',
    parent: angular.element(document.body),
    targetEvent: ev2,
    clickOutsideToClose:true
  })
  .then(function(answer) {
  }, function() {
  })};

  function DialogController($scope, $rootScope, $mdDialog) {
    $scope.variable = -1;
    for (var count = 0; count < $rootScope.med.length; count++) 
    {
      if ($rootScope.med[count].id == $rootScope.pid) $scope.name = $rootScope.med[count].name, $scope.url = $rootScope.med[count].url, $scope.variable = $rootScope.pid;
    }

    edit2 = function(){
     $http.put('/contents.json/?id=' + $scope.variable, {content: {name: $scope.name, url: $scope.url } } ).then(function (response) {
      for (var count2 = 0; count2 < $rootScope.med.length; count2++) 
       {
         if ($rootScope.med[count2].id == $scope.variable) $rootScope.med[count2].name = $scope.name,$rootScope.med[count2].url = $scope.url;
       }
     }, function (error) { console.log("Not requested") })}



     $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
      $mdDialog.hide();
      edit2();
    };
  }

});