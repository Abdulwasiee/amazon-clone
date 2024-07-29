// Firebase configuration and initialization
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1h8xzDXIzmPYUCXlwgEL-9G5xpCAHKS0",
  authDomain: "clone-817f6.firebaseapp.com",
  projectId: "clone-817f6",
  storageBucket: "clone-817f6.appspot.com",
  messagingSenderId: "252299051197",
  appId: "1:252299051197:web:aee9561b9c32985b50b7d4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
