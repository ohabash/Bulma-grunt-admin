app.controller('skills', function ($scope, $rootScope, $location, $timeout, $firebaseObject, $firebaseArray) {




	$scope.searchField = function() {
		$timeout( function(){
			console.log('start')
			// search field
			$('#searchSkills').focus( function(){
				console.log('focus');
				$('.search-skills').addClass('active');
				$('.clear-search').click( function(){
				$('#searchSkills').val('');
					$rootScope.updateView();
				});
			});
			$('#searchSkills').focusout( function(){
				console.log('focusout');
				if($(this).val().length<1) {
					$('.search-skills').removeClass('active');
				}
			});
		},2000);
	};



	// get skills
	var ref = firebase.database().ref().child('skills');
	$scope.skills_obj = $firebaseObject(ref);
	$rootScope.skills = $firebaseArray(ref);

	// add skills
	$scope.new_skill = function() {
		$rootScope.skills.$add({
			img: 'http://soilsandstructures.com/wp-content/uploads/2017/04/no-image-icon.png'
		});
	};



































});





