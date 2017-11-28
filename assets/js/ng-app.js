'use strict';
var path = require('path');

import './../bower/angular/angular.min.js';
import './../bower/angularfire/dist/angularfire.min.js';
import './../bower/angular-route/angular-route.min.js';
import './../bower/angular-animate/angular-animate.min.js';
import './../bower/angular-xeditable/dist/js/xeditable.js';

function here(d) {
	if (!d){ return __dirname; }
	return path.resolve(__dirname, d);
}


window.app = angular.module('appName',["ngRoute", "firebase", 'xeditable']);

// routes
app.run(['editableOptions', function(editableOptions) {
  // editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
}]);
app.config(function ($routeProvider, $locationProvider){
	$routeProvider
		.when('/', {
			controller: 'home',
			templateUrl: 'partials/views/home.html',
			activeClass: 'home'
		})
		.when('/home-m', {
			controller: 'home-m',
			templateUrl: 'partials/views/home-m.html',
			activeClass: 'home-m'
		}).when('/about', {
			controller: 'about',
			templateUrl: 'partials/views/about.html',
			activeClass: 'about'
		})
		.when('/login', {
			controller: 'auth',
			templateUrl: 'partials/views/auth.html',
			activeClass: 'auth'
		})
		.when('/account', {
			controller: 'account',
			templateUrl: 'partials/views/account.html',
			activeClass: 'account'
		})
		.when('/faq', {
			controller: 'faq',
			templateUrl: 'partials/views/faq.html',
			activeClass: 'faq'
		})
		.otherwise({
			templateUrl:'partials/views/404.html'
		});	
		$locationProvider.html5Mode(true);
});


// reverse in ng-repeat
app.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});


// auth
app.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    return $firebaseAuth();
  }
]);


require('./ng-controller.js');