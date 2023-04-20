// Import the functions you need from the SDKs you need 
import { initializeApp } from "firebase/app"; 
import { collection, getFirestore } from "firebase/firestore" 
import {GoogleAuthProvider, getAuth, onAuthStateChanged, signOut, signInWithPopup} from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use 
// https://firebase.google.com/docs/web/setup#available-libraries 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB89v--5kMrHkNR9KAHT0qgpMjJxko3s3M",
  authDomain: "diploma-1e346.firebaseapp.com",
  projectId: "diploma-1e346",
  storageBucket: "diploma-1e346.appspot.com",
  messagingSenderId: "1038868746531",
  appId: "1:1038868746531:web:3a49b20e9130d27e43fc96",
};

// Initialize Firebase 
const app = initializeApp(firebaseConfig); 
const db = getFirestore(app); 
const auth = getAuth (app); 
 
// получить список категорий (коллекция документов). 
export const categoryCollection = collection(db, 'categories'); 
export const productCollection = collection(db, 'products'); 
 
 
const provider = new GoogleAuthProvider (); 
export const logIn = () => signInWithPopup  (auth, provider); 
export const logOut = () => signOut (auth); 
export const onAuthChange = (callback) => onAuthStateChanged(auth, callback);