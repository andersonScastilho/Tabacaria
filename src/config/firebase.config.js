import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwixB4NgQvnWc3HuqkX8-Q-ntquxq3Y4w",
  authDomain: "maximus-a1103.firebaseapp.com",
  projectId: "maximus-a1103",
  storageBucket: "maximus-a1103.appspot.com",
  messagingSenderId: "1032599396180",
  appId: "1:1032599396180:web:1b2ae760db97bd1bf532c1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
