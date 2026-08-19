import { useEffect, useRef } from 'react'

/**
 * El retrato responde al cursor dentro de todo el hero.
 *
 * La primera versión movía 9 px según la posición del ratón en la ventana y no
 * se percibía. Esta toma como referencia el propio hero —entras por cualquier
 * punto y el personaje ya está reaccionando— y suma al desplazamiento una
 * rotación mínima y un cambio de escala casi imperceptible. Las tres cosas
 * juntas leen como profundidad; el desplazamiento solo no leía como nada.
 *
 * Nota de implementación: la interpolación la hace una transición CSS, no un
 * bucle de requestAnimationFrame. Un bucle que amortigua cuadro a cuadro
 * depende de que el navegador entregue 60 fps y se queda a medio camino en
 * cuanto el rAF se limita —pestaña en segundo plano, ahorro de energía—. Con
 * una transición, el valor final se escribe de una vez y del suavizado se
 * encarga el compositor.
 *
 * Tampoco se agrupan las escrituras con rAF: el navegador ya entrega como
 * mucho un `pointermove` por cuadro, y escribir la cadena del transform no
 * lee layout —el rect está cacheado—, así que agrupar sólo añadía una
 * dependencia más del rAF sin ahorrar trabajo.
 *
 * Entrar es rápido; volver al reposo es deliberadamente más lento.
 *
 * Desactivado en táctil, por debajo de 1024 px y con prefers-reduced-motion.
 */
const CONF = {
  x: 22,            // px de desplazamiento horizontal máximo
  y: 14,            // px vertical máximo
  rot: 0.8,         // grados máximos
  scale: 0.008,     // 1.008 en el extremo
  easeIn: 'transform 420ms cubic-bezier(0.22, 1, 0.36, 1)',
  easeOut: 'transform 900ms cubic-bezier(0.22, 1, 0.36, 1)',
}

export default function useParallax() {
  const areaRef = useRef(null)
  const targetRef = useRef(null)

  useEffect(() => {
    const area = areaRef.current
    const el = targetRef.current
    if (!area || !el) return

    const fine = window.matchMedia?.('(hover: hover) and (pointer: fine)').matches
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce || window.innerWidth < 1024) return

    let rect = area.getBoundingClientRect()
    let leaveTimer = 0

    const measure = () => { rect = area.getBoundingClientRect() }

    const onMove = e => {
      const raw = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)
      const rawY = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)
      const nx = Math.max(-1, Math.min(1, raw))
      const ny = Math.max(-1, Math.min(1, rawY))
      const s = 1 + Math.min(1, Math.hypot(nx, ny)) * CONF.scale

      window.clearTimeout(leaveTimer)
      el.style.transition = CONF.easeIn
      el.style.willChange = 'transform'
      el.style.transform =
        `translate3d(${(nx * CONF.x).toFixed(2)}px, ${(ny * CONF.y).toFixed(2)}px, 0) ` +
        `rotateY(${(nx * CONF.rot).toFixed(3)}deg) rotateX(${(-ny * CONF.rot).toFixed(3)}deg) ` +
        `scale(${s.toFixed(4)})`
    }

    const onLeave = () => {
      el.style.transition = CONF.easeOut
      el.style.transform = ''
      // se libera la capa de composición cuando la vuelta ha terminado
      leaveTimer = window.setTimeout(() => { el.style.willChange = 'auto' }, 950)
    }

    area.addEventListener('pointermove', onMove, { passive: true })
    area.addEventListener('pointerleave', onLeave, { passive: true })
    window.addEventListener('resize', measure, { passive: true })
    window.addEventListener('scroll', measure, { passive: true })

    return () => {
      area.removeEventListener('pointermove', onMove)
      area.removeEventListener('pointerleave', onLeave)
      window.removeEventListener('resize', measure)
      window.removeEventListener('scroll', measure)
      window.clearTimeout(leaveTimer)
      el.style.transform = ''
      el.style.transition = ''
      el.style.willChange = ''
    }
  }, [])

  return { areaRef, targetRef }
}
