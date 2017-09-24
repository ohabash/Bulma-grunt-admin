// console.log('ng-home');

app.controller('home', function ($scope, $rootScope, $location) {
	// console.log("ng-home.js");
	if($rootScope.isMobile){
		$location.path('/home-m');
	}else{
		$location.path('/');
	}
});