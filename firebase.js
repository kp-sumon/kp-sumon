// Firebase Web SDK Modules (CDN Version)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// আপনার ১ নম্বর অ্যাপের আসল কনফিগারেশন ডেটা
const firebaseConfig = {
  apiKey: "AIzaSyBD0ql7gYXxvFk3_4F9FeMVNGMAZlys1N0",
  authDomain: "kp-sumon-portfolio.firebaseapp.com",
  projectId: "kp-sumon-portfolio",
  storageBucket: "kp-sumon-portfolio.firebasestorage.app",
  messagingSenderId: "982065305342",
  appId: "1:982065305342:web:298cea67177407b7d137af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// অন্য ফাইলে ব্যবহারের জন্য এক্সপোর্ট করা হলো
export { db, collection, addDoc, serverTimestamp };
