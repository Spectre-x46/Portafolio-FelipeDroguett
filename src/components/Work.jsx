import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Reveal from '../lib/Reveal'
import { Section, Status, Tag } from '../lib/ui'

/**
 * Trabajo. Va inmediatamente después del hero.
 *
 * En la versión anterior los proyectos aparecían en quinta posición, tras el
 * 59% del scroll, y de tres tarjetas sólo una era un proyecto: las otras dos
 * eran este mismo sitio y un enlace a GitHub. Ambas se retiraron.
 *
 * Los dos casos NO se enlazan entre sí. El del agente está anonimizado y
 * cruzarlos permitiría deducir de qué cliente se trata.
 */
export default function Work() {
  return (
    <Section
      id="trabajo"
      n="01 — Trabajo"
      title="Dos casos, contados con lo que se puede comprobar."
      lead="Uno es un negocio que acompañé tres años. El otro es el sistema que estoy construyendo ahora y todavía no está terminado — también cuento eso."
    >
      <div className="grid gap-6 lg:grid-cols-2">

        {/* ── Caso 1 · Tokyo Tunning ── */}
        <Reveal>
          <article className="surface group flex h-full flex-col overflow-hidden rounded-lg transition-colors duration-200 hover:border-[color:var(--accent-line)]">
            <Link to="/caso/tokyo-tunning" className="block focus-visible:outline-offset-[-2px]">
              <div className="relative aspect-[16/9] overflow-hidden border-b border-[color:var(--line)]">
                <img
                  src="/assets/proyecto-tokyo.jpg"
                  alt="Tienda online de Tokyo Tunning en producción, mostrando el catálogo de accesorios automotrices"
                  width="1280"
                  height="720"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
            </Link>

            <div className="flex flex-1 flex-col p-6">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <Status tone="ok">En producción</Status>
                <span className="measure text-xs text-ink-faint">2023 – 2026</span>
              </div>

              <h3 className="font-display text-lg font-semibold text-ink">Tokyo Tunning</h3>
              <p className="mt-1 text-sm text-ink-faint">
                Accesorios automotrices · Santiago
              </p>

              <p className="mt-4 flex-1 text-base text-ink-muted">
                Empezó con dos puestos de feria y sin nombre de marca. Le inventé el nombre, le armé
                las redes y grabé el contenido. Cuando el negocio creció más rápido que su forma de
                vender, reconstruí la tienda entera: catálogo, pagos, medición y publicidad.
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {['Contenido', 'Meta Ads', 'WooCommerce', 'PHP', 'Performance'].map(t => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>

              <Link
                to="/caso/tokyo-tunning"
                className="mt-6 inline-flex min-h-[44px] w-fit items-center gap-2 rounded border border-strong px-4 text-sm font-medium text-ink transition-colors duration-150 hover:border-accent-line hover:text-accent-ink"
              >
                Leer el caso
                <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </article>
        </Reveal>

        {/* ── Caso 2 · Agente comercial (anonimizado) ── */}
        <Reveal delay={0.08}>
          <article className="surface group flex h-full flex-col overflow-hidden rounded-lg transition-colors duration-200 hover:border-[color:var(--accent-line)]">
            <Link to="/caso/agente-comercial" className="block focus-visible:outline-offset-[-2px]">
              <div className="relative aspect-[16/9] overflow-hidden border-b border-[color:var(--line)] bg-sunken">
                <FlowPreview />
              </div>
            </Link>

            <div className="flex flex-1 flex-col p-6">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <Status tone="pending">En validación</Status>
                <span className="measure text-xs text-ink-faint">2026 · en curso</span>
              </div>

              <h3 className="font-display text-lg font-semibold text-ink">
                Agente comercial conversacional
              </h3>
              <p className="mt-1 text-sm text-ink-faint">
                Para un e-commerce · cliente no divulgado
              </p>

              <p className="mt-4 flex-1 text-base text-ink-muted">
                Un evento de venta funcionó técnicamente pero se perdieron ventas porque nadie
                alcanzó a responder las consultas a tiempo. Estoy construyendo el sistema que
                responde: consulta precios y stock reales antes de afirmar nada, y cuando no puede
                estar seguro, le pasa la conversación a una persona.
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {['Node.js', 'n8n', 'LLM', 'CRM', 'Evaluación'].map(t => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>

              <Link
                to="/caso/agente-comercial"
                className="mt-6 inline-flex min-h-[44px] w-fit items-center gap-2 rounded border border-strong px-4 text-sm font-medium text-ink transition-colors duration-150 hover:border-accent-line hover:text-accent-ink"
              >
                Leer el caso
                <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </article>
        </Reveal>
      </div>
    </Section>
  )
}

/** Vista previa del flujo. Evidencia, no decoración: es el recorrido real. */
function FlowPreview() {
  const steps = ['Mensaje', 'CRM', 'Se entiende', 'Se verifica', '¿Seguro?']
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <svg viewBox="0 0 340 130" className="h-full w-full" role="img" aria-label="Recorrido de un mensaje: llega por el CRM, se entiende, se verifica contra datos reales y se decide si responde el sistema o una persona">
        <defs>
          <marker id="wk-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="var(--ink-faint)" />
          </marker>
        </defs>
        {steps.map((s, i) => (
          <g key={s}>
            <rect x="8" y={4 + i * 22} width="150" height="17" rx="2"
                  fill="var(--bg-raised)" stroke="var(--line)" />
            <text x="16" y={16 + i * 22} fill="var(--ink-muted)"
                  fontSize="9" fontFamily="ui-monospace, monospace">{s}</text>
            {i < steps.length - 1 && (
              <line x1="83" y1={21 + i * 22} x2="83" y2={26 + i * 22}
                    stroke="var(--ink-faint)" strokeWidth="1" markerEnd="url(#wk-arrow)" />
            )}
          </g>
        ))}
        <line x1="158" y1="97" x2="185" y2="60" stroke="var(--line-strong)" strokeWidth="1" />
        <line x1="158" y1="97" x2="185" y2="110" stroke="var(--line-strong)" strokeWidth="1" />
        <rect x="188" y="50" width="140" height="20" rx="2" fill="var(--bg-raised)" stroke="var(--accent-line)" />
        <text x="196" y="63" fill="var(--accent-ink)" fontSize="9" fontFamily="ui-monospace, monospace">Responde el sistema</text>
        <rect x="188" y="100" width="140" height="20" rx="2" fill="var(--bg-raised)" stroke="var(--line-strong)" />
        <text x="196" y="113" fill="var(--ink-muted)" fontSize="9" fontFamily="ui-monospace, monospace">Responde una persona</text>
      </svg>
    </div>
  )
}
