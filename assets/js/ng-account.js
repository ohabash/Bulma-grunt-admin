
app.controller('account', function ($scope, $timeout, $rootScope, $location) {
	console.log("ng-account.js");
	
	$timeout( function(){
		$scope.get_active();
	},1000);
});