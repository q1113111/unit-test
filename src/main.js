import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import pinia from './pinia'
import './assets/main.css'
import router from './router'

const app = createApp(App)

app.use(store)
app.use(pinia)
app.use(router)

app.mount('#app')
