import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/Dashboard.vue')
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('../views/Create.vue')
    },
    {
      path: '/link',
      name: 'link',
      component: () => import('../views/Link.vue')
    },
    //bikin route yang ada params nya
    {
      path: '/link'
    }
  ]
})

export default router
