import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDNmDpq3s-dpdLgQ-H6iCwtARednmapE6c",
  authDomain: "socialize-reactapp.firebaseapp.com",
  projectId: "socialize-reactapp",
  storageBucket: "socialize-reactapp.appspot.com",
  messagingSenderId: "106779814246",
  appId: "1:106779814246:web:141ae5940374b66fc4c0a7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const provider = new firebase.auth.GoogleAuthProvider();
