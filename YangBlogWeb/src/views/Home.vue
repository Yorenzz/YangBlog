<template>
  <el-carousel
      class="hidden lg:block absolute w-full h-full"
      :height='bannerHeight'
      arrow="never"
      trigger="click"
      :pause-on-hover='false'
  >
    <el-carousel-item>
    <el-image src="https://mypic-1305446179.cos.ap-guangzhou.myqcloud.com/%E5%A3%81%E7%BA%B8/4d629ad68f516e680ce3e0e4538195eb3e692aa3.png"/>
  </el-carousel-item>
    <el-carousel-item>
      <el-image src="https://mypic-1305446179.cos.ap-guangzhou.myqcloud.com/%E5%A3%81%E7%BA%B8/%EF%BC%9F/c76807747ab0b12f685229817a22c22634a98f27.jpg"/>
    </el-carousel-item>
    <el-carousel-item>
      <el-image src="https://mypic-1305446179.cos.ap-guangzhou.myqcloud.com/%E5%A3%81%E7%BA%B8/05fe8a1f3808a53d93dbbc020d2200163c7b1b36.jpg"/>
    </el-carousel-item>
    <el-carousel-item>
      <el-image src="https://mypic-1305446179.cos.ap-guangzhou.myqcloud.com/%E5%A3%81%E7%BA%B8/75cf54b808438c7226c5e71e22f0d7d9495d112c.jpg"/>
    </el-carousel-item>
  </el-carousel>

  <div class="topContainer mb-24">
    <div id="topDown" class="topDown hidden lg:block" @click="down"></div>
      <el-menu
          default-active="1"
          mode="horizontal"
          :background-color="container"
          active-text-color="#ffd04b"
          text-color="#fff"
      >
        <el-menu-item index="0" disabled id="title">
          Yang's Blog
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
  <div class="flex">
    <div class="hidden sm:block transition-all duration-300 hover:shadow-sml w-1/6 bg-white h-screen border rounded-sm border-solid border-gray-300 ml-4 mr-2">
      <el-avatar
          shape="square"
          size="200"
          src="https://mypic-1305446179.cos.ap-guangzhou.myqcloud.com/%E5%A3%81%E7%BA%B8/ba07afa100ed743f068fe35a75353b06.png"
      />
      <hr/>
      <div class="mb-4 text-4xl text-blue-500 font-bold font-mySan">
        YangEzzz
      </div>
      <span>前端开发，后端玩玩nodejs</span>
    </div>
    <div class="flex-1 transition-all duration-300 hover:shadow-smm h-screen bg-white border rounded-sm border-solid border-gray-300 ml-2 mr-2">
      mid
    </div>
    <div class="hidden transition-all duration-300 hover:shadow-smr lg:block hover:shadow w-1/6 h-screen bg-white border rounded-sm border-solid border-gray-300 ml-2 mr-4">
      right
    </div>
  </div>
<!--<hr/>-->
</template>

<script setup>
import {onMounted, ref} from 'vue'
const container=ref('transparent')
const bannerHeight=ref('500px')
const handleScroll=()=>{
  let style = window.getComputedStyle(document.getElementById('topDown'));
  if(document.documentElement.scrollTop>455||style.display==='none') {
    container.value = '#303336'
  }
  else
    container.value='transparent'
}
const down=()=>{
  window.scrollTo({
    top: 630.6666870117188,
    behavior: "smooth"
  })
}
const toTop=()=>{
  window.scrollTo({
    top:0,
    behavior: 'smooth'
  })
}
onMounted(()=>{
  let style = window.getComputedStyle(document.getElementById('topDown'));
  if(style.display==='none')
    container.value = '#303336'
  window.scrollTop=0
  window.addEventListener("scroll", handleScroll)
  window.onresize=handleScroll
  bannerHeight.value=document.documentElement.clientHeight-document.documentElement.scrollLeft+'px'
})
</script>

<style scoped>
::v-deep(#title){
  color: deepskyblue !important;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  /*opacity: 1;*/
  @apply opacity-100
}
::v-deep(.el-menu){
  border-bottom: none;
  @apply h-[57px] duration-500 text-blue-500 w-full fixed top-0 z-10;
}
::v-deep(.tab):hover{
  background-color: rgba(116, 121, 122, 0.92) !important;
}
.topContainer::after {
  content: 'Yang\'s Blog';
  font-family: "Comic Sans MS", cursive, sans-serif;
  font-size: 8rem;
  color: white;
  text-shadow: 5px 5px 5px #16efd6;
  position: absolute;
  height: 15rem;
  width: 45rem;
  background: transparent;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  @apply hidden lg:block
}
.topDown::before {
  content: url("../public/down.svg");
  position: absolute;
  color: #16efd6;
  top: 70%;
  left: 50%;
  z-index: 1;
  pointer-events: auto;
  cursor: pointer;
  animation-duration: 0.5s;
  animation-name: tik;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
@keyframes tik {
  from {
    transform: translateX(-50%) translateY(-3%) scale(0.35);
  }
  to {
    transform: translateX(-50%) translateY(3%) scale(0.35);
  }
}
.topDown{
  pointer-events: none
}

</style>
