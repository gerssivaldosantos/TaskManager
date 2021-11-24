// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/storage";
import firebase from "firebase";

const firebaseConfig = {
      //Paste the database informations
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = firebase.firestore();
export default database;