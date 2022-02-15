import { createApp } from 'vue'
import { createPinia } from 'pinia'
import TDesign from 'tdesign-vue-next';
import App from './App.vue'
// 引入TDesign组件库全局样式资源
import 'tdesign-vue-next/es/style/index.css';
// 引入Tailwind全局样式资源
import './styles'

createApp(App).use(createPinia()).use(TDesign).mount('#app')
