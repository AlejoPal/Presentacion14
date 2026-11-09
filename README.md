# Nuestro 14

Cuenta regresiva al proximo 14 de cada mes (el 14 y 15 muestra una celebracion) y una vista con nuestra historia.
Vue 3 + Vite + Pinia + Vue Router + Tailwind 3, desplegado en Cloudflare (Workers con static assets). Sin base de datos ni variables de entorno.

## Editar contenido
- `src/config/pareja.js`: marca, mensajes y fecha de inicio (opcional).
- `src/data/historia.js`: capitulos y momentos.
- `public/fotos/`: tus imagenes (portada.jpg, 01-04.jpg, m1-m6.jpg). Optimizalas a ~1600px de ancho, JPG/WebP.

## Probar el modo celebracion
`npm run dev` y abre `/?fecha=2026-12-14` (tambien `/?fecha=2026-12-13T23:59:50` para ver el cambio a medianoche).

## Despliegue
- Automatico: Cloudflare Workers & Pages > Create > Import repository. Build `npm run build`, deploy `npx wrangler deploy`.
- CLI: `npm run deploy` (requiere `npx wrangler login` una vez).
