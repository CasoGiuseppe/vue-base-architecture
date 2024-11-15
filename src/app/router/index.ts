import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'app',
      redirect: { name: 'entry' },
      component: () => import(/* webpackChunkName: "RootLayout" */ '@ui/layouts/skeleton-root/SkeletonRoot.vue'),

      children: [
        {
          path: 'entry',
          name: 'entry',
          components: {
            content: () => import(/* webpackChunkName: "EntryView" */ '@ui/layouts/entry-view/EntryView.vue'),
          },
        },
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
