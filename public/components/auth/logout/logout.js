// components/auth/logout/logout.js

var app = angular.module("TodoApp.Auth");

app.controller("LogoutController", ["UserService", function (UserService) {  
    UserService.logout();
}]);