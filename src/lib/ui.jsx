/**
 * Primitivas compartidas.
 *
 * `Measure` implementa la regla de dos capas del proyecto: primero qué
 * significa el dato en lenguaje normal, después la sigla y su metodología.
 * Una tarjeta cuyo mensaje principal sea "LCP 300 ms" no le dice nada a un
 * cliente y poco a mucha gente que sí programa.
 */

export function Section({ id, n, title, lead, children, className = '', tight = false }) {
  return (
    <section id={id} className={`rule ${tight ? 'py-14 sm:py-16' : 'py-16 sm:py-24'} ${className}`}>
      <div className="mx-auto max-w-page px-5 sm:px-8">
        {(n || title) && (
          <header className="mb-10 sm:mb-14">
            {n && <p className="eyebrow mb-3">{n}</p>}
            {title && (
              <h2 className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-ink max-w-prose">
                {title}
              </h2>
            )}
            {lead && <p className="mt-4 max-w-prose text-base text-ink-muted">{lead}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  )
}

/** Dato medido. Significado primero, sigla y metodología después. */
export function Measure({ meaning, value, method, tone = 'default' }) {
  const valueTone =
    tone === 'accent' ? 'text-accent-ink' : tone === 'ok' ? 'text-ok' : 'text-ink'
  return (
    <div className="surface rounded p-4 sm:p-5">
      <p className="text-sm text-ink leading-snug">{meaning}</p>
      <p className={`measure mt-3 text-lg font-semibold ${valueTone}`}>{value}</p>
      {method && <p className="measure mt-1 text-xs text-ink-faint leading-snug">{method}</p>}
    </div>
  )
}

/** Etiqueta de estado verificable. */
export function Status({ children, tone = 'neutral' }) {
  const tones = {
    ok:      'text-ok border-ok/40 bg-ok/[0.08]',
    pending: 'text-pending border-pending/40 bg-pending/[0.08]',
    neutral: 'text-ink-faint border-strong',
  }
  return (
    <span className={`measure inline-flex items-center gap-1.5 rounded-sm border px-2 py-1 text-xs ${tones[tone]}`}>
      {children}
    </span>
  )
}

export function Tag({ children }) {
  return (
    <span className="measure rounded-sm border border-strong px-2 py-1 text-xs text-ink-muted">
      {children}
    </span>
  )
}

/** Botón/enlace. Altura mínima 44px en todos los casos. */
export function Action({ href, to, children, variant = 'primary', className = '', ...rest }) {
  const base =
    'inline-flex min-h-[44px] items-center gap-2 rounded px-5 text-sm font-medium transition-colors duration-150'
  const variants = {
    primary: 'bg-accent text-[#0B0D10] hover:bg-accent-ink',
    ghost:   'border border-strong text-ink hover:border-accent-line hover:text-accent-ink',
  }
  const cls = `${base} ${variants[variant]} ${className}`
  return (
    <a href={href} className={cls} {...rest}>
      {children}
    </a>
  )
}
