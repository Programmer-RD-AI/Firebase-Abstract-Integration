/**
 * Import necessary modules from Firebase SDKs.
 */
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import {
  getStorage,
  ref,
  uploadString,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import admin from "firebase-admin";

/**
 * Path to the service account key JSON file.
 */
import serviceAccount from "../path/to/serviceAccountKey.json" assert { type: "json" };
import dotenv from "dotenv";
dotenv.config();

/**
 * Firebase configuration object.
 * Configurations are retrieved from environment variables.
 */
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

/**
 * Initialize Firebase with the provided configuration.
 */
firebase.initializeApp(firebaseConfig);

/**
 * Initialize the Firebase Admin SDK with the service account credentials.
 */
const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
});

/**
 * Firebase Authentication module from Firebase Admin SDK.
 */
const auth = admin.auth(app);

/**
 * Firestore module from Firebase Admin SDK.
 */
const firestore = admin.firestore(app);

/**
 * Storage module from Firebase SDK.
 */
const storage = getStorage();

/**
 * Export necessary modules and functions.
 */
export {
  auth,
  firebase,
  app,
  admin,
  firestore,
  storage,
  ref,
  uploadString,
  getDownloadURL,
  deleteObject,
};
