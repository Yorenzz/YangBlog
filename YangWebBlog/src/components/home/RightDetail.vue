<script setup>
import Tag from '../common/Tag.vue'
import { getAllTags } from '../../api'
import { reactive } from 'vue'

const tagList = reactive([])
getAllTags()
  .then(res => {
    tagList.value = res.data
    console.log('tag', tagList.value)
  })
  .catch(e => {
    console.warn(e)
  })
</script>

<template>
  <div class="right-detail">
    <div class="tag-cloud">
      <div class="cloud-title">标签云</div>
      <el-divider></el-divider>
      <div class="tag-content">
        <div class="tag-item" v-for="item in tagList.value">
          <Tag :tag-name="item.value" :color="item.color" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.right-detail {
  width: 18.75%;
  border-radius: 0.125rem;
  background: white;
  border: 1px #cbc6c6 solid;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  &:hover {
    box-shadow: 2px 2px 5px 3px rgba(0, 0, 0, 0.3);
  }
  .tag-cloud {
    padding: 16px;
    .cloud-title {
      font-size: 24px;
    }
    .tag-content {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      .tag-item {
        margin-right: 10px;
        margin-bottom: 12px;
      }
    }
  }
}
</style>
