import "../assets/css/main.css"
import "../assets/css/layout.css"
import "angular"
import "@uirouter/angularjs"

"use strict";
var app = angular.module('myApp',['ui.router']);
app.config(function ($stateProvider, $urlRouterProvider) {
    //一级默认
    $urlRouterProvider.otherwise('/home'); 
    $stateProvider
        .state('home',{
            name:'home',
            url:'/home',
            template:'<p>hello</p>'
        })
});