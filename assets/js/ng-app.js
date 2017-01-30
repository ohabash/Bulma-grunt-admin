angular.module('sod',["ngRoute", "ngAnimate"])
	.config(function ($routeProvider, $locationProvider){
		$routeProvider
			.when('/', {
				controller: 'ListenController',
				templateUrl: 'partials/views/about.html',
				activeClass: 'about',
				activeJs: 'about'
			})
			.when('/contact', {
				controller: 'ListenController',
				templateUrl: 'partials/views/contact.html',
				activeClass: 'contact',
				activeJs: 'contact'
			})
			.otherwise({
				templateUrl:'partials/views/404.html'
			});	
			$locationProvider.html5Mode(true);
	});
	
