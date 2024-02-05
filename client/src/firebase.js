import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-app2024.firebaseapp.com",
  projectId: "blog-app2024",
  storageBucket: "blog-app2024.appspot.com",
  messagingSenderId: "696947786725",
  appId: "1:696947786725:web:7fabf2ea3edd217201e50c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
