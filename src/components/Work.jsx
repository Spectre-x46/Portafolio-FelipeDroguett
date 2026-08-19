import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Reveal from '../lib/Reveal'
import useStack from '../lib/useStack'
import { Status, Tag } from '../lib/ui'

/**
 * Trabajo.
 *
 * Dos casos, presentados como piezas grandes que se apilan al bajar en lugar
 * de como dos tarjetas paralelas de panel de control. La escala es deliberada:
 * son lo único que demuestra capacidad, así que ocupan el espacio de algo
 * importante.
 *
 * Los dos casos NO se enlazan entre sí. El del agente está anonimizado y
 * cruzarlos permitiría deducir de qué cliente se trata.
 */
export default function Work() {
  const { wrapRef, cardRefs } = useStack(2)

  return (
    <section id="trabajo" className="relative scroll-mt-20 bg-sunken pt-20 sm:pt-28">
      <div className="mx-auto max-w-page px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow mb-4">01 — Trabajo</p>
          <h2
            className="font-display font-extrabold uppercase leading-[0.9] tracking-[-0.035em] text-ink"
            style={{ fontSize: 'clamp(2.4rem, 8vw, 5.5rem)' }}
          >
            Dos casos
          </h2>
          <p className="mt-6 max-w-prose text-base text-ink-muted">
            Uno es un negocio que acompañé tres años. El otro es el sistema que estoy construyendo
            ahora y todavía no está terminado — también cuento eso.
          </p>
        </Reveal>
      </div>

      <div ref={wrapRef} className="mx-auto mt-14 max-w-page px-5 sm:mt-20 sm:px-8">
        {/* ── 01 · Tokyo Tunning ── */}
        <div className="lg:h-[104vh]">
          <article
            ref={el => (cardRefs.current[0] = el)}
            className="surface overflow-hidden rounded-lg lg:sticky lg:top-24 lg:origin-top"
          >
            <div className="grid lg:grid-cols-[1.05fr_1fr]">
              <div className="relative order-2 min-h-[220px] border-t border-[color:var(--line)] lg:order-1 lg:border-r lg:border-t-0">
                <img
                  src="/assets/proyecto-tokyo.jpg"
                  alt="Tienda online de Tokyo Tunning en producción, con el menú de categorías sobre una fotografía de producto"
                  width="1280"
                  height="900"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <div className="order-1 flex flex-col p-6 sm:p-8 lg:order-2 lg:p-10">
                <div className="flex items-start justify-between gap-4">
                  <span
                    className="measure font-display font-extrabold leading-none text-[color:var(--ink-deco)]"
                    style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
                    aria-hidden="true"
                  >
                    01
                  </span>
                  <div className="flex flex-col items-end gap-2">
                    <Status tone="ok">En producción</Status>
                    <span className="measure text-xs text-ink-faint">2023 – 2026</span>
                  </div>
                </div>

                <h3
                  className="mt-6 font-display font-bold uppercase leading-none tracking-[-0.02em] text-ink"
                  style={{ fontSize: 'clamp(1.6rem, 3.4vw, 2.6rem)' }}
                >
                  Tokyo Tunning
                </h3>
                <p className="mt-2 text-sm text-ink-faint">Accesorios automotrices · Santiago</p>

                <p className="mt-6 flex-1 text-base text-ink-muted">
                  Empezó con dos puestos de feria y sin nombre de marca. Le inventé el nombre, le
                  armé las redes y grabé el contenido. Cuando el negocio creció más rápido que su
                  forma de vender, reconstruí la tienda entera: catálogo, pagos, medición y
                  publicidad.
                </p>

                <div className="mt-7 flex flex-wrap gap-1.5">
                  {['Contenido', 'Meta Ads', 'WooCommerce', 'PHP', 'Performance'].map(t => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>

                <Link
                  to="/caso/tokyo-tunning"
                  className="mt-8 inline-flex min-h-[48px] w-fit items-center gap-2 rounded-full bg-accent px-6 text-sm font-medium text-[#0B0D10] transition-colors duration-150 hover:bg-accent-ink"
                >
                  Leer el caso <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </article>
        </div>

        {/* ── 02 · Agente comercial ── */}
        <div className="mt-6 lg:mt-0">
          <article
            ref={el => (cardRefs.current[1] = el)}
            className="surface overflow-hidden rounded-lg lg:sticky lg:top-32 lg:origin-top"
          >
            <div className="grid lg:grid-cols-[1fr_1.05fr]">
              <div className="order-1 flex flex-col p-6 sm:p-8 lg:p-10">
                <div className="flex items-start justify-between gap-4">
                  <span
                    className="measure font-display font-extrabold leading-none text-[color:var(--ink-deco)]"
                    style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
                    aria-hidden="true"
                  >
                    02
                  </span>
                  <div className="flex flex-col items-end gap-2">
                    <Status tone="pending">En validación</Status>
                    <span className="measure text-xs text-ink-faint">2026 · en curso</span>
                  </div>
                </div>

                <h3
                  className="mt-6 font-display font-bold uppercase leading-none tracking-[-0.02em] text-ink"
                  style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.4rem)' }}
                >
                  Agente comercial
                </h3>
                <p className="mt-2 text-sm text-ink-faint">
                  Para un e-commerce · cliente no divulgado
                </p>

                <p className="mt-6 flex-1 text-base text-ink-muted">
                  Un evento de venta funcionó técnicamente pero se perdieron ventas porque nadie
                  alcanzó a responder las consultas a tiempo. Estoy construyendo el sistema que
                  responde: consulta precios y stock reales antes de afirmar nada, y cuando no puede
                  estar seguro, le pasa la conversación a una persona.
                </p>

                <div className="mt-7 flex flex-wrap gap-1.5">
                  {['Node.js', 'n8n', 'LLM', 'CRM', 'Evaluación'].map(t => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>

                <Link
                  to="/caso/agente-comercial"
                  className="mt-8 inline-flex min-h-[48px] w-fit items-center gap-2 rounded-full border border-strong px-6 text-sm font-medium text-ink transition-colors duration-150 hover:border-accent-line hover:text-accent-ink"
                >
                  Leer el caso <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              </div>

              <div className="order-2 border-t border-[color:var(--line)] bg-[color:var(--bg)] p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
                <p className="eyebrow mb-6">Qué pasa cuando alguien escribe</p>
                <FlowPreview />
              </div>
            </div>
          </article>
        </div>
      </div>

      <div className="h-20 sm:h-28" />
    </section>
  )
}

/* Vista previa del recorrido. Es evidencia —el flujo real, resumido—, no adorno. */
const pasos = [
  ['Llega un mensaje', 'Instagram o WhatsApp'],
  ['El CRM avisa', 'webhook de entrada'],
  ['Se entiende', 'modelo · salida estructurada'],
  ['Se verifica', 'catálogo, precios, reglas'],
]

function FlowPreview() {
  return (
    <div>
      <ol className="space-y-0">
        {pasos.map(([t, d], i) => (
          <li key={t} className="relative border-l border-[color:var(--line-strong)] pb-5 pl-5 last:pb-5">
            <span
              aria-hidden="true"
              className="absolute -left-[3px] top-1.5 h-1.5 w-1.5 rounded-full bg-[color:var(--line-strong)]"
            />
            <p className="text-sm text-ink">{t}</p>
            <p className="measure mt-0.5 text-xs text-ink-faint">{d}</p>
          </li>
        ))}
      </ol>

      <div className="ml-5 border-l border-[color:var(--line-strong)] pb-4 pl-5">
        <p className="measure text-xs text-ink-faint">¿puede responder con seguridad?</p>
      </div>

      <div className="ml-5 grid gap-2 pl-5 sm:grid-cols-2">
        <div className="rounded-sm border border-[color:var(--accent-line)] bg-[color:var(--accent-weak)] px-3 py-2">
          <p className="measure text-xs text-accent-ink">sí → responde</p>
        </div>
        <div className="rounded-sm border border-strong px-3 py-2">
          <p className="measure text-xs text-ink-muted">no → una persona</p>
        </div>
      </div>
    </div>
  )
}
