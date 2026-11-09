const c = (v) => `rgb(var(--${v}) / <alpha-value>)`

export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        bg: c('bg'),
        surface: c('surface'),
        surface2: c('surface2'),
        ink: c('ink'),
        muted: c('muted'),
        accent: c('accent'),
        'accent-ink': c('accent-ink'),
        line: c('line'),
      },
      fontFamily: {
        sans: ['"Outfit Variable"', 'system-ui', 'sans-serif'],
        display: ['"Bricolage Grotesque Variable"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
