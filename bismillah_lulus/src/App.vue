<template>
  <header>
    <div class="container">
    <h1 class="text-center">OUR SHORTEN LINK</h1>
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
</style>