import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDOO6b4tarLw4nWPFxQIWoXjFPQkQZ9boQ",
  authDomain: "axon-5a3f4.firebaseapp.com",
  projectId: "axon-5a3f4",
  storageBucket: "axon-5a3f4.firebasestorage.app",
  messagingSenderId: "667666290707",
  appId: "1:667666290707:web:502c89d0391316837f47e6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);