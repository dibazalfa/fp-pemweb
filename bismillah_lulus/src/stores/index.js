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
    async Register(user) {
      await axios.post('http://127.0.0.1:3000/register', {
        // nama: user.name,
        email: user.email,
        password: user.password
      })
      .then((response) => {
        if(response.status) {
          Swal.fire({
            icon: 'success',
            title: 'Register Success',
            text: `You have register with an email: ${user.email}`,
            footer: '<a href="login">Continue to Login</a>'
          })
        }
      }, (error) => {
        Swal.fire({
          icon: 'error',
          title: 'There is an Error',
          text: `You failed to register with this email: ${user.email}`,
        })
      });
      // this.input.user.name = '';
      this.input.user.email = '';
      this.input.user.password = '';
    },
    async Login(user) {
      // try {
      //   const {data} = await axios.post('http://127.0.0.1:3000/login', {
      //       email: user.email,
      //       password: user.password
      //     })
      // } catch(error) {
      //   Swal.fire({
      //       icon: 'error',
      //       title: 'There is an Error',
      //       text: `You failed to login with this email: ${user.email}`,
      //     })
      // } finally {
      //   this.router.push('/dashboard')
      // }
      await axios.post('http://127.0.0.1:3000/login', {
        email: user.email,
        password: user.password
      })
      .then((response) => {
        if(response.status) {
          this.router.push("/dashboard");
        }
      }, (error) => {
        Swal.fire({
          icon: 'error',
          title: 'There is an Error',
          text: `You failed to login with this email: ${user.email}`,
        })
      });
      this.input.user.email = '';
      this.input.user.password = '';
    }
  },
});