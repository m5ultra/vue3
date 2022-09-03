import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import Root from './Root.vue'
// import Root from './vue3.2/01.base/base.vue'
// import Root from './vue3.2/01.base/index.vue'
// import Root from './vue3.2/02.setup/index.vue'
// import Root from './vue3.2/03.defineProps/index.vue'
// import Root from './vue3.2/04.defineEmits/index.vue'
// import Root from './vue3.2/05.defineExpose/index.vue'
// import Root from './vue3.2/06.useSlots-useAttrs/index.vue'
// import Root from './vue3.2/07.setup-with-normal-script/index.vue'
// import Root from './vue3.2/08.setup-await/index.vue'
// import Root from './vue3.2/09.styl/css_module/index.vue'
// import Root from './vue3.2/09.styl/css_module/index.vue'
import Root from './vue3.2/09.styl/css_modlue/styl-v-bind.vue'

import 'styl/index.styl'
import 'normalize.css'
// @ts-ignore
import router from './routes/index.ts'

createApp(Root).use(router).use(createPinia()).mount('#Root')
