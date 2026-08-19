import { useEffect, useRef, useState } from 'react'

/**
 * Aparición al entrar en pantalla.
 *
 * Historia de este archivo, que vale la pena dejar escrita:
 *
 * 1. La versión original usaba Framer Motion. Se quitó: era lo único para lo
 *    que estaba la librería y costaba ~100 kB comprimidos por animar una
 *    opacidad.
 * 2. La reemplacé por IntersectionObserver. Al probarlo vi bloques sin revelar
 *    y di por hecho que el observador se los saltaba; al comprobarlo bien
 *    resultó ser mi prueba, que interrumpía un scroll suave a medio camino.
 *    Dejo escrito el error porque casi me lleva a documentar un fallo que no
 *    existía.
 * 3. Aun así me quedé con esta versión: comprueba la posición real de cada
 *    elemento en cada cuadro de scroll, de modo que el estado final depende de
 *    dónde está el elemento y no de si un evento llegó a tiempo.
 *
 * El contenido sólo se oculta si el JavaScript arrancó (clase `js` en <html>).
 * Sin JS se ve todo: una página que necesita JavaScript para ser legible está
 * rota, no animada.
 */

const registry = new Set()
let scheduled = false
let listening = false

function sweep() {
  scheduled = false
  const limit = window.innerHeight * 0.94
  for (const entry of [...registry]) {
    const el = entry.el
    if (!el || !el.isConnected) { registry.delete(entry); continue }
    if (el.getBoundingClientRect().top < limit) {
      entry.show()
      registry.delete(entry)
    }
  }
  if (registry.size === 0 && listening) {
    window.removeEventListener('scroll', schedule)
    window.removeEventListener('resize', schedule)
    listening = false
  }
}

function schedule() {
  if (scheduled) return
  scheduled = true
  requestAnimationFrame(sweep)
}

function register(entry) {
  registry.add(entry)
  if (!listening) {
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule, { passive: true })
    listening = true
  }
  schedule()
  return () => registry.delete(entry)
}

export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '' }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce) { setShown(true); return }

    return register({ el, show: () => setShown(true) })
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? 'is-in' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </Tag>
  )
}
