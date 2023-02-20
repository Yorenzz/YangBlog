<script setup>
import moment from 'moment'
import { reactive, ref } from 'vue'
import { getHistoryToday, getSentence } from '../../api'

const historyToday = ref([])
const sentence = reactive({
	value: '',
	book: '',
})
const getTodayHistory = () => {
	getHistoryToday().then(res => {
		if (res instanceof Object) {
			historyToday.value = res.result
		} else {
			try {
				historyToday.value = JSON.parse(res).result
			} catch (e) {
				console.warn('历史上的今天返回格式错误，不显示')
			}
		}
	})
}
const getASentence = () => {
	getSentence().then(res => {
		sentence.value = res.hitokoto
		sentence.book = res.from
	})
}

getTodayHistory()
getASentence()
</script>

<template>
  <div class="footer">
    <div class="footer-top">
      <div
        v-if="historyToday.length"
        class="history-today"
      >
        <span>历史上的今天</span>
        <div>{{ historyToday[0].date }}</div>
        <div>{{ historyToday[1].title }}</div>
      </div>
      <el-divider
        v-if="historyToday.length&&sentence.value"
        direction="vertical"
        class="vertical-divider"
      />
      <div class="sentence">
        <div class="sentence-value">
          {{ sentence.value }}
        </div>
        <div class="sentence-book">
          ——{{ sentence.book }}
        </div>
      </div>
    </div>
    <el-divider class="bottom-divider" />
    <span>Copyright © 2021 ~ {{ moment().format('YYYY') }} Yorenz's Blog</span>
    <div class="label">
      <div>
        <a
          rel="external nofollow noopener"
          href="https://github.com/YangEzzz/YangBlog"
          target="_blank"
          title="本博客已开源于github"
        >
          <img
            src="https://img.shields.io/badge/YangBlog-OpenSource-brightgreen"
            alt=""
          >
        </a>
      </div>
      <div>
        <a
          rel="external nofollow noopener"
          href="https://v3.cn.vuejs.org/guide/introduction.html"
          target="_blank"
          title="Vue.js客户端渲染"
        >
          <img
            src="https://img.shields.io/badge/SPA-Vue.js-blue"
            alt=""
          >
        </a>
      </div>
      <div>
        <a
          rel="external nofollow noopener"
          href="https://element-plus.org/zh-CN/component/button.html"
          target="_blank"
          title="UI框架ElementUI"
        >
          <img
            src="https://img.shields.io/badge/UI-ElementUI-red"
            alt=""
          >
        </a>
      </div>
      <div>
        <a
          rel="external nofollow noopener"
          href="https://cloud.tencent.com"
          target="_blank"
          title="腾讯云提供服务器及域名服务"
        >
          <img
            src="https://img.shields.io/badge/VPS&DNS-TencentCloud-deepskyblue"
            alt=""
          >
        </a>
      </div>
      <div>
        <a
          rel="external nofollow noopener"
          href="https://console.cloud.tencent.com/cos"
          target="_blank"
          title="静态资源存储于腾讯COS对象存储"
        >
          <img
            src="https://img.shields.io/badge/OSS-TencentCOS-pink"
            alt=""
          >
        </a>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import '../../scss/vue';
.footer {
  background-color: $grey-color;
  color: #ffffff;
  padding-top: 32px;
  margin-top: 32px;
  padding-bottom: 32px;
  text-align: center;
  &-top {
    display: grid;
    grid-template-columns: 1fr 40px 1fr;
    justify-content: center;
    align-items: center;
		margin: 0 144px;
    .history-today {
      //width: 400px;
      justify-self: center;
      color: #7f7f7f;
    }
    .sentence {
      color: #7f7f7f;
      justify-self: center;
      &-value {
        text-align: left;
      }
      &-book {
        text-align: right;
      }
    }
  }

}
.label {
  display: flex;
  justify-content: center;
  margin-top: 32px;
  flex-wrap: wrap;
  div {
    margin-right: 16px;
  }
}
.bottom-divider {
  width: 70%;
  left: 50%;
  transform: translateX(-50%);
  border-color: $divider-color;
}
.vertical-divider {
  height: 74px;
  justify-self: center;
  border-color: $divider-color;
}
</style>
