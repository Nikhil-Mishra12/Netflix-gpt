
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "netflixgpt-622f7.firebaseapp.com",
  projectId: "netflixgpt-622f7",
  storageBucket: "netflixgpt-622f7.firebasestorage.appspot.com",
  messagingSenderId: "375260651925",
  appId: "1:375260651925:web:6bcc2a401bec702c98169c",
  measurementId: "G-41X654FCTG"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app)