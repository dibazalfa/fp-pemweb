<template>
  <div class="global-container">
    <nav class="navbar navbar-expand-lg" style="background-color: #c0ded9;" >
      <h1 class="navbar-brand" style="margin-left: 20px;">mungil.url</h1>
      <div class="btn-group">
        <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="bi bi-person-circle"></i>         
        </button>
        <ul class="dropdown-menu">
          <!-- <li class="dropdown-item"><router-link to="/link">List Link</router-link></li> -->
          <li><a class="dropdown-item" href="dashboard">Homepage</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="link">List Link</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#" @click="App.Logout()">Logout</a></li>
        </ul>
      </div>
    </nav>
    <form @submit.prevent="App.addShortenLink(App.input.link)">
    <h1 class="text-center mt-5">SHORTEN HERE</h1>
      <div class="long-link text-center" style="margin: 50px;">
          <label class="form-label">Your Original Link</label>
          <div class="mb-3 row g-3" style="justify-content: center;">
              <input type="url" class="form-control" required placeholder="Input Your Long URL in here" style="width: 450px;"
            v-model="App.input.link.longLink">   
          </div>
        </div>
        <div class="shorten mt-5">
          <div>
              <label class="form-label">Customize Your Link</label>
          </div>
          <div class="row g-3" style="justify-content: center;">
              <div class="col-auto">
                  <label class="form-control">mungil.url/</label>   
              </div>
              <div class="col-auto">
                  <input type="text" required class="form-control" placeholder="customize-link"
                  v-model="App.input.link.shortLink ">   
              </div>
              <div class="col-auto">
                  <button @click="show = true; " class="btn btn-success" type="submit">SHORTEN</button>
              </div>
            </div>
      </div>
      <div v-if="(show == true)">
      <div class="link mt-5 text-center">
          <div>
              <label class="form-label">Your Link Is Ready!</label>
          </div>
          <div class="row g-3" style="justify-content: center;">
              <input v-model="App.createdLink" type="text" class="form-control" style="width: 380px;">
              <!-- <input type="text" class="form-control" style="width: 380px;"> -->
          </div>
          <br>

          <form class="row g-3" style="justify-content: center;">
          <div class="col-auto">
            <router-link to="/link">
              <button class="btn btn-primary">MY URL</button>
            </router-link>
        </div>
          <div class="col-auto">
              <button class="btn btn-success" @click="(show = false)" type="button">SHORTEN ANOTHER</button>
          </div>
        </form>
    </div>
    </div>
    </form>
  </div>
</template>

<script>
import {useApp} from '../stores/index';
export default {
    data() {
        return {
            show: false,
        }
    },
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

h3 {
    text-align: center;
}
.shorten {
    text-align: center;
}

.global-container {
    height: 730px;
}

</style>