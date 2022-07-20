<template>
  <div class="hidden lg:block w-full" id="topBg">
    <div class="img1"></div>
    <div class="img2"></div>
    <div class="wave"></div>
  </div>
  <el-backtop :bottom="50" :visibility-height="300">
    <div
        style="
        height: 100%;
        width: 100%;
        background-color: var(--el-bg-color-overlay);
        box-shadow: var(--el-box-shadow-lighter);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      "
    >
      UP
    </div>
  </el-backtop>
  <div class="topContainer mb-16">
    <div class="topContainerAfter1"><div class="topContainerAfter" data-text="Yorenz's Blog">Yorenz's Blog</div></div>
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
<!--    <div id="menu"><n-menu mode="horizontal" :options="options" /></div>-->

  </div>
  <div class="flex mb-8 items-start">
<!--    左侧部分-->
    <div class="hidden h-auto sm:block transition-all duration-300 hover:shadow-sml w-1/6 bg-white border rounded-sm border-solid border-gray-300 ml-4 mr-2">
      <el-avatar
          shape="square"
          :size="200"
          src="https://pic-1305446179.cos.ap-guangzhou.myqcloud.com/ba07afa100ed743f068fe35a75353b06.png"
      />
      <hr/>
      <div class="mb-4 text-4xl text-blue-500 font-bold font-mySan">
        YangEzzz
      </div>
      <span>前端开发，后端玩玩nodejs</span>
    </div>
<!--    正文部分-->
    <div class="text-left flex-1 ml-2 mr-2">
      <div class="mb-8 py-4 px-8 transition-all duration-300 hover:shadow-smm bg-white border rounded-sm border-solid border-gray-300 " v-for="(item,index) in textArray">
        <div v-html="item.describe"></div>
        <div class="flex justify-center mt-8 mb-4"><el-button>阅读全文</el-button></div>
      </div>
      <div class="flex justify-center">
        <el-pagination
            background
            layout="prev, pager, next"
            :total="50"
            :current-page="currentPage"
            @update:current-page="pageChange"
        />
      </div>
    </div>
<!--    右侧部分-->
    <div class="hidden transition-all duration-300 hover:shadow-smr lg:block hover:shadow w-1/6 bg-white border rounded-sm border-solid border-gray-300 ml-2 mr-4">
      right
    </div>
  </div>
<!--<hr/>-->
  <footer class="h-[260px] bg-[#383838]">
  <div class="text-gray-400">sssss</div>
  <hr class="w-[1200px] m-auto border-none bg-gray-500 h-[1px] mb-4 mt-4">
  <span class="text-gray-400">Copyright © 2022 - ~ Yang'S BLOG</span>
  <div class="flex justify-center mt-4">
    <div class="mr-8">
    <a rel="external nofollow noopener" href="https://github.com/YangEzzz/YangBlog" target="_blank" title="本博客已开源于github">
      <img src="https://img.shields.io/badge/YangBlog-OpenSource-brightgreen" alt=""/>
    </a>
  </div>
    <div class="mr-8">
      <a rel="external nofollow noopener" href="https://v3.cn.vuejs.org/guide/introduction.html" target="_blank" title="Vue.js客户端渲染">
        <img src="https://img.shields.io/badge/SPA-Vue.js-blue" alt=""/>
      </a>
    </div>
    <div class="mr-8">
      <a rel="external nofollow noopener" href="https://element-plus.org/zh-CN/component/button.html" target="_blank" title="UI框架ElementUI">
        <img src="https://img.shields.io/badge/UI-ElementUI-red" alt=""/>
      </a>
    </div>
    <div class="mr-8">
      <a rel="external nofollow noopener" href="https://cloud.tencent.com" target="_blank" title="腾讯云提供服务器及域名服务">
        <img src="https://img.shields.io/badge/VPS&DNS-TencentCloud-deepskyblue" alt=""/>
      </a>
    </div>
    <div>
      <a rel="external nofollow noopener" href="https://console.cloud.tencent.com/cos" target="_blank" title="静态资源存储于腾讯COS对象存储">
        <img src="https://img.shields.io/badge/OSS-TencentCOS-pink" alt=""/>
      </a>
    </div>
  </div>

</footer>
</template>

<script setup>
import {nextTick, onMounted, ref} from 'vue'
import {getText} from "../api";

const container=ref('transparent')
const bannerHeight=ref('500px')
const textArray=ref([])
const text=ref()
let currentPage=ref(1)
let pageSize=ref(5)
const pageChange=(page)=>{
  currentPage.value=page
  console.log(page)
}
const handleScroll=()=>{
  let style = window.getComputedStyle(document.getElementById('topDown'));
  if(document.documentElement.scrollTop>455||style.display==='none') {
    container.value = '#353638'
    // document.getElementById('menu').style.backgroundColor=container.value
    //console.log('menu',document.getElementById('menu').style.backgroundColor)
  }
  else{
    container.value='transparent'
    // document.getElementById('menu').style.backgroundColor=container.value
  }

}
const down=()=>{
  window.scrollTo({
    top: 750.6666870117188,
    behavior: "smooth"
  })
}
onMounted(()=>{
  let style = window.getComputedStyle(document.getElementById('topDown'));
  if(style.display==='none')
    container.value = '#424349'
  window.scrollTop=0
  window.addEventListener("scroll", handleScroll)
  window.onresize=handleScroll
  bannerHeight.value=document.documentElement.clientHeight-document.documentElement.scrollLeft+'px'
  console.log('b',bannerHeight.value)
})
onMounted(()=>{
  getText({category:'生活随笔'}).then((res)=>{
    console.log(res.data)
    textArray.value=res.data.map((item) => {
      item.text = item.text.replaceAll('<pre>', '<pre class="language-js line-numbers">')
      item.describe=item.describe.replaceAll('<pre>', '<pre class="language-js line-numbers">')
      return item
    })
    nextTick(()=>{Prism.highlightAll()})
  })

})
</script>

<style scoped>
.wave{
  background: repeat-x url("../../../YangWebBlog/public/svg.png");
  background-size: 30%;
  height: 590px;
  width: 100%;
  opacity: 60%;
  position: absolute;
  top: 79%;
}
.img1 {
  background: url(https://pic-1305446179.cos.ap-guangzhou.myqcloud.com/05fe8a1f3808a53d93dbbc020d2200163c7b1b36.jpg) no-repeat left top;
  background-size: cover;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
}

.img2 {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  mask: url(https://i.imgur.com/AYJuRke.png);
  mask-size: 3000% 100%;
  animation: maskMove 2s steps(29) infinite alternate;
}

.img2::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: url(https://pic-1305446179.cos.ap-guangzhou.myqcloud.com/c76807747ab0b12f685229817a22c22634a98f27.jpg) no-repeat left top;
  background-size: cover;
}

@keyframes maskMove {
  from {
    mask-position: 0 0;
  }
  to {
    mask-position: 100% 0;
  }
}
#topBg{
  height: v-bind(bannerHeight);
}
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
.topContainerAfter1{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-60%);
  /*background: rgb(255,255,255,0.6);*/
  border-radius: 20px;
  /*backdrop-filter:blur(4px);*/
  width: 900px;
  height: 200px;
}
.topContainerAfter {
  font-family: "Comic Sans MS", cursive, sans-serif;
  font-size: 8rem;
  /*animation: shine 2.4s infinite;*/
  color: white;
  text-shadow: 5px 5px 5px #16efd6;
  /*height: 15rem;*/
  /*width: 45rem;*/
  /*background: rgb(255,255,255,0.6);*/
  z-index: 1;
  position: relative;
  @apply hidden lg:block
}
.topContainerAfter::before {
  content: attr(data-text);
  position: absolute;
  font-size: 8rem;
  top: 50%;
  left: 49.5%;white-space: nowrap;
  transform: translate(-50%,-50%);
  text-shadow: 4px 0 red;
  clip-path: inset(0 0 0 0);
  animation: ani2 1s infinite linear alternate-reverse;
}

.topContainerAfter::after {
  content: attr(data-text);
  font-size: 8rem;white-space: nowrap;
  /*background: rgb(255,255,255,0.6);*/
  position: absolute;
  top: 50%;
  left: 50.5%;
  transform: translate(-50%,-50%);
  text-shadow: -4px 0 blue;
  clip-path: inset(0 0 0 0);
  animation: ani1 3s infinite linear alternate-reverse;
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
@keyframes ani1 {
  0%{
    clip-path: inset(0 0 0 0)
  }
  10%{
    clip-path: inset(71px 0 168px 0)
  }
  20%{
    clip-path: inset(56px 0 144px 0)
  }
  30%{
    clip-path: inset(21px 0 92px 0)
  }
  40%{
    clip-path: inset(25px 0 117px 0)
  }
  50%{
    clip-path: inset(100px 0 83px 0)
  }
  60%{
    clip-path: inset(175px 0 129px 0)
  }
  70%{
    clip-path: inset(165px 0 73px 0)
  }
  80%{
    clip-path: inset(66px 0 65px 0)
  }
  90%{
    clip-path: inset(59px 0 75px 0)
  }
  100%{
    clip-path: inset(2px 0 58px 0)
  }
}

@keyframes ani2 {
  0%{
    clip-path: inset(0 0 0 0)
  }
  10%{
    clip-path: inset(161px 0 144x 0)
  }
  20%{
    clip-path: inset(131px 0 129px 0)
  }
  30%{
    clip-path: inset(145px 0 77px 0)
  }
  40%{
    clip-path: inset(110px 0 35px 0)
  }
  50%{
    clip-path: inset(174px 0 5px 0)
  }
  60%{
    clip-path: inset(144px 0 114px 0)
  }
  70%{

    clip-path: inset(62px 0 52px 0)
  }
  80%{
    clip-path: inset(158px 0 58px 0)
  }
  90%{
    clip-path: inset(26px 0 14px 0)
  }
  100%{
    clip-path: inset(127px 0 84px 0)
  }
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
