import Vue from 'vue';
import VueRouter from 'vue-router';
import Driverinfo from '../views/Driverinfo.vue';
import Drivercontent from '../views/Drivercontent.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Driverinfo',
    component: Driverinfo,
  },
  {
    path: '/Drivercontent',
    component: Drivercontent,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
