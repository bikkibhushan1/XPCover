// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import 'firebase/analytics';

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyBA-Ul0mJ3PAShxTlTLHbZIAcUq13zOKqA',
	authDomain: 'xpcover-app.firebaseapp.com',
	databaseURL: 'https://xpcover-app.firebaseio.com',
	projectId: 'xpcover-app',
	storageBucket: 'xpcover-app.appspot.com',
	messagingSenderId: '1085534916198',
	appId: '1:1085534916198:web:e131f61b0f8bdeb5dc27a7',
	measurementId: 'G-W09MGZKEXW',
};

firebase.initializeApp(firebaseConfig);
export default firebase;
