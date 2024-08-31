import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyDNO_XfPDaw3H9wofvewbN-FH2-1sU2U8g",

  authDomain: "testing-afc32.firebaseapp.com",

  projectId: "testing-afc32",

  storageBucket: "testing-afc32.appspot.com",

  messagingSenderId: "20415825910",

  appId: "1:20415825910:web:05b03c66c2aa7314b1e9d7",

  measurementId: "G-HC5VEE025X",
};

if (!firebase.app.length) {
  firebase.initializeApp(firebaseConfig);
}
