

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
          $location.path('/');
          console.log($scope.u);
        }).catch(function(error) {
          $scope.error = error;
          console.log(error);
        });
    };





});