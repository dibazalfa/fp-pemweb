import { defineStore } from "pinia";
import axios from "axios";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  onSnapshot,
  QuerySnapshot,
} from "firebase/firestore";
import Swal from 'sweetalert2';

// isikan firebaseConfig disini
const firebaseConfig = {
  apiKey: "AIzaSyA72Bzke3fKirynWq1vqkswnB7VbPQoJWU",
  authDomain: "final-project-47af7.firebaseapp.com",
  projectId: "final-project-47af7",
  storageBucket: "final-project-47af7.appspot.com",
  messagingSenderId: "276976640348",
  appId: "1:276976640348:web:29f61c2a9d81cd2801e199"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export const useApp = defineStore({
  id: "App",
  state: () => ({
    users: [],
    links: [],
    menu: {
      edit_user: {
        show: false,
        data: {},
      }
    },
    view: false,
    input: {
      user: {},
      link: {
        shortLink: "",
        longLink: ""
      }
    },
    createdLink : ""
  }),
  actions: {
    async Register(user) {
      await axios.post('http://127.0.0.1:3000/register', {
        // nama: user.name,
        email: user.email,
        password: user.password
      })
        .then((response) => {
          if (response.status) {
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
      await axios.post('http://127.0.0.1:3000/login', {
        email: user.email,
        password: user.password
      })
        .then((response) => {
          console.log(response.data.userid)
            localStorage.setItem("userId", response.data.userid )
            this.router.push("/dashboard");
        }).catch((err) => {
          (error) => {
            Swal.fire({
              icon: 'error',
              title: 'Check Your Email / Password again',
              text: `You failed to login with this email: ${user.email}`,
            })
          }
        });
      this.input.user.email = '';
      this.input.user.password = '';
    },
    async Logout() {
      this.user = null;
      this.router.push("/login")
    },
    async addShortenLink(link) {
      console.log("test")
      const uid = localStorage.getItem("userId")
      console.log(uid)
      await axios.post('http://127.0.0.1:3000/link', {
        long: link.longLink,
        short: link.shortLink,
        userId: uid
      }).then((response) => {
        if (response.status) { 
          Swal.fire({
            title: 'Success!',
            text: `Succesesfully added your mungil.url!`,
            icon: 'success',
            timer: 1500,
            showConfirmButton: false,
          });
        }
      }, (error) => {
        Swal.fire({
          title: 'Error 404!',
          text: `Seems like there is an error while adding the link <br>${error}`,
          icon: 'error',
          timer: 1500,
          showConfirmButton: false,
        });
      });
      this.createdLink = "http://localhost:5173/" + link.shortLink
      this.input.link.longLink = '';
      this.input.link.shortLink = '';

      // this.$router.push('/link');
    },
    async getLinks() {
      axios.get("http://localhost:3000/link/"+ localStorage.getItem("userId")).then(res => {  
        this.links = res.data
      }).catch(err =>
        error => {
          Swal.fire({
            title: 'Error!',
            text: `Seems like there is an error while connecting to Firestore<br>${error}`,
            icon: 'error',
            confirmButtonText: 'Cool'
          });
        })
    },
    async redirect(short){
      const res = await axios.get(`http://127.0.0.1:3000/link/redirect/${short}`).catch((err)=>{
        console.log(err)
      })
      window.location.href= res.data.links.long
    }
  },
});