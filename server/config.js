import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// isikan firebaseConfig disini
const firebaseConfig = {
  apiKey: "AIzaSyA72Bzke3fKirynWq1vqkswnB7VbPQoJWU",
  authDomain: "final-project-47af7.firebaseapp.com",
  projectId: "final-project-47af7",
  storageBucket: "final-project-47af7.appspot.com",
  messagingSenderId: "276976640348",
  appId: "1:276976640348:web:29f61c2a9d81cd2801e199"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = firebaseApp.firestore();

// import 'firebase/auth'
// const projectAuth = firebase.auth()
// export { projectAuth }