import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component)
}
app.use(ElementPlus).use(router)
app.mount('#app')
app.directive('ellipsis', (el, binding) => {
	const va = window.getComputedStyle(document.documentElement).getPropertyValue('--media-variable')
	if (va.trim() === 'phone') {
		el.style.display = '-webkit-box'
		el.style.webkitBoxOrient = 'vertical'
		el.style.webkitLineClamp = 3
		el.style.overflow = 'hidden'
	}
})
