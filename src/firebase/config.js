// Import the functions you need from the SDKs you need 
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBat_dVAbXBEPjjGqg6CGSB_ripKReEr_4",
  authDomain: "pinteres1-abbd8.firebaseapp.com",
  projectId: "pinteres1-abbd8",
  storageBucket: "pinteres1-abbd8.firebasestorage.app",
  messagingSenderId: "914173352438",
  appId: "1:914173352438:web:2fd08d9c08ef75c0a24fd7",
  measurementId: "G-E6EV89V3DC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
