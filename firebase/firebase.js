import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXJDg1dFBWVjyzjQ_0im9MjxfcZU4YjqY",
  authDomain: "news-app-d24a3.firebaseapp.com",
  projectId: "news-app-d24a3",
  storageBucket: "news-app-d24a3.appspot.com",
  messagingSenderId: "611028498369",
  appId: "1:611028498369:web:a6702d9fc57eb6024e6140",
  measurementId: "G-RB4XMMP3WT",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
