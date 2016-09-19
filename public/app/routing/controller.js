
angular.module('mainApp', ['ngRoute', 'ngMaterial'])
.controller('MainController', function ($scope, $rootScope, $http, $location, logOptions) {

  $rootScope.options = {
    menuVisible: false
  }

  $rootScope.button = {
    visible: false
  }

  $rootScope.curent = {
    url: "ceva"
  }

  $rootScope.playlist = {
    item: []
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
    $scope.options.menuVisible = false;
    logOptions.setLogState(false);
    $scope.button.visible = false;
    $location.path('/')
  }
})
.factory('logOptions', function(){

  var data = {
    isLoggedIn: false,
    isAdmin: false
  };

  return {
    getLogState: function () {
      return data.isLoggedIn;
    },
    setLogState: function (newLog) {
      data.isLoggedIn = newLog;
    },
    getAdminState: function () {
      return data.isAdmin;
    },
    setAdminState: function (newAdmin) {
      data.isAdmin = newAdmin;
    }
  };
});