var app = angular.module('mainApp', ['ngRoute', 'ngMaterial']);


app.controller('MainController', function ($scope, $http, $location) {
  $scope.options = {
    title: 'Sign In',
    menuVisible: true
  }
 });
