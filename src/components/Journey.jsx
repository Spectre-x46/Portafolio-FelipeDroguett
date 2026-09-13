import { useState } from 'react'
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react'
import Reveal from '../lib/Reveal'
import { EXTERNOS, EXTERNO_ATTRS } from '../lib/links'


/**
 * Trayectoria y formación.
 *
 * Dos correcciones respecto a la versión anterior:
 *
 * 1. El colapso funcionaba con `hidden md:block` y el botón con `md:hidden`:
 *    en móvil se podía plegar y en escritorio se mostraban siempre las siete
 *    entradas completas. Estaba al revés — quien tiene menos paciencia es
 *    quien mira desde un escritorio. Ahora el colapso funciona en todos los
 *    anchos.
 * 2. Nada se elimina. El reparto, la tienda y el retail son la prueba de que
 *    mi relación con los negocios no empezó hace dos años.
 */
const timeline = [
  {
    id: 1,
    period: 'Feb 2026 — actualidad',
    org: 'Droguett Consulting SpA',
    title: 'Desarrollo, campañas y automatización comercial',
    body:
      'Reconstruí y mantengo la tienda online de Tokyo Tunning —plantillas propias en PHP sobre WooCommerce, unos 380 productos, 62 servicios con precio publicado— y llevo su publicidad y su producción de contenido con plan anual, procedimientos escritos y reporte mensual. En paralelo, desde julio, construyo un sistema de atención comercial automatizada: arquitectura, integración con CRM y una evaluación con bancos sellados antes de correr.',
    note: 'Antes de tocar la tienda, una auditoría formal de nueve fases: 35 hallazgos y 4 decisiones de arquitectura registradas. En agosto, siete fases de mejora desplegadas y verificadas en producción.',
    current: true,
  },
  {
    id: 3,
    period: 'Mar 2023 — Abr 2025',
    org: 'Tokyo Tunning',
    title: 'Digitalización y crecimiento',
    body:
      'Propuse y ejecuté el paso de dos puestos de feria a un negocio que vende por redes y por internet. Nombre de marca, redes, contenido y campañas: el negocio creció por videos antes de tener local físico o siquiera empresa formal.',
    note: 'Las ventas pasaron de $500K a $15M al mes en año y medio, según los reportes del propio negocio.',
  },
  {
    id: 4,
    period: 'Sep 2021 — Feb 2026',
    org: 'Independiente',
    title: 'Consultoría web y marketing de performance',
    body:
      'Landing pages de conversión y campañas con inversiones de hasta $500K mensuales. Producción audiovisual y diseño para las piezas. Aquí aprendí a leer métricas publicitarias todos los días, que es de donde viene casi todo lo que sé de negocio digital.',
    optional: true,
  },
  {
    id: 2,
    period: 'May 2025 — Nov 2025',
    org: 'Phantom Customs',
    title: 'Cofundador y jefe de operaciones',
    body:
      'Taller de estética automotriz. Lideré la operación y la estrategia comercial. El capital se agotó en cuatro meses: el local estaba mal ubicado y no llegaba suficiente gente. Cerré cuando dejó de ser viable y volví al proyecto que sí estaba funcionando.',
    note: 'Lo que me llevé: validar acceso y flujo real de clientes antes de invertir en un local.',
    optional: true,
  },
  {
    id: 6,
    period: 'Jul 2019 — May 2021',
    org: 'Moana Kai',
    title: 'Fundador y director de operaciones',
    body:
      'Agua purificada. Mi primer negocio completo: producción, distribución y reparto. Capté el 100% de los clientes por Facebook Marketplace y Meta Ads, con entre 80 y 120 clientes recurrentes al mes.',
    note: 'Cerró en mayo de 2021: un accidente destruyó el vehículo y la mercadería. Fue mi primera lección real de unit economics.',
    optional: true,
  },
  {
    id: 5,
    period: 'Jun 2021 — Sep 2021',
    org: 'Starken',
    title: 'Reparto de última milla',
    body:
      'Más de 90 entregas diarias en Santiago, de 5:00 a 20:00. Fue el puente financiero tras el cierre de Moana Kai. No lo escondo: fue el año en que aprendí lo que cuesta sostener una operación con el cuerpo.',
    optional: true,
  },
  {
    id: 7,
    period: '2014 — 2018',
    org: 'La Polar · Falabella',
    title: 'Retail de alto volumen',
    body:
      'La Polar: jefe de tienda part-time, responsable operativo de más de 100 personas en turnos peak, con metas de venta, merma y rotación. Falabella: asesor comercial y después encargado de zona, con siete personas a cargo.',
    optional: true,
  },
]

const formacion = [
  {
    // Dos pruebas del mismo programa: el diploma de la academia que lo dictó
    // (abr 2026, 462 h) y la credencial que emitió Talento Digital (ago 2026).
    label: 'Desarrollo de Aplicaciones Full Stack Python Trainee',
    place: 'IT Academy by Kibernum · Talento Digital para Chile',
    date: '462 horas · diploma abr 2026 · credencial ago 2026',
    official: 'BOOTCAMP DESARROLLO APLICACIONES FULL STACK PYTHON TRAINEE',
    pruebas: [
      { label: 'Ver diploma', href: EXTERNOS.diploma.href },
      { label: 'Verificar credencial', href: EXTERNOS.credencial.href },
    ],
    highlight: true,
  },
  {
    label: 'Téc. Administración de Empresas — mención Marketing',
    place: 'DuocUC, San Bernardo',
    date: '2018 – 2020',
    highlight: true,
  },
  {
    label: 'Linux y hardening de sistemas',
    place: 'Hack4u Academy',
    date: '2024',
  },
  {
    label: 'Formación continua en marketing digital',
    place: 'Google · Academia Metrics · Haciéndola',
    date: '2020 – 2022',
  },
]

export default function Journey() {
  const [expanded, setExpanded] = useState(false)
  const visibles = expanded ? timeline : timeline.filter(t => !t.optional)
  const ocultas = timeline.length - timeline.filter(t => !t.optional).length

  return (
    <section id="trayectoria" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-page px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow mb-8">04 — Trayectoria</p>
        </Reveal>
        <Reveal delay={0.05}>
          {/* Escala deliberadamente menor que Trabajo o Capacidades: esta
              sección respalda el criterio, no compite con la evidencia. */}
          <h2
            className="max-w-[22ch] font-display font-semibold leading-[1.05] tracking-[-0.02em] text-ink"
            style={{ fontSize: 'clamp(1.6rem, 3.6vw, 2.6rem)' }}
          >
            Diez años dentro de negocios reales, casi ninguno de ellos tecnológico.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-prose text-base text-ink-muted">
            Está aquí abajo a propósito: explica de dónde viene el criterio, pero no es lo que vengo
            a demostrar.
          </p>
        </Reveal>

      <div className="mt-14 grid gap-12 sm:mt-20 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">

        {/* ── Línea de tiempo ── */}
        <div>
          <ol className="relative space-y-0">
            {visibles.map((item, i) => (
              <Reveal key={item.id} delay={Math.min(i * 0.05, 0.2)} as="li"
                      className="relative block border-l border-[color:var(--line)] pb-8 pl-6 last:pb-0">
                <div>
                  <span
                    aria-hidden="true"
                    className={`absolute -left-[4.5px] top-1.5 h-2 w-2 rounded-full ${
                      item.current ? 'bg-accent' : 'bg-[color:var(--line-strong)]'
                    }`}
                  />
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="measure text-xs text-ink-faint">{item.period}</span>
                    <span className="measure text-xs text-accent-ink">{item.org}</span>
                  </div>
                  <h3 className="mt-2 font-display text-base font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 max-w-prose text-base text-ink-muted">{item.body}</p>
                  {item.note && (
                    <p className="mt-3 max-w-prose border-l-2 border-[color:var(--accent-line)] pl-3 text-sm text-ink-faint">
                      {item.note}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </ol>

          <button
            type="button"
            onClick={() => setExpanded(v => !v)}
            aria-expanded={expanded}
            className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded border border-strong px-4 text-sm text-ink-muted transition-colors duration-150 hover:border-accent-line hover:text-accent-ink"
          >
            {expanded
              ? <><ChevronUp size={15} aria-hidden="true" /> Mostrar sólo lo reciente</>
              : <><ChevronDown size={15} aria-hidden="true" /> Ver los {ocultas} trabajos anteriores</>}
          </button>
        </div>

        {/* ── Formación ── */}
        <Reveal delay={0.1}>
          <aside>
            <h3 className="eyebrow mb-5">Formación</h3>
            <ul className="space-y-px overflow-hidden rounded-lg border border-[color:var(--line)] bg-[color:var(--line)]">
              {formacion.map(f => (
                <li key={f.label} className="bg-raised p-4">
                  <p className={`text-sm font-medium leading-snug ${f.highlight ? 'text-ink' : 'text-ink-muted'}`}>
                    {f.label}
                  </p>
                  <p className="mt-1 text-xs text-ink-faint">{f.place}</p>
                  <p className="measure mt-1.5 text-xs text-ink-faint">{f.date}</p>

                  {f.pruebas && (
                    <>
                      <div className="mt-1.5 flex flex-wrap gap-x-4">
                        {f.pruebas.map(p => (
                          <a
                            key={p.label}
                            href={p.href}
                            {...EXTERNO_ATTRS}
                            className="inline-flex min-h-[44px] items-center gap-1.5 text-xs text-accent-ink underline decoration-[color:var(--accent-line)] underline-offset-4 transition-colors hover:decoration-[color:var(--accent)]"
                          >
                            {p.label}
                            <ExternalLink size={12} aria-hidden="true" />
                            <span className="sr-only">(se abre en una pestaña nueva)</span>
                          </a>
                        ))}
                      </div>
                      <p className="measure text-xs leading-snug text-ink-faint">{f.official}</p>
                    </>
                  )}
                </li>
              ))}
            </ul>
            <p className="mt-4 max-w-prose text-sm text-ink-faint">
              Lo que más uso hoy —sistemas de IA, evaluación, automatización— no viene de ninguno de
              estos programas. Lo aprendí porque tenía el problema delante.
            </p>
          </aside>
        </Reveal>
      </div>
      </div>
    </section>
  )
}
