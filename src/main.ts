import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Root from './Root.vue'
import 'styl/index.styl'
import 'normalize.css'
// @ts-ignore
import router from './routes/index.ts'

createApp(Root).use(router).use(createPinia()).mount('#Root')
