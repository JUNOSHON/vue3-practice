import { createRouter, createWebHistory } from 'vue-router';

import IndexPage from '../pages/IndexPage.vue';

const routes = [
  {
    path: '/',
    component: IndexPage,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
