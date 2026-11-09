// Edita textos, fechas y fotos. Las fotos van en public/fotos/ (ej: /fotos/01.jpg).
// layout: 'split-left' | 'split-right' | 'full'  (alterna para dar ritmo)

export const intro = {
  titulo: 'Nuestra historia',
  texto: 'Un poco de lo que hemos vivido y de lo mucho que te quiero.',
  foto: '/fotos/portada.jpg',
  pos: 'center 30%',
}

export const capitulos = [
  {
    fecha: 'Primer capítulo',
    titulo: 'Juntos de viaje',
    texto: 'Aeropuertos, madrugones y selfies cansados, y aun así me encanta cada minuto contigo. Hasta lo más simple se siente especial a tu lado.',
    foto: '/fotos/01.jpg',
    layout: 'split-left',
  },
  {
    fecha: 'Segundo capítulo',
    titulo: 'Noches que se quedan',
    texto: 'Contigo hasta una noche cualquiera se vuelve inolvidable. Disfruto demasiado cada momento que paso a tu lado y quisiera guardarlos todos.',
    foto: '/fotos/02.jpg',
    pos: 'center 35%',
    layout: 'full',
  },
  {
    fecha: 'Tercer capítulo',
    titulo: 'Al aire libre',
    texto: 'Contigo cualquier plan es el mejor plan. Me encanta cada tiempo que compartimos, y cada vez quiero más.',
    foto: '/fotos/03.jpg',
    layout: 'split-right',
  },
  {
    fecha: 'Cuarto capítulo',
    titulo: 'Contigo hasta el final del sendero',
    texto: 'Caminar, reírnos y perdernos un rato. Me encanta cada tiempo que paso a tu lado, sin prisa y sin nada más.',
    foto: '/fotos/05.jpg',
    layout: 'split-left',
  },
  {
    fecha: 'Quinto capítulo',
    titulo: 'Ver el mundo juntos',
    texto: 'Desde lo alto todo se ve más bonito, y más aún si es contigo. Quiero conocer muchos lugares a tu lado.',
    foto: '/fotos/06.jpg',
    pos: 'center 40%',
    layout: 'full',
  },
  {
    fecha: 'Sexto capítulo',
    titulo: 'Tardes de museo',
    texto: 'Me gusta descubrir lo que te gusta y quedarme mirándote mientras lo disfrutas. Contigo aprendo algo nuevo cada día.',
    foto: '/fotos/07.jpg',
    layout: 'split-right',
  },
  {
    fecha: 'Hoy',
    titulo: 'Y seguimos',
    texto: 'Te quiero mucho. Solo me dan ganas de seguir compartiendo mi vida contigo, con tu familia y con todo tu mundo.',
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
  { foto: '/fotos/m9.jpg', pie: 'Entre retratos' },
  { foto: '/fotos/m10.jpg', pie: 'Noche junto al río' },
  { foto: '/fotos/m11.jpg', pie: 'Orilla tranquila' },
]

export const cierre = {
  titulo: 'Gracias por dejarme entrar en tu mundo',
  texto: 'Quiero conocer más de ti, de tu familia, de tus lugares y de tus días, y que tú seas parte de los míos.',
}

export const proximamente = {
  titulo: 'Próximamente',
  texto: 'Vendrán más historias. Todavía nos faltan muchos 14 por vivir.',
}
