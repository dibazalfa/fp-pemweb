<template>
  <div class="global-container">
    <nav class="navbar navbar-expand-lg" style="background-color: #c0ded9;" >
      <h1 class="navbar-brand" style="margin-left: 20px;">mungil.url</h1>
      <div class="btn-group">
        <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="bi bi-person-circle"></i>         
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">log out</a></li>
          <li><hr class="dropdown-divider"></li>
        </ul>
      </div>
    </nav>
      <div class="long-link text-center" style="margin: 50px;">
          <label class="form-label">Your Original Link</label>
          <div class="mb-3 row g-3" style="justify-content: center;">
              <input type="text" class="form-control" placeholder="Input Your Long URL in here" style="width: 450px;"
              v-model="longLink">   
          </div>
        </div>
        <div class="shorten mt-5">
          <div>
              <label class="form-label">Customize Your Link</label>
          </div>
          <form class="row g-3" style="justify-content: center;">
              <div class="col-auto">
                  <label class="form-control">mungil.url/</label>   
              </div>
              <div class="col-auto">
                  <input class="form-control" placeholder="customize-link"
                  v-model="shortLink">   
              </div>
              <div class="col-auto">
                  <button @click="App.addShortenList(link)" class="btn btn-success">SHORTEN</button>
              </div>
          </form>
      </div>
      <!-- Nanti Pakai v-if -->
      <div class="link mt-5 text-center">
          <div>
              <label class="form-label">Your Link Is Ready!</label>
          </div>
          <div class="row g-3" style="justify-content: center;">
              <input type="text" value="" class="form-control" style="width: 380px;">
          </div>
          <br>

          <form class="row g-3" style="justify-content: center;">
          <div class="col-auto">
              <button class="btn btn-primary">MY URL</button>
          </div>
          <div class="col-auto">
              <button class="btn btn-success">SHORTEN ANOTHER</button>
          </div>
      </form>
      </div>
  </div>
</template>

<script>


</script>

<style>
/* .addtask {
    text-align: center;
} */
h3 {
    text-align: center;
}
.shorten {
    text-align: center;
}

</style>