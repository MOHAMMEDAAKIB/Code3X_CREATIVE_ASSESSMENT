// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpxITrVdYH0lOgjXjVn7OFiIxHBCEgDJE",
  authDomain: "code3xcreativassessment.firebaseapp.com",
  projectId: "code3xcreativassessment",
  storageBucket: "code3xcreativassessment.firebasestorage.app",
  messagingSenderId: "996697416828",
  appId: "1:996697416828:web:c22b951cb64dfc1c7a95f9",
  measurementId: "G-RFWW5K9LQ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const auth = getAuth(app);