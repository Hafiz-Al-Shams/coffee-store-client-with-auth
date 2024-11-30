// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDjEqDAfFEn1R0XRoQ_eb1vpphqQ4azclw",
    authDomain: "coffee-store-788de.firebaseapp.com",
    projectId: "coffee-store-788de",
    storageBucket: "coffee-store-788de.firebasestorage.app",
    messagingSenderId: "599396877684",
    appId: "1:599396877684:web:628f34a597f0ea34821821"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);