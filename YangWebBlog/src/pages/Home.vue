<script setup>
import TopPicture from "../components/TopPicture.vue";
import LeftIntrodution from "../components/LeftIntrodution.vue";
import RightDetail from "../components/RightDetail.vue";
import Footer from "../components/Footer.vue";
import { onMounted, ref } from 'vue';
onMounted(()=>{
  heightContent.value=document.getElementsByClassName('content')[0].offsetTop-58
})
const heightContent=ref()
</script>

<template>
  <TopPicture
    :offsetHeight="heightContent"
  />
  <div class="content">
    <LeftIntrodution />
    <router-view class="middle" />
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
  min-width: 60vw;
  margin-left: 16px;
  margin-right: 16px;
}
.content {
  background: $theme-color;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 32px;
  @media only screen and (max-width:1228px) {
    margin-top: 58px;
  }
}
</style>