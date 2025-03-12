// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

//Imágenes de perfiles
import {createClient} from '@supabase/supabase-js'

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
// Exportar modulos de firebase para 
const authProviders = getAuth(appFirebase);
const providerGoogle = new GoogleAuthProvider();
const providerFacebook = new FacebookAuthProvider();

//Supabase perfiles
const supabaseUrl = 'https://uwodgmgxyjbphknsqjbv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3b2RnbWd4eWpicGhrbnNxamJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE1NTY1NjEsImV4cCI6MjA1NzEzMjU2MX0.mv3cq8zA--BqfkAjxX18yX87OrfNh9609eeV2n2Ltlk';
const supabaseProfiles = createClient(supabaseUrl, supabaseKey);

// Acceder a firestore
const db = getFirestore(appFirebase);

export { authProviders, providerGoogle, providerFacebook, db, supabaseProfiles};