'use strict';

var app = angular.module('blog', ['ui.router', 'ngAnimate', 'ngCookies']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {


	$urlRouterProvider.otherwise('home');

	$stateProvider

		.state('home',  {
		  url: '/home',
		  templateUrl: 'views/home.html',
	      // controller: 'HomeController',
		  // controllerAs: 'homeVM'
		})
		// .state('signup', {
		//   url: '/signup',
		//   templateUrl: 'views/signup.html',
		//   controller: 'LoginController',
	    //    controllerAs: 'loginVM'
		// })
}]);