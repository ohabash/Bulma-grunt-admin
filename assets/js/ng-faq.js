
app.controller('faq', function ($scope, $timeout, $rootScope, $location) {
	
	$scope.get_active();

	$scope.faq_change = function(which) {
		$('.tab-pane').removeClass('active');
		$('.nav-tabs li').removeClass('active');
		$('.tab-'+which).addClass('active');
		$('.tab-pane#'+which).addClass('active');
	};


});