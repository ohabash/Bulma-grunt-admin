

// ListenContrller
app.controller('chat', function ($scope, Auth, $timeout, $rootScope, $firebaseObject, $firebaseArray) {


	$('.main-right.contain-it').removeClass('contain-it').addClass('contain-it_chat');
	$('#talk1').addClass('contain-it pr');


	// got to bottom
    $rootScope.bottom = function() {
        $("#phone").animate({ scrollTop: $('#phone').prop("scrollHeight")}, 0);
    }

    // bottom on dom change
    $scope.$watch(function () {
       return document.body.innerHTML;
    }, function(val) {
       $rootScope.bottom();
    });

    // textarea ENTER
    $("textarea").keypress(function (e) {
        if(e.which == 13) {
        	$('.send-btn').click();
            e.preventDefault();
        }
    });










    







});





app.controller('convos_nav', function ($scope, $routeParams, $route, $rootScope, $location, $timeout, $firebaseObject, $firebaseArray) {
	
});

















