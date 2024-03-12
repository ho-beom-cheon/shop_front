import 'bootstrap/dist/css/bootstrap.min.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store/index.js'
import 'bootstrap/dist/js/bootstrap.js'

createApp(App).use(router).use(store).mount('#app')


