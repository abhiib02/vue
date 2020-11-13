import firebase from 'firebase';
import "firebase/firestore";
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDStXwPcmvVXciVLcuWxDyU_2ehuxfxtYo",
    authDomain: "vue-ecomm-6628f.firebaseapp.com",
    databaseURL: "https://vue-ecomm-6628f.firebaseio.com",
    projectId: "vue-ecomm-6628f",
    storageBucket: "vue-ecomm-6628f.appspot.com",
    messagingSenderId: "1032600593314",
    appId: "1:1032600593314:web:c83a368f0202b7f37948fb",
    measurementId: "G-67L4JJELXC"
  };
  // Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

  export {fb,db}
