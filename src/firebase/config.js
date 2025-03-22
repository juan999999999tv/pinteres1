import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDO2AfOinVjhwI5kWdf_xE4ulnfN_wboxE",
    authDomain: "pinterest-72f3b.firebaseapp.com",
    projectId: "pinterest-72f3b",
    storageBucket: "pinterest-72f3b.firebasestorage.app",
    messagingSenderId: "21908411423",
    appId: "1:21908411423:web:b4fbe45fb639e6286af12a"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);