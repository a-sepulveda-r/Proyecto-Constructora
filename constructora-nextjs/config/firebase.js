import { getAuth } from "@firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDvo9QG6w-RyV9NYXJeDEW66zNZ-vf0XmY",
  authDomain: "modelhome-3d657.firebaseapp.com",
  projectId: "modelhome-3d657",
  storageBucket: "modelhome-3d657.appspot.com",
  messagingSenderId: "1038273163519",
  appId: "1:1038273163519:web:c70e2c5991e4bfc01fdcca",
  measurementId: "G-8FD7GQR36J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
