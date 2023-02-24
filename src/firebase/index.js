import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
 
const firebaseConfig = {
  apiKey: "AIzaSyC9-jhvNSwjaB2u_LUEC-fYAm6FvOEI5ig",
  authDomain: "path-friends-65426.firebaseapp.com",
  projectId: "path-friends-65426",
  storageBucket: "path-friends-65426.appspot.com",
  messagingSenderId: "653725395063",
  appId: "1:653725395063:web:a8c060416fe1e6f9f07e72"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const analytics = getAnalytics(app);

const mainFirebase = () => {

    return { app, auth, db, analytics }
}

export default mainFirebase 