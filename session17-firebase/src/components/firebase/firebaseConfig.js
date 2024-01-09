// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhzvbjvi5G4ijindu4ih9cElGcQ4aMBsw",
  authDomain: "uploadimgsignin.firebaseapp.com",
  projectId: "uploadimgsignin",
  storageBucket: "uploadimgsignin.appspot.com",
  messagingSenderId: "779531786506",
  appId: "1:779531786506:web:126af7bd75183a6f6082f3",
  measurementId: "G-KXZR5D4XJB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
