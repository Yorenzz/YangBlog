<script setup>
import moment from 'moment'
</script>

<template>
  <div class="footer">
    <div>sssss</div>
    <el-divider class="bottom-divider" />
    <span>Copyright © 2021 ~ {{ moment().format('YYYY') }} Yorenz's BLOG</span>
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
          />
        </a>
      </div>
      <div>
        <a
          rel="external nofollow noopener"
          href="https://v3.cn.vuejs.org/guide/introduction.html"
          target="_blank"
          title="Vue.js客户端渲染"
        >
          <img src="https://img.shields.io/badge/SPA-Vue.js-blue" alt="" />
        </a>
      </div>
      <div>
        <a
          rel="external nofollow noopener"
          href="https://element-plus.org/zh-CN/component/button.html"
          target="_blank"
          title="UI框架ElementUI"
        >
          <img src="https://img.shields.io/badge/UI-ElementUI-red" alt="" />
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
          />
        </a>
      </div>
      <div>
        <a
          rel="external nofollow noopener"
          href="https://console.cloud.tencent.com/cos"
          target="_blank"
          title="静态资源存储于腾讯COS对象存储"
        >
          <img src="https://img.shields.io/badge/OSS-TencentCOS-pink" alt="" />
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
  padding-top: 16px;
  margin-top: 32px;
  padding-bottom: 32px;
  text-align: center;
}
.label {
  display: flex;
  justify-content: center;
  margin-top: 32px;
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
</style>
