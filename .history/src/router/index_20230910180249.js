import { createRouter, createWebHistory } from 'vue-router';
import Main from '../views/Main.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: import('../App.vue').then((m) => m.default),
    },
  ],
});

export default router;