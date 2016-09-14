angular.module('mainApp')
.config(function($mdThemingProvider) {
 $mdThemingProvider.theme('docs-dark')
 .primaryPalette('deep-purple')
 .accentPalette('blue-grey')
 .warnPalette('orange');
});