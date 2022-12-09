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
      <div class="" style="text-align: center; padding: 35px; width: 60%; margin: 5px auto;">
          <h1><b>Welcome to <span>mungil.url</span></b></h1>
          <p>Make your long links into short just in one click, or create your personal <br> Wanna try it now?</p>
          <div class="item-logo">  
            <img src="../assets/gambar.png" alt="image" class="image">  
          </div> <br> <br>
          <router-link to="/create">
            <button type="button" class="btn btn-success">Get Started</button>
          </router-link>
      </div>
  </div>
</template>

<style scoped>
  body {
    background-color:rgb(246, 242, 236);
  }

  p{
    padding: 20px;
  }

  .global-container {
    background-color: #f0efef;
    height: 750px;
  }

  span {
    color: #588c7e;
  }

  .item-logo .image {
    width: 350px;
    height: 350px;
  }
</style>
  
  <script>
  export default {
  
  }
  </script>