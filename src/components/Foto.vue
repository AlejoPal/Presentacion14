<script setup>
import { ref } from 'vue'
import { PhImageSquare } from '@phosphor-icons/vue'

defineProps({ src: String, alt: { type: String, default: '' }, pos: { type: String, default: 'center' } })
const roto = ref(false)
const dev = import.meta.env.DEV
</script>

<template>
  <div class="foto relative h-full w-full overflow-hidden bg-surface2" style="border-radius: var(--r, 28px)">
    <img
      v-if="src && !roto"
      :src="src"
      :alt="alt"
      loading="lazy"
      decoding="async"
      class="h-full w-full object-cover"
      :style="{ objectPosition: pos }"
      @error="roto = true"
    />
    <div
      v-else
      class="flex h-full w-full flex-col items-center justify-center gap-2 p-6 text-center text-muted"
      style="background: linear-gradient(135deg, rgb(var(--orb-a) / .35), rgb(var(--orb-b) / .25))"
    >
      <PhImageSquare :size="40" weight="light" />
      <p v-if="dev" class="text-xs">Falta la foto: public{{ src }}</p>
    </div>
  </div>
</template>
