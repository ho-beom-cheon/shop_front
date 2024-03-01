import { createRouter, createWebHistory } from 'vue-router'
import ShopHome from '@/routes/ShopHome.vue'
import Login from '@/routes/Login.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        component : [
            ShopHome,
            Login
        ],
        children: [
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

