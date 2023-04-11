// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB89v--5kMrHkNR9KAHT0qgpMjJxko3s3M",
  authDomain: "diploma-1e346.firebaseapp.com",
  projectId: "diploma-1e346",
  storageBucket: "diploma-1e346.appspot.com",
  messagingSenderId: "1038868746531",
  appId: "1:1038868746531:web:3a49b20e9130d27e43fc96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const bd = getFirestore(app);
//получить список категорий (коллекция документов).
export const categoryCollection = collection( bd, "categories");