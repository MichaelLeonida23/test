import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  // Define other routes here
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;