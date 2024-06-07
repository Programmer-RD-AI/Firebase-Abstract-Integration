/**
 * Import necessary modules from Firebase SDKs.
 */
import firebase from "firebase/compat/app"; // Firebase App module
import "firebase/compat/auth"; // Firebase Authentication module
import "firebase/compat/firestore"; // Firebase Firestore module
import "firebase/compat/storage"; // Firebase Storage module
import {
  getStorage,
  ref,
  uploadString,
  getDownloadURL,
  deleteObject,
} from "firebase/storage"; // Firebase Storage utility functions
import admin from "firebase-admin"; // Firebase Admin SDK

/**
 * Path to the service account key JSON file.
 * Ensure the service account key JSON file path is correct.
 */
import serviceAccount from "../path/to/serviceAccountKey.json" assert { type: "json" }; // Service Account Key JSON file path
import dotenv from "dotenv"; // Module for loading environment variables
dotenv.config(); // Load environment variables from .env file

/**
 * Firebase configuration object.
 * Configurations are retrieved from environment variables for security.
 */
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY, // Firebase API Key
  authDomain: process.env.FIREBASE_AUTH_DOMAIN, // Firebase Auth Domain
  databaseURL: process.env.FIREBASE_DATABASE_URL, // Firebase Database URL
  projectId: process.env.FIREBASE_PROJECT_ID, // Firebase Project ID
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET, // Firebase Storage Bucket
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID, // Firebase Messaging Sender ID
  appId: process.env.FIREBASE_APP_ID, // Firebase App ID
  measurementId: process.env.FIREBASE_MEASUREMENT_ID, // Firebase Measurement ID
};

/**
 * Initialize Firebase with the provided configuration.
 */
firebase.initializeApp(firebaseConfig); // Initialize Firebase App

/**
 * Initialize the Firebase Admin SDK with the service account credentials.
 */
const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount), // Initialize Firebase Admin with service account credentials
  databaseURL: process.env.FIREBASE_DATABASE_URL, // Firebase Database URL
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET, // Firebase Storage Bucket
});

/**
 * Firebase Authentication module from Firebase Admin SDK.
 */
const auth = admin.auth(app); // Firebase Authentication

/**
 * Firestore module from Firebase Admin SDK.
 */
const firestore = admin.firestore(app); // Firebase Firestore

/**
 * Storage module from Firebase SDK.
 */
const storage = getStorage(); // Firebase Storage

/**
 * Export necessary modules and functions.
 */
export {
  auth, // Firebase Authentication
  firebase, // Firebase App
  app, // Firebase Admin App
  admin, // Firebase Admin SDK
  firestore, // Firebase Firestore
  storage, // Firebase Storage
  ref, // Firebase Storage reference function
  uploadString, // Firebase Storage upload string function
  getDownloadURL, // Firebase Storage get download URL function
  deleteObject, // Firebase Storage delete object function
};
