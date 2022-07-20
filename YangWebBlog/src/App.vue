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
<style scoped lang="scss">
@import './scss/vue.scss';
#blog-app {
  display: flex;
  height: 100%;
  box-sizing: border-box;
  background-color: $theme-color;
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
