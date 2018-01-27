// console.log('ng-home');

app.controller('home', function ($scope, $rootScope, $location, $firebaseObject, $firebaseArray, $timeout) {
	console.log("ng-home.js11");
	if($rootScope.isMobile){
		$location.path('/home-m');
	}else{
		$location.path('/');
	}


	// tokuz stuff
	// get campaigns
	var ref = firebase.database().ref().child('campaigns');
	$scope.campaigns_obj = $firebaseObject(ref); // putting a console.log here won't work, see below
	$rootScope.campaigns = $firebaseArray(ref);

	$timeout( function(){
		console.log($rootScope.campaigns)
		// $rootScope.campaigns.$add( {
	 //    "adGroupId": 52099157947,
	 //    "ad": {
	 //      "id": 235267574575,
	 //      "finalUrls": [
	 //        "http://www.galroncorp.com/"
	 //      ],
	 //      "automated": false,
	 //      "type": "EXPANDED_TEXT_AD",
	 //      "xsi_type": "ExpandedTextAd",
	 //      "headlinePart1": "Boulder hill Garage Door Repair",
	 //      "headlinePart2": "Unbeatable Prices - Call Now",
	 //      "description": "$45 off Any Repair - Same Day Garage Door Repair - 100% Satisfaction Guarantee",
	 //      "path1": "Garage_Door",
	 //      "path2": "Repair"
	 //    },
	 //    "status": "ENABLED"
	 //  });

	},2000)


});