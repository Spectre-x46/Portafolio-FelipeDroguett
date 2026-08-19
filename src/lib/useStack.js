import { useEffect, useRef } from 'react'

/**
 * Apilado de tarjetas al hacer scroll.
 *
 * Cada tarjeta queda `position: sticky`. Cuando la siguiente empieza a
 * taparla, la de abajo se reduce y se oscurece un poco. Da sensación de
 * profundidad y hace que dos casos ocupen la atención que merecen sin
 * convertirse en dos rectángulos paralelos.
 *
 * Sin librería de animación: un listener pasivo, un rAF y transform. Las
 * lecturas de layout se hacen una vez por cuadro y sólo mientras la sección
 * está en pantalla.
 */
export default function useStack(count) {
  const wrapRef = useRef(null)
  const cardRefs = useRef([])

  useEffect(() => {
    const wrap = wrapRef.current
    const cards = cardRefs.current.filter(Boolean)
    if (!wrap || cards.length < 2) return

    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    const small = window.matchMedia?.('(max-width: 1023px)').matches
    if (reduce || small) return

    let raf = 0
    let visible = false

    const apply = () => {
      raf = 0
      for (let i = 0; i < cards.length - 1; i += 1) {
        const card = cards[i]
        const next = cards[i + 1]
        const nextTop = next.getBoundingClientRect().top
        const cardTop = card.getBoundingClientRect().top
        // progreso 0→1 mientras la siguiente sube desde el borde inferior
        // hasta cubrir la posición de la actual
        const span = window.innerHeight - cardTop
        const p = span <= 0 ? 0 : Math.min(1, Math.max(0, 1 - (nextTop - cardTop) / span))
        card.style.transform = `scale(${(1 - p * 0.055).toFixed(4)})`
        card.style.opacity = (1 - p * 0.35).toFixed(3)
      }
    }

    const onScroll = () => { if (!raf && visible) raf = requestAnimationFrame(apply) }

    const io = new IntersectionObserver(
      entries => {
        visible = entries[0].isIntersecting
        for (const c of cards) c.style.willChange = visible ? 'transform, opacity' : 'auto'
        if (visible) onScroll()
      },
      { rootMargin: '200px 0px' },
    )
    io.observe(wrap)

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    apply()

    return () => {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
      for (const c of cards) { c.style.transform = ''; c.style.opacity = ''; c.style.willChange = '' }
    }
  }, [count])

  return { wrapRef, cardRefs }
}
