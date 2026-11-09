<script setup>
import { onMounted, onUnmounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { PhLock } from '@phosphor-icons/vue'
import { useCountdownStore } from '@/stores/countdown'
import { pareja } from '@/config/pareja'
import OrbesFondo from '@/components/OrbesFondo.vue'

const store = useCountdownStore()
let timer
onMounted(() => {
  store.tick()
  timer = setInterval(() => store.tick(), 1000)
})
onUnmounted(() => clearInterval(timer))
</script>

<template>
  <OrbesFondo />
  <header class="fixed inset-x-0 top-0 z-30 h-16 bg-bg/60 backdrop-blur-md">
    <nav class="mx-auto flex h-full max-w-7xl items-center justify-between px-4 md:px-8">
      <RouterLink to="/" class="font-display text-lg font-semibold tracking-tight">{{ pareja.marca }}</RouterLink>
      <div class="flex items-center gap-1 text-sm">
        <RouterLink to="/" class="nav-link">Contador</RouterLink>
        <RouterLink v-if="store.historiaAbierta" to="/historia" class="nav-link">Nuestra historia</RouterLink>
        <span v-else class="nav-link flex cursor-not-allowed items-center gap-1.5 opacity-70" title="Se abre el 14 y el 15 de cada mes">
          <PhLock :size="14" weight="bold" /> Nuestra historia
        </span>
      </div>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped>
.nav-link { padding: .5rem .9rem; border-radius: 9999px; color: rgb(var(--muted)); transition: background .2s, color .2s; white-space: nowrap; }
.nav-link:hover { color: rgb(var(--ink)); }
.router-link-exact-active { background: rgb(var(--accent) / .16); color: rgb(var(--ink)); }
</style>
