import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'resume',
      component: () => import('../views/ResumeView.vue')
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: import('../views/PortfolioView.vue')
    },
    {
      path: '/404',
      name: 'notPage',
      component: () => import('../views/NotPageView.vue')
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/404'
    }
  ]
});

export default router;
