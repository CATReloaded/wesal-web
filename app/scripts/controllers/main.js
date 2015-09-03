'use strict';

/**
 * @ngdoc function
 * @name wesalWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wesalWebApp
 */
angular.module('wesalWebApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
