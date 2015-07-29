var app = angular.module("beerApp", ['firebase', 'ngRoute']);

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
    
    .when('/contact', {
        templateUrl: 'contactpage/contactindex.html',
        controller: 'contactcontroller'
        
    })

    .when('/service', {
        templateUrl: 'Services/serviceindex.html',
        controller: 'servicesController'
    })

});