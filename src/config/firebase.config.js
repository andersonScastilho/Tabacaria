import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpf6KKXMYdBDzDyGixlInVhl0ESDDFz_U",
  authDomain: "dev-maximus.firebaseapp.com",
  projectId: "dev-maximus",
  storageBucket: "dev-maximus.appspot.com",
  messagingSenderId: "809247765875",
  appId: "1:809247765875:web:6e89efe279ed0008934106",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
