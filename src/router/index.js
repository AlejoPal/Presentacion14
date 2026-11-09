import { createRouter, createWebHistory } from 'vue-router'
import Contador from '@/views/Contador.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'contador', component: Contador },
    { path: '/historia', name: 'historia', component: () => import('@/views/Historia.vue') },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior: () => ({ top: 0 }),
})
