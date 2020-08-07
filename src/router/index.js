import Vue from 'vue'
import VueRouter from 'vue-router'
import homepageRouter from "./homepage"
Vue.use(VueRouter)

  const routes = [
    homepageRouter,
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
