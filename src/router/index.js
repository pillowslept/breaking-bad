import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/characters',
    name: 'Characters',
    component: () => import('../views/Characters.vue')
  },
  {
    path: '/episodes',
    name: 'Episodes',
    component: () => import('../views/Episodes.vue')
  },
  {
    path: '/quotes',
    name: 'Quotes',
    component: () => import('../views/Quotes.vue')
  },
  {
    path: '/deaths',
    name: 'Deaths',
    component: () => import('../views/Deaths.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;
