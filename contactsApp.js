var app = angular.module("contacts", []);
app.controller('formController', ['$scope', function($scope) {
  $scope.master = {};

  $scope.update = function(contact) {
    $scope.master = angular.copy(contact);
  };

  $scope.reset = function() {
    $scope.contact = angular.copy($scope.master);
  };

  $scope.reset();
  }]);

  
