var app = angular.module("beerApp", ['ngRoute']);

app.config(function($routeProvider){

    $routeProvider
    
    .when('/', {
        templateUrl: 'coverpage/coverindex.html',
        controller: 'beerController'
    })
    
    .when('/landingpage', {
        templateUrl: 'landingpage/landingPage.html',
        controller: 'landingController'
    })
    
    .when('/contactpage', {
        templateUrl: 'contactpage/contactindex.html',
        controller: 'contactcontroller'
        
    })

});