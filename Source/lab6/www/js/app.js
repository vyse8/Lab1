// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var lab6 = angular.module('starter', ['ionic', 'ngCordova'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

function loginUser() {
    window.plugins.toast.showLongBottom('Loading Dashboard', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)})
    var input1 = document.getElementById('username').value;
    localStorage.setItem('username', input1);
    var input2 = document.getElementById('password').value;
    localStorage.setItem('password', input2);

    window.location = "Dashboard.html";
}


function onLoad() {
    var text = "";
    text = localStorage.getItem("username");
    document.getElementById('user').innerHTML = text;
}


lab6.controller("ExampleController", function($scope, $cordovaToast) {
 
    $scope.showToast = function(message, duration, location) {
        $cordovaToast.show(message, duration, location);
        }
});