import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

export function createRouter (store, options = {}) {
  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    ...options,
    routes
  })

  router.beforeEach((_to, _from, next) => {
    if (!store.state.user) {
      alert('请先登录！')
      next(false)
      // TODO 不太严谨，应该通过globalState 把父应用路由注进来
      history.pushState(null, '/login', `/login?redirect=${encodeURIComponent(location.pathname)}`)
      return
    }

    next()
  })

  return router
}
