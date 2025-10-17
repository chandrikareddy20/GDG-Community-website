// Import the functions you need from the SDKs you need
// Use Firebase CDN ESM builds so this module can be imported directly by browser pages
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBk7OLqgT9qz-2XjASvH_DDdT9QKN_gz04",
  authDomain: "gdg-community-68026.firebaseapp.com",
  projectId: "gdg-community-68026",
  storageBucket: "gdg-community-68026.firebasestorage.app",
  messagingSenderId: "472904539449",
  appId: "1:472904539449:web:3de9997b78301166fa1ce8",
  measurementId: "G-NXHN63GQFH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Analytics (optional)
let analytics;
try {
  analytics = getAnalytics(app);
} catch (e) {
  // Analytics may fail in non-browser or restricted environments
  // keep it optional so the module doesn't throw
  console.warn('Firebase analytics not initialized:', e?.message || e);
}

// Initialize Firestore and export it so public pages can use it
const db = getFirestore(app);

export { app, db };