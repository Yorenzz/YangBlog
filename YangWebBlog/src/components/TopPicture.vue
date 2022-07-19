<script setup>
const down=()=>{
  window.scrollTo({
    top: 750.6666870117188,
    behavior: "smooth"
  })
}
</script>
<template>
  <div class="top-picture">
    <div class="top-picture-first"></div>
    <div class="top-picture-second"></div>
    <div class="top-picture-wave"></div>
    <div class="title-all">
      <div class="title" data-text="Yorenz's Blog">
        Yorenz's Blog
      </div>
    </div>
    <div class="down" @click="down"><el-icon :size="50"><Bottom /></el-icon></div>
  </div>

</template>

<style scoped lang="scss">
@import '../scss/vue';
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
    background: url(public/homepic1.jpg) no-repeat left top;
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
    background: url(public/homepic2.jpg) no-repeat left top;
    background-size: cover;
  }

  .title-all {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
    line-height: 17vh;
    width: 50vw;
    height: 20vh;
    border-radius: 20px;
  }

  .title {
    font-family: "Comic Sans MS", cursive, sans-serif;
    font-size: 6rem;
    color: white;
    text-shadow: 5px 5px 5px #16efd6;
    z-index: 1;
    position: relative;
  }

  .title::before {
    content: attr(data-text);
    position: absolute;
    font-size: 6rem;
    top: 50%;
    left: 49.5%;white-space: nowrap;
    transform: translate(-50%,-50%);
    text-shadow: 4px 0 red;
    clip-path: inset(0 0 0 0);
    animation: ani2 1s infinite linear alternate-reverse;
  }

  .title::after {
    content: attr(data-text);
    font-size: 6rem;
    white-space: nowrap;
    position: absolute;
    top: 50%;
    left: 50.5%;
    transform: translate(-50%,-50%);
    text-shadow: -4px 0 blue;
    clip-path: inset(0 0 0 0);
    animation: ani1 1s infinite linear alternate-reverse;
  }

  .down {
    width: 50px;
    height: 50px;
    position: absolute;
    border: 2px #213547 solid;
    border-radius: 50%;
    animation: tik 0.5s infinite alternate;
    top: 80%;
    left: 50%;
    cursor: pointer;
  }
}//top-picture

</style>