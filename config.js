import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBeba3hab7FunNJ3L0EnUB2RIDDX-esEIs",
    authDomain: "complanit-fourm.firebaseapp.com",
    projectId: "complanit-fourm",
    storageBucket: "complanit-fourm.appspot.com",
    messagingSenderId: "806948275354",
    appId: "1:806948275354:web:85d58f6b0602fcb958cb23"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
