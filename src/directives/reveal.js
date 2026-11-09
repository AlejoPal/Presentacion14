// Revela el elemento al entrar al viewport (IntersectionObserver, sin listeners de scroll).
export const reveal = {
  mounted(el, binding) {
    el.classList.add('reveal')
    if (binding.value?.delay) el.style.setProperty('--d', `${binding.value.delay}ms`)
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-in')
          io.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    io.observe(el)
    el._io = io
  },
  unmounted(el) {
    el._io?.disconnect()
  },
}
