<script setup>
</script>

<template>
  <div class="top-picture">
    <div class="top-picture-first"></div>
    <div class="top-picture-second"></div>
    <div class="top-picture-wave"></div>
  </div>
</template>

<style scoped lang="scss">
@import '../scss/animation';
.top-picture {
  position: relative;
  height: 100vh;
  width: 100vw;
  &-wave{
    background: repeat-x url("./public/svg.png");
    background-size: 30%;
    height: 100vh;
    width: 100vw;
    opacity: 60%;
    position: absolute;
    left: 0;
    transform: translateY(80%);
  }
  &-first {
    background: url(https://pic-1305446179.cos.ap-guangzhou.myqcloud.com/05fe8a1f3808a53d93dbbc020d2200163c7b1b36.jpg) no-repeat left top;
    background-size: cover;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }
  &-second {
    position: absolute;
    height: 100vh;
    width: 100vw;
    left: 0;
    top: 0;
    -webkit-mask: url(public/AYJuRke.png);
    -webkit-mask-size: 3000% 100%;
    animation: maskMove 2s steps(29) infinite alternate;

  }
  &-second::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: url(https://pic-1305446179.cos.ap-guangzhou.myqcloud.com/c76807747ab0b12f685229817a22c22634a98f27.jpg) no-repeat left top;
    background-size: cover;
  }
}
</style>