var app = angular.module("TodoApp");
app.controller("calendarCtrl", ["$scope", "$q", "$filter", "$log","$uibModal", "TodoService", function ($scope, $q, $filter, $log, $uibModal, TodoService) {

    $scope.todos = [];

    var prom = TodoService.getTodos().then(function (data) {
        $scope.todos = data;
        return data;
    });



    // copied from the angular calendar site
    $scope.dayFormat = "d";

    // To select a single date, make sure the ngModel is not an array.
    $scope.selectedDate = null;

    // If you want multi-date select, initialize it as an array.
    //    $scope.selectedDate = [];

    $scope.firstDayOfWeek = 0; // First day of the week, 0 for Sunday, 1 for Monday, etc.
    $scope.setDirection = function (direction) {
        $scope.direction = direction;
        $scope.dayFormat = direction === "vertical" ? "EEEE, MMMM d" : "d";
    };

    $scope.dayClick = function (date) {
        $scope.msg = "You clicked " + $filter("date")(date, "MMM d, y h:mm:ss a Z");
        console.log($scope.msg);

    };

    $scope.prevMonth = function (data) {
        $scope.msg = "You clicked (prev) month " + data.month + ", " + data.year;
    };

    $scope.nextMonth = function (data) {
        $scope.msg = "You clicked (next) month " + data.month + ", " + data.year;
    };

    $scope.tooltips = true;
    $scope.setDayContent = function (date) {

        // You would inject any HTML you wanted for
        // that particular date here.
        return prom.then(function (data) {

                var output = "";
                for (var i = 0; i < data.length; i++) {
                    if (date.toString() === data[i].date.toString()) {
                        output += "<p>" + data[i].title + "</p>"
                    }
                }
                return output;
            }

        )
    };


    //calendar modal service functions
    $scope.dayClick = function () {
        $scope.calendarMessage = "button clicked";
        console.log($scope.calendarMessage);
        var modalInstance = $uibModal.open({

            templateUrl: "calendar.html",

            controller: "calendarModalCtrl",
            scope: $scope,
            resolve: {
                calendarForm: function () {
                    return $scope.calendarForm;
                }
            }
        })
        modalInstance.result.then(function (calendarForm) {
            $scope.selected = calendarForm;

        }, function () {
            $log.info("calendar dismissed");
        })
    }


}])
