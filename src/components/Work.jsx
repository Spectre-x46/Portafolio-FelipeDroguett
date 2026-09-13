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
            Dos casos en profundidad
          </h2>
          <p className="mt-6 max-w-prose text-base text-ink-muted">
            Los dos primeros están contados de punta a punta: el problema del negocio, lo que hice
            y lo que logró. Más abajo, otros proyectos que muestran otra parte de mi trabajo.
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
                  src="/assets/proyecto-tokyo-2026-09.webp"
                  alt="Portada de la tienda de Tokyo Tunning en producción: el titular «¿Auto con problemas?», los botones Servicios y precios y Ver catálogo, y el menú con el botón Cotizar"
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
                <p className="mt-2 text-sm text-ink-faint">Accesorios y taller automotriz · San Bernardo</p>

                <p className="mt-6 flex-1 text-base text-ink-muted">
                  Empezó con dos puestos de feria y sin nombre. Le creé la marca, las redes y el
                  contenido, y sus ventas se multiplicaron por treinta en año y medio. Después
                  reconstruí su tienda online: 380 productos, envío a todo Chile y 62 servicios con
                  precio publicado. En el CyberDay vendió 27 veces lo invertido en publicidad.
                </p>

                <div className="mt-7 flex flex-wrap gap-1.5">
                  {['Marca y contenido', 'Meta Ads', 'Tienda online', 'WooCommerce', 'SEO'].map(t => (
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
                    <Status tone="pending">En pruebas</Status>
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
                  Un evento de venta funcionó, pero se perdieron ventas porque nadie alcanzó a
                  responder a tiempo. Estoy construyendo el asistente que contesta por chat con los
                  precios y el stock reales del negocio, y que pasa la conversación a una persona
                  cuando no está seguro. Ya funciona de punta a punta en pruebas; lo estoy afinando
                  antes de ponerlo frente a clientes.
                </p>

                <div className="mt-7 flex flex-wrap gap-1.5">
                  {['IA', 'Node.js', 'CRM', 'Automatización', 'Pruebas automáticas'].map(t => (
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
                <p className="eyebrow mb-1">Cómo funciona</p>
                <p className="mb-6 text-sm text-ink-muted">
                  El recorrido de una consulta.
                </p>
                <ArquitecturaGraph />
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
    titulo: 'Código Morse Online',
    estado: 'Publicado',
    tono: 'ok',
    contexto: 'Aprender Morse de oído · proyecto personal',
    href: 'https://codigo-morse-online.netlify.app/',
    img: '/assets/trabajo-morse.webp',
    alt: 'Portada de Código Morse Online: una llave de telegrafía junto al titular «Aprende Morse, sin fricción» y los botones Empezar y Ver modo libre',
    texto:
      'Volví al código Morse que aprendí de niño y construí un sitio para aprenderlo de oído: escuchas una señal, eliges la letra y avanzas, sin configurar nada. El sistema insiste solo en las letras que más te cuestan, y hay un modo libre con llave de telegrafía, traductor y abecedario.',
    nota:
      'Lo rehice desde cero en septiembre. Carga al instante, no hay que instalar nada y 70 pruebas automáticas cuidan que cada señal suene con el ritmo correcto.',
    tags: ['JavaScript', 'Audio en el navegador', 'Accesibilidad', 'Sin dependencias'],
  },
  {
    n: '04',
    titulo: 'El Bajón de la Cami',
    estado: 'Prototipo funcional · pausado',
    tono: 'pending',
    contexto: 'Prototipo de menú digital y pedidos · cliente',
    href: 'https://elbajondelacami.netlify.app/',
    img: '/assets/trabajo-bajon.webp',
    alt: 'Prototipo del menú digital: fichas de producto con precio y la barra de carrito con el total',
    texto:
      'Un cliente quería explorar cómo podría funcionar un menú digital para su negocio antes de decidir si avanzaba con una versión definitiva. Construí un prototipo funcional con catálogo por categorías, ficha de producto, carrito con notas para la cocina, retiro o despacho, ubicación y generación del pedido por WhatsApp. Probé el recorrido completo y funciona.',
    nota:
      'Es una prueba de concepto, no el catálogo definitivo del negocio. Las imágenes de producto fueron generadas con IA y parte de los productos mostrados son demostrativos: no necesariamente corresponden a la oferta real del cliente. El proyecto está actualmente en pausa.',
    notaDestacada: true,
    tags: ['Prototipado', 'JavaScript', 'Alpine.js', 'Tailwind', 'Pedido por WhatsApp'],
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
                <span className="measure text-sm text-[color:var(--ink-deco-sm)] lg:hidden" aria-hidden="true">
                  {o.n}
                </span>
                <span className="font-display text-lg font-semibold text-ink">{o.titulo}</span>
                <Status tone={o.tono}>{o.estado}</Status>
              </span>
              <span className="mt-1 block text-sm text-ink-faint">{o.contexto}</span>

              <span className="mt-4 block max-w-prose text-base text-ink-muted">{o.texto}</span>
              <span
                className={`mt-3 block max-w-prose text-sm text-ink-faint ${
                  o.notaDestacada ? 'border-l-2 border-[color:var(--pending)] pl-3' : ''
                }`}
              >
                {o.nota}
              </span>

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
 * Arquitectura actual del agente (generación 3), tal como está en el código.
 *
 * Sustituye al grafo transcrito del workflow de n8n, que era la generación
 * anterior: n8n ya no está en el camino de un mensaje. Las etapas se nombran
 * en lenguaje llano, para quien no programa; los nombres del código viven en
 * el repositorio. No aparecen identificadores, URLs, puertos, el CRM concreto
 * ni el cliente.
 *
 * Cada tipo de nodo se distingue por forma y por palabra, no sólo por color:
 * las compuertas son preguntas, los dos pasos con IA dicen «IA» y van
 * rellenos, y la búsqueda de datos reales es la única con borde grueso.
 */
const ETAPAS = [
  { id: 'in',   t: 'Llega la consulta',       y: 6 },
  { id: 'own',  t: '¿Ya la atiende alguien?', y: 42,  gate: true },
  { id: 'und',  t: 'Entiende qué se pide',    y: 78,  llm: true,  sub: 'IA · producto, auto, intención', alto: 36 },
  { id: 'ctr',  t: '¿Se entendió bien?',      y: 128, gate: true },
  { id: 'core', t: 'Busca los datos reales',  y: 164, core: true, sub: 'catálogo · precios · stock', alto: 36 },
  { id: 'pol',  t: '¿Necesita una persona?',  y: 214, gate: true },
  { id: 'cmp',  t: 'Redacta la respuesta',    y: 250, llm: true,  sub: 'IA · sólo con esos datos', alto: 36 },
  { id: 'val',  t: 'Revisión automática',     y: 300, sub: 'nada sin respaldo', alto: 36 },
  { id: 'out',  t: 'Responde',                y: 350, sub: 'por el mismo canal', alto: 36 },
]
const DESVIOS = [
  { t: 'No interviene',  y: 42 },
  { t: 'No responde',    y: 128 },
  // Pasar a una persona sí sale por la misma vía: lleva el aviso al cliente.
  { t: 'Pasa a persona', y: 214, vuelve: true },
]

function ArquitecturaGraph() {
  const W = 186, X = 8, RX = 196, RW = 116
  const salida = ETAPAS[ETAPAS.length - 1]
  return (
    <figure className="m-0">
      <svg
        viewBox="0 0 320 392"
        className="w-full"
        role="img"
        aria-label="Recorrido de una consulta: si una persona del equipo ya la atiende, el asistente no interviene. Si no, la IA entiende qué se pide; si no se entendió bien, no responde. El sistema busca los datos reales de catálogo, precios y stock y decide si hace falta una persona, en cuyo caso le pasa la conversación y avisa al cliente. Si no, la IA redacta sólo con esos datos, una revisión automática comprueba que todo tenga respaldo y el asistente responde."
      >
        <defs>
          <marker id="ag-a" markerWidth="5" markerHeight="5" refX="4.2" refY="2.5" orient="auto">
            <path d="M0,0 L5,2.5 L0,5 Z" fill="var(--ink-faint)" />
          </marker>
        </defs>

        {/* columna principal */}
        {ETAPAS.map((n, i) => {
          const h = n.alto ?? 22
          const next = ETAPAS[i + 1]
          const acento = n.gate || n.llm
          return (
            <g key={n.id}>
              <rect
                x={X} y={n.y} width={W} height={h} rx="2"
                fill={n.llm ? 'var(--accent-weak)' : 'var(--bg-raised)'}
                stroke={acento ? 'var(--accent-line)' : n.core ? 'var(--ink-faint)' : 'var(--line-strong)'}
                strokeWidth={n.core ? 2 : 1}
              />
              <text
                x={X + 10} y={n.y + 14.5}
                fill={acento ? 'var(--accent-ink)' : n.core ? 'var(--ink)' : 'var(--ink-muted)'}
                fontSize="9.5" fontFamily="ui-monospace, monospace"
              >{n.t}</text>
              {n.sub && (
                <text x={X + 10} y={n.y + 29} fill="var(--ink-faint)" fontSize="8" fontFamily="ui-monospace, monospace">
                  {n.sub}
                </text>
              )}
              {next && (
                <line
                  x1={X + 30} y1={n.y + h} x2={X + 30} y2={next.y - 1}
                  stroke="var(--ink-faint)" strokeWidth="1" markerEnd="url(#ag-a)"
                />
              )}
            </g>
          )
        })}

        {/* desvíos laterales de las tres compuertas */}
        {DESVIOS.map(r => (
          <g key={r.t}>
            <line x1={X + W} y1={r.y + 11} x2={RX - 1} y2={r.y + 11}
                  stroke="var(--ink-faint)" strokeWidth="1" markerEnd="url(#ag-a)" />
            <rect x={RX} y={r.y} width={RW} height="22" rx="2"
                  fill="var(--bg-raised)" stroke="var(--line-strong)" />
            <text x={RX + 8} y={r.y + 14.5} fill="var(--ink-muted)"
                  fontSize="9.5" fontFamily="ui-monospace, monospace">{r.t}</text>
            {r.vuelve && (
              <path
                d={`M ${RX + RW / 2} ${r.y + 22} V ${salida.y + 18} H ${X + W + 4}`}
                fill="none" stroke="var(--line-strong)" strokeWidth="1"
                strokeDasharray="3 3" markerEnd="url(#ag-a)"
              />
            )}
          </g>
        ))}
      </svg>

      <figcaption className="measure mt-4 text-xs leading-relaxed text-ink-faint">
        La IA aparece dos veces —para entender y para redactar— y nunca pone un precio ni un
        stock: esos datos los busca el sistema. Si algo no cuadra, no responde o le pasa la
        conversación a una persona.
      </figcaption>
    </figure>
  )
}

