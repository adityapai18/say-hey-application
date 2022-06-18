// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCz_Ws1O76tVtKmcbEClo-SuyDjA4BC4M4",
  authDomain: "sayhey-app-auth.firebaseapp.com",
  projectId: "sayhey-app-auth",
  storageBucket: "sayhey-app-auth.appspot.com",
  messagingSenderId: "669318155909",
  appId: "1:669318155909:web:c42648cc677155a81f23ec",
  measurementId: "G-FLRCRDS59P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
export {auth,app};