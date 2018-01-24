(function() {
  "use strict";



  function SlickController($rootScope, $window, $location, $scope, $timeout, $compile) {
    // console.log('SlickController');
    
   
    function build(){
      // alert('slick build');
      $timeout(function() {
          // alert('slick build timeout');
          // console.log('SlickController');
          $rootScope.viewLoaded = true;
          $rootScope.search = '';

          $rootScope.updateView = function() {
            console.log('updateView');
            // slickConfig.method.slickGoTo(2);
            $rootScope.viewLoaded = false;
            $timeout(function() {
              $rootScope.viewLoaded = true;
            }, 1);
          };

          $scope.slickPanels = {
            method: {},
            arrows: false,
            dots: true,
            infinite: false,
            speed: 300,
            rows: 4,
            slidesPerRow: 5,
            slidesToScroll: 1,
            autoPlay: false,
            // adaptiveHeight: true,
            event: {
              beforeChange: function() {
                console.log("before change called");
              },
              afterChange: function() {
                console.log("after called");
              }
            }
          };

          // this is needed to load icon view after fullscreen
          $('a.skillsStart').click( function(){
            // alert('slick START');
            $('#searchSkills').val('a');
            angular.element(document.getElementById('searchSkills')).triggerHandler('change');
            $('#searchSkills').val('');
          });
          
          // search field
          $('#searchSkills').focus( function(){
            $('.search-skills').addClass('active');
            $('.clear-search').click( function(){
              $('#searchSkills').val('');
              $rootScope.updateView();
            });
          });

          $('#searchSkills').focusout( function(){
            if($(this).val().length<1) {
              $('.search-skills').removeClass('active');
            }
          });
      }, 2000);
    } // build


      build();



    // init patch
    // $('.skillsStart').click( function(){
    //   console.log("clicked");
    //   $rootScope.updateView();
    //   // build();
    // });
    // build();




  }



  SlickController.$inject = ["$rootScope", "$window", "$location", "$scope", "$timeout", "$compile"];
  app.controller('SlickController', SlickController);

})();