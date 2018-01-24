


app.controller('projects', function ($scope, $routeParams, $route, $rootScope, $location, $timeout, $firebaseObject, $firebaseArray) {
	
	// routeParams
	$scope.p = $routeParams.p;
	$scope.indx = $routeParams.indx;
	$scope.project_id = $routeParams.project_id;

	// get project for single view
	$scope.get_project = function(id) {
		$rootScope.projects.$loaded().then(function(data) {
			$scope.project = data.$getRecord(id); // bravo
		});
	};

	$scope.slack_visited = function(loc) {
		var who = ($scope.u)?$scope.u.displayName:"someone";
		$rootScope.slack('OH: '+who+' visited '+loc)
	}

	$scope.get_dropzone = function(id) {
		if($rootScope.admin){
			$timeout(function() {
				// console.log('get_dropzone()');
				var myDropzone = new Dropzone('#upload', {
				    url: "/file/post",
					accept: function(file, done) {
						var storageRef = firebase.storage().ref('projects/'+file.name);
						var task = storageRef.put(file);
						task.on('state_changed', 
							function progress(snapshot) {
							},
							function error(err){
								$rootScope.notice(err.e,"red-bg white");
								console.error(err.e)
							},
							function complete(){
								$scope.new_pic_name = task.snapshot.downloadURL;
								$scope.new_list_itm($scope.project,'pic',$scope.new_pic_name);
							}
						);
					}
				});
			}, 1000);
		}
	};



	
	$scope.slug = function(val) {return convertToSlug(val);}


	//active state for projects
	$scope.acv_p = function(current) {
		// console.log('current')
		$timeout(function() {
			// console.log(current)
			$("nav#projects li.active").removeClass('active');
			$('.'+current).addClass('active')
		}, 5);
	};

	//active state for main category
	$('[data-path="x"]').addClass('active0');

	// get projects
	var ref = firebase.database().ref().child('projects');
	$scope.projects_obj = $firebaseObject(ref);
	$rootScope.projects = $firebaseArray(ref);



    // new_tag
    $scope.new_list_itm = function(current,singular,value) {
    	// console.log(singular)
    	// var value = $scope['new_'+singular+'_name'];
    	// var value = $scope.new_skill_name;
    	// console.log(value)
    	var plural = singular+'s';
    	var slug = convertToSlug(value);
    	// var kk = [singular]_name
    	if(typeof current[plural] == 'undefined'){current[plural]={}; }
    	if(typeof current[plural][slug] == 'undefined'){
    		current[plural][slug]={
    			value: value
    		};
    		$scope['new_'+singular+'_name'] = ""
    		$rootScope.projects.$save(current)
    		return false;
    	}
    	var exists = "The "+singular+", <strong>"+value+"</strong> already exists."
    	console.error(exists);
    	$rootScope.notice(exists);     	
    };

});


app.controller('project_nav', function ($scope, $routeParams, $route, $rootScope, $location, $timeout, $firebaseObject, $firebaseArray) {
	

	// projects data
	$scope.new_project = function() {
		// console.log('clicked')
		$rootScope.projects.$add({
		    name: ""
		    // slug: "untitled"
		});
	};

	$scope.alertproject = function(pname) {
		if(!$rootScope.admin && $scope.u){
			$rootScope.slack($scope.u.displayName+" clicked on "+pname);
		}else{
			$rootScope.slack("Someone clicked on "+pname);
		}
	}

	// show nav items or not
	$scope.show = function(active) {
		return ($rootScope.admin) ? true : (active) ? true : false;
	};


});















