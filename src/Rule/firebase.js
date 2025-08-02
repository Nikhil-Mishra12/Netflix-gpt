// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth/cordova";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAH7atIyWHAU73US2IxOt_k_uWao-CZ_7M",
  authDomain: "netflixgpt-622f7.firebaseapp.com",
  projectId: "netflixgpt-622f7",
  storageBucket: "netflixgpt-622f7.firebasestorage.app",
  messagingSenderId: "375260651925",
  appId: "1:375260651925:web:6bcc2a401bec702c98169c",
  measurementId: "G-41X654FCTG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth()