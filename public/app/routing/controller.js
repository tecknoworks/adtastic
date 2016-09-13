var app = angular.module('mainApp', ['ngRoute', 'ngMaterial']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/content', {
    templateUrl: '/app/content-manager/content-manager.html',
    controller:"ContentManagerController"
  })
  .when('/', {
   templateUrl: '/app/log-in/prima.html',
   controller:"SignInController"
  })
  .when('/users',{
    templateUrl: '/app/user-management/user-management.html',
    controller:"UserManagementController"
  })
  .when('/cast',{
    templateUrl: '/app/cast-menu/cast-menu.html',
    controller:"CastMenuController"
  })
  .when('/device',{
    templateUrl: '/app/device-management/device-management.html',
    controller:'DeviceManagerController'
  })
  .otherwise({
    redirectTo: '/'
  });
});

app.config(function($mdThemingProvider) {
 $mdThemingProvider.theme('docs-dark')
 .primaryPalette('deep-purple')
 .accentPalette('blue-grey')
 .warnPalette('orange');
});

app.controller('SignInController', function ($scope, $http, $location) {

  $scope.test = function() {
   var uname = $scope.inputEmail;
   var password = $scope.inputPassword;
   $http.post('/users/signin', { inputEmail: $scope.inputEmail, inputPassword: $scope.inputPassword }).then(
     function (response) {

      $location.path('/content');
    },
    function (error) { 
     alert("Incorrect login") })
 }
});
app.controller('ContentManagerController', function ($scope, $http, $location) {
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
    $scope.databaseTags = [];
    
    $http.post('/photos.json', { photo: { name: $scope.inputName, url: $scope.inputUrl } } ).then(function (response) {
      $scope.photos.push(response.data);
    }, function (error) { console.log("Not requested") });
    
    $http.get('/tags.json').then(function (response) {
      $scope.databaseTags = response.data.tags;
      console.log($scope.databaseTags);
    }, function (error) {
      console.log(error);
    });

    function tagInDatabase(tagName)
    {
      for (count = 0; count < $scope.databaseTags.length; i++)
      {
        if (tagName == $scope.databaseTags[count].name)
        {
          return true
        }
        return false
      }
    }

    function removeUnwantedTags()
    {
      count = 0;
      while ( count < $scope.myTags.length )
      {
        if (tagInDatabase($scope.myTags[count]) == true)
        {
          $scope.myTags.splice(count,1);
          console.log($scope.myTags);
        }
        count++;
      }
    }

    // removeUnwantedTags();

  }

  $scope.addvideo = function() {

    $http.post('/videos.json', { video: { name: $scope.inputName, url: $scope.inputUrl } } ).then(function (response) {

      $scope.videos.push(response.data);

    }, function (error) { console.log("Not requested") });

  }

});

app.controller('UserManagementController', function ($scope, $http, $location) {

  $scope.options.menuVisible = true;

  $http.get('/users.json').then(function (response) {
    $scope.users = response.data.users;
  }, function (error) {
    console.log(error);
  })



  $scope.delete = function(uid) {

    $http.delete('/users.json/?id=' + uid, {}).then(function (response) 
    { 
      for (var count = 0; count < $scope.users.length; count++) 
      {
        if ($scope.users[count].id == uid) $scope.users.splice(count,1);
      }
    }, function (error) { console.log("Not requested") })
  }

  $scope.add = function() {

    $http.post('/users.json', { user: { email: $scope.inputEmail, password: $scope.inputPassword } } ).then(function (response) {

      $scope.users.push(response.data);

    }, function (error) { console.log("Not requested") });

  }

});

app.controller('CastMenuController', function ($scope, $location, $http) {

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

app.controller('DeviceManagerController', function ($scope, $location, $http) {

  $scope.options.menuVisible = true;

  $scope.devices = [];

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
  }
  $scope.editDevice = function(){
    $http.put('/devices.json/?id=' + $scope.variable, {device: {name: $scope.editName}}).then(function (response) {
        for (var count = 0; count < $scope.devices.length; count++) 

      {

        if ($scope.devices[count].id == $scope.variable) $scope.devices[count].name = $scope.editName;

      }
      
    }, function (error) { console.log("Not requested") })


  }




});

app.controller('MainController', function ($scope, $rootScope, $http, $location) {
  $rootScope.options = {
    menuVisible: false
  }

  $rootScope.button = {
    visible: false
  }

  $scope.content = function(){
    $location.path('/content');
  }
  $scope.users = function(){
    $location.path('/users');
  }
  $scope.cast = function(){
    $location.path('/cast');
  }
  $scope.device = function(){
    $location.path('/device');
  }
  $scope.signOut = function(){
    $location.path('/')
  }
});
