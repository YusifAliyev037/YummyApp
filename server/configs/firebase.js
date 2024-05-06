// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVP4NxAKD8wH765Qg7O5RuwpT3AgfI_MA",
  authDomain: "foodyapp-51b6e.firebaseapp.com",
  projectId: "foodyapp-51b6e",
  storageBucket: "foodyapp-51b6e.appspot.com",
  messagingSenderId: "933394810155",
  appId: "1:933394810155:web:d59b1137c370f3af72716e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const fileStorage = getStorage(app);
