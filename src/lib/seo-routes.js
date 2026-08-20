/**
 * Metadatos por ruta. Fuente única.
 *
 * Los consumen dos sitios que tienen que decir exactamente lo mismo:
 *
 *   1. `useSeo`, en el navegador, al cambiar de ruta sin recargar.
 *   2. `scripts/prerender.mjs`, en el build, para escribir estos valores
 *      dentro del HTML que se sirve. Ese es el que leen LinkedIn, WhatsApp,
 *      Slack, Discord, X y cualquier crawler que no ejecute JavaScript.
 *
 * Antes vivían sueltos dentro de cada componente. Mientras el <head> sólo se
 * tocaba en cliente daba igual; en cuanto hay que escribirlo también en build,
 * dos copias del mismo texto son dos copias que se separan.
 */

export const ORIGIN = 'https://felipe-droguett.netlify.app'

export const SEO = {
  '/': {
    path: '/',
    title: 'Felipe Droguett — desarrollo, campañas y automatización comercial',
    description:
      'Trabajo dentro de negocios que venden online: su tienda, su publicidad y la automatización de su atención. Dos casos documentados con métricas fechadas.',
    image: '/assets/og-image.png',
    imageAlt: 'Felipe Droguett — desarrollo, campañas y automatización comercial',
    // La home ya tenía una descripción más corta para Twitter y se respeta.
    twitterDescription:
      'Trabajo dentro de negocios que venden online: su tienda, su publicidad y la automatización de su atención.',
  },

  '/caso/tokyo-tunning': {
    path: '/caso/tokyo-tunning',
    title: 'Tokyo Tunning — de dos puestos de feria a e-commerce | Felipe Droguett',
    description:
      'Tres años dentro del mismo negocio: contenido, campañas, tienda online, catálogo y medición. Con las métricas fechadas y la deuda técnica que quedó abierta.',
    // Captura real de la tienda en producción, recortada a 1200×630. No es
    // arte generado: es el mismo sitio que enlaza el caso.
    image: '/assets/og-tokyo.jpg',
    imageAlt: 'Tienda online de Tokyo Tunning en producción',
  },

  '/caso/agente-comercial': {
    path: '/caso/agente-comercial',
    title: 'Agente comercial conversacional — caso de estudio | Felipe Droguett',
    // El estado va explícito en la descripción y no en el título porque el
    // título se trunca antes en casi todas las superficies. «En validación» es
    // literalmente lo que declara el caso; no dice ni sugiere «en producción».
    description:
      'Un sistema que responde consultas comerciales por chat sin inventar precios ni stock. Arquitectura, evaluación sobre 48.937 mensajes reales y los fallos encontrados. En validación: todavía no atiende clientes reales.',
    // Deuda declarada: no hay una imagen propia para este caso. La única pieza
    // visual es el grafo del workflow, que es un SVG en la página y no un
    // asset. Hasta que exista, hereda la de la home.
    image: '/assets/og-image.png',
    imageAlt: 'Felipe Droguett — caso de estudio de un agente comercial conversacional',
  },
}
