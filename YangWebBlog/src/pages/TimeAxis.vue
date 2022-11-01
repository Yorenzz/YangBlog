<script setup>
import { reactive } from "vue";
import { getRandomColor } from "../common/util.js";

const data=reactive({
  contentList: [
    {
      timestamp: '2022/4/17',
      title: '4399面经1'
    },
    {
      timestamp: '2022/4/19',
      title: '4399面经2'
    },
    {
      timestamp: '2022/4/18',
      title: '4399面经3'
    },
  ]
})
const dateSort=(arr)=>{
  return arr.sort((a, b)=>{
    return new Date(b.timestamp)-new Date(a.timestamp)
  })
}
</script>

<template>
  <div class="time-axis">
    <el-timeline>
      <el-timeline-item v-for="item in dateSort(data.contentList)" :timestamp="item.timestamp" placement="top" :color="getRandomColor()">
        <el-card>
          <h4>{{ item.title }}</h4>
          <p>Tom committed 2018/4/12 20:46</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<style scoped lang="scss">
.time-axis {
  border-radius: 0.125rem;
  background: white;
  border: 1px #cbc6c6 solid;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-bottom: 16px;
  padding: 32px;
}
</style>