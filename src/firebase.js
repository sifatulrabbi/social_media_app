import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyARM6q7_iEy_97LwhJs8JaYnXy1nMsBqoA",
  authDomain: "insta-like-app-0.firebaseapp.com",
  projectId: "insta-like-app-0",
  storageBucket: "insta-like-app-0.appspot.com",
  messagingSenderId: "532750834619",
  appId: "1:532750834619:web:b6775867f7186108e2c29e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const provider = new firebase.auth.GoogleAuthProvider();
