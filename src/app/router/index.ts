import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'app',
      component: () => import(/* webpackChunkName: "Root layout" */ '@ui/layouts/skeleton-root/SkeletonRoot.vue'),

      children: [
        {
          path: 'error/:code?',
          name: 'error',
          components: {
            content: () => import(/* webpackChunkName: "ErrorPage" */ '@app/ui/layouts/status/error-page/ErrorPage.vue'),
          },
        },
        {
          path: '/:pathMatch(.*)*',
          components: {
            default: () => import(/* webpackChunkName: "State404" */ '@ui/layouts/status/error-page/ErrorPage.vue'),
          },
        },
      ]
    },
  ]
})

router.beforeEach((to) => {
  if (!to.name) return { path: '/' }
})

export default router
