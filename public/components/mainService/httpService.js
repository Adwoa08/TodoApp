var app = angular.module("TodoApp");

app.service("httpService", ["$http", function ($http) {

    this.getTodos = function () {
        return $http.get("/api/todo").then(function (response) {
            for (var i = 0; i < response.data.length; i++) {
                response.data[i].date = new Date(response.data[i].date);
            }
            return response.data;

        }, function (response) {
            alert("Error " + response.status + ": " + response.statusText);
        });
    };




    this.saveTodo = function (todo) {
        return $http.post("/api/todo", todo).then(function (response) {
            return response.data;
        }, function (response) {
            alert("Error " + response.status + ": " + response.statusText);
        });
    };

    this.deleteTodo = function (id) {
        return $http.delete("/api/todo/" + id);
    }







    this.getCurrentUser = function () {
        return $http.get('/api/user/profile').then(function (response) {
            return response.data;
        });
    }

}]);
