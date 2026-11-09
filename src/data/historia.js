// Edita textos, fechas y fotos. Las fotos van en public/fotos/ (ej: /fotos/01.jpg).
// layout: 'split-left' | 'split-right' | 'full'  (alterna para dar ritmo)

export const intro = {
  titulo: 'Nuestra historia',
  texto: 'Algunos capítulos, algunas fotos y todo lo que viene después.',
  foto: '/fotos/portada.jpg',
}

export const capitulos = [
  {
    fecha: 'Primer capítulo',
    titulo: 'Así empezó todo',
    texto: 'Aquí va el recuerdo de cómo nos conocimos. Cámbialo por tus palabras.',
    foto: '/fotos/01.jpg',
    layout: 'split-left',
  },
  {
    fecha: 'Segundo capítulo',
    titulo: 'La primera salida',
    texto: 'El lugar, lo que pedimos, de qué nos reímos. Los detalles chiquitos son los mejores.',
    foto: '/fotos/02.jpg',
    layout: 'full',
  },
  {
    fecha: 'Tercer capítulo',
    titulo: 'Nuestro lugar favorito',
    texto: 'Ese sitio al que siempre volvemos y que ya se siente nuestro.',
    foto: '/fotos/03.jpg',
    layout: 'split-right',
  },
  {
    fecha: 'Hoy',
    titulo: 'Y seguimos',
    texto: 'Cada 14 hay un mes más, y todavía quedan muchos por escribir juntos.',
    foto: '/fotos/04.jpg',
    layout: 'full',
  },
]

export const momentos = [
  { foto: '/fotos/m1.jpg', pie: 'Un domingo cualquiera' },
  { foto: '/fotos/m2.jpg', pie: 'Nuestro primer viaje' },
  { foto: '/fotos/m3.jpg', pie: 'Risas sin motivo' },
  { foto: '/fotos/m4.jpg', pie: 'Ese atardecer' },
  { foto: '/fotos/m5.jpg', pie: 'Con helado' },
  { foto: '/fotos/m6.jpg', pie: 'Otro 14' },
]

export const cierre = {
  titulo: 'Lo mejor todavía no está escrito',
}
