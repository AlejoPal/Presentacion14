import { defineStore } from 'pinia'
import { pareja } from '@/config/pareja'

const MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']

// Para probar sin esperar: /?fecha=2026-12-14  o  /?fecha=2026-12-13T23:59:50
function simulatedOffset() {
  try {
    const f = new URLSearchParams(window.location.search).get('fecha')
    if (!f) return 0
    const t = new Date(f.length === 10 ? `${f}T00:00:00` : f).getTime()
    return Number.isNaN(t) ? 0 : t - Date.now()
  } catch {
    return 0
  }
}

const offset = simulatedOffset()

export const useCountdownStore = defineStore('countdown', {
  state: () => ({
    offset,
    now: Date.now() + offset,
  }),
  getters: {
    date: (s) => new Date(s.now),
    // El dia 14 y el 15 se celebra; el resto del mes se cuenta hacia el proximo 14
    celebrating() {
      const d = this.date.getDate()
      return d === pareja.dia || d === pareja.dia + 1
    },
    // Nuestra historia solo se abre mientras se celebra
    historiaAbierta() {
      return this.celebrating
    },
    // Proximo 14 a contar. Si ya estamos celebrando, el del mes siguiente.
    nextTarget() {
      const d = this.date
      const y = d.getFullYear()
      const m = d.getMonth()
      const passed = d.getDate() >= pareja.dia && (this.celebrating || d.getDate() > pareja.dia)
      return new Date(y, passed ? m + 1 : m, pareja.dia, 0, 0, 0)
    },
    parts() {
      const ms = Math.max(0, this.nextTarget.getTime() - this.now)
      const s = Math.floor(ms / 1000)
      return {
        days: Math.floor(s / 86400),
        hours: Math.floor((s % 86400) / 3600),
        minutes: Math.floor((s % 3600) / 60),
        seconds: s % 60,
      }
    },
    targetLabel() {
      const t = this.nextTarget
      return `${t.getDate()} de ${MESES[t.getMonth()]}`
    },
    mesesJuntos() {
      if (!pareja.desde) return null
      const a = new Date(`${pareja.desde}T00:00:00`)
      const d = this.date
      let n = (d.getFullYear() - a.getFullYear()) * 12 + (d.getMonth() - a.getMonth())
      if (d.getDate() < a.getDate()) n -= 1
      return n > 0 ? n : null
    },
  },
  actions: {
    tick() {
      this.now = Date.now() + this.offset
    },
  },
})
