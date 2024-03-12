import { createRouter, createWebHistory } from 'vue-router'
import ShopHome from '@/components/layouts/Home.vue'
import Login from '@/components/layouts/login/Login.vue'
import MainSection from '@/components/layouts/MainSection.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        component : ShopHome,
        children: [
          {
            path: 'main',
            name: 'main',
            component: MainSection,
          },
          {
            path: 'login',
            name: 'login',
            component: Login,
          },
        //   {
        //     path: 'signup',
        //     name: 'signup',
        //     component: Signup,
        //   },
        ]
      },
    ]
  })

