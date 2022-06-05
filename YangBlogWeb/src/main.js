import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from "./router";
import Prism from "../public/prism";
createApp(App).use(Prism).use(router).mount('#app')
