'use strict';

/**
 * @ngdoc function
 * @name wesalWebApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the wesalWebApp
 */
angular.module('wesalWebApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
