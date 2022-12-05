<template>
  <header>
    <div class="global-container">
    <h1 class="text-center"><b>OUR SHORTEN LINK</b></h1>
    <p class="text-center"><i>make your link shorter with just one click</i></p>
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
  padding-top: 50px;
}
p {
  padding: 10px;
}
.global-container {
  /* background-color: #edffff; */
}
</style>