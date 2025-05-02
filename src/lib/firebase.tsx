import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDixNrGsS9Zua7A0JDGJmjFTTu_DniRs2o",
  authDomain: "ezbrandbuilders-a855d.firebaseapp.com",
  projectId: "ezbrandbuilders-a855d",
  storageBucket: "ezbrandbuilders-a855d.firebasestorage.app",
  messagingSenderId: "575660171378",
  appId: "1:575660171378:web:a8dec61046e05f985022eb",
  measurementId: "G-6WH9VF4QYF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);