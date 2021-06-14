// database/firebaseDb.js

import * as firebase from 'firebase';

 const firebaseConfig = {
   apiKey: "AIzaSyBbYgUihj8cOv4lolJZro6RTcxc4f0XJrc",
   authDomain: "btrack-c2faa.firebaseapp.com",
   databaseURL: "https://btrack-c2faa-default-rtdb.firebaseio.com",
   projectId: "btrack-c2faa",
   storageBucket: "btrack-c2faa.appspot.com",
   messagingSenderId: "162617874648",
   appId: "1:162617874648:web:a1eb6a2fcb2ca1d44c1fad"
  };
  // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
  
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }
export default firebase;