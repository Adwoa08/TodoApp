var app = angular.module("TodoApp", ["ngRoute", "TodoApp.Auth", "ngAnimate", "ngSanitize", "ngMaterial", "materialCalendar", "ui.bootstrap"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "components/home/home.html"
        })
        .when("/todos", {
            templateUrl: "components/todos/todos.html",
            controller: "TodoController"
        })
        .when("/profile", {
            templateUrl: "components/profile/profile.html",
            controller: "ProfileController"
        })
        .when("/forgot", {
            templateUrl: "components/auth/forgot/forgot.html",
            controller: "ForgotPasswordController"
        })
        .when("/calendar", {
        templateUrl: "components/calendar/calendar.html",
        controller: "calendarCtrl"
    })
});
