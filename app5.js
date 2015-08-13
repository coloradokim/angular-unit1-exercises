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
  };
  $scope.cameras = [
        {
            title: "Nikon D3100 DSLR",
            image: "http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg",
            rating: 3.4,
            price: 369.99,
            onSale: true
        },
        {
            title: "Canon EOS 70D",
            image: "http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg",
            rating: 2.0,
            price: 1099.0,
            onSale: false
        },
        {
            title: "Nikon D810A",
            image:"http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg",
            rating: 4.2,
            price: 3796.95,
            onSale: true
        }
    ];
})

app.controller("appSix", function($scope) {
  $scope.number = 5;
  $scope.pickRandomNumber = function(){
    $scope.number = Math.floor(Math.random() * 10) + 1
  };
  $scope.reverse = function(){
    $scope.word = $scope.word.split('').reverse().join('');
  }
  $scope.reset = function() {
    $scope.player1Score = 0
    $scope.player2Score = 0
  }
})
