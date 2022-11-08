import { createApp } from 'vue'
import App from './App.vue'
import resetcss from './assets/reset.css'

const app = createApp(App)

app.use(resetcss)
app.mount('#app')