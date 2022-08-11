import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/btns',
  },
  {
    path: '/btns',
    name: 'btns',
    component: () =>
      import(/* webpackChunkName: 'element-btns' */ '../views/Element.vue'),
  },
  {
    path: '/home',
    name: 'home',
    component: () =>
      import(/* webpackChunkName: 'home' */ '../views/home.page.vue'),
  },
  {
    path: '/tsx',
    name: 'tsx',
    component: () =>
      import(/* webpackChunkName: 'tsx' */ '../components/Home.component'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
