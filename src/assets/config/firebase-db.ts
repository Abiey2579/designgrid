// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuoFBdYxgw1sINR4graLrsf0s-7n_byR0",
  authDomain: "designgrid.firebaseapp.com",
  projectId: "designgrid",
  storageBucket: "designgrid.appspot.com",
  messagingSenderId: "262989823527",
  appId: "1:262989823527:web:f7806fd23df03118675802",
  measurementId: "G-9PWJR0138X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const FRONTEND_101_TOC_COLLECTION = "frontend_101";
// export const FRONTEND_101_TOC_COLLECTION_REF = collection(
//   firestore,
//   FRONTEND_101_TOC_COLLECTION
// );
