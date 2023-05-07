// Import the functions you need from the SDKs you need
// Configuracion Firebase

const { initializeApp } = require("firebase/app");
const firebaseConfig = {
  apiKey: "AIzaSyDvo9QG6w-RyV9NYXJeDEW66zNZ-vf0XmY",
  authDomain: "modelhome-3d657.firebaseapp.com",
  projectId: "modelhome-3d657",
  storageBucket: "modelhome-3d657.appspot.com",
  messagingSenderId: "1038273163519",
  appId: "1:1038273163519:web:d5577bcb59c3110c1fdcca",
  measurementId: "G-HH22FZH004",
};
const app = initializeApp(firebaseConfig);

// Configure firebase-admin

var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  messagingSenderId: "1038273163519",
});

//Exportar

module.exports = {
  app,
  admin,
};
