var app = angular.module('welcome', ['ngMaterial']);

app.config(function($mdThemingProvider) {
       $mdThemingProvider.theme('default')
         .primaryPalette('deep-purple')
         .accentPalette('blue-grey')
         .warnPalette('orange');
      });
