import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/layouts/Home.vue'
import Login from '@/components/layouts/login/Login.vue'
import MainSection from '@/components/layouts/MainSection.vue'

const router =  createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/main',
      name: 'main',
      component: MainSection,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    //   {
    //     path: 'signup',
    //     name: 'signup',
    //     component: Signup,
    //   },
  ]
})

export default router

