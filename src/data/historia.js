// Edita textos, fechas y fotos. Las fotos van en public/fotos/ (ej: /fotos/01.jpg).
// layout: 'split-left' | 'split-right' | 'full'  (alterna para dar ritmo)

export const intro = {
  titulo: 'Nuestra historia',
  texto: 'Algunos capítulos, algunas fotos y todo lo que viene después.',
  foto: '/fotos/portada.jpg',
  pos: 'center 30%',
}

export const capitulos = [
  {
    fecha: 'Primer capítulo',
    titulo: 'Juntos de viaje',
    texto: 'Aeropuertos, madrugones y selfies cansados. Cualquier camino se siente corto contigo.',
    foto: '/fotos/01.jpg',
    layout: 'split-left',
  },
  {
    fecha: 'Segundo capítulo',
    titulo: 'Noches que se quedan',
    texto: 'Velas, música y tú en medio de todo. Hay noches que uno quiere guardar enteras.',
    foto: '/fotos/02.jpg',
    pos: 'center 35%',
    layout: 'full',
  },
  {
    fecha: 'Tercer capítulo',
    titulo: 'Al aire libre',
    texto: 'Ríos, caminos y sol. Contigo hasta perderse se vuelve un buen plan.',
    foto: '/fotos/03.jpg',
    layout: 'split-right',
  },
  {
    fecha: 'Hoy',
    titulo: 'Y seguimos',
    texto: 'Cada 14 hay un mes más, y todavía quedan muchos por escribir juntos.',
    foto: '/fotos/04.jpg',
    pos: 'center 40%',
    layout: 'full',
  },
]

export const momentos = [
  { foto: '/fotos/m1.jpg', pie: 'Entre arte' },
  { foto: '/fotos/m2.jpg', pie: 'Noche en el agua' },
  { foto: '/fotos/m3.jpg', pie: 'Una tarde cualquiera' },
  { foto: '/fotos/m4.jpg', pie: 'Fiesta y botas' },
  { foto: '/fotos/m5.jpg', pie: 'Después de la lluvia' },
  { foto: '/fotos/m6.jpg', pie: 'Pausa con café' },
  { foto: '/fotos/m7.jpg', pie: 'Luz de ventana' },
  { foto: '/fotos/m8.jpg', pie: 'Un alto en el camino' },
]

export const cierre = {
  titulo: 'Lo mejor todavía no está escrito',
}
