<script setup>
import { nextTick, onMounted, ref, watch, watchEffect } from 'vue'
import {
  getText,
  getArticleByCategory,
  getArticleByTag,
  getTotalBlogNum,
} from '../../api/index.js'
import { useRoute, useRouter } from 'vue-router'
import { scrollToArticle, scrollToTop } from '../../common/util.js'
import Tag from '../common/Tag.vue'

const router = useRouter()
const route = useRoute()
const textArray = ref([])
const currentPage = ref(1)
const pageSize = ref(5)
const totalRow = ref(0)

const pageChange = page => {
  currentPage.value = page
  scrollToArticle()
  getArticle()
}
const sizeChange = size => {
  pageSize.value = size
  currentPage.value = 1
  scrollToArticle()
  getArticle()
}
const blogDetail = ID => {
  console.log('id', ID)
  router.push({ path: '/blog', query: { ID: ID } })
}
const getBlogNum = () => {
  getTotalBlogNum().then(res => {
    totalRow.value = res.data
  })
}
const getArticle = () => {
  getText({
    pageSize: pageSize.value,
    currentPage: currentPage.value,
  }).then(res => {
    console.log(res.data, res)
    //后端传回总文章数
    textArray.value = res.data.map(item => {
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

const getArticleFromCategory = () => {
  getArticleByCategory(route.params.category)
    .then(res => {
      console.log('res', res)
      textArray.value = res.data.map(item => {
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
      scrollToTop()
      nextTick(() => {
        Prism.highlightAll()
      })
    })
    .catch(e => {
      console.warn(e)
    })
}

const getArticleFromTag = () => {
  getArticleByTag(route.params.tag)
    .then(res => {
      console.log('res', res)
      textArray.value = res.data.map(item => {
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
      scrollToTop()
      nextTick(() => {
        Prism.highlightAll()
      })
    })
    .catch(e => {
      console.warn(e)
    })
}

getBlogNum()

watchEffect(() => {
  if (route.path.indexOf('category') !== -1) {
    console.log('val', route.params.category)
    getArticleFromCategory()
  } else if (route.path.indexOf('tag') !== -1) {
    console.log('tag', route.params.tag)
    getArticleFromTag()
  } else {
    console.log('home')
    getArticle()
  }
})
</script>

<template>
  <div class="blog">
    <div v-if="route.path.indexOf('tag') !== -1" class="tag-title">
      <h2>标签 {{ route.params.tag }} 下的文章</h2>
    </div>
    <div v-else-if="route.path.indexOf('category') !== -1" class="tag-title">
      <h2>分类 {{ route.params.category }} 下的文章</h2>
    </div>
    <div
      class="blog-article typo"
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
      <div class="middle-tag">
        <div v-for="tag in item.label" class="tag-item">
          <Tag
            :tag-name="tag"
            :color="`#${
              Math.floor(Math.random() * 16777215).toString(16).length===6?Math.floor(Math.random() * 16777215).toString(16):'0'+Math.floor(Math.random() * 16777215).toString(16)
              }`"
          />
        </div>
      </div>
    </div>
    <div class="blog-pagination" v-if="route.path === '/home'">
      <el-pagination
        background
        layout="prev, pager, next, sizes"
        :total="totalRow"
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
.tag-title {
  border-radius: 0.125rem;
  background: white;
  border: 1px #cbc6c6 solid;
  padding: 16px 32px 16px;
  text-align: center;
  margin-bottom: 16px;
}
.blog {
  width: 100%;
  &-article {
    height: auto;
    border-radius: 0.125rem;
    background: white;
    border: 1px #cbc6c6 solid;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    margin-bottom: 16px;
    padding: 0 32px 16px;
    &:hover {
      box-shadow: 0 1px 5px 3px rgba(0, 0, 0, 0.3);
    }
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
    .middle-tag {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .tag-item {
        margin-right: 16px;
      }
    }
  }
  &-pagination {
    display: flex;
    justify-content: center;
  }
}
</style>
