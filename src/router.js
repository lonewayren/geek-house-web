import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/book',
      name: '图书',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/book/Index.vue'),
      children: [
        {
          path: '',
          name: '图书列表',
          component: () =>
            import(/* webpackChunkName: "about" */ './views/book/List.vue')
        },
        {
          path: ':id',
          name: '图书详情',
          component: () =>
            import(/* webpackChunkName: "about" */ './views/book/Detail.vue')
        }
      ]
    }
  ]
});
export default router;

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});
