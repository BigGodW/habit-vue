import './assets/main.css'
import '//at.alicdn.com/t/c/font_4580137_7o4iud1bkr2.js'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { Toast } from 'vant';

const app = createApp(App)
app.use(Toast);
app.use(router)

app.mount('#app')
