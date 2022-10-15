// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7Bp6iPpQynAlwuoghRk1ftf__LaVHZ1M",
  authDomain: "simple-firebase-auth-11d69.firebaseapp.com",
  projectId: "simple-firebase-auth-11d69",
  storageBucket: "simple-firebase-auth-11d69.appspot.com",
  messagingSenderId: "399522437217",
  appId: "1:399522437217:web:02d77760c2758ce982b220"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app