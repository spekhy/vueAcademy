import { createApp } from 'vue'
import App from './plugins/app/_config/App.vue'
import router from './plugins/app/_config/router.ts'
import './assets/tailwind.css'

createApp(App)
    .use(router)
    .mount('#app')