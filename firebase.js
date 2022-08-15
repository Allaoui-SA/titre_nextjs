// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWPygioJQsppWyIl6BgXW-Vc9IqTBbA94",
  authDomain: "festiv-app.firebaseapp.com",
  databaseURL: "https://festiv-app-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "festiv-app",
  storageBucket: "festiv-app.appspot.com",
  messagingSenderId: "710021832342",
  appId: "1:710021832342:web:b14e138673ee3ba0ec2cb7",
  measurementId: "G-YS6KMXV69W"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage }
