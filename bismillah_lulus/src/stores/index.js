import { defineStore } from "pinia";
import axios from "axios";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  onSnapshot,
} from "firebase/firestore";
import Swal from 'sweetalert2';

// isikan firebaseConfig disini
const firebaseConfig = {
    apiKey: "AIzaSyAS1Hy3s9_FQJqvDg3DzF1PgXpawch5Ovs",
    authDomain: "express-31cf2.firebaseapp.com",
    projectId: "express-31cf2",
    storageBucket: "express-31cf2.appspot.com",
    messagingSenderId: "633424064631",
    appId: "1:633424064631:web:858334c137561b98761672"
  };
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)