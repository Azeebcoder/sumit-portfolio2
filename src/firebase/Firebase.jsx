import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; // If using Realtime Database
import { getFirestore } from "firebase/firestore"; // If using Firestore
import { Config } from "../config/Config";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: Config.apiKey,
  authDomain: Config.authDomain,
  projectId: Config.projectId,
  storageBucket: Config.storageBucket,
  messagingSenderId: Config.senderId,
  appId: Config.appId
};

const app = initializeApp(firebaseConfig);

// For Realtime Database
export const database = getDatabase(app);

// For Firestore
export const firestore = getFirestore(app);