

app.controller('auth', function ($scope, $location, $rootScope, Auth) {
	

	$rootScope.inside=true;
	$scope.get_active();

	
	//signIn (email)
    $scope.signIn = function() {
      // login with Facebook
      $scope.u = null;
      $scope.error = null;

      Auth.$signInWithEmailAndPassword($scope.email, $scope.password).then(function(firebaseUser) {
          $scope.u = firebaseUser;
          $scope.uid = firebaseUser.uid;
          $rootScope.notice("Welcome "+$scope.u.email, "Session Started. Enjoy.");
          $location.path('/');
          // console.log($scope.u)
        }).catch(function(error) {
          $scope.error = error;
          console.log(error);
        });
    };

    //signIn (email)
    $scope.signIn_g = function() {
      // login with Facebook
      console.log('google');
      $scope.u = null;
      $scope.error = null;

      Auth.$signInWithPopup("google").then(function(firebaseUser) {
          $scope.u = firebaseUser;
          $scope.uid = firebaseUser.uid;
          $rootScope.notice("Welcome "+firebaseUser.email, "Session Started. Enjoy.");
          $location.path('/');
          console.log($scope.u);
        }).catch(function(error) {
          $scope.error = error;
          console.log(error);
        });
    };


    // createUser
 //    $scope.createUser = function() {
	// 	var ref = new Firebase("https://beautydoor-3eb8b.firebaseio.com");
	// 	ref.authWithOAuthPopup("google", function(error, authData) {
	// 	  if (error) {
	// 	    console.log("Login Failed!", error);
	// 	  } else {
	// 	    console.log("Authenticated successfully with payload:", authData);
	// 	  }
	// 	});
	// };



});