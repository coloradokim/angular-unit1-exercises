var firstApp = angular.module("firstApp", []); //tells angular to create a module named "firstApp"
//angular.module('firstApp,'[]) returns a new module which we use on the next line when we call .controller() on app
app.controller("MyFirstController", function($scope) {
  $scope.name = "Severus Snape";
})





// EXERCISE: Add another property called secondsInACentury.
// It should be equal to the number of seconds in a century
// (don't worry about leap years and leap seconds).
// Make sure you actually calculate the answer with code, instead of just looking it up.
// Finally, display the answer in your template inside of an h3 tag.
// Use a built-in filter to format the huge number with commas in the right place.
//
// EXERCISE: Create a property called "rightNow" in the controller that is equal to the current time(use a built-in JS function to find the time) Display it in the view and format it nicely(using a built-in filter) so that it looks something like this: Sunday, October 20, 2015
