import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {

  apiKey: "AIzaSyCSbJk82aBkNSHMXW2xM7IBmrzgnbdcT5w",

  authDomain: "fir-crud-app-7280e.firebaseapp.com",

  projectId: "fir-crud-app-7280e",

  storageBucket: "fir-crud-app-7280e.appspot.com",

  messagingSenderId: "390870580993",

  appId: "1:390870580993:web:ea7686c4953f9ab40e2500"

};

  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
