import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCytzz9bHFNPbONt5FW-TEkF2BD7C2O-g",
  authDomain: "dev-maximus-d8303.firebaseapp.com",
  projectId: "dev-maximus-d8303",
  storageBucket: "dev-maximus-d8303.appspot.com",
  messagingSenderId: "927215766240",
  appId: "1:927215766240:web:4040539b8998d06e5fde85",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
