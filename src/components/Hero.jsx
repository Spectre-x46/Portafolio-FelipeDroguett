import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Reveal from '../lib/Reveal'

/**
 * Hero.
 *
 * No lleva eslogan. Su único trabajo es que en 15 segundos alguien entienda
 * aproximadamente a qué me dedico y tenga un motivo para seguir bajando.
 * La evidencia está aquí arriba y se renderiza en TODOS los anchos — en la
 * versión anterior la tarjeta de prueba era `hidden lg:block` y desaparecía
 * por debajo de 1024px, que es donde llega la mayoría del tráfico.
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[color:var(--line)]">
      {/* Fondo: una sola fuente de luz cenital. Sin orbes, sin grid decorativo. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px]"
        style={{ background: 'radial-gradient(60% 100% at 22% 0%, rgba(232,163,61,0.10) 0%, transparent 70%)' }}
      />

      <div className="relative mx-auto max-w-page px-5 pb-10 pt-28 sm:px-8 sm:pb-12 sm:pt-32">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-16">

          {/* ── Identidad ── */}
          <div>
            <Reveal>
              <p className="eyebrow mb-5">Droguett Consulting SpA · Santiago, Chile</p>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                Felipe Droguett
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-6 max-w-prose space-y-4 text-base text-ink-muted">
                <p>
                  Llevo tres años trabajando dentro del mismo negocio. Entré a grabarle videos para
                  Instagram y terminé ocupándome de su tienda online y de su publicidad.
                </p>
                <p className="text-ink">
                  Desde julio construyo un sistema que responde consultas comerciales por chat. No
                  planifiqué esa secuencia: cada parte apareció cuando la anterior funcionó y dejó al
                  descubierto el problema siguiente.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#trabajo"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded bg-accent px-5 text-sm font-medium text-[#0B0D10] transition-colors duration-150 hover:bg-accent-ink"
                >
                  Ver en qué he trabajado <ArrowRight size={16} aria-hidden="true" />
                </a>
                <a
                  href="#contacto"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded border border-strong px-5 text-sm font-medium text-ink transition-colors duration-150 hover:border-accent-line hover:text-accent-ink"
                >
                  Hablemos
                </a>
              </div>
            </Reveal>
          </div>

          {/* ── Evidencia. Visible en todos los anchos. ── */}
          <Reveal delay={0.2}>
            <aside className="surface rounded-lg p-5 sm:p-6">
              <p className="eyebrow mb-4">Un caso, tres años</p>

              <p className="text-sm leading-relaxed text-ink-muted">
                Tokyo Tunning vendía accesorios en dos puestos de feria, sin marca ni forma de vender
                fuera del persa. Hoy tiene tienda online, envía a todo Chile y hace su propia
                publicidad.
              </p>

              <dl className="mt-5 space-y-3.5">
                <div>
                  <dt className="text-sm text-ink">Las ventas del negocio se multiplicaron por treinta</dt>
                  <dd className="measure mt-0.5 text-sm text-accent-ink">
                    $500K → $15M al mes · 18 meses
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-ink">
                    En el CyberDay, cada peso puesto en publicidad devolvió veintisiete
                  </dt>
                  <dd className="measure mt-0.5 text-sm text-accent-ink">
                    ROAS 27:1 · jun 2026 · 3 días
                  </dd>
                </div>
              </dl>

              <Link
                to="/caso/tokyo-tunning"
                className="mt-6 inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-accent-ink underline decoration-[color:var(--accent-line)] underline-offset-4 transition-colors hover:decoration-[color:var(--accent)]"
              >
                Leer el caso completo
                <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            </aside>
          </Reveal>
        </div>

        {/* Franja de datos. Cierra el bloque con hechos comprobables en lugar
            de con espacio vacío, y es donde vive la credencial: enlazada y
            verificable, pero sin ocupar el titular. */}
        <Reveal delay={0.26}>
          <dl className="mt-12 grid gap-px overflow-hidden rounded border border-[color:var(--line)] bg-[color:var(--line)] sm:mt-14 sm:grid-cols-3">
            <div className="bg-raised px-5 py-4">
              <dt className="measure text-xs text-ink-faint">Con el mismo cliente</dt>
              <dd className="mt-1 text-sm text-ink">Tres años · 2023 – 2026</dd>
            </div>
            <div className="bg-raised px-5 py-4">
              <dt className="measure text-xs text-ink-faint">Construyendo ahora</dt>
              <dd className="mt-1 text-sm text-ink">
                Atención comercial automatizada · desde jul 2026
              </dd>
            </div>
            <div className="bg-raised px-5 py-4">
              <dt className="measure text-xs text-ink-faint">Formación acreditada</dt>
              <dd className="mt-1 text-sm text-ink">
                Full Stack Python ·{' '}
                <a
                  href="https://www.acreditta.com/credential/8f73702b-0511-40f1-80b0-6224284c8eab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  verificable
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
