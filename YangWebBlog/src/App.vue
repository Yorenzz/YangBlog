<script setup>
import Home from './pages/Home.vue'
</script>

<template>
  <div id="blog-app">
    <div class="main-app">
      <Home />
    </div>
  </div>

</template>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
#blog-app {
  display: flex;
  height: 100%;
  box-sizing: border-box;
}
.main-app::-webkit-scrollbar {
  display: none;
}
.main-app {
  flex: 1;
  height: 100%;
  overflow: auto;
}
</style>
