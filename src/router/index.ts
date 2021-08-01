import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/login-redirect-to',
    component: () => import('@/views/loginRedirectTo')
  },
  {
    path: '/review',
    component: () => import('@/views/review')
  },
  {
    path: '/complaint',
    component: () => import('@/views/complaint')
  }
];

export default createRouter({
  // 4. Provide the history implementation to use.
  // We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes // short for `routes: routes`
});
