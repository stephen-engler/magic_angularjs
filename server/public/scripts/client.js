let myApp = angular.module('myApp', []);

myApp.controller("Welcome", function(){
    console.log('controller has started');
    let self = this;
    this.greeting = "Hello World";
});