import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'
import Login from '@/views/Login/index.vue'
import Home from '@/views/Home/index.vue'
import Social from '@/views/Social/index.vue'
import Campus from '@/views/Campus/index.vue'
import Beidou from '@/views/Beidou/index.vue'
import About from '@/views/About/index.vue'
import Detail from '@/views/Detail/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: Home
        },
        {
          path: 'beidou',
          component: Beidou
        },
        {
          path: 'social',
          component: Social
        },
        {
          path: 'campus',
          component: Campus
        },
        {
          path: 'about',
          component: About,
          name: 'About'
        },
        {
          path: 'detail/:id',
          component: Detail,
          name: 'Detail'
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ]
})

export default router
