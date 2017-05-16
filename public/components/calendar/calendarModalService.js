var app = angular.module("TodoApp");
app.controller("calendarModalCtrl", ["$scope", "$uibModalInstance", "$log", function ($scope, $uibModalInstance, $uibModal, $log) {

    $scope.calendar = {};

    $scope.submitForm = function () {
        if ($scope.calendar.calendarForm.$valid) {
            console.log("calender is in scope");
            $uibModalInstance.close("closed");
        } else {
            console.log("calendar is not in scope");
        }
    }

    $scope.cancel = function () {
        $uibModalInstance.dismiss("closed");
    }


}]);

//,"$uibModal"

app.directive("calendarForm", [function () {
    return {
        restrict: "E",
        templateUrl: "components/calendar/calendarModalService.html"
    }
}])
