import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
// import { mdi } from 'vuetify/iconsets/mdi'
import router from './router'
// import Axios from 'axios'

const app = createApp(App)

app.use(router)
app.mount('#app')
