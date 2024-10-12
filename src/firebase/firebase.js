// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyD0Ht7ajzf_jBZul3MI7VyYp18FlYwP2IQ",
  authDomain: "acmhacks2024.firebaseapp.com",
  projectId: "acmhacks2024",
  storageBucket: "acmhacks2024.appspot.com",
  messagingSenderId: "1013975144394",
  appId: "1:1013975144394:web:95ff629fe6fe4fb176e133",
  measurementId: "G-7295971JR0"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, auth, provider };