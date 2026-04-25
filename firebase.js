// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3WLnRTvcIo5KpSGab5-avX2jZh6hIBgE",
  authDomain: "agenda-operacional-de-eventos.firebaseapp.com",
  databaseURL: "https://agenda-operacional-de-eventos-default-rtdb.firebaseio.com",
  projectId: "agenda-operacional-de-eventos",
  storageBucket: "agenda-operacional-de-eventos.firebasestorage.app",
  messagingSenderId: "339246189768",
  appId: "1:339246189768:web:d3f52b4f66518edcdd29fd",
  measurementId: "G-6TXXQ7YH96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);