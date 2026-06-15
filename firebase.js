// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyAsYourActualAPIKey-XXXXXX",
    authDomain: "kp-sumon.firebaseapp.com",
    projectId: "kp-sumon",
    storageBucket: "kp-sumon.appspot.com",
    messagingSenderId: "1234567890",
    appId: "1:1234:web:abcd"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();
window.db = db; // Global access for script.js
