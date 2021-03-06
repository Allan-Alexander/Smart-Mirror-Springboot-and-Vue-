import firebase from 'firebase';
import 'firebase/firestore';

 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC4dso0A-fqVD852B8BKjLJFbexcX6VLkM",
    authDomain: "smart-mirror-2021-e5eae.firebaseapp.com",
    databaseURL: "https://smart-mirror-2021-e5eae-default-rtdb.firebaseio.com",
    projectId: "smart-mirror-2021-e5eae",
    storageBucket: "smart-mirror-2021-e5eae.appspot.com",
    messagingSenderId: "189486919922",
    appId: "1:189486919922:web:ea895aa7005dd5b2e6a06b"
  };
  // Initialize Firebase
  export const db = firebase.initializeApp(firebaseConfig).firestore();