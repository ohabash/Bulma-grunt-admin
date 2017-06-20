var app = angular.module('list');


// ListenContrller
app.controller('ListenController', function ($scope, $rootScope, $location) {
	$scope.PAGE = function (viewLocation) { 
    	return viewLocation === $location.path();
	};
});


// toggleMenu

app.controller('menuCtrl', function ($scope) {
	$scope.isActive = false;
  $scope.toggleMenu = function() {
    $scope.isActive = !$scope.isActive;
  }  
});