import { Link } from 'react-router-dom'
import { ArrowLeft, CornerDownRight } from 'lucide-react'
import { Measure, Status } from '../lib/ui'
import useSeo from '../lib/useSeo'
import { SEO } from '../lib/seo-routes'

/**
 * Caso · Agente comercial conversacional.
 *
 * ANONIMIZADO. No se nombra al cliente, no se citan cifras de contrato, no
 * aparecen identificadores de workflow, rutas de webhook, ids de ejecución,
 * puertos, personas, el CRM ni los modelos concretos, ni fragmentos de código
 * propietario. Tampoco se enlaza desde el caso del otro cliente: cruzarlos
 * permitiría deducir de quién se trata.
 *
 * El orden es deliberado: primero qué hace el sistema cuando alguien escribe,
 * después por qué está diseñado así, y sólo entonces la arquitectura.
 *
 * Actualizado el 2026-09-13 contra el repositorio del proyecto (rama actual,
 * generación 3). Toda cifra lleva su fecha, y lo que es evidencia de desarrollo
 * se dice: sobre un banco ya usado para arreglar no se aprueba nada.
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

function Subtitulo({ children }) {
  return (
    <h3 className="pt-4 font-display text-lg font-semibold tracking-tight text-ink">{children}</h3>
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
      <header className="mt-6 max-w-prose">
        <p className="eyebrow mb-4">Caso de estudio · en desarrollo · actualizado el 13 sep 2026</p>
        <h1 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          Un sistema que responde consultas de venta sin inventarse los precios
        </h1>
        <p className="mt-6 text-lg text-ink-muted">
          Después de un evento de venta de tres días revisé las consultas que habían quedado sin
          responder. El sitio había aguantado sin caerse. El problema ya no estaba en la web.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <Status tone="pending">No apto para salir todavía · no atiende clientes reales</Status>
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
          Si en algún punto no puede estar seguro, no inventa. Le pasa la conversación a una
          persona: le deja una tarea con el motivo y un plazo, le avisa a quien escribió que lo va a
          atender alguien del equipo, y se calla.
        </p>
        <p>
          Eso último es la mitad del trabajo. Un sistema que contesta siempre es fácil. Uno que sabe
          cuándo callarse es el que se puede dejar hablando con clientes. La otra mitad la aprendí
          en septiembre, y está más abajo: callarse también cuesta.
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
          Así que en este sistema el modelo no decide precios, stock, disponibilidad, calce con el
          vehículo, estado de un pedido ni reglas comerciales. Todo eso lo resuelven consultas a
          fuentes reales y reglas escritas. El modelo hace dos cosas: interpretar la forma en que la
          persona escribió, y redactar sobre evidencia que ya se verificó.
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
          Con el tiempo se sumó un segundo principio. Nació de mirar respuestas que eran correctas
          y no le servían a nadie:
        </p>

        <div className="surface-sunken rounded-lg p-5 sm:p-6">
          <blockquote className="space-y-3 border-l-2 border-[color:var(--accent-line)] pl-4 text-sm text-ink-muted">
            <p className="text-ink">RESOLVER, NO SOLO CONTENER</p>
            <p>
              «Una respuesta segura pero degradada no es PASS si impide completar una intención
              comercial válida.»
            </p>
          </blockquote>
          <p className="mt-4 text-sm text-ink-faint">
            Por eso cada prueba separa cuatro aprobados: que la respuesta sea segura, que esté
            respaldada por evidencia, que funcione y que resuelva lo que la persona vino a hacer. Se
            pueden pasar los tres primeros y reprobar el cuarto.
          </p>
        </div>

        <p>
          Hay una consecuencia práctica de todo esto que me sorprendió: <strong className="font-medium text-ink">el
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
          Los dos modelos no son el mismo, a propósito. Entender lo que alguien quiso decir es más
          difícil que redactar sobre datos ya resueltos, así que la comprensión usa uno con más
          capacidad. Probé ese mismo modelo como redactor: mejora en unos casos y empeora en otros,
          y los fallos que de verdad bloquean están antes, en el código. El redactor sigue siendo el
          anterior hasta que una comparación limpia diga otra cosa.
        </p>

        <Subtitulo>Cómo llegó a esta forma</Subtitulo>
        <p>
          No nació así. Es la cuarta forma que tiene el sistema, y cada salto sacó decisiones del
          modelo para ponerlas en código.
        </p>
        <Generaciones />
      </Chapter>

      {/* ── 5 · Evaluación ── */}
      <Chapter id="evaluacion" n="05" title="Cómo sé que funciona">
        <p>
          Esta es la parte que más tiempo me llevó y la que no se ve. Para saber si el sistema
          responde bien necesitaba casos reales, no ejemplos que yo mismo inventara — porque los que
          uno inventa son siempre los que el sistema ya resuelve.
        </p>
        <p>
          El primer banco salió de un año de conversaciones reales del negocio: las anonimicé, quité
          duplicados exactos, agrupé los mensajes que eran plantillas repetidas y saqué una muestra
          con cuotas fijas por dificultad. Los casos difíciles —los que tocan pagos, reclamos o
          varias preguntas a la vez— están sobrerrepresentados a propósito.
        </p>

        <Embudo />

        <p>
          Después encontré un problema de método: 792 de esos 3.990 hilos —el 19,8 %— ya se
          habían usado durante el desarrollo. Un caso que usaste para diseñar un arreglo deja de
          medir si el sistema generaliza; sólo mide si te acuerdas. Desde entonces los bancos se
          separan en quemados, que sirven para desarrollar, y vírgenes, que sirven para aprobar.
        </p>
        <p className="text-ink">
          El examen de septiembre se armó con esa regla: 1.000 conversaciones simuladas —550 que
          empiezan en frío y 450 de varios turnos—, calibradas con la estadística de 3.981 primeros
          mensajes reales, selladas con hash antes de ver una sola respuesta, y con la vara de
          aprobación congelada antes de la primera llamada al modelo.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <Measure
            meaning="Conversaciones del examen, corridas enteras con los modelos reales"
            value="1.000 · 2.302 turnos"
            method="simuladas · 0 errores de transporte · 10 sep 2026"
          />
          <Measure
            meaning="Lo que costó correr el examen completo"
            value="US$ 1,67"
            method="≈ US$ 0,0015 por conversación · 11 sep 2026"
          />
          <Measure
            meaning="Las pruebas que corren sin llamar a ningún modelo pasan todas"
            value="1.215 / 1.215"
            method="deterministas · local · 13 sep 2026"
            tone="ok"
          />
        </div>

        <p className="mt-6 text-sm text-ink-faint">
          Una suite en verde no es un sistema sano: una auditoría del 5 de septiembre encontró
          catorce defectos con todas estas pruebas pasando, porque eran propiedades que ningún test
          afirmaba todavía. Cada banco está fijado por hash, y si el evaluador se equivoca se corrige
          en una versión nueva sobre las mismas respuestas — nunca regenerando las del producto.
        </p>
      </Chapter>

      {/* ── 6 · Fallos ── */}
      <Chapter id="fallos" n="06" title="Lo que se rompió">
        <Subtitulo>Agosto: cinco defectos</Subtitulo>
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
            Con esa información visible, el fallo aparecía 5 de 5 veces. Ocultándosela, 0 de 5.
          </p>
          <p className="mt-3 max-w-prose text-sm text-ink-faint">
            El sistema ya le decía al modelo qué hacer por otra vía. Darle un segundo canal de
            opinión hacía que compitieran entre sí. Desde entonces la telemetría interna no viaja al
            modelo.
          </p>
        </div>

        <Subtitulo>Septiembre: el examen que no pasó</Subtitulo>
        <p>
          Corrí las 1.000 conversaciones completas. Veredicto: no apto para salir. La vara tenía dos
          resultados posibles y bastaba un solo bloqueante para reprobar. Hubo seis fallos
          críticos, y un patrón que no era crítico pero sí grave:
        </p>
        <ul className="max-w-prose space-y-3">
          {[
            'Cinco veces, el cliente traía su propia pieza para que se la instalaran y el sistema no le pasaba el caso a nadie.',
            'Una vez, alguien describió un síntoma y el sistema le cotizó la reparación en vez de la revisión.',
            'Y un bucle después de derivar: la persona seguía preguntando y el sistema seguía dándole vueltas al caso abierto en vez de contestar. 230 turnos en 144 conversaciones; en 76, lo que preguntaba era un precio.',
          ].map(h => (
            <li key={h} className="flex gap-3 text-base text-ink-muted">
              <span aria-hidden="true" className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[color:var(--pending)]" />
              {h}
            </li>
          ))}
        </ul>
        <p className="text-ink">
          La lección fue incómoda: había arreglado que el precio fuera el correcto, no qué tenía que
          pasar con el caso.
        </p>
        <p>
          El examen también puso número al costo de la prudencia: 752 derivaciones a una persona por
          cada 1.000 conversaciones. Ninguna sin destinatario, todas seguras. Y así no atiende nadie.
        </p>

        <Subtitulo>La reparación, con su costo</Subtitulo>
        <p>
          Después vinieron 56 arreglos, cada uno con su propio commit y una prueba que falla sin él,
          medidos contra la versión anterior con la misma vara. Algunos resultados sobre ese banco:
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <Measure
            meaning="Consultas que terminaban sin resolverse"
            value="200 → 106"
            method="banco quemado · redactor simulado · 12 sep 2026"
            tone="ok"
          />
          <Measure
            meaning="Piezas traídas por el cliente que llegaban a una persona"
            value="8 → 42 de 55"
            method="banco quemado · 12 sep 2026"
            tone="ok"
          />
          <Measure
            meaning="Veces que se daba el precio de una revisión sin tenerlo en la evidencia"
            value="33 → 0"
            method="banco quemado · 12 sep 2026"
            tone="ok"
          />
          <Measure
            meaning="Lo que empeoró: respuestas que repiten que el caso sigue abierto. Todo el aumento está en casos que el negocio manda derivar"
            value="249 → 398"
            method="banco quemado · 12 sep 2026"
            tone="accent"
          />
        </div>
        <p className="text-sm text-ink-faint">
          Todo esto es evidencia de desarrollo, no de aprobación: el banco ya estaba quemado y el
          redactor era simulado. Una corrida posterior con los modelos reales sobre 89
          conversaciones, juzgada a ciegas por dos lectores —dos modelos, no personas—, encontró
          cinco fallos críticos más; entre ellos, cobrar una revisión con el precio de otro
          servicio. Su arreglo está probado sin red. Falta volver a correrlo.
        </p>
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
          a punta si no queda una ejecución guardada que se pueda ir a mirar después. Sigue vigente,
          aunque el workflow donde nació ya no está en el camino de un mensaje.
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
          Antes de cualquier piloto falta un examen nuevo: un banco que nadie haya visto, con la vara
          congelada antes de correrlo. Mientras no lo pase, el sistema no le escribe a nadie.
        </p>
      </Chapter>

      {/* ── 9 · Pendiente ── */}
      <Chapter id="pendiente" n="09" title="Lo que falta">
        <p>
          Hay huecos, y no todos son defectos: algunos son cosas que todavía no existen y otros,
          decisiones que todavía no se toman. Distinguirlos importa, porque se arreglan de forma
          distinta.
        </p>
        <ul className="max-w-prose space-y-3">
          {[
            'No hay forma de consultar el estado de un pedido ni su despacho.',
            'La disponibilidad futura de algo que hoy no está sigue sin fuente. La diferencia con agosto es que ahora el sistema lo dice, en vez de suponer.',
            'Qué hacer cuando alguien vuelve a escribir después de ser derivado. Hoy el sistema calla. Es una decisión de negocio, no técnica, y está pendiente.',
            'Fotos y audios: son alrededor del 4 % de lo que escribe la gente y no están en ningún banco de prueba.',
            'WhatsApp e Instagram, probados en vivo. La prueba de punta a punta fue por un canal de pruebas.',
          ].map(h => (
            <li key={h} className="flex gap-3 text-base text-ink-muted">
              <span aria-hidden="true" className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[color:var(--pending)]" />
              {h}
            </li>
          ))}
        </ul>
        <p className="mt-6">
          Dos huecos de agosto sí se cerraron: la información operacional del negocio —horarios,
          ubicación, medios de pago— ya tiene una fuente, y la búsqueda del catálogo dejó de quedarse
          sin respuesta en 8 de los 9 casos en que fallaba cuando la persona describía el producto
          con sus palabras.
        </p>
        <p className="text-ink">
          Lo que más me enseñó septiembre vuelve al primer capítulo. Que el sistema sepa cuándo
          callarse es la mitad del trabajo; la otra mitad es que no se calle cuando sí sabe la
          respuesta.
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
  ['El CRM lo recibe y avisa', 'El CRM del negocio guarda la conversación y dispara un aviso hacia el sistema. Si el mismo aviso llega dos veces, se procesa una sola.'],
  ['¿Hay alguien atendiendo ya?', 'Si una persona del equipo tomó la conversación, el sistema se calla y no gasta nada. Se comprueba antes de todo lo demás y otra vez justo antes de enviar.'],
  ['Se limpia el mensaje', 'Se normaliza el texto y se recupera lo que se dijo antes en esa misma conversación.'],
  ['Se entiende la consulta', 'Aquí interviene el modelo por primera vez: qué se pide, de qué producto o servicio se habla, qué vehículo se menciona y con qué intención. Devuelve una propuesta con estructura fija, no un texto — y es sólo eso, una propuesta.'],
  ['Se comprueba que se entendió', 'Si la propuesta no cumple el contrato, el turno se corta. No se sustituye por una interpretación neutra para que salga algo igual.'],
  ['Se busca la información real', 'El código valida la propuesta y resuelve catálogo, precios, stock, calce con el vehículo y reglas del negocio, sin modelo. El resultado es la evidencia: la lista cerrada de lo que se puede afirmar.'],
  ['Se decide qué debe pasar', 'Si falta un dato, si hay que aclarar algo, si se puede avanzar la venta o si esto tiene que verlo una persona. Se decide aquí, antes de redactar.'],
  ['Se redacta', 'El modelo interviene por segunda vez, ya sin acceso a herramientas: sólo pone en palabras lo que la evidencia autoriza.'],
  ['Se revisa lo redactado', 'Un validador comprueba que no se afirme nada que no esté respaldado. Si algo no cuadra, hay un intento de reparación. Si tampoco, el texto del modelo se descarta y se arma una respuesta por código, copiando de la misma evidencia, que tiene que pasar el mismo validador. Si ni así, sale la respuesta prudente.'],
  ['Sale, o no sale', 'Se envía por el mismo canal, o la conversación queda derivada: una tarea con motivo y plazo para una persona, un aviso a quien escribió, y el sistema deja de responder. Cada efecto queda anotado una sola vez.'],
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

// Nombres de carpeta reales de la generación actual. El núcleo determinista
// vive repartido en varias (planning, application…), por eso va agrupado.
const capas = [
  ['ingress',                'Traduce el aviso del CRM a un mensaje normalizado. Rechaza lo que no es un mensaje entrante de cliente y descarta los avisos repetidos.'],
  ['understanding',          'Modelo con salida estructurada estricta + validación de contrato. Propone intención y entidades; si la propuesta no valida, el turno se corta.'],
  ['planning · application', 'El núcleo determinista. Valida la propuesta, resuelve catálogo, conocimiento del negocio y calce, planifica las acciones y construye la evidencia. Es donde se resuelve todo lo que tiene consecuencias.'],
  ['policy',                 'Decide si el turno deriva a una persona y con qué motivo y urgencia. Trabaja con roles, no con nombres.'],
  ['composer',               'Modelo sin herramientas. Redacta sólo lo que la evidencia autoriza.'],
  ['validation',             'Contiene afirmaciones no respaldadas. Una reparación como máximo; después, recuperación determinista desde la evidencia, verificada por el mismo validador.'],
  ['egress · delivery',      'Construye el sobre de salida o suprime el envío. Vuelve a comprobar quién es dueño de la conversación, anota cada efecto —mensaje, nota, tarea— en un registro idempotente y obedece un freno de emergencia que corta todos los envíos.'],
  ['runtime',                'Traza, uso de modelo, presupuesto y estado de conversación persistido.'],
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
            <span className="measure w-44 shrink-0 text-sm text-accent-ink">{n}</span>
            <span className="max-w-prose text-sm text-ink-muted">{d}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}

const generaciones = [
  ['0', 'Un workflow de n8n con varios agentes, el catálogo en una hoja de cálculo y la memoria confiada al modelo.', 'descartada'],
  ['1', 'n8n con 22 nodos, un servicio propio en Node y el CRM. Un prompt de 14 KB hacía de cerebro.', 'congelada · vuelta atrás'],
  ['2', 'Un experimento para sacar las decisiones del modelo: dos diseños candidatos, comparados.', 'cerrada'],
  ['3', 'Comprensión → código determinista → redacción. n8n ya no está en el camino de un mensaje.', 'actual'],
]

function Generaciones() {
  return (
    <ol className="surface overflow-hidden rounded-lg">
      {generaciones.map(([n, d, estado], i) => {
        const actual = estado === 'actual'
        return (
          <li
            key={n}
            className={`flex flex-col gap-2 p-4 sm:flex-row sm:items-baseline sm:gap-5 sm:p-5 ${
              i > 0 ? 'border-t border-[color:var(--line)]' : ''
            }`}
          >
            <span className={`measure shrink-0 text-xs ${actual ? 'text-accent-ink' : 'text-ink-faint'}`}>
              Gen {n}
            </span>
            <span className={`max-w-prose text-sm sm:flex-1 ${actual ? 'text-ink' : 'text-ink-muted'}`}>{d}</span>
            <span className={`measure text-xs sm:text-right ${actual ? 'text-accent-ink' : 'text-ink-faint'}`}>
              {estado}
            </span>
          </li>
        )
      })}
    </ol>
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
        <p className="measure mt-1 text-xs text-ink-faint">
          Primer banco · ago 2026 · 0 señales de dato personal tras la anonimización
        </p>
      </div>
    </div>
  )
}

/**
 * Estado verificable. Cada fila dice su estado con color, con palabra y con
 * forma a la vez —punto lleno, punto hueco—, para que nunca haya que recordar
 * qué significaba un color.
 */
const estado = [
  ['Pruebas deterministas locales', 'ok', '1.215 en verde, sin llamar a ningún modelo. 13 de septiembre.'],
  ['Punta a punta en vivo, sobre una cuenta de prueba del CRM', 'ok', 'Seis cosas comprobadas en vivo el 3 de septiembre: responde, deriva con nota y tarea, se calla cuando una persona toma la conversación, retoma cuando la suelta, no duplica efectos y recibe fotos. Una sola conversación, escrita por mí haciendo de cliente, por un canal de pruebas.'],
  ['Examen sobre 1.000 conversaciones selladas', 'fail', 'Reprobado el 10 de septiembre: seis fallos críticos y un bucle después de derivar. Ese banco quedó quemado.'],
  ['Reparación', 'pending', '56 arreglos medidos sobre el banco quemado. Una corrida con los modelos reales encontró cinco fallos críticos más; su arreglo está probado sin red y falta volver a correrlo.'],
  ['Envío a clientes reales', 'pending', 'No. El piloto no está autorizado.'],
  ['Operación autónoma', 'pending', 'No.'],
]

const marca = {
  ok:      { palabra: 'verificado', punto: 'bg-ok' },
  pending: { palabra: 'pendiente',  punto: 'bg-[color:var(--pending)]' },
  fail:    { palabra: 'no pasó',    punto: 'border-2 border-[color:var(--pending)]' },
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
