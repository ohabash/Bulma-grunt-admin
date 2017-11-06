app.controller('notice', function ($scope, $location, Auth, $timeout, $route, $rootScope, $location) {
  var queue = [];
  var busy = false;
  $rootScope.notice = function(m,c) {

    // Enqueue
      queue.push({'message': m, 'color': c });
      if (!busy) {
        busy = true;
        fireAlerts(queue);
      }

    // Show
    function fireAlerts(alerts) {
      var $e = null;
      var len = alerts.length;
      $.each(alerts, function(index, value) {
        // Use IIFE to multiply Wait x Index (http://stackoverflow.com/a/5226335/922522)
        (function(index, value) {
          var wait = index * 500 + 1000;
          var i = index;
          var s = alerts[i];
          setTimeout(function() {
            // Show Alert
            $e = $("<div class='item1 "+s.color+"'>").html(s.message);
            $("#notices").append($e);
            // debug 
            // console.log("notices: "+value);
            $e.click( function(){
              $e.remove();
            })
            setTimeout(removeAlert, 5500, $e);        
            // Remove displayed from queue
            queue.shift();
            // End of alerts array
            if (index === len - 1) {
              busy = false;
              // Are there more in the queue?
              if (queue.length > 0) {
                fireAlerts(queue);
              }
            }
          }, wait);
        })(index, value);
      });
    }

    // Hide
    function removeAlert($e) {
      $e.removeClass('fadeInUp').addClass('fadeOutRight');
      setTimeout(function() {
        $e.remove();
      }, 3000);
    }

  };
});