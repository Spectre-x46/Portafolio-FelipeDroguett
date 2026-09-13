import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Measure, Status } from '../lib/ui'
import CierreCaso from '../lib/CierreCaso'
import useSeo from '../lib/useSeo'
import { SEO } from '../lib/seo-routes'

/**
 * Caso · Agente comercial con IA.
 *
 * ANONIMIZADO. No se nombra al cliente, ni el CRM, ni los modelos, ni personas,
 * ni identificadores de ningún tipo. Tampoco se enlaza desde el caso del otro
 * cliente: cruzarlos permitiría deducir de quién se trata.
 *
 * Escrito para quien está decidiendo si trabajar conmigo: qué problema
 * resuelve, cómo lo hace en lenguaje llano, cómo sé que funciona y en qué punto
 * está. La arquitectura y la evaluación en detalle viven en el repositorio del
 * proyecto. Estado verificado el 2026-09-13.
 */

function Chapter({ id, n, title, children }) {
  return (
    <section id={id} className="rule scroll-mt-24 py-12 sm:py-16">
      <p className="eyebrow mb-3">{n}</p>
      <h2 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
        {title}
      </h2>
      <div className="mt-6 space-y-5 text-base text-ink-muted [&>p]:max-w-prose">{children}</div>
    </section>
  )
}

export default function CasoAgente() {
  useSeo(SEO['/caso/agente-comercial'])

  return (
    <article className="mx-auto max-w-[54rem] px-5 pb-16 pt-24 sm:px-8 sm:pt-28">
      <Link
        to="/"
        className="inline-flex min-h-[44px] items-center gap-2 text-sm text-ink-muted transition-colors hover:text-accent-ink"
      >
        <ArrowLeft size={15} aria-hidden="true" /> Volver
      </Link>

      {/* ── Cabecera ── */}
      <header className="mt-6">
        <div className="max-w-prose">
          <p className="eyebrow mb-4">Caso de estudio · Automatización comercial · 2026</p>
          <h1 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Un asistente de ventas por chat que no inventa precios
          </h1>
          <p className="mt-6 text-lg text-ink-muted">
            Después de un evento de venta de tres días revisé las consultas que habían quedado sin
            responder. La tienda había aguantado sin caerse; las ventas se perdieron porque nadie
            alcanzó a contestar a tiempo.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Status tone="pending">En pruebas · todavía no atiende clientes</Status>
            <Status>Cliente no divulgado</Status>
          </div>
        </div>

        {/* Los números, antes que la historia */}
        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          <Measure
            meaning="Mensajes reales de un año de conversaciones, analizados para entender cómo pregunta la gente"
            value="48.937"
            method="base de las pruebas · 2026"
          />
          <Measure
            meaning="Conversaciones simuladas para ponerlo a prueba antes de lanzarlo"
            value="1.000"
            method="sep 2026"
          />
          <Measure
            meaning="Costo en IA de cada conversación"
            value="US$ 0,0015"
            method="≈ US$ 0,75 al mes al volumen actual del negocio · estimado"
            tone="accent"
          />
          <Measure
            meaning="Pruebas automáticas, todas en verde"
            value="1.215"
            method="13 sep 2026"
            tone="ok"
          />
        </div>
      </header>

      {/* ── 1 · El problema ── */}
      <Chapter id="problema" n="01" title="El problema">
        <p>
          El negocio recibe consultas por Instagram y WhatsApp a toda hora, y en un evento de venta
          se juntan cientos. Cada una que no se contesta a tiempo es una venta que se va a otra
          parte.
        </p>
        <p>
          Un chatbot genérico no sirve para esto: contesta con total seguridad un precio que no
          existe o promete un stock que no hay. Hacía falta algo que responda rápido y que diga sólo
          lo que es cierto.
        </p>
      </Chapter>

      {/* ── 2 · Cómo funciona ── */}
      <Chapter id="flujo" n="02" title="Cómo funciona">
        <p>Cada consulta sigue el mismo camino:</p>
        <Pasos />
        <p className="text-ink">
          La regla que lo ordena todo: la IA entiende y redacta, pero nunca decide un precio, un
          stock ni una promesa. Esos datos los pone el sistema, desde las fuentes del negocio.
        </p>
      </Chapter>

      {/* ── 3 · Cómo sé que funciona ── */}
      <Chapter id="evaluacion" n="03" title="Cómo sé que funciona">
        <p>
          No lo pruebo con ejemplos inventados, porque esos siempre salen bien. Lo pruebo con cómo
          escribe la gente de verdad: analicé un año de conversaciones reales del negocio, 48.937
          mensajes, anonimicé los de los clientes y con esa base armé un examen de 1.000
          conversaciones simuladas. Lo dejé cerrado antes de correrlo, para no poder ajustarlo
          después a favor del resultado.
        </p>
        <p>
          El examen encontró errores que importan: casos en que debía pasarle la conversación a una
          persona y no lo hizo, y demasiados en que la pasaba sin necesidad. Así que no lo lancé.
          Estoy corrigiendo cada error con su propia prueba, y el asistente vuelve a examinarse
          antes de hablar con un cliente.
        </p>
        <p className="text-ink">
          Correr el examen completo costó US$ 1,67 en IA. Operarlo no es caro; lo difícil es que cada
          respuesta sea correcta.
        </p>
      </Chapter>

      {/* ── 4 · Estado ── */}
      <Chapter id="estado" n="04" title="Dónde está hoy">
        <EstadoReal />
      </Chapter>

      {/* ── 5 · Aprendizajes ── */}
      <Chapter id="aprendizajes" n="05" title="Lo que me dejó">
        <p>
          Una vez noté que pruebas que yo daba por superadas no habían dejado ningún registro. Paré
          todo, fui a verificarlo directamente en la base de datos y no di por buena ninguna prueba
          que no pudiera demostrar. Desde entonces, en este proyecto nada se declara listo sin una
          evidencia que se pueda revisar después.
        </p>
        <p className="text-ink">
          Y en septiembre aprendí la otra mitad: un asistente que sabe cuándo callarse es seguro,
          pero si se calla de más, no atiende a nadie. Lo difícil no es que sea prudente; es que sea
          útil sin dejar de ser correcto.
        </p>
      </Chapter>

      <CierreCaso titulo="¿Tu negocio recibe más consultas de las que alcanza a responder?">
        Cuéntame cómo llegan hoy y qué pasa con las que no alcanzas a contestar. Prefiero entender
        el problema antes de proponer nada.
      </CierreCaso>

      <div className="rule mt-12 pt-10">
        <Link
          to="/"
          className="inline-flex min-h-[44px] items-center gap-2 text-sm text-ink-muted transition-colors hover:text-accent-ink"
        >
          <ArrowLeft size={15} aria-hidden="true" /> Volver al inicio
        </Link>
      </div>
    </article>
  )
}

/* ────────────────────────────────────────────────────────────────────────── */

const pasos = [
  ['Recibe la consulta', 'Llega al CRM del negocio y el asistente la toma al instante. Si una persona del equipo ya está atendiendo esa conversación, no interviene.'],
  ['Entiende qué se pide', 'La IA identifica el producto o servicio, el auto del cliente y lo que quiere: un precio, disponibilidad, un reclamo.'],
  ['Busca los datos reales', 'El sistema consulta el catálogo, los precios, el stock y las reglas del negocio. En este paso la IA no interviene.'],
  ['Redacta y revisa', 'La IA escribe la respuesta sólo con esos datos, y una revisión automática comprueba que no afirme nada sin respaldo.'],
  ['Responde o pasa a una persona', 'Si todo cuadra, contesta por el mismo canal. Si no está seguro, le pasa la conversación a una persona con el motivo y le avisa al cliente que lo van a atender.'],
]

function Pasos() {
  return (
    <ol className="mt-2 space-y-px overflow-hidden rounded-lg border border-[color:var(--line)] bg-[color:var(--line)]">
      {pasos.map(([t, d], i) => (
        <li key={t} className="bg-raised p-4 sm:p-5">
          <div className="flex gap-4">
            <span className="measure mt-0.5 shrink-0 text-xs text-accent-ink" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div>
              <p className="text-sm font-medium text-ink">{t}</p>
              <p className="mt-1 max-w-prose text-sm text-ink-muted">{d}</p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  )
}

/**
 * Estado verificable. Cada fila dice su estado con color, con palabra y con
 * forma a la vez —punto lleno, punto hueco—, para que nunca haya que recordar
 * qué significaba un color.
 */
const estado = [
  ['Funciona de punta a punta en una cuenta de prueba', 'ok', 'Responde, pasa la conversación a una persona con nota y tarea, se calla cuando alguien del equipo la toma y no repite mensajes. Comprobado en vivo el 3 de septiembre.'],
  ['Pruebas automáticas', 'ok', '1.215 en verde el 13 de septiembre.'],
  ['Examen de 1.000 conversaciones', 'fail', 'No aprobado el 10 de septiembre. Los errores que encontró están en corrección.'],
  ['Clientes reales', 'pending', 'Todavía no. Primero tiene que aprobar un examen nuevo.'],
]

const marca = {
  ok:      { palabra: 'logrado',     punto: 'bg-ok' },
  pending: { palabra: 'pendiente',   punto: 'bg-[color:var(--pending)]' },
  fail:    { palabra: 'no aprobado', punto: 'border-2 border-[color:var(--pending)]' },
}

function EstadoReal() {
  return (
    <div className="surface overflow-hidden rounded-lg">
      {estado.map(([label, tone, detail], i) => (
        <div
          key={label}
          className={`flex flex-col gap-2 p-4 sm:flex-row sm:items-start sm:gap-5 sm:p-5 ${
            i > 0 ? 'border-t border-[color:var(--line)]' : ''
          }`}
        >
          <span className="sm:w-6 sm:shrink-0" aria-hidden="true">
            <span className={`inline-block h-2.5 w-2.5 rounded-full ${marca[tone].punto}`} />
          </span>
          <div className="sm:flex-1">
            <p className="text-sm font-medium text-ink">{label}</p>
            <p className="mt-0.5 text-sm text-ink-muted">{detail}</p>
          </div>
          <span className="measure text-xs text-ink-faint sm:w-28 sm:text-right">
            {marca[tone].palabra}
          </span>
        </div>
      ))}
    </div>
  )
}
