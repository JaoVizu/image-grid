import { createApp } from 'vue'
import store from './store'
import router from './routes/router.js'
import App from './App.vue'


const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
