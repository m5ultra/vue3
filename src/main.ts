import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import Root from './Root.vue'
// import Root from './vue3.2/01.base/base.vue'
// import Root from './vue3.2/01.base/index.vue'
// import Root from './vue3.2/02.setup/index.vue'
// import Root from './vue3.2/03.defineProps/index.vue'
// import Root from './vue3.2/04.defineEmits/index.vue'
import Root from './vue3.2/05.defindeExpose/index.vue'
import 'styl/index.styl'
import 'normalize.css'
// @ts-ignore
import router from './routes/index.ts'

createApp(Root).use(router).use(createPinia()).mount('#Root')
