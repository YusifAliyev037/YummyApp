// firebaseAdmin.js
import admin from "firebase-admin";

if (!admin.apps.length) {
  const serviceAccount = require("./foodyapp-51b6e-firebase-adminsdk-1f971-aef5cf5866.json"); // Replace with your own path

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const storage = admin.storage();
export const firestore = admin.firestore();

export default admin;
