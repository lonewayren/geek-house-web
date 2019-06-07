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
      name: '首页',
      meta: {
        title: '极客学舍'
      },
      component: Home
    },
    {
      path: '/about',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/bookDetail',
      name: 'bookDetail',
      component: () =>
        import(/* webpackChunkName: "about" */'./views/book/BookDetail.vue'),
    },
    {
      path: '/book',
      name: '图书',
      meta: {
        title: '图书-极客学舍'
      },
      component: () =>
        import(/* webpackChunkName: "about" */ './views/book/Index.vue'),
      children: [
        {
          path: '/',
          name: '列表',
          meta: {
            title: '图书列表-极客学舍'
          },
          component: () =>
            import(/* webpackChunkName: "about" */ './views/book/List.vue')
        },
        {
          path: ':id',
          name: '详情',
          meta: {
            title: '图书详情-极客学舍'
          },
          component: () =>
            import(/* webpackChunkName: "about" */ './views/book/Detail.vue')
        }
      ]
    },
    {
      path: '/school',
      name: '校招',
      meta: {
        title: '校招-极客学舍'
      },
      component: () =>
        import(/* webpackChunkName: "about" */ './views/book/Index.vue'),
      children: []
    },
    {
      path: '/society',
      name: '社招',
      meta: {
        title: '社招-极客学舍'
      },
      component: () =>
        import(/* webpackChunkName: "about" */ './views/book/Index.vue'),
      children: []
    }
  ]
});
export default router;

router.beforeEach((to, from, next) => {
  NProgress.start();
  if (to.meta.title) {
    console.log(to.meta.title);
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});
