// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyA1QfdLAGK4Hxm2bBmpmUq_PznLGFRyxwk",
  authDomain: "twitterclone-6bba9.firebaseapp.com",
  projectId: "twitterclone-6bba9",
  storageBucket: "twitterclone-6bba9.appspot.com",
  messagingSenderId: "1017776922846",
  appId: "1:1017776922846:web:b489a5ba68940772df624f",
  measurementId: "G-BRHQZXGF05"
  // apiKey: process.env.NEXT_PUBLIC_APIKEY,
  // authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
  // projectId: process.env.NEXT_PUBLIC_PROJECTID,
  // storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
  // messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
  // appId: process.env.NEXT_PUBLIC_APPID,
  // measurementId: process.env.NEXT_PUBLIC_MEASUREMENTID
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };

