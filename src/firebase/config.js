import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// ❌ NO importes analytics por ahora
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA9vUokdkMxwPO9YCGOqDAR5nrRKWasKL0",
  authDomain: "inmobiliariaestefaniarodriguez.firebaseapp.com",
  projectId: "inmobiliariaestefaniarodriguez",
  storageBucket: "inmobiliariaestefaniarodriguez.firebasestorage.app",
  messagingSenderId: "164507894423",
  appId: "1:164507894423:web:75e4538fc170b4d113dfd2",
  measurementId: "G-9S3B98S43S",
};

// 🔐 PROTECCIÓN CONTRA DUPLICADOS (CRÍTICO)
const app = getApps().length === 0
  ? initializeApp(firebaseConfig)
  : getApp();

// Servicios
export const db = getFirestore(app);
export const storage = getStorage(app);
