<script setup>
import TopPicture from "../components/TopPicture.vue";
import LeftIntrodution from "../components/LeftIntrodution.vue";
import RightDetail from "../components/RightDetail.vue";
import Footer from "../components/Footer.vue";
// import { onMounted, ref, nextTick } from 'vue';
import { useRoute } from "vue-router";
const route =useRoute()
</script>

<template>
  <TopPicture/>
  <div :class="[route.path==='/home'?'':'visible-pic', 'content']">
    <LeftIntrodution />
    <div class="middle">
      <router-view />
    </div>
    <RightDetail />
  </div>
  <Footer />
</template>

<style scoped lang="scss">
@import '../scss/vue.scss';
.top-picture {
  margin-bottom: 32px;

}
.left-introduction {
  flex: 1;
  @media only screen and (max-width:900px) {
    display: none;
  }
}
.right-detail {
  flex: 1;
  @media only screen and (max-width:1024px) {
    display: none;
  }
}
.middle {
  flex:4;
  min-width: 928px;
  margin-left: 16px;
  margin-right: 16px;
}
.visible-pic {
  margin-top: 90px !important;
}
.content {
  background: $theme-color;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 32px;
  padding: 0 32px;
  @media only screen and (max-width:1228px) {
    margin-top: 58px;
  }
}
</style>