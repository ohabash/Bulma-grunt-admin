importScripts('https://www.gstatic.com/firebasejs/4.6.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.6.2/firebase-messaging.js');

// importScripts('/__/firebase/init.js');

var config = {
	apiKey: "AIzaSyC36mgAYhS9bM0eWqV48Pw-7IHDeu0AfIE",
	authDomain: "mess-37147.firebaseapp.com",
	databaseURL: "https://mess-37147.firebaseio.com",
	projectId: "mess-37147",
	storageBucket: "mess-37147.appspot.com",
	messagingSenderId: "714279040003"
};
firebase.initializeApp(config);

const FCM = firebase.messaging();

// only runs if not on the page
FCM.setBackgroundMessageHandler( function(payload){
	return self.registration.showNotification();
});
