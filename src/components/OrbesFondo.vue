<template>
  <div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
    <div
      class="orb absolute -left-[15vw] -top-[10vh] h-[60vmax] w-[60vmax] rounded-full opacity-40 blur-3xl"
      style="background: radial-gradient(circle, rgb(var(--orb-a)), transparent 65%); animation: drift-a 26s ease-in-out infinite"
    />
    <div
      class="orb absolute -bottom-[20vh] -right-[15vw] h-[55vmax] w-[55vmax] rounded-full opacity-30 blur-3xl"
      style="background: radial-gradient(circle, rgb(var(--orb-b)), transparent 65%); animation: drift-b 32s ease-in-out infinite"
    />
  </div>
</template>
