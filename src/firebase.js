import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCa4Tgse-S912sxZQPvpSmN4XvRh6a4keA",
    authDomain: "clone-45360.firebaseapp.com",
    projectId: "clone-45360",
    storageBucket: "clone-45360.appspot.com",
    messagingSenderId: "392672890371",
    appId: "1:392672890371:web:7228eb19b1066224910836",
    measurementId: "G-1K4BSFG9VY"
  };

  const firebaseApp = initializeApp(firebaseConfig);


const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);


  export {db,auth};