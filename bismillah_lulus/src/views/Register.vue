<template>
<div>
    <header>
    <div class="judul">
        <h1 class="text-center"><b>MUNGIL.URL</b></h1>
        <p class="text-center"><i>make your link shorter with just one click</i></p>
    </div>
    </header>
  <div class="global-container">
        <div class="card register-form">
            <div class="card-body">
                <h1 class="card-title text-center"> REGISTER </h1>
            </div>
            <div class="card-text">
                <div class="mb-3">
                    <label class="form-label" for="email">Email</label>
                    <input type="text" class="form-control" id="email"
                    v-model="App.input.user.email">
                </div>
                <div class="mb-3">
                    <label class="form-label" for="username">Username</label>
                    <input type="text" class="form-control" id="username"
                    v-model="App.input.user.name">
                </div>
                <div class="mb-3">
                    <label class="form-label" for="password">Password</label>
                    <input type="password" class="form-control" id="password"
                    v-model="App.input.user.password">
                </div>
                <div>
                    <button class="btn btn-success"
                    @click="App.Register(App.input.user)">Register</button>
                </div>
                <div class="mt-2" style="text-align: center;">
                    <!-- ini nanti make router link oke -->
                    <router-link to="/login">Have an Account? Login Here</router-link>                
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {useApp} from '../stores/index';
export default {
  setup() {
    const App = useApp();
    return {
      App,
    }
  },
  created() {
  }
}
</script>

<style scoped>
/* html, body {
    height: 100%;
    background-color: #edffff;
} */

.global-container {
    /* height: 100%; */
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f0efef;
    height: 610px;
}

.register-form {
    width: 350px;
    height: 450px;
    padding: 20px;
    /* background-color: #d8f8ff; */
    background-color: #eaece5; 
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

a {
    color: black;
    text-decoration: none;
}

.judul {
  background-color:#c0ded9;
  padding: 20px;
}
</style>
