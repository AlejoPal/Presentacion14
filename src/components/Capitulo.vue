<script setup>
import Foto from './Foto.vue'
defineProps({ item: Object, index: Number })
</script>

<template>
  <!-- En escritorio cada capitulo se queda fijo y el siguiente lo cubre. En movil fluye normal. -->
  <article
    class="relative flex min-h-[100dvh] items-center border-t border-line/15 md:sticky md:top-0"
    :class="index % 2 === 0 ? 'bg-bg' : 'bg-surface'"
  >
    <!-- Variante a pantalla completa -->
    <template v-if="item.layout === 'full'">
      <div class="absolute inset-0">
        <Foto :src="item.foto" :alt="item.titulo" :pos="item.pos" style="--r: 0px" />
        <div class="absolute inset-0" style="background: linear-gradient(to top, rgb(20 11 34 / .92), rgb(20 11 34 / .4) 55%, rgb(20 11 34 / .1))" />
      </div>
      <div class="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-32 md:px-8 md:pb-24">
        <div v-reveal class="max-w-xl text-[#F3EDFF]">
          <p class="text-sm text-[#D9C9FA]">{{ item.fecha }}</p>
          <h2 class="mt-2 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">{{ item.titulo }}</h2>
          <p class="mt-4 max-w-[55ch] text-lg leading-relaxed text-[#E8DEFB]">{{ item.texto }}</p>
        </div>
      </div>
    </template>

    <!-- Variante dividida -->
    <div v-else class="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 py-24 md:grid-cols-12 md:gap-8 md:px-8">
      <div
        v-reveal
        class="aspect-[4/5] w-full max-w-md justify-self-center md:col-span-6 md:max-w-none"
        :class="item.layout === 'split-left' ? 'md:col-start-1' : 'md:order-2 md:col-start-7'"
      >
        <div class="h-full w-full transition-transform duration-500 hover:rotate-0" :class="item.layout === 'split-left' ? '-rotate-2' : 'rotate-2'">
          <Foto :src="item.foto" :alt="item.titulo" :pos="item.pos" />
        </div>
      </div>
      <div
        v-reveal="{ delay: 120 }"
        class="md:col-span-5"
        :class="item.layout === 'split-left' ? 'md:col-start-8' : 'md:order-1 md:col-start-1'"
      >
        <p class="text-sm font-medium text-accent">{{ item.fecha }}</p>
        <h2 class="mt-2 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">{{ item.titulo }}</h2>
        <p class="mt-5 max-w-[55ch] text-lg leading-relaxed text-muted">{{ item.texto }}</p>
      </div>
    </div>
  </article>
</template>
