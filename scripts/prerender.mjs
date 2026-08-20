/**
 * Prerender de las rutas en el build.
 *
 * EL PROBLEMA
 * -----------
 * Hasta ahora las tres rutas devolvían el MISMO HTML, byte a byte, y sin una
 * sola palabra de contenido. React lo arreglaba al arrancar, pero hay
 * consumidores que no ejecutan JavaScript y no van a esperar:
 *
 *   LinkedIn · WhatsApp · Slack · Discord · X · buscadores sin renderizado ·
 *   agentes y crawlers de IA
 *
 * El daño concreto y medible era que compartir un case study mostraba la
 * preview de la home. Compartir case studies es exactamente lo que se hace al
 * postular, así que el fallo caía justo donde más costaba.
 *
 * POR QUÉ ESTA SOLUCIÓN Y NO OTRA
 * -------------------------------
 * Restricción de partida: seguir con React + Vite + React Router, sin migrar
 * a Next, Astro ni Remix, y sin meter una dependencia de runtime.
 *
 * Esto no añade NINGUNA dependencia, ni de producción ni de desarrollo.
 * `react-dom/server` y `StaticRouter` ya venían con React y React Router; lo
 * único nuevo son dos archivos y un paso más en `npm run build`. Las
 * alternativas de estantería (`vite-plugin-prerender`, `prerender-spa-plugin`)
 * arrastran Puppeteer —un Chromium entero como devDependency— para hacer lo
 * mismo peor: renderizando en un navegador de verdad en vez de en Node.
 *
 * Se revierte borrando este archivo, `src/entry-server.jsx` y el paso del
 * script de build. No toca la aplicación.
 *
 * QUÉ NO HACE
 * -----------
 * No hidrata. `main.jsx` sigue usando `createRoot`, así que el navegador
 * descarta el HTML servido y renderiza como siempre. Es deliberado: hidratar
 * obligaría a resolver los `React.lazy` de los casos antes de montar o a
 * enseñar el fallback «Cargando…» encima del contenido ya pintado. El HTML
 * prerenderizado es para quien no ejecuta JavaScript; para el resto, el
 * comportamiento es idéntico al de antes.
 */

import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import { SEO, ORIGIN } from '../src/lib/seo-routes.js'
import { render } from '../dist-ssr/entry-server.js'

const raiz = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(raiz, 'dist')

/** Escapa lo que va dentro de un atributo HTML. */
const attr = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

/** Escapa lo que va dentro de un nodo de texto. */
const texto = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/**
 * Sustituye y comprueba.
 *
 * Un `String.replace` que no encuentra su patrón no falla: devuelve la cadena
 * intacta y el build sigue como si nada. Eso es justo lo que no puede pasar
 * aquí —se publicaría un HTML con los metadatos de otra ruta sin un solo
 * error—, así que cada sustitución se verifica y una que no encaja rompe el
 * build.
 */
function sustituir(html, patron, reemplazo, etiqueta) {
  if (!patron.test(html)) {
    throw new Error(
      `prerender: no encontré «${etiqueta}» en dist/index.html.\n` +
      'Si el <head> de index.html cambió, hay que actualizar este script.',
    )
  }
  return html.replace(patron, () => reemplazo)
}

function cabecera(html, meta) {
  const url = ORIGIN + meta.path
  const img = ORIGIN + meta.image
  const descTwitter = meta.twitterDescription ?? meta.description

  let out = html
  out = sustituir(out, /<title>[\s\S]*?<\/title>/,
    `<title>${texto(meta.title)}</title>`, '<title>')
  out = sustituir(out, /<meta name="description" content="[^"]*"\s*\/>/,
    `<meta name="description" content="${attr(meta.description)}" />`, 'meta description')
  out = sustituir(out, /<link rel="canonical" href="[^"]*"\s*\/>/,
    `<link rel="canonical" href="${attr(url)}" />`, 'canonical')

  out = sustituir(out, /<meta property="og:title" content="[^"]*"\s*\/>/,
    `<meta property="og:title" content="${attr(meta.title)}" />`, 'og:title')
  out = sustituir(out, /<meta property="og:description" content="[^"]*"\s*\/>/,
    `<meta property="og:description" content="${attr(meta.description)}" />`, 'og:description')
  out = sustituir(out, /<meta property="og:url" content="[^"]*"\s*\/>/,
    `<meta property="og:url" content="${attr(url)}" />`, 'og:url')
  out = sustituir(out, /<meta property="og:image" content="[^"]*"\s*\/>/,
    `<meta property="og:image" content="${attr(img)}" />`, 'og:image')
  out = sustituir(out, /<meta property="og:image:alt" content="[^"]*"\s*\/>/,
    `<meta property="og:image:alt" content="${attr(meta.imageAlt)}" />`, 'og:image:alt')

  out = sustituir(out, /<meta name="twitter:title" content="[^"]*"\s*\/>/,
    `<meta name="twitter:title" content="${attr(meta.title)}" />`, 'twitter:title')
  out = sustituir(out, /<meta name="twitter:description" content="[^"]*"\s*\/>/,
    `<meta name="twitter:description" content="${attr(descTwitter)}" />`, 'twitter:description')
  out = sustituir(out, /<meta name="twitter:image" content="[^"]*"\s*\/>/,
    `<meta name="twitter:image" content="${attr(img)}" />`, 'twitter:image')

  return out
}

const plantilla = await readFile(join(dist, 'index.html'), 'utf8')

if (!plantilla.includes('<div id="root"></div>')) {
  throw new Error('prerender: no encuentro <div id="root"></div> en dist/index.html')
}

const informe = []

for (const meta of Object.values(SEO)) {
  const cuerpo = await render(meta.path)

  if (cuerpo.includes('Cargando…')) {
    throw new Error(
      `prerender: ${meta.path} salió con el fallback de Suspense en vez del contenido. ` +
      'El render se volcó antes de resolver los imports dinámicos.',
    )
  }

  let html = cabecera(plantilla, meta)
  html = html.replace('<div id="root"></div>', `<div id="root">${cuerpo}</div>`)

  const destino = meta.path === '/'
    ? join(dist, 'index.html')
    : join(dist, meta.path, 'index.html')

  await mkdir(dirname(destino), { recursive: true })
  await writeFile(destino, html, 'utf8')

  informe.push({
    ruta: meta.path,
    archivo: destino.slice(raiz.length + 1).replace(/\\/g, '/'),
    bytes: Buffer.byteLength(html),
    md5: createHash('md5').update(html).digest('hex').slice(0, 12),
  })
}

const hashes = new Set(informe.map(r => r.md5))
if (hashes.size !== informe.length) {
  throw new Error('prerender: dos rutas produjeron HTML idéntico. Eso es el fallo que veníamos a arreglar.')
}

console.log('\nprerender — HTML propio por ruta:')
for (const r of informe) {
  console.log(`  ${r.ruta.padEnd(26)} ${String(r.bytes).padStart(7)} B  md5 ${r.md5}  → ${r.archivo}`)
}
console.log()
