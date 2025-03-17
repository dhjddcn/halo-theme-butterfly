import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import micro from './core/micro/MicroApp'

const app = createApp(App)

app.use(createPinia())
app.use(micro)
app.use(router)

app.mount('#app')
