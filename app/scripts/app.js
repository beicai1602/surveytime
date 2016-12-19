'use strict';

/**
 * @ngdoc overview
 * @name surveytimeApp
 * @description
 * # surveytimeApp
 *
 * Main module of the application.
 */
angular
  .module('surveytimeApp', ['ui.router','chart.js']).config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
      $urlRouterProvider.when("","/login").when("/default","/default/lists").otherwise("/404");
      $stateProvider.state("login",{
        url:"/login",
        templateUrl:"views/login.html"
      }).state("default",{
        url:"/default",
        templateUrl:"views/default.html"
      }).state("detail",{
        url:"/detail",
        templateUrl:"views/detail.html"
      }).state("default.add",{
        url:"/add",
        templateUrl:"views/add.html",
        controller:"add"
      }).state("default.lists",{
        url:"/lists",
        templateUrl:"views/lists.html"
      }).state("default.detail",{
        url:"/detail",
        templateUrl:"views/detail.html",
        controller:"detail"
      }).state("share",{
        url:"/share",
        templateUrl:"views/share.html"
      }).state("404",{
        url:"/404",
        templateUrl:"404.html"
      });
  }]);
