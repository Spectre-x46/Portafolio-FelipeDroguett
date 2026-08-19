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
                <p className="eyebrow mb-1">Orquestación</p>
                <p className="mb-6 text-sm text-ink-muted">
                  El recorrido de un mensaje, tal como está en el workflow.
                </p>
                <WorkflowGraph />
              </div>
            </div>
          </article>
        </div>
      </div>

      <OtrosTrabajos />

      <div className="h-20 sm:h-28" />
    </section>
  )
}

/**
 * Trabajos menores.
 *
 * Deliberadamente más pequeños que 01 y 02: son reales y merecen estar, pero no
 * tienen el mismo peso de evidencia y presentarlos igual restaría a los que sí
 * lo tienen. Ahora con miniatura real —captura del sitio funcionando, no un
 * mockup— porque una fila de puro texto se leía como una nota al pie.
 *
 * En escritorio: número → imagen → contenido → CTA.
 * En móvil: imagen → número y título → contenido → CTA.
 */
const otros = [
  {
    n: '03',
    titulo: 'El Telégrafo',
    estado: 'Funcional · interfaz en curso',
    tono: 'pending',
    contexto: 'Estación de práctica de CW · proyecto personal',
    href: 'https://codigo-morse-online.netlify.app/',
    img: '/assets/trabajo-telegrafo.webp',
    alt: 'Interfaz del Telégrafo: la llave abierta con su medidor de duración y la palabra SOS traducida a puntos y rayas',
    texto:
      'Volví al código Morse que aprendí de niño y terminé construyendo el sitio donde practicarlo. Es una llave que funciona en el navegador: se mantiene pulsada la barra espaciadora y el sistema mide cuánto dura cada pulsación para distinguir punto de raya. Tiene modo de copia y de transmisión, con velocidad en palabras por minuto y tono ajustable, como en un equipo real.',
    nota:
      'Lo hice funcional antes que bonito y se nota: la interfaz todavía le debe bastante al contenido.',
    tags: ['JavaScript', 'Web Audio', 'Temporización CW', 'Sin dependencias'],
  },
  {
    n: '04',
    titulo: 'El Bajón de la Cami',
    estado: 'Proyecto de cliente · pausado',
    tono: 'neutral',
    contexto: 'Menú digital y pedidos · Santiago',
    href: 'https://elbajondelacami.netlify.app/',
    img: '/assets/trabajo-bajon.webp',
    alt: 'Catálogo de El Bajón de la Cami con fichas de producto, precios y la barra de carrito con el total',
    texto:
      'Menú digital para un local de comida: catálogo por categorías con foto, precio y descripción, promociones aparte, ficha de producto con notas para la cocina, carrito con total, elección entre retiro en local o envío a domicilio, y el pedido armado y enviado por WhatsApp. También muestra la ubicación en un mapa.',
    nota:
      'Está pausado. Verifiqué el recorrido completo —agregar, carrito, entrega y envío del pedido— y funciona.',
    tags: ['JavaScript', 'Alpine.js', 'Tailwind', 'Pedido por WhatsApp'],
  },
]

function OtrosTrabajos() {
  return (
    <div className="mx-auto mt-20 max-w-page px-5 sm:mt-28 sm:px-8">
      <Reveal>
        <p className="eyebrow mb-8">Otros trabajos</p>
      </Reveal>

      {otros.map((o, i) => (
        <Reveal key={o.n} delay={i * 0.06}>
          <a
            href={o.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid gap-x-8 gap-y-5 border-t border-[color:var(--line)] py-8 transition-colors duration-200 hover:bg-[color:var(--bg-raised)] sm:py-10 lg:grid-cols-[3.5rem_19rem_minmax(0,1fr)_auto] lg:items-start"
          >
            {/* número — en móvil va junto al título */}
            <span
              className="measure hidden font-display text-xl font-extrabold leading-none text-[color:var(--ink-deco)] lg:block"
              aria-hidden="true"
            >
              {o.n}
            </span>

            <span className="block overflow-hidden rounded border border-[color:var(--line)] bg-sunken">
              <img
                src={o.img}
                alt={o.alt}
                width="760"
                height="475"
                loading="lazy"
                decoding="async"
                className="block h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </span>

            <span className="min-w-0">
              <span className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="measure text-sm text-[color:var(--ink-deco)] lg:hidden" aria-hidden="true">
                  {o.n}
                </span>
                <span className="font-display text-lg font-semibold text-ink">{o.titulo}</span>
                <Status tone={o.tono}>{o.estado}</Status>
              </span>
              <span className="mt-1 block text-sm text-ink-faint">{o.contexto}</span>

              <span className="mt-4 block max-w-prose text-base text-ink-muted">{o.texto}</span>
              <span className="mt-3 block max-w-prose text-sm text-ink-faint">{o.nota}</span>

              <span className="mt-5 flex flex-wrap gap-1.5">
                {o.tags.map(t => <Tag key={t}>{t}</Tag>)}
              </span>
            </span>

            <span className="inline-flex min-h-[44px] items-center gap-2 text-sm text-accent-ink transition-transform duration-200 group-hover:translate-x-0.5 lg:self-center">
              Abrir <ArrowUpRight size={15} aria-hidden="true" />
            </span>
          </a>
        </Reveal>
      ))}

      <div className="border-t border-[color:var(--line)]" />
    </div>
  )
}

/**
 * Grafo real del workflow de orquestación.
 *
 * No es un dibujo ilustrativo: los nodos y las conexiones se transcribieron del
 * JSON del workflow que estuvo recibiendo eventos. Se conservan los nombres
 * reales salvo dos, cambiados por seguridad: la ruta del webhook y el canal
 * concreto de salida. No aparecen identificadores, URLs, puertos ni cliente.
 *
 * Lo que hace legible el diagrama es la forma: dos compuertas pueden terminar
 * el turno antes de que el mensaje llegue al modelo.
 */
const NODOS = [
  { id: 'wh',   t: 'Webhook de entrada', y: 6 },
  { id: 'pre',  t: 'Preprocess',         y: 44 },
  { id: 'g1',   t: 'V2RejectGate',       y: 82,  gate: true },
  { id: 'g2',   t: 'TakeoverGate',       y: 120, gate: true },
  { id: 'ag',   t: 'AI Agent',           y: 166, alto: 40 },
  { id: 'val',  t: 'Validator',          y: 226 },
  { id: 'snd',  t: 'Envío al canal',     y: 264 },
  { id: 'env',  t: 'Build V2 Envelope',  y: 302 },
  { id: 'res',  t: 'Respond',            y: 340 },
]
const RAMAS = [
  { t: 'V2RejectResponder',  y: 82 },
  { t: 'SilencedResponder',  y: 120 },
]

function WorkflowGraph() {
  const W = 186, X = 8, RX = 196, RW = 116
  return (
    <figure className="m-0">
      <svg
        viewBox="0 0 320 372"
        className="w-full"
        role="img"
        aria-label="Grafo del workflow: el webhook entra en Preprocess y pasa por dos compuertas. La primera puede rechazar el turno; la segunda lo silencia si una persona ya tomó la conversación. Sólo si ambas dejan pasar interviene el modelo, después el validador y el envío."
      >
        <defs>
          <marker id="wf-a" markerWidth="5" markerHeight="5" refX="4.2" refY="2.5" orient="auto">
            <path d="M0,0 L5,2.5 L0,5 Z" fill="var(--ink-faint)" />
          </marker>
        </defs>

        {/* columna principal */}
        {NODOS.map((n, i) => {
          const h = n.alto ?? 22
          const next = NODOS[i + 1]
          return (
            <g key={n.id}>
              <rect
                x={X} y={n.y} width={W} height={h} rx="2"
                fill={n.id === 'ag' ? 'var(--accent-weak)' : 'var(--bg-raised)'}
                stroke={n.gate ? 'var(--accent-line)' : n.id === 'ag' ? 'var(--accent-line)' : 'var(--line-strong)'}
              />
              <text
                x={X + 10} y={n.y + 14.5}
                fill={n.gate || n.id === 'ag' ? 'var(--accent-ink)' : 'var(--ink-muted)'}
                fontSize="9.5" fontFamily="ui-monospace, monospace"
              >{n.t}</text>
              {n.id === 'ag' && (
                <text x={X + 10} y={n.y + 30} fill="var(--ink-faint)" fontSize="8" fontFamily="ui-monospace, monospace">
                  modelo · memoria · 4 herramientas
                </text>
              )}
              {next && (
                <line
                  x1={X + 30} y1={n.y + h} x2={X + 30} y2={next.y - 1}
                  stroke="var(--ink-faint)" strokeWidth="1" markerEnd="url(#wf-a)"
                />
              )}
            </g>
          )
        })}

        {/* salidas laterales de las dos compuertas */}
        {RAMAS.map((r, i) => (
          <g key={r.t}>
            <line x1={X + W} y1={r.y + 11} x2={RX - 1} y2={r.y + 11}
                  stroke="var(--ink-faint)" strokeWidth="1" markerEnd="url(#wf-a)" />
            <rect x={RX} y={r.y} width={RW} height="22" rx="2"
                  fill="var(--bg-raised)" stroke="var(--line-strong)" />
            <text x={RX + 8} y={r.y + 14.5} fill="var(--ink-muted)"
                  fontSize="9.5" fontFamily="ui-monospace, monospace">{r.t}</text>
            {/* bajan a reunirse con el tramo final */}
            <path
              d={`M ${RX + RW / 2} ${r.y + 22} V ${i === 0 ? 345 : 307} H ${X + W + 4}`}
              fill="none" stroke="var(--line-strong)" strokeWidth="1"
              strokeDasharray="3 3" markerEnd="url(#wf-a)"
            />
          </g>
        ))}
      </svg>

      <figcaption className="measure mt-4 text-xs leading-relaxed text-ink-faint">
        Transcrito del workflow real. Dos compuertas pueden cerrar el turno antes del modelo:
        una rechaza el mensaje si no cumple el contrato, la otra se calla si una persona ya
        está atendiendo.
      </figcaption>
    </figure>
  )
}

