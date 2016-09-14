
angular.module('mainApp', ['ngRoute', 'ngMaterial'])
.controller('MainController', function ($scope, $rootScope, $http, $location) {

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
    $scope.options.menuVisible = false;
    $location.path('/')
  }
});
