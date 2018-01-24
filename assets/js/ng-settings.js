
app.controller('settings', function ($scope, $rootScope, $location) {
	console.log("ng-chat.js");
	
	$scope.alertmeb = function() {
		if(!$rootScope.admin){
			$rootScope.slack($scope.u.displayName+" changed the bg ");
		}
	}
});