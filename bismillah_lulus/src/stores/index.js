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

export const useApp = defineStore({
  id: "App",
  state: () => ({
    users: [],
    menu: {
      edit_user: {
        show: false,
        data: {},
      }
    },
    input: {
      user: {}
    }
  }),
  actions: {
    async addUser(user) {
      await axios.post('http://127.0.0.1:3000/users', {
        nama: user.name,
        email: user.email,
        password: user.password
      })
      .then((response) => {
        if(response.status) {
          Swal.fire({
            title: 'Success!',
            text: `You have register as ${user.name}`,
            icon: 'success',
            timer: 1500,
            showConfirmButton: false,
          });
        }
      }, (error) => {
        Swal.fire({
          title: 'Error!',
          text: `Seems like there is an error while adding user ${user.name}<br>${error}`,
          icon: 'error',
          timer: 1500,
          showConfirmButton: false,
        });
      });
      this.input.user.name = '';
      this.input.user.email = '';
      this.input.user.password = '';
    },
    async getUsers() {
      onSnapshot(collection(db, "users"), (querySnapshot) => {
        let users = [];
        querySnapshot.forEach((doc) => {
          users.push({ id: doc.id, ...doc.data() });
        });
        this.users = users;
      },
      error => {
        Swal.fire({
          title: 'Error!',
          text: `Seems like there is an error while connecting to Firestore<br>${error}`,
          icon: 'error',
          confirmButtonText: 'Cool'
        });
      }
      );
    },
  },
});