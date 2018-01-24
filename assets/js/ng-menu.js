app.controller('theMenu', function ($scope, Auth,  $timeout, $route, $rootScope, $location) {
	console.log('theMenu')
	TheMenu.Init();
});










var TheMenu = (function(){

	return {

		ObjMenu : false,

		Init: function(){

			TheMenu.ObjMenu = $(".main-menu");
			$(".open-menu").on("click", TheMenu.ToggleMenu);
			$(".close-menu").on("click", TheMenu.HideMenu);
			$(".close-sub-nav").on("click", TheMenu.HideSubNav);

		},

		ToggleMenu : function(e){

			e.preventDefault();
			var objThis = $(this);
			var objParent = objThis.parent();
			var objMenuI = $(".sub-menu i");

			if(TheMenu.ObjMenu.hasClass("active")){

				if($(".sub-nav-el.active").length > 0){
					$(".sub-nav-el.active").removeClass("active");
					$(".sub-open").removeClass("sub-open");
				}

				TheMenu.ObjMenu.addClass("sub-active");

				$(".open-menu").addClass("not-open");
				objThis.addClass("sub-open");
				var objTarget = $(objThis.data("target"));
				objTarget.addClass("active");

			} else {

				TheMenu.ObjMenu.toggleClass("active");
				objMenuI.hasClass("fa-cogs") ? objMenuI.removeClass("fa-cogs").addClass("fa-sign-in") : objMenuI.removeClass("fa-sign-in").addClass("fa-cogs");

			}

		},

		HideMenu : function(e){

			e.preventDefault();
			TheMenu.ObjMenu.removeClass("active");
			$(".open-menu").removeClass("not-open");
			$(".sub-menu i").removeClass("fa-sign-in").addClass("fa-cogs");

		},

		HideSubNav : function(e){

			e.preventDefault();
			$(this).closest(".sub-nav-el").removeClass("active");
			$(".sub-active").removeClass("sub-active");
			$(".sub-open").removeClass("sub-open");

		}

	};

}());
