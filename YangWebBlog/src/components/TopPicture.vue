<script setup>
</script>
<template>
  <div class="top-picture">
    <!-- <div class="top-picture-first"></div>
    <div class="top-picture-second"></div>
    <div class="top-picture-wave"></div> -->
    <div class="title" data-text="Yorenz's Blog">Yorenz's Blog</div>
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

  .title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-family: "Comic Sans MS", cursive, sans-serif;
    font-size: 6rem;
    text-align: center;
    line-height: 17vh;
    color: white;
    text-shadow: 5px 5px 5px #16efd6;
    z-index: 1;
    width: 35vw;
    height: 20vh;
  }

  .title::before {
    top: 43%;
    left: 49%;
    content: attr(data-text);
    position: absolute;
    font-size: 6rem;
    text-shadow: 4px 0 red;
    white-space: nowrap;
    transform: translate(-50%,-50%);
    clip-path: inset(0 0 0 0);
    animation: ani2 1s infinite linear alternate-reverse;
  }

  .title::after {
    top: 43%;
    left: 51%;
    content: attr(data-text);
    position: absolute;
    font-size: 6rem;
    text-shadow: -4px 0 blue;
    white-space: nowrap;
    transform: translate(-50%,-50%);
    clip-path: inset(0 0 0 0);
    animation: ani1 3s infinite linear alternate-reverse;
  }
}//top-picture

</style>