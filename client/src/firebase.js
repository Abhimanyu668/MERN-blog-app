// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-97329.firebaseapp.com",
  projectId: "mern-blog-97329",
  storageBucket: "mern-blog-97329.appspot.com",
  messagingSenderId: "1043409818511",
  appId: "1:1043409818511:web:ee27f87b0ac77a8b7871fa"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);