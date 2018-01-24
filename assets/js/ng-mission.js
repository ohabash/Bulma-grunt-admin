app.controller('mission', function ($scope, $location, Auth, $timeout, $route, $rootScope, $location) {
	// console.log('mission')
	$timeout( function(){
		if(!$rootScope.u){
			$rootScope.notice("universal-access",'Welcom to my Portfolio',"login to get full access.");
		}
	},1000);
});