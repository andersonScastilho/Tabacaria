import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAZU_hWFOTbNUsmPKogScZZgCs3QHZW_Tw",
    authDomain: "maximus-projeto.firebaseapp.com",
    projectId: "maximus-projeto",
    storageBucket: "maximus-projeto.appspot.com",
    messagingSenderId: "7447715006",
    appId: "1:7447715006:web:430f690c8e0fea5bf752ef"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)