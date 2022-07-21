<script setup>
import {nextTick, onMounted, ref} from 'vue'
import {getText} from "../api";
const textArray=ref([])
let currentPage=ref(1)
let pageSize=ref(5)
const pageChange=(page)=>{
  currentPage.value=page
  console.log(page)
}
getText({category:'生活随笔'}).then((res)=>{
    console.log(res.data)
    textArray.value=res.data.map((item) => {
      item.text = item.text.replaceAll('<pre>', '<pre class="language-js line-numbers">')
      item.describe=item.describe.replaceAll('<pre>', '<pre class="language-js line-numbers">')
      return item
    })
    nextTick(()=>{Prism.highlightAll()})
})
onMounted(()=>{
  Prism.highlightAll()
  nextTick(()=>{Prism.highlightAll()})
})
</script>

<template>
  <div class="middle">
    <div class="middle-article"  v-for="(item,index) in textArray">
      <div v-html="item.describe"></div>
    </div>
    <div class="middle-pagination">
      <el-pagination
            background
            layout="prev, pager, next"
            :total="50"
            :current-page="currentPage"
            @update:current-page="pageChange"
      />
    </div>
    
  </div>
</template>

<style scoped lang="scss">
.middle {
  &-article {
    height: auto;
    &:hover {
      box-shadow: 0px 1px 5px 3px rgba(0, 0, 0, 0.3);
    }
     
    border-radius: 0.125rem;
    background: white;
    border-style: solid;
    border-color: #cbc6c6;
    border-width: 1px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    margin-bottom: 16px;
    padding: 16px 32px;
  }
  &-article p {
      margin: 0;
    }
  &-pagination{
    display: flex;
    justify-content: center;
  }
}

</style>