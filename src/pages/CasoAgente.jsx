import { Link } from 'react-router-dom'
import { ArrowLeft, CornerDownRight } from 'lucide-react'
import Reveal from '../lib/Reveal'
import { Measure, Status } from '../lib/ui'
import useSeo from '../lib/useSeo'

/**
 * Caso · Agente comercial conversacional.
 *
 * ANONIMIZADO. No se nombra al cliente, no se citan cifras de contrato, no
 * aparecen identificadores de workflow, rutas de webhook, ids de ejecución,
 * puertos, personas ni fragmentos de código propietario. Tampoco se enlaza
 * desde el caso del otro cliente: cruzarlos permitiría deducir de quién se
 * trata.
 *
 * El orden es deliberado: primero qué hace el sistema cuando alguien escribe,
 * después por qué está diseñado así, y sólo entonces la arquitectura.
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
  useSeo({
    title: 'Agente comercial conversacional — caso de estudio | Felipe Droguett',
    description:
      'Un sistema que responde consultas comerciales por chat sin inventar precios ni stock. Arquitectura, evaluación sobre 48.937 mensajes reales, fallos encontrados y estado actual — contado sin maquillar.',
    path: '/caso/agente-comercial',
  })

  return (
    <article className="mx-auto max-w-[54rem] px-5 pb-16 pt-24 sm:px-8 sm:pt-28">
      <Link
        to="/"
        className="inline-flex min-h-[44px] items-center gap-2 text-sm text-ink-muted transition-colors hover:text-accent-ink"
      >
        <ArrowLeft size={15} aria-hidden="true" /> Volver
      </Link>

      {/* ── Cabecera ── */}
      <header className="mt-6 max-w-prose">
        <p className="eyebrow mb-4">Caso de estudio · en desarrollo</p>
        <h1 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          Un sistema que responde consultas de venta sin inventarse los precios
        </h1>
        <p className="mt-6 text-lg text-ink-muted">
          Después de un evento de venta de tres días revisé las consultas que habían quedado sin
          responder. El sitio había aguantado sin caerse. El problema ya no estaba en la web.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <Status tone="pending">En validación · no atiende clientes reales</Status>
          <Status>Cliente no divulgado</Status>
        </div>
      </header>

      {/* ── 1 · Qué hace ── */}
      <Chapter id="que-hace" n="01" title="Qué pasa cuando una persona escribe">
        <p>
          Alguien manda un mensaje por Instagram o WhatsApp preguntando por un producto. Ese mensaje
          entra al CRM del negocio, y el CRM avisa al sistema de que llegó algo nuevo.
        </p>
        <p>
          El sistema lee el mensaje y trata de entender qué está pidiendo esa persona: si pregunta
          por un producto, por un servicio, si menciona el auto que tiene, si está preguntando un
          precio o si ya compró y está reclamando. Con eso, va a buscar la información real —
          catálogo, stock, precios, reglas del negocio— y arma la respuesta sobre lo que encontró.
        </p>
        <p className="text-ink">
          Si en algún punto no puede estar seguro, no responde. Le pasa la conversación a una
          persona y deja anotado por qué.
        </p>
        <p>
          Eso último es la mitad del trabajo. Un sistema que contesta siempre es fácil. Uno que sabe
          cuándo callarse es el que se puede dejar hablando con clientes.
        </p>
      </Chapter>

      {/* ── 2 · El recorrido ── */}
      <Chapter id="flujo" n="02" title="El recorrido de un mensaje">
        <p>
          Este es el camino completo, en el orden en que ocurre. Cada paso o resuelve algo o corta
          el turno.
        </p>
        <FlujoHumano />
      </Chapter>

      {/* ── 3 · Por qué el modelo no decide ── */}
      <Chapter id="por-que" n="03" title="Por qué el modelo no decide casi nada">
        <p>
          Un modelo de lenguaje es muy bueno entendiendo cómo escribe la gente y muy malo sabiendo
          cuánto cuesta algo hoy. Si le preguntas un precio, te lo va a decir. Puede que sea el de
          la semana pasada, o uno que se acaba de inventar con una seguridad absoluta.
        </p>
        <p className="text-ink">
          Así que en este sistema el modelo no decide precios, stock, disponibilidad, estado de un
          pedido ni reglas comerciales. Todo eso lo resuelven consultas a fuentes reales y reglas
          escritas. El modelo hace dos cosas: interpretar la forma en que la persona escribió, y
          redactar sobre evidencia que ya se verificó.
        </p>

        <div className="surface-sunken rounded-lg p-5 sm:p-6">
          <p className="eyebrow mb-3">El principio, en la forma en que está escrito en el repositorio</p>
          <blockquote className="space-y-3 border-l-2 border-[color:var(--accent-line)] pl-4 text-sm text-ink-muted">
            <p className="text-ink">WORKFLOW FIRST</p>
            <p>
              «El AI Agent recibe evidencia estructurada, interpreta lenguaje residual y redacta. No
              reconstruye libremente el estado vigente del negocio.»
            </p>
            <p>
              «Una bandera que depende de que el LLM decida obedecerla no constituye una solución
              determinista completa.»
            </p>
            <p>«No solucionar defectos operacionales ampliando el system prompt.»</p>
          </blockquote>
          <p className="mt-4 text-sm text-ink-faint">
            La tercera es la que más me costó respetar. Cuando algo falla, ampliar las instrucciones
            del modelo es lo más rápido — y funciona lo suficiente como para engañarte.
          </p>
        </div>

        <p>
          Hay una consecuencia práctica de esto que me sorprendió: <strong className="font-medium text-ink">el
          modelo aparece exactamente dos veces en todo el recorrido, y en ninguna de las dos decide
          algo con consecuencias.</strong>
        </p>
      </Chapter>

      {/* ── 4 · Arquitectura ── */}
      <Chapter id="arquitectura" n="04" title="Cómo está construido">
        <p>
          Las mismas etapas de arriba, con los nombres que tienen en el código. Cada capa recibe algo
          resuelto de la anterior y no vuelve hacia atrás.
        </p>
        <Arquitectura />
        <p className="text-sm text-ink-faint">
          Los dos modelos no son el mismo a propósito. Entender lo que alguien quiso decir es más
          difícil que redactar sobre datos ya resueltos, así que el primero usa un modelo con más
          capacidad y el segundo uno más barato. Cuesta menos y falla menos donde importa.
        </p>
      </Chapter>

      {/* ── 5 · Evaluación ── */}
      <Chapter id="evaluacion" n="05" title="Cómo sé que funciona">
        <p>
          Esta es la parte que más tiempo me llevó y la que no se ve. Para saber si el sistema
          responde bien necesitaba casos reales, no ejemplos que yo mismo inventara — porque los que
          uno inventa son siempre los que el sistema ya resuelve.
        </p>
        <p>
          Tomé un año de conversaciones reales del negocio, las anonimicé, quité duplicados exactos,
          agrupé los mensajes que eran plantillas repetidas y de ahí saqué una muestra con cuotas
          fijas por dificultad. Los casos difíciles —los que tocan pagos, reclamos o varias
          preguntas a la vez— están sobrerrepresentados a propósito.
        </p>

        <Embudo />

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <Measure
            meaning="Las pruebas que corren sin llamar a ningún modelo pasan todas"
            value="51/51 · 464/464"
            method="E2E deterministas · local · ago 2026"
            tone="ok"
          />
          <Measure
            meaning="Se reprodujeron 84 turnos de conversaciones reales sin un solo error grave"
            value="84 turnos · 0 fallos duros"
            method="replay con modelo real · local · ago 2026"
            tone="ok"
          />
          <Measure
            meaning="Ninguna señal de dato personal sobrevivió a la anonimización"
            value="0 residuos"
            method="verificación automática sobre el corpus"
            tone="ok"
          />
        </div>

        <p className="mt-6 text-sm text-ink-faint">
          Los archivos del conjunto de evaluación están fijados por hash, para que cualquier corrida
          futura pueda demostrar que se comparó contra exactamente los mismos casos.
        </p>
      </Chapter>

      {/* ── 6 · Fallos ── */}
      <Chapter id="fallos" n="06" title="Lo que se rompió">
        <p>
          Cinco defectos encontrados, cinco corregidos, y treinta y un casos nuevos añadidos a la
          suite para que no vuelvan a pasar sin que me entere.
        </p>
        <ol className="max-w-prose space-y-3">
          {[
            ['Alguien decía que ya había pagado y el sistema no avisaba a nadie.', 'Ahora eso corta el turno y deriva a una persona, siempre.'],
            ['Cualquier conversación de más de un mensaje se caía.', 'Un dato que podía venir vacío y no estaba contemplado.'],
            ['La persona decía «esa» refiriéndose a algo anterior, el sistema entendía a qué se refería, y esa referencia no llegaba a la búsqueda del catálogo.'],
            ['El sistema volvía a preguntar datos que la persona ya le había dado.'],
            ['Uno de cada tres turnos terminaba en la respuesta genérica de seguridad.', 'Pasó del 29-30% al 0%.'],
          ].map(([defecto, fix], i) => (
            <li key={i} className="surface rounded p-4">
              <span className="measure mr-2 text-xs text-accent-ink">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-base text-ink-muted">{defecto}</span>
              {fix && (
                <span className="mt-2 flex items-start gap-2 text-sm text-ink-faint">
                  <CornerDownRight size={14} className="mt-1 shrink-0" aria-hidden="true" />
                  {fix}
                </span>
              )}
            </li>
          ))}
        </ol>

        <div className="surface-sunken mt-6 rounded-lg p-5 sm:p-6">
          <p className="eyebrow mb-3">El hallazgo que no esperaba</p>
          <p className="max-w-prose text-base text-ink-muted">
            Le estaba pasando al modelo información interna de diagnóstico —datos sobre cómo había
            ido la búsqueda— pensando que le ayudaría a responder mejor. Lo comparé cambiando
            únicamente eso, con el mismo modelo, el mismo prompt y la misma versión de todo lo demás.
          </p>
          <p className="mt-3 max-w-prose text-base text-ink">
            Con esa información visible, ese escenario pasaba 5 de 5 veces. Ocultándosela, 0 de 5.
          </p>
          <p className="mt-3 max-w-prose text-sm text-ink-faint">
            El sistema ya le decía al modelo qué hacer por otra vía. Darle un segundo canal de
            opinión hacía que compitieran entre sí. Desde entonces la telemetría interna no viaja al
            modelo.
          </p>
        </div>
      </Chapter>

      {/* ── 7 · Procedencia ── */}
      <Chapter id="procedencia" n="07" title="El día que paré todo">
        <p>
          Un día noté que el panel de ejecuciones no mostraba nada posterior al 24 de julio, a pesar
          de que yo llevaba días declarando pruebas como superadas.
        </p>
        <p>
          Fui a mirar por qué. La opción de guardar ejecuciones estaba desactivada — no la había
          tocado yo, venía así de antes. Y eso significaba algo incómodo:{' '}
          <strong className="font-medium text-ink">
            era imposible distinguir «esto nunca pasó por el sistema» de «pasó, pero no se guardó».
          </strong>{' '}
          Mis pruebas anteriores no probaban lo que yo creía que probaban.
        </p>
        <p>
          Detuve la implementación. Fui a la base de datos directamente, no al panel: cero registros
          desde el 26 de julio, sobre más de seis mil históricos. Después activé el guardado sólo en
          el entorno de pruebas, corrí dos turnos sintéticos —sin datos ni clientes reales—,
          inspeccioné paso a paso qué nodos se habían ejecutado, y devolví la configuración a como
          estaba, verificando por hash que no había cambiado nada más.
        </p>
        <p className="text-ink">
          La prueba salió bien. Y aun así no reclasifiqué las corridas anteriores.
        </p>
        <p>
          Podría haberlo hecho. Nadie estaba mirando y el sistema funcionaba. Pero esa prueba
          demostraba que la arquitectura funcionaba hoy, no que aquellas corridas concretas hubieran
          ocurrido — y presentarlas como confirmadas habría sido inventar evidencia a mi favor.
          Quedaron marcadas como lo que son: respuesta del sistema confirmada, ejecución no
          recuperable.
        </p>
        <p className="text-sm text-ink-faint">
          De ahí salió una regla para el proyecto: ninguna prueba formal se declara superada de punta
          a punta si no queda una ejecución guardada que se pueda ir a mirar después.
        </p>
      </Chapter>

      {/* ── 8 · Estado real ── */}
      <Chapter id="estado" n="08" title="Dónde está hoy, exactamente">
        <p>
          Esto no está en producción. Me interesa que quede claro porque es fácil escribir un caso
          de estudio que suene a sistema terminado.
        </p>
        <EstadoReal />
        <p className="mt-6 text-sm text-ink-faint">
          El envío al cliente final está simulado a propósito: mientras la validación no esté
          cerrada, el sistema construye la respuesta y la deja lista, pero no la manda.
        </p>
      </Chapter>

      {/* ── 9 · Pendiente ── */}
      <Chapter id="pendiente" n="09" title="Lo que falta">
        <p>
          Hay huecos, y no son defectos: son cosas que todavía no existen. Distinguirlos importa,
          porque se arreglan de forma distinta.
        </p>
        <ul className="max-w-prose space-y-3">
          {[
            'No hay forma de consultar el estado de un pedido ni su despacho.',
            'No hay forma de consultar la disponibilidad futura de algo que hoy no está.',
            'La información operacional del negocio —horarios, ubicación, formas de pago— todavía no tiene una fuente conectada.',
            'La búsqueda del catálogo funciona bien cuando la persona nombra el producto con precisión y falla cuando lo describe con sus palabras: 9 de 42 turnos se quedaron sin resultado por esto.',
          ].map(h => (
            <li key={h} className="flex gap-3 text-base text-ink-muted">
              <span aria-hidden="true" className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[color:var(--pending)]" />
              {h}
            </li>
          ))}
        </ul>
        <p className="mt-6">
          El último es el que más me interesa. Es el punto donde el sistema todavía se parece
          demasiado a un buscador y demasiado poco a alguien que atiende.
        </p>
      </Chapter>

      <div className="rule pt-10">
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
  ['Llega un mensaje', 'Instagram o WhatsApp, escrito por una persona real.'],
  ['El CRM lo recibe y avisa', 'El CRM del negocio guarda la conversación y dispara un aviso hacia el sistema.'],
  ['¿Hay alguien atendiendo ya?', 'Si una persona del equipo tomó la conversación, el sistema se calla y no gasta nada. Se comprueba antes de todo lo demás y otra vez justo antes de enviar.'],
  ['Se limpia el mensaje', 'Se normaliza el texto y se recupera lo que se dijo antes en esa misma conversación.'],
  ['Se entiende la consulta', 'Aquí interviene el modelo por primera vez: identifica qué se pide, de qué producto o servicio se habla, qué vehículo se menciona y con qué intención. Devuelve una estructura, no un texto.'],
  ['Se comprueba que se entendió', 'Si lo que devolvió no cumple el formato esperado, el turno se corta. No se sustituye por una interpretación neutra para que salga algo igual.'],
  ['Se busca la información real', 'Catálogo, precios, stock, reglas del negocio. Esto es determinista: consultas y reglas escritas, sin modelo.'],
  ['Se decide qué debe pasar', 'Si falta un dato, si hay que aclarar algo, si se puede cerrar una venta, o si esto tiene que verlo una persona. Se decide aquí, antes de redactar.'],
  ['Se redacta', 'El modelo interviene por segunda vez, ya sin acceso a herramientas: sólo pone en palabras lo que las capas anteriores resolvieron.'],
  ['Se revisa lo redactado', 'Un validador comprueba que no se afirme nada que no esté respaldado. Si algo no cuadra, hay un intento de reparación; si sigue sin cuadrar, no sale.'],
  ['Sale, o no sale', 'Se envía por el mismo canal, o la conversación queda derivada a una persona con el motivo anotado.'],
  ['Queda registrado', 'Cada etapa deja traza: qué se entendió, qué se consultó, qué se decidió y por qué. Es lo que permite después explicar una respuesta concreta.'],
]

function FlujoHumano() {
  return (
    <ol className="mt-2 space-y-px overflow-hidden rounded-lg border border-[color:var(--line)] bg-[color:var(--line)]">
      {pasos.map(([t, d], i) => {
        const isGate = i === 2 || i === 5 || i === 10
        return (
          <li key={t} className="bg-raised p-4 sm:p-5">
            <div className="flex gap-4">
              <span
                className={`measure mt-0.5 shrink-0 text-xs ${isGate ? 'text-accent-ink' : 'text-ink-faint'}`}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <p className={`text-sm font-medium ${isGate ? 'text-accent-ink' : 'text-ink'}`}>{t}</p>
                <p className="mt-1 max-w-prose text-sm text-ink-muted">{d}</p>
              </div>
            </div>
          </li>
        )
      })}
    </ol>
  )
}

const capas = [
  ['ingress',       'Traduce el aviso del CRM a un mensaje normalizado. Rechaza lo que no es un mensaje entrante de cliente.'],
  ['understanding', 'Modelo con salida estructurada estricta + validación de contrato. Si no valida, el turno se corta.'],
  ['operational',   'Catálogo, reglas, plan de ejecución y evidencia. Determinista. Es donde se resuelve todo lo que tiene consecuencias.'],
  ['policy',        'Decide si el turno deriva a una persona y con qué motivo y urgencia. Trabaja con roles, no con nombres.'],
  ['composer',      'Modelo sin herramientas. Redacta sobre la evidencia ya resuelta.'],
  ['validator',     'Contiene afirmaciones no respaldadas. Una reparación como máximo.'],
  ['egress',        'Construye el sobre de salida o suprime el envío. Vuelve a comprobar quién es dueño de la conversación.'],
  ['runtime',       'Traza, uso de modelo, presupuesto y estado de conversación persistido.'],
]

function Arquitectura() {
  return (
    <div className="surface-sunken overflow-hidden rounded-lg">
      <ol>
        {capas.map(([n, d], i) => (
          <li
            key={n}
            className={`flex flex-col gap-1 p-4 sm:flex-row sm:gap-6 sm:p-5 ${
              i > 0 ? 'border-t border-[color:var(--line)]' : ''
            }`}
          >
            <span className="measure w-32 shrink-0 text-sm text-accent-ink">{n}</span>
            <span className="max-w-prose text-sm text-ink-muted">{d}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}

const embudo = [
  ['3.990', 'conversaciones de un año'],
  ['48.937', 'mensajes en total'],
  ['14.664', 'mensajes de clientes, ya anonimizados'],
  ['11.463', 'después de quitar duplicados exactos'],
  ['500', 'casos finales, con cuotas por dificultad'],
]

function Embudo() {
  return (
    <div className="surface-sunken mt-2 overflow-hidden rounded-lg">
      {embudo.map(([n, d], i) => (
        <div
          key={d}
          className={`flex flex-wrap items-baseline gap-x-4 gap-y-1 p-4 sm:p-5 ${
            i > 0 ? 'border-t border-[color:var(--line)]' : ''
          }`}
        >
          <span
            className={`measure w-24 shrink-0 text-lg font-semibold ${
              i === embudo.length - 1 ? 'text-accent-ink' : 'text-ink'
            }`}
          >
            {n}
          </span>
          <span className="text-sm text-ink-muted">{d}</span>
        </div>
      ))}
      <div className="border-t border-[color:var(--line)] bg-[color:var(--bg)] p-4 sm:p-5">
        <p className="measure text-xs text-ink-faint">
          60 críticos o sensibles · 60 de varios turnos · 80 con varias intenciones · 300 simples
        </p>
      </div>
    </div>
  )
}

const estado = [
  ['Pruebas deterministas locales', 'ok', 'Todo en verde, sin llamar a ningún modelo.'],
  ['Reproducción de mensajes reales con modelo', 'ok', '84 turnos, sin errores graves ni interpretaciones inválidas.'],
  ['Transporte hacia el CRM, sobre capturas reales', 'ok', 'El sobre de salida se construye correctamente sobre datos reales capturados.'],
  ['Pruebas de punta a punta contra el CRM en vivo', 'pending', 'No ejecutadas. No autorizadas todavía.'],
  ['Envío real a clientes', 'pending', 'No. El envío está simulado.'],
  ['Operación autónoma', 'pending', 'No.'],
]

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
            <span
              className={`inline-block h-2 w-2 rounded-full ${
                tone === 'ok' ? 'bg-ok' : 'bg-[color:var(--pending)]'
              }`}
            />
          </span>
          <div className="sm:flex-1">
            <p className="text-sm font-medium text-ink">{label}</p>
            <p className="mt-0.5 text-sm text-ink-muted">{detail}</p>
          </div>
          <span className="measure text-xs text-ink-faint sm:w-28 sm:text-right">
            {tone === 'ok' ? 'verificado' : 'pendiente'}
          </span>
        </div>
      ))}
    </div>
  )
}
