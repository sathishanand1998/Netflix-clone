import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const config = {
    apiKey: "AIzaSyC1RoVac3nV-YZpsBZEltFMAJGE8WEE4wo",
    authDomain: "netflix-565a3.firebaseapp.com",
    projectId: "netflix-565a3",
    storageBucket: "netflix-565a3.appspot.com",
    messagingSenderId: "904454211570",
    appId: "1:904454211570:web:3eda49d087c96cf86f0d6b"
};

const firebase = Firebase.initializeApp(config);

export { firebase };