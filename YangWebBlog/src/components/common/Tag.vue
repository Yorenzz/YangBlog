<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getTagsColor } from '../../api'

const router = useRouter()
const props = defineProps({
	tagName: {
		type: String,
		default: '',
	},
	color: {
		type: String,
		default: '',
	},
})
const requestColor = ref('')
if (!props.color) {
	getTagsColor(props.tagName)
		.then(res => {
			requestColor.value = res.color
		})
		.catch(e => {
			console.warn(e)
		})
}

const findTag = () => {
	router.push(`/tag/${props.tagName}`)
}
</script>

<template>
  <div
    class="tag-content"
    @click="findTag"
  >
    <div
      class="tag"
      :style="{ backgroundColor: props?.color ? props.color: requestColor }"
    >
      <div class="tag-circle" />
      {{ props.tagName }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.tag-content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  color: white;
  &:hover {
    cursor: pointer;
  }
  .tag {
    position: relative;
    text-align: center;
    line-height: 30px;
    height: 30px;
    min-width: 30px;
    padding-left: 30px;
    padding-right: 15px;
    clip-path: polygon(0 50%, 15px 100%, 100% 100%, 100% 0, 15px 0);
    &:hover {
      filter: saturate(0.9);
    }
    .tag-circle {
      position: absolute;
      background: white;
      width: 8px;
      height: 8px;
      font-size: 1px;
      color: transparent;
      top: 50%;
      transform: translate(-240%, -50%);
      clip-path: circle(3px);
    }
  }
}
</style>
