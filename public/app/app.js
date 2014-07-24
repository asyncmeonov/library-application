var libraryApp = angular.module('libraryApp', ['ngResource','ngRoute']);

libraryApp.config(function($routeProvider, $locationProvider) {
	// $locationProvider.html5Mode(true);


	$routeProvider
		.when('/',{
			templateUrl: '/partials/main/home',
			controller: 'mainController'
		})
		.when('/login', {
			templateUrl: '/partials/account/login',
			controller: 'mainController'
		})

});