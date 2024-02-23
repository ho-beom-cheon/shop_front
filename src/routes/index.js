import { createRouter, createWebHistory } from 'vue-router'
import ShopHome from "@/routes/ShopHome.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        component: ShopHome,
        // children: [
        //   {
        //     path: 'login',
        //     name: 'login',
        //     component: Login,
        //   },
        //   {
        //     path: 'signup',
        //     name: 'signup',
        //     component: Signup,
        //   },
        // ]
      },
    ]
  })

