// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCumed0sYA0u7VLhJFHfmCSfdhdp_hi3wk",
  authDomain: "netflixgpt-4d54b.firebaseapp.com",
  projectId: "netflixgpt-4d54b",
  storageBucket: "netflixgpt-4d54b.appspot.com",
  messagingSenderId: "1015490172590",
  appId: "1:1015490172590:web:40f9a477b55d62e659ff3f",
  measurementId: "G-EPS7K4SDH4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()