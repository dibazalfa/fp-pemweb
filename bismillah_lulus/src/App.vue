<template>
  <header>
    <div class="global-container">
    <!-- <div class="judul">
      <h1 class="text-center"><b>MUNGIL.URL</b></h1>
      <p class="text-center"><i>make your link shorter with just one click</i></p>
    </div> -->
    <RouterView />
      <nav>
        <RouterLink to="/"></RouterLink>
        <RouterLink to="/about"></RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
h1 {
  padding-top: 20px;
}
p {
  /* padding: 10px; */
  /* padding-bottom: 20px; */
}
.judul {
  background-color:#c0ded9;
}

.global-container {
  background-color: #f0efef;
  height: 610px;
}
</style>