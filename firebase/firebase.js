// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getStorage} from "firebase/storage"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAmyDTiuNRqB8rzuBxobpS4rsC4Qtr0K5k",
  authDomain: "my-new-chatapp-bd6fc.firebaseapp.com",
  projectId: "my-new-chatapp-bd6fc",
  storageBucket: "my-new-chatapp-bd6fc.appspot.com",
  messagingSenderId: "376718232659",
  appId: "1:376718232659:web:57f4b70aee19ef90bacaa6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app);
export const db = getFirestore(app)