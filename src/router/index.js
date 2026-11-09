import { createRouter, createWebHistory } from 'vue-router'
import Contador from '@/views/Contador.vue'
import { useCountdownStore } from '@/stores/countdown'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'contador', component: Contador },
    { path: '/historia', name: 'historia', component: () => import('@/views/Historia.vue') },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior: () => ({ top: 0 }),
})

// La historia solo esta disponible el 14 y el 15
router.beforeEach((to) => {
  if (to.name === 'historia') {
    const store = useCountdownStore()
    store.tick()
    if (!store.historiaAbierta) return { name: 'contador' }
  }
})

export default router
