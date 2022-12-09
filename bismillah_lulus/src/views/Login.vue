<template>
<div>
    <header>
    <div class="judul">
        <h1 class="text-center"><b>MUNGIL.URL</b></h1>
        <p class="text-center"><i>make your link shorter with just one click</i></p>
    </div>
    </header>
    <body>
        <div class="global-container">
            <div class="card login-form">
                <div class="card-body">
                    <h1 class="card-title text-center"> LOGIN </h1>
                </div>
                <div class="card-text">
                    <div class="mb-3">
                        <label class="form-label">Email</label>
                        <input type="text" class="form-control" 
                        v-model="App.input.user.email">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Password</label>
                        <input type="password" class="form-control"
                        v-model="App.input.user.password">
                    </div>
                    <div>
                        <button @click="App.Login(App.input.user)" type="button" class="btn btn-success">Login</button>
                    </div>
                    <div class="mt-2" style="text-align: center;">
                        <!-- ini nanti make router link oke -->
                        <router-link to="/register">Don't Have an Account? Register Here</router-link>
                    </div>
                </div>
            </div>
        </div>
    </body>
</div>
</template>

<script setup>
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

.login-form {
    width: 350px;
    height: 360px;
    padding: 20px;
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