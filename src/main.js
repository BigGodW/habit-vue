import './assets/main.css'
import '//at.alicdn.com/t/c/font_4580137_awogcv9preo.js'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import dayjs from 'dayjs'
import { Toast } from 'vant';

const app = createApp(App)
app.use(Toast);
app.use(router)
// 全局使用 dayjs
app.config.globalProperties.$dayjs = dayjs
app.mount('#app')
