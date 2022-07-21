<script setup>
import { onMounted, ref } from 'vue';
const props=defineProps({
  offsetHeight: Number
})
const container=ref('transparent')
const down=()=>{
  window.scrollTo({
    top: props.offsetHeight,
    behavior: "smooth"
  })
}
const handleScroll=()=>{
  let style = window.getComputedStyle(document.getElementsByClassName('top-picture')[0]);
  if(document.documentElement.scrollTop>props.offsetHeight-58||style.display==='none') {
    container.value = '#353638'
  }
  else{
    container.value='transparent'
  }
}
onMounted(()=>{
  let style = window.getComputedStyle(document.getElementsByClassName('top-picture')[0]);
  if(style.display==='none')
    container.value = '#424349'
  window.scrollTop=0
  window.addEventListener("scroll", handleScroll)
  window.onresize=handleScroll
})
</script>
<template>
<div class="menu">
  <el-menu
          default-active="1"
          mode="horizontal"
          :background-color="container"
          active-text-color="#ffd04b"
          text-color="#fff"
      >
        <el-menu-item index="0" disabled class="menu-title">
          Yorenz's Blog
        </el-menu-item>
        <el-menu-item index="1" class="tab">
          首页
        </el-menu-item>
        <el-menu-item index="2" class="tab">
          分类
        </el-menu-item>
        <el-menu-item index="3" class="tab">
          关于我
        </el-menu-item>
  </el-menu>
</div>
  
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
.menu {
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100vw;
  ::v-deep(.menu-title) {
    color: deepskyblue !important;
    cursor: pointer;
    font-weight: 700;
    font-size: 16px;
    opacity: 1;
  }
  ::v-deep(.el-menu){
    border-bottom: none;
    transition-duration: 500ms;
  }
}
.top-picture {
  position: relative;
  height: 100vh;
  width: 100vw;
    @media only screen and (max-width:1228px) {
    display: none;
  }
  &-wave{
    background: repeat-x url("./public/svg.png");
    background-size: 20%;
    height: 13vh;
    width: 100vw;
    opacity: 60%;
    position: absolute;
    left: 0;
    z-index: 1;
    //transform: translateY(calc(86vh + 6px));
    bottom: 0;
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
    mask: url(public/AYJuRke.png);
    -webkit-mask-size: 3000% 100%;
    mask-size: 3000% 100%;
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