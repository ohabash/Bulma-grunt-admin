
// function Firebase() {
	app.run(["$rootScope", function($rootScope) {
		var config = {
			apiKey: "AIzaSyC36mgAYhS9bM0eWqV48Pw-7IHDeu0AfIE",
			authDomain: "mess-37147.firebaseapp.com",
			databaseURL: "https://mess-37147.firebaseio.com",
			projectId: "mess-37147",
			storageBucket: "mess-37147.appspot.com",
			messagingSenderId: "714279040003"
		};
		firebase.initializeApp(config);
		// notifications
		const FCM = firebase.messaging();
		FCM.requestPermission().then( function(){
			console.log('Granted')
			return FCM.getToken();
		}).then( function(token){
			console.log(token)
		}).catch( function(err){
			console.error(err.code)
		});

		FCM.onMessage( function(payload){
			console.log('new massage: ',payload);
			$rootScope.notice(payload.notification.body);
		});
	}]);
// }




/* 
=========== sample curl ===========

curl -X POST \
  https://fcm.googleapis.com/fcm/send \
  -H 'authorization: key=<settings/project settings/Server key>' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 58d42c3f-c49e-abe1-5a08-b7a279780920' \
  -d '{"to":"<token>","priority":"high","notification":{"body": "<ur message>"}}'

===========
*/