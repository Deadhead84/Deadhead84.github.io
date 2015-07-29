var app = angular.module('beerApp');

app.controller('landingController', function($scope, $window, $firebaseArray, $firebaseObject, $firebaseAuth, $timeout, $location) {

var contactInfo = new Firebase("https://autoserviceapp.firebaseio.com/contactInfo");

$scope.submitForm = function(){
	var leads = {
		FirstName: $scope.firstName,
		LastName: $scope.lastName,
		Email: $scope.email,
		Questions: $scope.questions
	};
	if ($scope.firstName !== "") {
	contactInfo.push({ContactInfo:leads});
	$scope.firstName = "";
	$scope.lastName = "";
	$scope.email = "";
	$scope.questions = "";
} else {
	alert("Oops, looks like your missing something.")
};

};




});


//https://autoserviceapp.firebaseio.com/