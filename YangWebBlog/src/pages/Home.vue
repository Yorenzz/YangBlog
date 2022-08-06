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
  fetch('https://extreme-ip-lookup.com/json/').then((res) => {
    res.json().then((res1) => {
      data.ip = res1.query
      fetch(`https://api.vore.top/api/IPdata?ip=${data.ip}`).then((res2) => {
        res2.json().then((res3) => {
          data.ipData = res3.ipdata
          console.log(data.ipData)
          console.log(
            '你的ip是' +
              data.ip +
              ' 你所在地为 ' +
              data.ipData.info1 +
              ' ' +
              data.ipData.info2 +
              ' ' +
              data.ipData.info3,
          )
        })
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
