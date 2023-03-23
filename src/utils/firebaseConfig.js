// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtsTKZUQm2hV0oFwuYvykaa8GKv8a26yc",
  authDomain: "onchoice-e9392.firebaseapp.com",
  projectId: "onchoice-e9392",
  storageBucket: "onchoice-e9392.appspot.com",
  messagingSenderId: "264396700507",
  appId: "1:264396700507:web:a13deb1f2937e26123b87e",
  measurementId: "G-M5FNVQV233"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db =getFirestore(app)