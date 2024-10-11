// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN5fUVQoJZEGuIS6rszqwKsCOuUSLIiMs",
  authDomain: "appauth-d8d03.firebaseapp.com",
  projectId: "appauth-d8d03",
  storageBucket: "appauth-d8d03.appspot.com",
  messagingSenderId: "254169798647",
  appId: "1:254169798647:web:c820cff9ebec6bf933c0f2"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)