var app = angular.module('autoApp');

app.controller('contactController', function($scope, $timeout, $window, $firebaseArray, $firebaseObject, $firebaseAuth, $timeout, $location) {

// fire base database
var myData = new Firebase("https://autoserviceapp.firebaseio.com/contactInfo");

// Get data as an array of objects from firebase
$scope.contacts = $firebaseArray(myData);  


		$scope.submitForm = function(){

		if ($scope.fullName !== "") {
		$scope.contacts.$add({Name:$scope.fullName,
							Email:$scope.email,
							Comments:$scope.comments});
		$scope.fullName = "";
		$scope.email = "";	
		$scope.comments = "";
	} else {
		alert("Oops, looks like your missing something.")
	};

	};
	
});