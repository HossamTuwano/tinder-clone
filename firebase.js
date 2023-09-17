// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getFireStore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTDvmV2_s2_wHhcB49RuNn70Wj-vFUpIc",
  authDomain: "tinderclone-73c81.firebaseapp.com",
  projectId: "tinderclone-73c81",
  storageBucket: "tinderclone-73c81.appspot.com",
  messagingSenderId: "447567395688",
  appId: "1:447567395688:web:a06ae46d635162d11934dd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(); 
// const db = getFireStore();

export { auth };
