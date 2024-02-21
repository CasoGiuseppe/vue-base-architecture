import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'name',
      component: () => import(/* webpackChunkName: "Component Name" */ '@ui/components/base/component-name/ComponentName.vue')
    }    
  ]
})

export default router
