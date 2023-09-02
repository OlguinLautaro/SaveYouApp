// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAruz9hrhW6dXC5dtaTdN57_p6Y00nCxts",
  authDomain: "saveyouapp-a8878.firebaseapp.com",
  projectId: "saveyouapp-a8878",
  storageBucket: "saveyouapp-a8878.appspot.com",
  messagingSenderId: "97017525526",
  appId: "1:97017525526:web:b88e32c154806cf2b18c37",
  measurementId: "G-WRDXXHD8PL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);