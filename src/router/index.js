import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/rireki',
    name: 'Rireki',
    component: () => import('../views/RirekiView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
