import { createRouter, createWebHistory } from 'vue-router';
import PortfolioView from '../views/PortfolioView.vue';
import ResumeView from '../views/ResumeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'resume',
      component: ResumeView
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: PortfolioView
    }
  ]
});

export default router;
