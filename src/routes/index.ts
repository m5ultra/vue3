import { createRouter, createWebHashHistory } from 'vue-router'

const routes: Array<any> = [
  {
    path: '/',
    redirect: '/btns',
  },
  {
    path: '/btns',
    name: 'btns',
    component: () => import(/* webpackChunkName: element-btns */ '../views/Element.vue'),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: home-btns */ '../views/Home.page.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
