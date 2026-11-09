<script setup>
import { RouterLink } from 'vue-router'
import { PhArrowLeft } from '@phosphor-icons/vue'
import Foto from '@/components/Foto.vue'
import Capitulo from '@/components/Capitulo.vue'
import { intro, capitulos, momentos, cierre } from '@/data/historia'
</script>

<template>
  <main>
    <!-- Portada: texto a la izquierda, foto inclinada a la derecha -->
    <section class="mx-auto grid min-h-[100dvh] max-w-7xl grid-cols-1 items-center gap-10 px-4 pb-16 pt-28 md:grid-cols-12 md:gap-8 md:px-8">
      <div class="md:col-span-6">
        <h1 v-reveal class="font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">{{ intro.titulo }}</h1>
        <p v-reveal="{ delay: 100 }" class="mt-5 max-w-[40ch] text-lg leading-relaxed text-muted md:text-xl">{{ intro.texto }}</p>
      </div>
      <div v-reveal="{ delay: 200 }" class="mx-auto aspect-[4/5] w-full max-w-sm md:col-span-5 md:col-start-8 md:max-w-none">
        <div class="h-full w-full rotate-3 transition-transform duration-500 hover:rotate-0">
          <Foto :src="intro.foto" alt="Nosotros" />
        </div>
      </div>
    </section>

    <!-- Capitulos apilados -->
    <Capitulo v-for="(c, i) in capitulos" :key="c.titulo" :item="c" :index="i" />

    <!-- Galeria horizontal con scroll-snap -->
    <section class="relative bg-bg py-24 md:py-32">
      <div class="mx-auto max-w-7xl px-4 md:px-8">
        <h2 v-reveal class="font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">Más momentos</h2>
      </div>
      <div class="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-10 md:px-8 [scrollbar-width:thin]">
        <figure
          v-for="(m, i) in momentos"
          :key="m.foto"
          class="w-[72vw] shrink-0 snap-center md:w-[26rem]"
          :class="i % 2 ? 'mt-12' : ''"
        >
          <div v-reveal="{ delay: i * 60 }" class="aspect-[4/5]">
            <Foto :src="m.foto" :alt="m.pie" />
          </div>
          <figcaption class="mt-3 text-muted">{{ m.pie }}</figcaption>
        </figure>
      </div>
    </section>

    <!-- Cierre -->
    <section class="mx-auto flex min-h-[80dvh] max-w-7xl flex-col items-start justify-center gap-8 px-4 py-24 md:px-8">
      <h2 v-reveal class="max-w-4xl font-display text-5xl font-semibold leading-[1.03] tracking-tight md:text-8xl">{{ cierre.titulo }}</h2>
      <RouterLink to="/" v-reveal="{ delay: 120 }" class="btn"><PhArrowLeft :size="18" weight="bold" /> Volver al contador</RouterLink>
    </section>
  </main>
</template>
