// database/firebaseDb.js

import * as firebase from 'firebase';

 const firebaseConfig = {
    apiKey: "AIzaSyADgtLqQHs1KAlnMKUn8uM_vpasRUkWchw",
    authDomain: "reactnativefirebase-9ed38.firebaseapp.com",
    projectId: "reactnativefirebase-9ed38",
    storageBucket: "reactnativefirebase-9ed38.appspot.com",
    messagingSenderId: "117218702170",
    appId: "1:117218702170:web:94a6ad8eea017273c43963",
    measurementId: "G-2RN9L587XJ"
  };
  // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
  
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }
export default firebase;