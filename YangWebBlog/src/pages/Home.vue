<script setup>
import TopPicture from '../components/home/TopPicture.vue'
import LeftIntroduction from '../components/home/LeftIntrodution.vue'
import RightDetail from '../components/home/RightDetail.vue'
import Footer from '../components/home/Footer.vue'
import { useRoute } from 'vue-router'
import { computed, reactive } from 'vue'
import { getIP } from '../api/index.js'

const route = useRoute()

const data = reactive({
  ip: '',
  ipData: [],
})

const getVisitorIP = () => {
  fetch('https://extreme-ip-lookup.com/json/').then(res => {
    res.json().then(res1 => {
      data.ip = res1.query
      console.log(data.ip)
      getIP(data.ip).then(res => {
        console.log('ip', res)
      })
    })
  })
}
getVisitorIP()
</script>

<template>
  <TopPicture />
  <div class="content-middle">
    <div class="content">
      <LeftIntroduction />
      <div class="middle">
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
  @media only screen and (max-width: 900px) {
    display: none;
  }
}
.right-detail {
  @media only screen and (max-width: 1024px) {
    display: none;
  }
}
.middle {
  width: 75%;
  margin-left: 16px;
  margin-right: 16px;
}
.visible-pic {
  margin-top: 90px !important;
}
.content-middle {
  display: flex;
  justify-content: center;
}
.content {
  width: 1800px;
  background: $theme-color;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 90px;
  padding: 0 32px;
  @media only screen and (max-width: 1228px) {
    margin-top: 58px;
  }
}
</style>
