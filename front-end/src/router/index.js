import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NBA from '../views/NBA.vue'
import MLB from '../views/MLB.vue'
import NFL from '../views/NFL.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/NBA.vue',
    name: 'NBA',
    component: NBA
  },
  {
    path: '/MLB.vue',
    name: 'MLB',
    component: MLB
  },
  {
    path: '/NFL.vue',
    name: 'NFL',
    component: NFL
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
