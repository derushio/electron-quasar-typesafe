import routes from '@/router/routes';
import { createRouter, createWebHashHistory } from 'vue-router';

export function createAppRouter() {
  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });

  return router;
}
