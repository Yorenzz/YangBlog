<script setup>
import { onMounted, ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { scrollToArticleSmooth } from '../../common/util.js'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
}
const route = useRoute()
const container = ref('transparent')
const pic = ref()

const activeMenu = computed(() => {
	return route.path
})
const innerWidth = computed(() => window.innerWidth)
const menuData = [
	{
		title: '首页',
		index: '/home',
	},
	{
		title: '分类',
		index: '/category',
		children: [{
			title: '学习笔记',
			index: '/category/学习笔记',
		},
		{
			title: '个人项目',
			index: '/category/个人项目',
		},
		{
			title: '技术杂烩',
			index: '/category/技术杂烩',
		},
		{
			title: '心情随写',
			index: '/category/心情随写',
		}],
	},
	{
		title: '时间轴',
		index: '/timeaxis',
	},
	{
		title: '动态',
		index: '/dynamic',
	},
	{
		title: '关于我',
		index: '/about',
	},
]

const handleScroll = () => {
	const style = window.getComputedStyle(pic?.value)
	if (
		document.documentElement.scrollTop > window.innerHeight - 59
    || style.display === 'none'
	) {
		container.value = '#353638'
	} else {
		container.value = 'transparent'
	}
}
watch(
	() => route.path,
	(current, prevState) => {
		if (current !== '/home' || window.innerWidth < 1200) { container.value = '#353638' } else container.value = 'transparent'
	},
	{
		deep: true, immediate: true,
	},
)
onMounted(() => {
	const style = window.getComputedStyle(pic.value)
	if (style.display === 'none') container.value = '#353638'
	else container.value = 'transparent'
	window.addEventListener('scroll', handleScroll)
	window.onresize = handleScroll
})

onMounted(() => {
	const canvas = document.querySelector('canvas.three-pic')
	// 创建场景
	const scene = new THREE.Scene()
	// 创建相机
	const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000)
	camera.position.set(0, 0, 10)
	scene.add(camera)

	// 添加物体
	const cubeGeometry = new THREE.BoxGeometry(1, 1, 1) // 形状
	const cubeMaterial = new THREE.MeshBasicMaterial({
		color: 0xffff00,
	}) // 材质（颜色）
	const cube = new THREE.Mesh(cubeGeometry, cubeMaterial) // 完整几何体
	scene.add(cube)

	// 初始化渲染器
	const renderer = new THREE.WebGLRenderer({
		canvas, antialias: true,
	})
	// 设置渲染尺寸大小
	renderer.setSize(sizes.width, sizes.height)
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

	// 创建控制器
	const controls = new OrbitControls(camera, canvas)
	controls.enableDamping = true
	controls.enableZoom = false

	const tick = () => {
		// 更新渲染器
		renderer.render(scene, camera)

		controls.update()
		// 页面重绘时调用自身
		window.requestAnimationFrame(tick)
	}

	tick()
	window.addEventListener('resize', () => {
		sizes.width = window.innerWidth
		sizes.height = window.innerHeight
		renderer.setSize(sizes.width, sizes.height)
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

		camera.aspect = sizes.width / sizes.height
		camera.updateProjectionMatrix()
	})
})
</script>
<template>
  <div class="menu">
    <el-menu
      :default-active="activeMenu"
      mode="horizontal"
      :background-color="container"
      active-text-color="#ffd04b"
      text-color="#fff"
      router
    >
      <el-menu-item
        disabled
        class="menu-title"
      >
        Yorenz's Blog
      </el-menu-item>
      <template
        v-for="item in menuData"
        :key="item.index"
      >
        <el-sub-menu
          v-if="item.children && item.children.length"
          :index="item.index"
          popper-class="pppp"
        >
          <template #title>
            <span>{{ item.title }}</span>
          </template>
          <el-menu-item
            v-for="itemChild in item.children"
            :key="itemChild.index"
            :index="itemChild.index"
          >
            <span>{{ itemChild.title }}</span>
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item
          v-else
          :index="item.index"
        >
          {{ item.title }}
        </el-menu-item>
      </template>
    </el-menu>
  </div>

  <div
    ref="pic"
    :class="{
      transparent: route.path !== '/home' || innerWidth < 1200,
      'top-picture': route.path === '/home',
    }"
  >
    <canvas class="three-pic" />
    <!--    <div class="top-picture-first" />-->
    <!--    <div class="top-picture-second" />-->
    <!--    <div class="top-picture-wave" />-->
    <div class="title-all">
      <div
        class="title"
        data-text="Yorenz's Blog"
      >
        Yorenz's Blog
      </div>
    </div>
    <div
      class="down"
      @click="scrollToArticleSmooth"
    >
      <el-icon :size="50">
        <Bottom />
      </el-icon>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import '../../scss/vue';
.transparent {
  display: none;
}
.menu {
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100vw;
  ::v-deep(.menu-title) {
    color: deepskyblue !important;
    cursor: pointer;
    font-weight: 700;
    font-size: 16px;
    opacity: 1;
  }
  ::v-deep(.el-menu) {
    border-bottom: none;
    transition-duration: 500ms;
  }
}
.top-picture {
  position: relative;
  height: 100vh;
  width: 100vw;
  @media only screen and (max-width: 1228px) {
    display: none;
  }
  &-wave {
    background: repeat-x url('/svg.png');
    background-size: 20%;
    height: 13vh;
    width: 100vw;
    opacity: 60%;
    position: absolute;
    left: 0;
    z-index: 1;
    bottom: 0;
  }

  &-first {
    background: url(/homepic1.jpg) no-repeat left top;
    background-size: cover;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }

  &-second {
    position: absolute;
    height: 100vh;
    width: 100vw;
    left: 0;
    top: 0;
    -webkit-mask: url(/AYJuRke.png);
    mask: url(/AYJuRke.png);
    -webkit-mask-size: 3000% 100%;
    mask-size: 3000% 100%;
    animation: maskMove 2s steps(29) infinite alternate;
  }

  &-second::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: url(/homepic2.jpg) no-repeat left top;
    background-size: cover;
  }

  .title-all {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    line-height: 17vh;
    width: 50vw;
    height: 20vh;
    border-radius: 20px;
  }

  .title {
    font-family: 'Comic Sans MS', cursive, sans-serif;
    font-size: 6rem;
    color: white;
    text-shadow: 5px 5px 5px #16efd6;
    z-index: 1;
    position: relative;
  }

  .title::before {
    content: attr(data-text);
    position: absolute;
    font-size: 6rem;
    top: 50%;
    left: 49.5%;
    white-space: nowrap;
    transform: translate(-50%, -50%);
    text-shadow: 4px 0 red;
    clip-path: inset(0 0 0 0);
    animation: ani2 1s infinite linear alternate-reverse;
  }

  .title::after {
    content: attr(data-text);
    font-size: 6rem;
    white-space: nowrap;
    position: absolute;
    top: 50%;
    left: 50.5%;
    transform: translate(-50%, -50%);
    text-shadow: -4px 0 blue;
    clip-path: inset(0 0 0 0);
    animation: ani1 1s infinite linear alternate-reverse;
  }

  .down {
    width: 50px;
    height: 50px;
    position: absolute;
    border: 2px #213547 solid;
    border-radius: 50%;
    animation: tik 0.5s infinite alternate;
    top: 80%;
    left: 50%;
    cursor: pointer;
  }
} //top-picture
</style>
