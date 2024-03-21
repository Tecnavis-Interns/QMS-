import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAlDyDm8lmGzm741WtcZ9gJIdhlym5LkeU",
  authDomain: "qms-project-27a3c.firebaseapp.com",
  projectId: "qms-project-27a3c",
  storageBucket: "qms-project-27a3c.appspot.com",
  messagingSenderId: "986396859546",
  appId: "1:986396859546:web:7f5ae033f09a6cbb2b5323",
  measurementId: "G-ESCP4WYSLZ",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
