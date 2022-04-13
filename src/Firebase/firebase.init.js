// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS0tVNpP2b3Ebd_hwbUBNNG7UAveA21QI",
  authDomain: "acuatic-living.firebaseapp.com",
  projectId: "acuatic-living",
  storageBucket: "acuatic-living.appspot.com",
  messagingSenderId: "295495524319",
  appId: "1:295495524319:web:9d514ad57b5f92a4c66e6a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
