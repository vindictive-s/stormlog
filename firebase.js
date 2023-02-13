// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjlO-rj7rOGb4TyTxHRqrNATtuhsRXSLA",
  authDomain: "stormlog-blog.firebaseapp.com",
  projectId: "stormlog-blog",
  storageBucket: "stormlog-blog.appspot.com",
  messagingSenderId: "326328485253",
  appId: "1:326328485253:web:c402e5f4bbea340fc230ec",
  measurementId: "G-T1J75XCZH8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db};
