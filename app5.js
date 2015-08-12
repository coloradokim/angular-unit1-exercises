var app = angular.module("appFive", []);
app.controller("appFive", function($scope) {
  $scope.names = ["Harry", "Ron", "Hermione", "Sirius", "Hedwig", "Tonks"];
  $scope.symbols = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
  $scope.numbers = [1,1,2,5,6,9,9,9];
  $scope.keyValues = {
    "id": 2,
    "project": "wewe2012",
    "date": "2013-02-26",
    "description": "ewew",
  }

})
