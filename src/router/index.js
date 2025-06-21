import { createRouter, createWebHistory } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/stores/auth';

import ResumeView from '@/views/ResumeView.vue';
import PortfolioView from '@/views/PortfolioView.vue';
import AdminAuthView from '@/views/AdminAuthView.vue';
import AdminView from '@/views/AdminView.vue';
import NotPageView from '@/views/NotPageView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'resume',
      component: () => import('@/views/ResumeView.vue')
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('@/views/PortfolioView.vue')
    },
    {
      path: '/admin',
      name: 'adminPage',
      component: () => import('@/views/AdminView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/admin/auth',
      name: 'adminAuthPage',
      component: () => import('@/views/AdminAuthView.vue'),
      meta: {
        hideForAuth: true
      }
    },
    {
      path: '/404',
      name: 'notPage',
      component: () => import('@/views/NotPageView.vue'),
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/404'
    }
  ]
});

router.beforeEach((to, from, next) => {
  const { isLoggedIn } = storeToRefs(useAuthStore());

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isLoggedIn.value) {
      next({ name: 'adminAuthPage' });
    }
  }

  if (to.matched.some((record) => record.meta.hideForAuth)) {
    if (isLoggedIn.value) {
      next({ name: 'adminPage' });
    }
  }

  next();
});

export default router;
