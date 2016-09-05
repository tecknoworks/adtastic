angular.module('demo', ['ngMaterial']).controller('DemoController', function ($scope) 
  {$scope.user = {
    title: 'testTitle'
  }.config(function($mdThemingProvider){
     $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('blue-grey')
      .warnPalette('orange');
  })});