<script setup>
import { computed, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { PhHeart, PhArrowRight } from '@phosphor-icons/vue'
import { useCountdownStore } from '@/stores/countdown'
import { pareja } from '@/config/pareja'

const store = useCountdownStore()
let timer

onMounted(() => {
  store.tick()
  timer = setInterval(() => store.tick(), 1000)
})
onUnmounted(() => clearInterval(timer))

const pad = (n) => String(n).padStart(2, '0')
const unidades = computed(() => [
  { k: 'days', label: 'días', v: store.parts.days },
  { k: 'hours', label: 'horas', v: pad(store.parts.hours) },
  { k: 'minutes', label: 'minutos', v: pad(store.parts.minutes) },
  { k: 'seconds', label: 'segundos', v: pad(store.parts.seconds) },
])

// Corazones que suben el 14 y el 15 (posiciones fijas, generadas una vez)
const petalos = Array.from({ length: 16 }, (_, i) => ({
  left: `${(i * 37) % 100}%`,
  size: 18 + ((i * 11) % 26),
  delay: `${(i * 0.9) % 9}s`,
  dur: `${9 + ((i * 5) % 8)}s`,
  sway: `${((i % 5) - 2) * 18}px`,
}))
</script>

<template>
  <main class="relative flex min-h-[100dvh] items-center overflow-hidden pt-16">
    <!-- "14" gigante como elemento visual de fondo -->
    <span
      class="pointer-events-none absolute -right-[4vw] bottom-[-6vw] select-none font-display font-bold leading-none"
      style="font-size: clamp(14rem, 44vw, 40rem); color: transparent; -webkit-text-stroke: 2px rgb(var(--accent) / .35)"
      aria-hidden="true"
    >{{ pareja.dia }}</span>

    <div v-if="store.celebrating" class="pointer-events-none absolute inset-0" aria-hidden="true">
      <PhHeart
        v-for="(p, i) in petalos"
        :key="i"
        weight="fill"
        :size="p.size"
        class="petal absolute -bottom-12 text-accent"
        :style="{ left: p.left, '--sway': p.sway, animation: `rise ${p.dur} ${p.delay} linear infinite` }"
      />
    </div>

    <div class="relative mx-auto w-full max-w-7xl px-4 py-12 md:px-8">
      <!-- Modo celebracion: 14 y 15 -->
      <section v-if="store.celebrating" v-reveal class="max-w-3xl">
        <h1 class="font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
          Hoy es nuestro {{ pareja.dia }}
        </h1>
        <p class="mt-5 max-w-[48ch] text-lg leading-relaxed text-muted md:text-xl">{{ pareja.mensajeCelebracion }}</p>
        <p v-if="store.mesesJuntos" class="mt-3 font-display text-2xl text-accent">{{ store.mesesJuntos }} meses juntos</p>
        <div class="mt-8 flex flex-wrap items-center gap-4">
          <RouterLink to="/historia" class="btn">Ver nuestra historia <PhArrowRight :size="18" weight="bold" /></RouterLink>
          <p class="text-muted">
            El próximo {{ store.targetLabel }}, en
            <span class="font-medium text-ink">{{ store.parts.days }} días</span>
          </p>
        </div>
      </section>

      <!-- Modo cuenta regresiva -->
      <section v-else class="max-w-4xl">
        <h1 v-reveal class="font-display text-4xl font-semibold leading-[1.04] tracking-tight md:text-6xl">
          Falta para nuestro {{ store.targetLabel }}
        </h1>
        <p v-reveal="{ delay: 100 }" class="mt-4 max-w-[48ch] text-lg leading-relaxed text-muted">{{ pareja.frase }}</p>

        <div v-reveal="{ delay: 200 }" class="mt-10 grid grid-cols-4 gap-2 md:mt-14 md:gap-8" role="timer" aria-label="Tiempo restante">
          <div v-for="u in unidades" :key="u.k" class="min-w-0">
            <div
              :key="u.v"
              class="tick font-display font-semibold leading-none tracking-tighter tabular-nums"
              style="font-size: clamp(2.5rem, 11vw, 8.5rem)"
            >{{ u.v }}</div>
            <div class="mt-2 text-xs text-muted md:text-base">{{ u.label }}</div>
          </div>
        </div>

        <p v-if="store.mesesJuntos" class="mt-10 text-muted">
          Hoy llevamos <span class="font-medium text-ink">{{ store.mesesJuntos }} meses</span> juntos.
        </p>
        <RouterLink to="/historia" class="btn mt-10">Nuestra historia <PhArrowRight :size="18" weight="bold" /></RouterLink>
      </section>
    </div>
  </main>
</template>
