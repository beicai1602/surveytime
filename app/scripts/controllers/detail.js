'use strict';

/**
 * @ngdoc function
 * @name surveytimeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the surveytimeApp
 */
angular.module('surveytimeApp')
  .controller('detail', function ($scope) {
    $scope.labels = ["3个小时", "5个小时", "10小时"];
  $scope.data = [300, 500, 100];
  });
