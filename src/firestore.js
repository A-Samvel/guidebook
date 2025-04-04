// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnQ38QDhbSTibND6Gm3kcpVEcYhLasP88",
  authDomain: "guidebook-df313.firebaseapp.com",
  projectId: "guidebook-df313",
  storageBucket: "guidebook-df313.firebasestorage.app",
  messagingSenderId: "429241126285",
  appId: "1:429241126285:web:beb888d0821dc0f98d01c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}