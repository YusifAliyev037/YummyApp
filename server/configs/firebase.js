// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCmrtMRa9_ydMuxrby9nboGZLOonLn2twk",
  authDomain: "yummyapp-f2354.firebaseapp.com",
  projectId: "yummyapp-f2354",
  storageBucket: "yummyapp-f2354.appspot.com",
  messagingSenderId: "788871399581",
  appId: "1:788871399581:web:7a0653bde35cc704376c74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const fileStorage = getStorage(app);
