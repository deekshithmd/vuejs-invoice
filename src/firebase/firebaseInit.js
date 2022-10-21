import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjulaingvyT3tMs1WntIB2wuwPrcIQ4_0",
  authDomain: "invoice-app-6d998.firebaseapp.com",
  projectId: "invoice-app-6d998",
  storageBucket: "invoice-app-6d998.appspot.com",
  messagingSenderId: "788355335003",
  appId: "1:788355335003:web:dbb0c81d90832f5d8d507e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore(app);
