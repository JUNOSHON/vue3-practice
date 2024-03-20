import { createRouter, createWebHistory } from 'vue-router';

import IndexPage from '../pages/IndexPage.vue';
import TodoPage from '../pages/TodoPage.vue';

const routes = [
  {
    path: '/',
    component: IndexPage,
  },
  {
    path: '/todo',
    component: TodoPage,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
