import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      // Document title tag
      // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
      meta: {
        title: 'Dashboard'
      },
      path: '/',
      name: 'home',
      component: Home
    },
    {
      meta: {
        title: 'Tables'
      },
      path: '/tables',
      name: 'tables',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "tables" */ './views/Tables.vue')
    },
    {
      meta: {
        title: 'Forms'
      },
      path: '/forms',
      name: 'forms',
      component: () => import(/* webpackChunkName: "forms" */ './views/Forms.vue')
    },
    {
      meta: {
        title: 'Profile'
      },
      path: '/profile',
      name: 'profile',
      component: () => import(/* webpackChunkName: "profile" */ './views/Profile.vue')
    },
    {
      meta: {
        title: 'New client'
      },
      path: '/client/new',
      name: 'client.new',
      component: () => import(/* webpackChunkName: "client-form" */ './views/ClientForm.vue')
    },
    {
      meta: {
        title: 'Edit client'
      },
      path: '/client/:id',
      name: 'client.edit',
      component: () => import(/* webpackChunkName: "client-form" */ './views/ClientForm.vue'),
      props: true
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
