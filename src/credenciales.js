import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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

// Exportar modulos de firebase para 
const authProviders = getAuth(appFirebase);
const providerGoogle = new GoogleAuthProvider();
const providerFacebook = new FacebookAuthProvider();

// Acceder a firestore
const db = getFirestore(appFirebase);

export default appFirebase;
export { authProviders, providerGoogle, providerFacebook, db};
