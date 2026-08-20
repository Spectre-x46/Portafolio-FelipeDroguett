import { Writable } from 'node:stream'

import { renderToPipeableStream } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'

import App from './App'

/**
 * Entrada de servidor. Sólo se usa en el build, nunca en el navegador.
 *
 * Existe para que `scripts/prerender.mjs` pueda pedir el HTML de una ruta sin
 * levantar nada. No hay servidor Node en producción: Netlify sigue sirviendo
 * archivos estáticos.
 *
 * Por qué `renderToPipeableStream` y no `renderToString`, que sería más corto:
 * los dos case studies entran por `React.lazy`. `renderToString` es síncrono,
 * así que se encuentra la promesa del import dinámico sin resolver y revienta.
 * `renderToPipeableStream` con `onAllReady` espera a que todos los límites de
 * Suspense se resuelvan y sólo entonces escribe, de modo que el HTML sale
 * completo y de una pieza —sin los `<template>` ni los scripts de reemplazo
 * que aparecerían si se volcara antes de tiempo—.
 *
 * La alternativa era importar los casos de forma estática aquí y duplicar el
 * árbol de rutas. Prefiero que el build renderice exactamente la misma App que
 * ve el navegador: si divergen, el prerender deja de ser una comprobación.
 */
export function render(url) {
  return new Promise((resolve, reject) => {
    const trozos = []
    const salida = new Writable({
      write(chunk, _enc, cb) { trozos.push(chunk); cb() },
    })

    const { pipe, abort } = renderToPipeableStream(
      <StaticRouter location={url}>
        <App />
      </StaticRouter>,
      {
        onAllReady() {
          salida.on('finish', () => resolve(Buffer.concat(trozos).toString('utf8')))
          pipe(salida)
        },
        // Un fallo aquí tiene que romper el build. Un prerender a medias es
        // peor que no tenerlo: se publica sin que nadie lo note.
        onError(error) { reject(error) },
      },
    )

    setTimeout(() => {
      abort()
      reject(new Error(`El render de ${url} no terminó en 15 s`))
    }, 15000).unref?.()
  })
}
