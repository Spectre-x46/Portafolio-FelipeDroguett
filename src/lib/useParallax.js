import { useEffect, useRef } from 'react'

/**
 * Desplazamiento mínimo siguiendo el cursor.
 *
 * No es un efecto "magnético" juguetón: el recorrido máximo son unos pocos
 * píxeles, la idea es que se descubra, no que se anuncie.
 *
 * Se desactiva por completo en táctil, en pantallas pequeñas y con
 * prefers-reduced-motion. Usa un solo listener pasivo y un rAF; no hay
 * cálculo de layout en el manejador (el rect se cachea y se refresca en
 * resize y scroll).
 */
export default function useParallax({ max = 10, damp = 0.08 } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const fine = window.matchMedia?.('(hover: hover) and (pointer: fine)').matches
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce || window.innerWidth < 1024) return

    let targetX = 0, targetY = 0, curX = 0, curY = 0
    let raf = 0, running = false

    const onMove = e => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      targetX = ((e.clientX - cx) / cx) * max
      targetY = ((e.clientY - cy) / cy) * (max * 0.55)
      if (!running) { running = true; el.style.willChange = 'transform'; raf = requestAnimationFrame(tick) }
    }

    const tick = () => {
      curX += (targetX - curX) * damp
      curY += (targetY - curY) * damp
      el.style.transform = `translate3d(${curX.toFixed(2)}px, ${curY.toFixed(2)}px, 0)`
      if (Math.abs(targetX - curX) > 0.05 || Math.abs(targetY - curY) > 0.05) {
        raf = requestAnimationFrame(tick)
      } else {
        running = false
        el.style.willChange = 'auto'
      }
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(raf)
      el.style.transform = ''
      el.style.willChange = ''
    }
  }, [max, damp])

  return ref
}
