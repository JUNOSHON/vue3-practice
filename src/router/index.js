import { createRouter, createWebHistory } from 'vue-router';

import CounterPage from '../pages/CounterPage.vue';
import LoginPage from '../pages/LoginPage.vue';

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: LoginPage,
  },
  {
    path: '/counter',
    component: CounterPage,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
