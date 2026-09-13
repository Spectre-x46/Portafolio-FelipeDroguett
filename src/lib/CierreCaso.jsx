import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

/**
 * Cierre de un caso de estudio: el siguiente paso, no un callejón sin salida.
 * Lleva al contacto de la portada; `ScrollManager` baja hasta el ancla.
 */
export default function CierreCaso({ titulo, children }) {
  return (
    <section className="surface mt-12 rounded-lg p-6 sm:p-8">
      <h2 className="max-w-prose font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
        {titulo}
      </h2>
      <p className="mt-3 max-w-prose text-base text-ink-muted">{children}</p>
      <Link
        to="/#contacto"
        className="mt-6 inline-flex min-h-[48px] items-center gap-2 rounded-full bg-accent px-6 text-sm font-medium text-[#0B0D10] transition-colors duration-150 hover:bg-accent-ink"
      >
        Hablemos <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </section>
  )
}
