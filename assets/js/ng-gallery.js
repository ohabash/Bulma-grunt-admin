app.controller('gallery', function ($scope, Auth,  $timeout, $route, $rootScope, $location, editableOptions, $firebaseObject, $firebaseArray, $routeParams) {
	
	// routeParams
	$scope.indx = $routeParams.indx;
	$scope.project_id = $routeParams.project_id;
	$scope.indx = parseFloat($scope.indx)

	
	// get gallery
	$scope.get_gallery = function() {
		var ref = firebase.database().ref('projects').child($scope.project_id+'/pics');
		$scope.gallery_obj = $firebaseObject(ref);
		$rootScope.gallery = $firebaseArray(ref);
		$rootScope.gallery.$loaded().then( function(ths){
			$scope.total = ths.length-1;
		});
	};

	$scope.next = function() {
		$scope.indx = parseFloat($scope.indx)+1;
	}


	$scope.custom_pad = function() {
		$timeout( function(){
		var footer = $('.img-desc');
		// var scroll_area = $('#project-gallery');
		var scroll_area = $('#ghost');
		scroll_area.css('padding-bottom', footer.outerHeight());
		},500);
	}

	// rewind gallery
	$scope.rewind = function() {
		$timeout( function(){
			console.log('rewind')
			if($scope.indx>$scope.total){
				console.log('rewinding')
				$scope.indx=0;
			}
		},500);
	}


});