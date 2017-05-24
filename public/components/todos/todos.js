var app = angular.module("TodoApp");

app.controller("TodoController", ["$scope", "$http", "httpService", function ($scope, $http, httpService) {

    // define and immediately invoke this function when the 
    // page loads to get the list of todos from the server
    (function getTodos() {
        httpService.getTodos().then(function (todos) {
            $scope.todos = todos;
        });
    })();


    $scope.addTodo = function (todo) {
        httpService.saveTodo(todo).then(function (response) {
            $scope.todos.push(response);
        })

        $scope.mytodo = {};
    }


    $scope.deleteTodo = function (id, index) {
        httpService.deleteTodo(id).then(function (response) {
            $scope.todos.splice(index, 1);
        })
    }
    
    
    
    
    
   
}]);
