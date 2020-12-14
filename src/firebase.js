// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDMOnCEAviguSp6ls08kfijnOlU46H3lyY",
    authDomain: "fir-2c410.firebaseapp.com",
    databaseURL: "https://fir-2c410.firebaseio.com",
    projectId: "fir-2c410",
    storageBucket: "fir-2c410.appspot.com",
    messagingSenderId: "1000341073000",
    appId: "1:1000341073000:web:d1a00fddc571217b899fdd",
    measurementId: "G-21NMG3VY12"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();  


  export { db, auth};