app.controller('home', function ($scope, $rootScope, $location) {
	console.log("ng-home.js");
	if(isMobile()){
		$location.path('/home-m');
	}else{
		$location.path('/');
	}
});