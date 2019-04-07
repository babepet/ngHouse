import "../assets/css/main.css"
import "../assets/css/layout.css"
import "angular"
import "@uirouter/angularjs"

"use strict";
var app = angular.module('myApp',['ui.router']);
app.config(function ($stateProvider, $urlRouterProvider) {
    //一级默认
    $urlRouterProvider.otherwise('/'); 
    $stateProvider
        .state('home',{
            name:'home',
            url:'/home',
            templateUrl:'/pages/home/home.html',
            controller: HomeCtrl
        })
        .state('home.editor',{
            name:'editor',
            url:'/editor',
            templateUrl:'/pages/editor/editor.html',
        })
        .state('home.pushed',{
            name:'pushed',
            url:'/pushed',
            templateUrl:'/pages/pushed/pushed.html',
        })
});
app.controller('HomeCtrl', HomeCtrl);
    function HomeCtrl($state){
        $state.go('home.pushed');
}