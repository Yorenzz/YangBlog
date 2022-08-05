<script setup>
import { nextTick, onMounted, ref } from 'vue'
import { getText } from '../api'
import { useRoute, useRouter } from 'vue-router'
import { scrollToArticle, scrollToTop } from '../common/util.js'
const router = useRouter()
const textArray = ref([])
let currentPage = ref(1)
let pageSize = ref(5)
const pageChange = (page) => {
  currentPage.value = page
  getArticle()
  scrollToArticle()
}
const sizeChange = (size) => {
  pageSize.value = size
  currentPage.value = 1
  getArticle()
  scrollToArticle()
}
const blogDetail = (ID) => {
  console.log('id', ID)
  router.push({ path: '/blog', query: { ID: ID } })
}
const getArticle = () => {
  getText({
    category: '生活随笔',
    pageSize: pageSize.value,
    currentPage: currentPage.value,
  }).then((res) => {
    console.log(res.data)
    //后端传回总文章数
    textArray.value = res.data.map((item) => {
      item.text = item.text.replaceAll(
        '<pre>',
        '<pre class="language-js line-numbers">',
      )
      item.describe = item.describe.replaceAll(
        '<pre>',
        '<pre class="language-js line-numbers">',
      )
      return item
    })
    nextTick(() => {
      Prism.highlightAll()
    })
  })
}
getArticle()
</script>

<template>
  <div class="middle">
    <div
      class="middle-article typo"
      v-for="(item, index) in textArray"
      :key="index"
    >
      <h5 class="typo">{{ item.title }}</h5>
      <div class="article-time">
        <div class="time-item blue-time">
          <el-icon class="icon"><Calendar /></el-icon>
          <span>{{ item.time }}</span>
        </div>
        <div class="time-item red-time">
          <el-icon class="icon"><View /></el-icon>
          <span>{{ item.readtime }}</span>
        </div>
        <div class="time-item">
          <el-icon class="icon"><EditPen /></el-icon>
          <span>字数≈{{ item.num }}</span>
        </div>
      </div>
      <div v-html="item.describe"></div>
      <div class="article-button">
        <el-button type="primary" @click="blogDetail(item['_id'])">
          阅读全文
        </el-button>
      </div>
      <el-divider />
    </div>
    <div class="middle-pagination">
      <el-pagination
        background
        layout="prev, pager, next, sizes"
        :total="50"
        :page-sizes="[5, 10, 15, 20]"
        v-model:currentPage="currentPage"
        v-model:page-size="pageSize"
        @current-change="pageChange"
        @size-change="sizeChange"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.middle {
  &-article {
    height: auto;
    &:hover {
      box-shadow: 0 1px 5px 3px rgba(0, 0, 0, 0.3);
    }
    border-radius: 0.125rem;
    background: white;
    border: 1px #cbc6c6 solid;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    margin-bottom: 16px;
    padding: 0 32px 16px;
    .article-button {
      text-align: center;
      margin-top: 16px;
    }
    .article-time {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 13px;
      .time-item {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 16px;
        .icon {
          margin-right: 3px;
        }
      }
      .blue-time {
        color: blue;
      }
      .red-time {
        color: red;
      }
    }
  }
  &-pagination {
    display: flex;
    justify-content: center;
  }
}
</style>
