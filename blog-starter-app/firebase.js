// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoT-LdvrBzW5CaJ-_jueP4MJbeed71sUA",
  authDomain: "personal-blog-b2bff.firebaseapp.com",
  databaseURL: "https://personal-blog-b2bff-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "personal-blog-b2bff",
  storageBucket: "personal-blog-b2bff.appspot.com",
  messagingSenderId: "666986773285",
  appId: "1:666986773285:web:1fa9b19c0a50d7d68778cc",
  measurementId: "G-TGCHW52C1W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default firebaseConfig;