import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('$/presentations/layouts/default.vue'),
    children: [
      {
        path: '',
        component: () => import('$/presentations/pages/index.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('$/presentations/pages/ErrorNotFound.vue'),
  },
];

export default routes;
