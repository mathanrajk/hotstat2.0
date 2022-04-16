import * as firebase from 'firebase';





const firebaseConfig = {
    apiKey: "AIzaSyAXBoTxPBvljGeNa9d8BjjKtlTuXW-rTko",
    authDomain: "triemphandson.firebaseapp.com",
    databaseURL: "https://triemphandson-default-rtdb.firebaseio.com",
    projectId: "triemphandson",
    storageBucket: "triemphandson.appspot.com",
    messagingSenderId: "767326609343",
    appId: "1:767326609343:web:602c3c3ee77f6370728b0a",
    measurementId: "G-MBV4LH5ZGT"
  };
const app = firebase.initializeApp(firebaseConfig);


export default app;