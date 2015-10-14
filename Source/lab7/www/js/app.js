var App = angular.module('starter', ['ionic'])



App.run(function ($ionicPlatform) {
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
});

App.controller('AppCtrl', function ($scope, $http) {
    $scope.register = function (username, password) {
        $http({
            method: 'POST',
            url: 'https://api.mongolab.com/api/1/databases/testbeerdb/collections/users?apiKey=Sz-l6ovMdo7WLyI0yNSA8rZRMbN4vd6C',
            data: JSON.stringify({
                name: username,
                password: password
            }),
            contentType: "application/json"
        }).success(function () {})
        alert(username + ' user added.')
    }
    $scope.login = function (username, password) {
        $http.get('https://api.mongolab.com/api/1/databases/testbeerdb/collections/users?q={"name":"username","password":"password"}&apiKey=Sz-l6ovMdo7WLyI0yNSA8rZRMbN4vd6C')
            .then(function successCallback(response) {
                alert('Login Successful! Welcome ' + username + '.');
                var input1 = document.getElementById('username').value;
                localStorage.setItem('username', input1);
                var input2 = document.getElementById('password').value;
                localStorage.setItem('password', input2);
                window.location = "Dashboard.html";
            }, function errorCallback(response) {
                $scope.loginErr = "Login Error."
            });
    }
    $scope.updateMetrics = function (beerName, percentage) {
        $http({
            method: 'POST',
            url: 'https://api.mongolab.com/api/1/databases/testbeerdb/collections/salesMetrics?apiKey=Sz-l6ovMdo7WLyI0yNSA8rZRMbN4vd6C',
            data: JSON.stringify({
                beerName: beerName,
                percentage: percentage
            }),
            contentType: "application/json"
        }).success(function () {})
        alert(beerName + ' sales information has been added.')
    }
});

function loginUser1() {
    window.plugins.toast.showLongBottom('Loading Dashboard', function (a) {
        console.log('toast success: ' + a)
    }, function (b) {
        alert('toast error: ' + b)
    })
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