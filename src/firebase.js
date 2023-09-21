import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLvoaQ5IeXTpRk9O_1EBKWZ5j1uucU7k4",
  authDomain: "financetracker-af28a.firebaseapp.com",
  projectId: "financetracker-af28a",
  storageBucket: "financetracker-af28a.appspot.com",
  messagingSenderId: "435916393103",
  appId: "1:435916393103:web:8bd1eb5b6c2d6a5c7e7efa",
  measurementId: "G-4SGLKL703M"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
