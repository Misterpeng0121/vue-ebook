import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/ebook'
    },
    {
      path: '/ebook',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "index" */ './views/ebook/index.vue'),
      children: [
        {
          path: ':fileName',
          component: () => import(/* webpackChunkName: "about" */ './components/ebook/EbookReader.vue')
        }
      ]
    }
  ]
})
