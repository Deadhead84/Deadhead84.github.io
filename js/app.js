var app = angular.module('autoApp', ['firebase', 'ngRoute']);


app.config(function($routeProvider){

    $routeProvider
    
    .when('/', {
        templateUrl: '/Homepage/homepage.html',
        controller: 'homeController'
    })

    .when('/contact', {
    	templateUrl: '/contactPage/contactPage.html',
    	controller: 'contactController'
    })

    .when('/admin', {
    	templateUrl: '/adminPage/adminPage.html',
    	controller: 'contactController'
    })

    .when('/services', {
    	templateUrl: '/servicesPage/servicesPage.html',
    	controller: 'contactController'
    })

    .when('/login', {
    	templateUrl: '/loginPage/loginPage.html',
    	controller: 'loginController'
    })
});
