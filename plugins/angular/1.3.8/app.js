'use strict';

/**
 * @ngdoc overview
 * @name GStone
 * @description
 * # GStone
 *
 * Main module of the application.
 */


var app = angular.module('GStone', [
        'ngMessages',
        'ngRoute',
        'ngSanitize'
    ]);
app.directive("loading",['$rootScope',function($rootScope){
    return {
        link: function(scope,element,attrs){
                element.addClass("hide");
                $rootScope.$on("$routeChangeStart",function(){
                    element.removeClass("hide");
                });
                $rootScope.$on("$routeChangeSuccess",function(){
                    element.addClass("hide");
                });
            }
        };
}]);


app.controller('cashRegister',function(){
    //$scope.
})







