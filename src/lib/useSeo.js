import { useEffect } from 'react'

import { ORIGIN } from './seo-routes'

function setMeta(selector, attr, value) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    const [, key, name] = selector.match(/\[(\w+)="([^"]+)"\]/) || []
    if (key && name) el.setAttribute(key, name)
    document.head.appendChild(el)
  }
  el.setAttribute(attr, value)
}

function setLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * Metadatos por ruta, sin dependencias externas.
 * En la v1 el case study heredaba el <title> de la home: ambas rutas eran
 * indistinguibles en buscadores y al compartirse.
 *
 * Esto sólo cubre la navegación en cliente. El HTML que se sirve ya trae los
 * valores correctos de su ruta escritos en el build; los textos salen de la
 * misma tabla, `./seo-routes.js`.
 */
export default function useSeo({ title, description, path = '/', image = '/assets/og-image.png' }) {
  useEffect(() => {
    const url = ORIGIN + path
    const img = ORIGIN + image

    document.title = title
    setMeta('meta[name="description"]', 'content', description)
    setLink('canonical', url)

    setMeta('meta[property="og:title"]', 'content', title)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[property="og:url"]', 'content', url)
    setMeta('meta[property="og:image"]', 'content', img)

    setMeta('meta[name="twitter:title"]', 'content', title)
    setMeta('meta[name="twitter:description"]', 'content', description)
    setMeta('meta[name="twitter:image"]', 'content', img)
  }, [title, description, path, image])
}
