var app = angular.module('sod');


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