app.controller('nav', function ($scope, $timeout, $route, $rootScope, $location) {
	

	// teams list
	$scope.teams = [
		{
		    icon: "magic",
		    name: "skills",
		    path: "skills",
		    badge: ""
		},
		{
		    icon: "desktop",
		    name: "projects",
		    path: "",
		    badge: ""
		},
		{
		    icon: "comments-o",
		    name: "chat",
		    path: "chat",
		    badge: $rootScope.unRead
		}
	];

    // needed to set active0
    $scope.ACTIVE = function () {
      $timeout(function() {
        // console.log('ACTIVE()');
        // active class
        if($route.current.$$route){
        	// console.log('exists');
	        var z = $route.current.$$route.originalPath.replace("/","x");
	        $("[data-path]").removeClass('active0');
	        var lnk = $("[data-path='"+z+"']");
	        lnk.addClass('active0');
        }else{
        	console.error('404');
        }
        
        // sub-nav
        // $('nav.sub').addClass('hide');
        // var cur = lnk.find('span').text();
        // console.log(cur)
        // $('nav#'+cur).removeClass('hide');

      }, 10);
    };
    
    $scope.ACTIVE(); // on load

    $scope.$on('$routeChangeStart', function(next, current) { 
       // console.log('change');
       $scope.ACTIVE();
    });

});

