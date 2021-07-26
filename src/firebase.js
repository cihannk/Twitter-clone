 import firebase from "firebase";
 import "firebase/database";

  const firebaseConfig = {
    apiKey: "AIzaSyD5RjYmNx8-ZBH1H-psNkyv6aFZkmGgjIs",
    authDomain: "twitter-clone-1c951.firebaseapp.com",
    projectId: "twitter-clone-1c951",
    storageBucket: "twitter-clone-1c951.appspot.com",
    messagingSenderId: "170099473336",
    appId: "1:170099473336:web:87375c0d0ed9e378dfed4d",
    measurementId: "G-PLP1E0PL44"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const db = firebase.firestore();

  export default db;