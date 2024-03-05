import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBVO-p_tnEb9WG15xwCbKri_96anEkx7IQ",
  authDomain: "myapp-49271.firebaseapp.com",
  projectId: "myapp-49271",
  storageBucket: "myapp-49271.appspot.com",
  messagingSenderId: "281190217686",
  appId: "1:281190217686:web:f4b36f0d1c4ea6ef87d677"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;

