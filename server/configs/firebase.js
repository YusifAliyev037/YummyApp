// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCD8O5Viib_qA_y-D97jX1ayr3HivrCfR4",
  authDomain: "yummyapp-37477.firebaseapp.com",
  projectId: "yummyapp-37477",
  storageBucket: "yummyapp-37477.appspot.com",
  messagingSenderId: "257840248967",
  appId: "1:257840248967:web:0d63f2064640039d24a022"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const fileStorage = getStorage(app);


