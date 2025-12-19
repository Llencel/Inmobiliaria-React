import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA9vUokdkMxwPO9YCGOqDAR5nrRKWasKL0",
  authDomain: "inmobiliariaestefaniarodriguez.firebaseapp.com",
  projectId: "inmobiliariaestefaniarodriguez",
  storageBucket: "inmobiliariaestefaniarodriguez.firebasestorage.app",
  messagingSenderId: "164507894423",
  appId: "1:164507894423:web:75e4538fc170b4d113dfd2",
  measurementId: "G-9S3B98S43S"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firebaseApp = initializeApp(firebaseConfig);
