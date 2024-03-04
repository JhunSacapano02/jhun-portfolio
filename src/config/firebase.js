import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDrxBcn_htMD6n5d1y7JqaL3GOlU5184vY",
  authDomain: "sacapano-portfolio.firebaseapp.com",
  projectId: "sacapano-portfolio",
  storageBucket: "sacapano-portfolio.appspot.com",
  messagingSenderId: "966993269717",
  appId: "1:966993269717:web:a2fb7fd677e4c52bb6235c",
  measurementId: "G-W4ZKK0L594"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);
