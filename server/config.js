import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// isikan firebaseConfig disini
const firebaseConfig = {
  apiKey: "AIzaSyAS1Hy3s9_FQJqvDg3DzF1PgXpawch5Ovs",
  authDomain: "express-31cf2.firebaseapp.com",
  projectId: "express-31cf2",
  storageBucket: "express-31cf2.appspot.com",
  messagingSenderId: "633424064631",
  appId: "1:633424064631:web:858334c137561b98761672"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);

export const db = firebaseApp.firestore();

// import 'firebase/auth'
// const projectAuth = firebase.auth()
// export { projectAuth }