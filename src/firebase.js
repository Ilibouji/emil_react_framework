// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAac7_j8zTfdEyqQS_ovI3lqoW7683HJoE",
  authDomain: "ikfram-s1132776.firebaseapp.com",
  projectId: "ikfram-s1132776",
  storageBucket: "ikfram-s1132776.appspot.com",
  messagingSenderId: "826665135808",
  appId: "1:826665135808:web:41b76aaa0827f75e97c725",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
