import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyDhHIMa2eXwTrSQkJJirT6xxvylap4hxsM",
//   authDomain: "luxpenda.firebaseapp.com",
//   projectId: "luxpenda",
//   storageBucket: "luxpenda.firebasestorage.app",
//   messagingSenderId: "460524744682",
//   appId: "1:460524744682:web:d0ffbd177a08bbc7694c93",
//   measurementId: "G-WWV9VSTNCN"
// };
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Google provider instance
export const googleProvider = new GoogleAuthProvider();
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// firebase login
// firebase init
// firebase deploy
