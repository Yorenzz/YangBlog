<script setup>
import TopPicture from "../components/TopPicture.vue";
import LeftIntrodution from "../components/LeftIntrodution.vue";
import MiddleArticle from "../components/MiddleArticle.vue";
import RightDetail from "../components/RightDetail.vue";
</script>

<template>
  <TopPicture/>
  <div class="content">
    <LeftIntrodution />
    <MiddleArticle />
    <RightDetail />
  </div>
</template>

<style scoped lang="scss">
.top-picture {
  margin-bottom: 32px;
}
.left-introdution {
  flex: 1;
}
.right-detail {
  flex: 1;
}
.middle-article {
  flex: 1;
}
.content {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
</style>