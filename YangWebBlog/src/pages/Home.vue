<script setup>
import TopPicture from "../components/TopPicture.vue";
import LeftIntroduction from "../components/LeftIntrodution.vue";
import RightDetail from "../components/RightDetail.vue";
import Footer from "../components/Footer.vue";
import { useRoute } from "vue-router";
import {computed, reactive} from "vue";
import {getIP} from "../api/index.js";
const route =useRoute()

const data=reactive({
  ip: '',
  ipData: []
})
const innerWidth=computed(()=>window.innerWidth)

const getVisitorIP=()=>{
  fetch('https://extreme-ip-lookup.com/json/').then(res=>{
    res.json().then(res1=>{
      data.ip=res1.query
      console.log('log', data.ip)
      fetch(`https://api.vore.top/api/IPdata?ip=${data.ip}`).then(res2=>{
        res2.json().then(res3=>{
          console.log('ipfrom', res3.ipdata)
          data.ipData=res3['ipdata']
        })
      })
    })
  })
}
getVisitorIP()
</script>

<template>
  <TopPicture/>
  <div class="content-middle">
    <div class="content">
    <LeftIntroduction />
    <div class="middle1">
      <router-view />
    </div>
    <RightDetail />
    </div>
  </div>
  <Footer />
</template>

<style scoped lang="scss">
@import '../scss/vue.scss';
.top-picture {
  margin-bottom: 32px;

}
.left-introduction {
  @media only screen and (max-width:900px) {
    display: none;
  }
}
.right-detail {
  @media only screen and (max-width:1024px) {
    display: none;
  }
}
.middle1 {
  width: 62.5%;
  margin-left: 16px;
  margin-right: 16px;
}
.visible-pic {
  margin-top: 90px !important;
}
.content-middle{
  display: flex;
  justify-content: center;
}
.content {
  width: 1400px;
  background: $theme-color;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 90px;
  padding: 0 32px;
  @media only screen and (max-width:1228px) {
    margin-top: 58px;
  }
}
</style>