import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {

    apiKey: process.env.API_KEY,
  
    authDomain: process.env.AUTH_DOMAIN,
  
    projectId: process.env.PROJECT_ID,
  
    storageBucket: process.env.STORAGE_BUCKET,
  
    messagingSenderId: process.env.MESSAGE,
  
    appId: process.env.APP_ID
  
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
