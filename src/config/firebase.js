// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzDOsNWXvZUHiTOus4MFikR2o-vpRaybI",
  authDomain: "job-list-79582.firebaseapp.com",
  projectId: "job-list-79582",
  storageBucket: "job-list-79582.appspot.com",
  messagingSenderId: "2059883605",
  appId: "1:2059883605:web:42ebaa31be6c137fb8b0dc",
  measurementId: "G-ZET9MVMQ5W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);
