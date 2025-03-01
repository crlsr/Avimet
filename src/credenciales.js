// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYF1XrAwEWGM1AZ-Flj1adOGHgm44l2Fs",
  authDomain: "avimetproyecto.firebaseapp.com",
  projectId: "avimetproyecto",
  storageBucket: "avimetproyecto.firebasestorage.app",
  messagingSenderId: "212687743765",
  appId: "1:212687743765:web:e26b2b6adb37deb2d4571c",
  measurementId: "G-FBMMGVYY86",
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;
