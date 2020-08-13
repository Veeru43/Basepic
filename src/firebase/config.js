import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";



  var firebaseConfig = {
    apiKey: "AIzaSyDzjLIjUblyJoi1S_28gVbYb05R1Wkceyc",
    authDomain: "basepics-288c7.firebaseapp.com",
    databaseURL: "https://basepics-288c7.firebaseio.com",
    projectId: "basepics-288c7",
    storageBucket: "basepics-288c7.appspot.com",
    messagingSenderId: "482109525188",
    appId: "1:482109525188:web:fc6063fbb79a7ff6830d91",
    measurementId: "G-D52ZD0NM2W"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const projectfirestorage = firebase.storage();
const projectfirestore =firebase.firestore();
const timestamp= firebase.firestore.FieldValue.serverTimestamp;

export {projectfirestorage,projectfirestore,timestamp};
