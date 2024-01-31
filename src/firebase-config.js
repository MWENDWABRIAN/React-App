// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import{getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7QWvVI65ttQysSRJPI3qFV-KRoYOE7YA",
  authDomain: "chatapp-38a9d.firebaseapp.com",
  projectId: "chatapp-38a9d",
  storageBucket: "chatapp-38a9d.appspot.com",
  messagingSenderId: "566298330564",
  appId: "1:566298330564:web:73761108297a8c35611091"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)