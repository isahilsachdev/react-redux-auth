import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChm4jCLOkHmGUQkMCxtis8WbgJJF6Ce_w",
  authDomain: "react-redux-authenticati-dbddf.firebaseapp.com",
  projectId: "react-redux-authenticati-dbddf",
  storageBucket: "react-redux-authenticati-dbddf.appspot.com",
  messagingSenderId: "939992483064",
  appId: "1:939992483064:web:0acc30dc3b6d24af4aa70d",
  measurementId: "G-H140HL3W8L"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
