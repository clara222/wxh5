import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Result from './views/Result.vue';
import Relation from './views/Relation.vue';
import FirstPage from './views/FirstPage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/relation',
      name: 'Relation',
      component: Relation,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/result',
      name: 'result',
      component: Result,
    },
    {
      path: '/',
      name: 'firstPage',
      component: FirstPage
    }
  ],
});
