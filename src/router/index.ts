import { createRouter, createWebHistory, RouterOptions } from 'vue-router'

export enum Tab {
  Gather = 'Gather',
  Inventory = 'Inventory',
}

const routes: RouterOptions['routes'] = [
  {
    path: '/',
    component: () => import('@/layouts/default/default-layout.vue'),
    children: [
      {
        path: '',
        redirect: { name: Tab.Gather },
      },
      {
        path: '/gather',
        name: Tab.Gather,
        component: () =>
          import(/* webpackChunkName: "home" */ '@/views/gather-view.vue'),
      },
      {
        path: '/inventory',
        name: Tab.Inventory,
        component: () =>
          import(/* webpackChunkName: "home" */ '@/views/inventory-view.vue'),
      },
      {
        path: '/:pathMatch(.*)*',
        redirect: { name: Tab.Gather },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
