
// import { initializeApp } from "firebase/app";

// import {getFirestore} from 'firebase/firestore/lite';

// const firebaseConfig = {
//   apiKey: "AIzaSyApvSdHyKPd0Z1Vy1tG933b4ghhlueaEes",
//   authDomain: "ropalandia-53886.firebaseapp.com",
//   projectId: "ropalandia-53886",
//   storageBucket: "ropalandia-53886.appspot.com",
//   messagingSenderId: "914446930832",
//   appId: "1:914446930832:web:0f91c2b934b027cf149915",
//   measurementId: "G-VWZ8J5B1C7"
// };


// const app = initializeApp(firebaseConfig);

// export const db= getFirestore(app);




// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics"
import { getFirestore } from 'firebase/firestore/lite'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApvSdHyKPd0Z1Vy1tG933b4ghhlueaEes",
  authDomain: "ropalandia-53886.firebaseapp.com",
  projectId: "ropalandia-53886",
  storageBucket: "ropalandia-53886.appspot.com",
  messagingSenderId: "914446930832",
  appId: "1:914446930832:web:0f91c2b934b027cf149915",
  measurementId: "G-VWZ8J5B1C7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);