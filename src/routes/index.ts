import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    component: () =>
      import(/* webpackChunkName: 'element-btns' */ '../views/Element.vue'),
    children: [
      {
        path: '/pinia',
        name: 'pinia',
        component: () =>
          import(/* webpackChunkName: 'home' */ '../views/pinia.page.vue'),
      },
      {
        path: '/tsx',
        name: 'tsx',
        component: () =>
          import(/* webpackChunkName: 'tsx' */ '../components/Home.component'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
