<script setup>
import DynamicCard from '../components/dynamic/DynamicCard.vue';
import { ref } from 'vue';
import { getDynamic } from '../api';

const dynamicList = ref([])
const dynamicLoading = ref(false)

const getAllDynamic = () => {
  dynamicLoading.value = true
  getDynamic().then((res)=>{
    dynamicList.value = res
  }).catch((e)=>{
    console.warn(e);
  }).finally(()=>{
    dynamicLoading.value = false
  })
}

getAllDynamic()
</script>

<template>
  <div class="dynamic">
    <el-timeline>
      <el-timeline-item
        center
        v-for="item in dynamicList.reverse()"
        :key="item._id"
      >
        <DynamicCard
          :time="item.time"
          :content="item.text"
          :like="item.like"
          :watch="item.watch"
          :dynamic-i-d="item._id"
        />
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<style scoped lang="scss">
.dynamic {
  border-radius: 0.125rem;
  background: white;
  border: 1px #cbc6c6 solid;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-bottom: 16px;
  padding: 32px 32px 16px;
}
</style>
