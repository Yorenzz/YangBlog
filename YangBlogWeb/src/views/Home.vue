<template>
  <div style="height: 59px">
    <div class="float-left w-28 h-full text-blue-400 align-middle font-semibold leading-[59px] bg-[black]">
      Yang's Blog
    </div>
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        background-color="black"
        active-text-color="#ffd04b"
        text-color="#fff"
    >
      <el-menu-item index="1">
        首页
      </el-menu-item>
      <el-menu-item index="2">
        分类
      </el-menu-item>
      <el-menu-item index="3">
        关于我
      </el-menu-item>
    </el-menu>
  </div>

  <h2 class="text-5xl">home</h2>
</template>

<script>
import { ref } from 'vue'
export default {
  name: "Home",
  setup(){
    const activeIndex = ref('1')
    return {
      activeIndex
    }
  }
}
</script>

<style scoped>

</style>
