import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from "./router";
import TDesign from 'tdesign-vue-next';
import App from './App.vue'
// 引入TDesign组件库全局样式资源
import 'tdesign-vue-next/es/style/index.css';
// 引入Tailwind全局样式资源
import '@/styles'

const app = createApp(App);
app.use(router)
app.use(createPinia())
app.use(TDesign)

app.mount("#app")
