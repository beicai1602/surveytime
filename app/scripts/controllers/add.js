'use strict';

/**
 * @ngdoc function
 * @name surveytimeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the surveytimeApp
 */
angular.module('surveytimeApp')
  .controller('add', function ($scope) {
   $scope.an=[{"title":""}]
   $scope.add=function(){
       $scope.an.push({"title":""})
   }
  });
