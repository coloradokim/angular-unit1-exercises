var app = angular.module("contacts", []);

app.controller('formController', function($scope) {
  $scope.contactList = [];
  $scope.update = function() {
    $scope.contactList.push({name: $scope.name, email: $scope.email, phone: $scope.phone });
  };
});
  
