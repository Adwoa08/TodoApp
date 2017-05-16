var app = angular.module("TodoApp.Auth", []);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/signup", {
            templateUrl: "components/auth/signup/signup.html",
            controller: "SignupController"
        })
        .when("/login", {
            templateUrl: "components/auth/login/login.html",
            controller: "LoginController"
        })
        .when("/logout", {
            controller: "LogoutController",
            template: ""
        })
        .when("/reset/:resetToken", {
            templateUrl: "components/auth/reset/reset.html",
            controller: "PasswordResetController"
        })
        .when("/forgot", {
            templateUrl: "auth/forgot/forgot.html",
            controller: "ForgotPasswordController"
        })
}]);

app.config(["$httpProvider", function ($httpProvider) {
    $httpProvider.interceptors.push("AuthInterceptor");
}]);
