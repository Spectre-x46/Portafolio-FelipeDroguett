import { Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Measure, Status } from '../lib/ui'
import useSeo from '../lib/useSeo'

/**
 * Caso · Tokyo Tunning.
 *
 * Contado como caso longitudinal: el mismo negocio durante tres años, y cómo
 * cada capa apareció cuando la anterior funcionó. Esa continuidad es lo que
 * demuestra la transversalidad — no una lista de disciplinas.
 *
 * Termina en el problema operativo que quedó abierto y NO enlaza al caso del
 * agente: ese caso está anonimizado y cruzarlos permitiría deducir el cliente.
 *
 * Toda métrica declara qué se midió, cuándo, con qué herramienta y si fue en
 * laboratorio o en uso real.
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

export default function CasoTokyoTunning() {
  useSeo({
    title: 'Tokyo Tunning — de dos puestos de feria a e-commerce | Felipe Droguett',
    description:
      'Tres años dentro del mismo negocio: contenido, campañas, tienda online, catálogo y medición. Con las métricas fechadas y la deuda técnica que quedó abierta.',
    path: '/caso/tokyo-tunning',
  })

  return (
    <article className="mx-auto max-w-[54rem] px-5 pb-16 pt-24 sm:px-8 sm:pt-28">
      <Link
        to="/"
        className="inline-flex min-h-[44px] items-center gap-2 text-sm text-ink-muted transition-colors hover:text-accent-ink"
      >
        <ArrowLeft size={15} aria-hidden="true" /> Volver
      </Link>

      <header className="mt-6 max-w-prose">
        <p className="eyebrow mb-4">Caso de estudio · 2023 – 2026</p>
        <h1 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          Tres años dentro del mismo negocio
        </h1>
        <p className="mt-6 text-lg text-ink-muted">
          No entré como desarrollador. Entré a grabarle videos. Todo lo demás fue apareciendo cuando
          lo anterior empezó a funcionar y dejó al descubierto el problema siguiente.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <Status tone="ok">En producción</Status>
          <a
            href="https://tokyotunning.cl"
            target="_blank"
            rel="noopener noreferrer"
            className="measure inline-flex min-h-[44px] items-center gap-1.5 rounded-sm border border-strong px-2 text-xs text-ink-muted transition-colors hover:border-accent-line hover:text-accent-ink"
          >
            tokyotunning.cl <ExternalLink size={12} aria-hidden="true" />
          </a>
        </div>
      </header>

      <figure className="mt-10">
        <img
          src="/assets/proyecto-tokyo.jpg"
          alt="Portada de la tienda online de Tokyo Tunning, con el menú de categorías y la franja de garantías sobre una fotografía de producto"
          width="1280"
          height="900"
          loading="eager"
          decoding="async"
          className="w-full rounded-lg border border-[color:var(--line)] object-cover"
        />
        <figcaption className="measure mt-3 text-xs text-ink-faint">
          La tienda en producción, agosto 2026.
        </figcaption>
      </figure>

      {/* 01 */}
      <Chapter id="partida" n="01" title="El punto de partida">
        <p>
          Dos puestos de feria con toldos llenos de accesorios automotrices. Sin nombre de marca, sin
          presencia digital y sin ninguna forma de vender fuera del persa. Lo que había era un
          surtido bueno y gente que sabía de autos.
        </p>
        <p>
          Le puse el nombre, le armé las redes y empecé a grabar. No había plan de digitalización:
          había que vender más los fines de semana.
        </p>
      </Chapter>

      {/* 02 */}
      <Chapter id="atraer" n="02" title="Atraer — el contenido llegó antes que la web">
        <p>
          El negocio creció por videos de Instagram y TikTok, consultas por WhatsApp y envíos a todo
          Chile. Todo eso <strong className="font-medium text-ink">antes</strong> de que hubiera un
          local físico o siquiera una empresa formal. Guion, grabación, edición y publicación las
          hacía yo.
        </p>
        <p>
          Ese orden importa, porque explica el problema siguiente: cuando la demanda empezó a llegar
          por redes, el negocio no tenía dónde recibirla. Vendía por mensajes privados, uno a uno.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <Measure
            meaning="Las ventas del negocio se multiplicaron por treinta en año y medio"
            value="$500K → $15M al mes"
            method="Ventas totales del negocio · mar 2023 – abr 2025 · reportado por el cliente"
            tone="accent"
          />
          <Measure
            meaning="El canal online llegó a representar una cuarta parte de las ventas, y el resto del tráfico terminaba llegando a la tienda física"
            value="≈25% online"
            method="Promedio del período · fuente: reportes internos del cliente"
          />
        </div>
      </Chapter>

      {/* 03 */}
      <Chapter id="convertir" n="03" title="Convertir — reconstruir la tienda entera">
        <p>
          En 2026 volví a hacerme cargo de la parte técnica. Lo que existía no aguantaba el volumen
          que el negocio ya tenía, así que reconstruí el sitio desde cero: plantillas propias en PHP
          sobre WooCommerce, catálogo de 364 productos, carrito asíncrono, pasarela de pago, medición
          y los llamados a la acción.
        </p>
        <p>
          Antes de tocar nada hice una auditoría formal en nueve fases. Salieron más de treinta
          hallazgos y cuatro decisiones de arquitectura que dejé registradas con su alternativa
          descartada, porque en tres meses ya no me iba a acordar de por qué elegí lo que elegí.
        </p>

        <div className="surface-sunken rounded-lg p-5 sm:p-6">
          <p className="eyebrow mb-4">El hallazgo que más pesaba</p>
          <p className="max-w-prose text-base text-ink-muted">
            El sitio cargaba el framework de estilos desde un CDN externo, en la cabecera y de forma
            bloqueante: el navegador no podía pintar nada hasta que ese script terminara de generar
            el CSS en el propio dispositivo. Además la configuración se inyectaba{' '}
            <em>después</em> de que el script ya hubiera cargado, así que existía una ventana real en
            la que la página podía dibujarse sin sus colores.
          </p>
          <p className="mt-3 max-w-prose text-base text-ink">
            Se compiló el CSS a un archivo estático y se sirvió desde el propio servidor.
          </p>
          <p className="measure mt-3 text-xs text-ink-faint">
            Verificado hoy: la web ya no solicita ese CDN. · comprobación de red, ago 2026
          </p>
        </div>

        <p>
          El resto del trabajo de esta fase fue el menos vistoso: que las imágenes no se sirvieran
          seis veces más grandes de lo necesario en un teléfono, que se pudiera navegar con teclado y
          que el contraste del texto aguantara.
        </p>

        <div className="grid gap-3 sm:grid-cols-3">
          <Measure
            meaning="La página principal aparecía casi de inmediato en las pruebas de entrega"
            value="0,3 s"
            method="LCP · Lighthouse, laboratorio · jun 2026"
          />
          <Measure
            meaning="Nada se movía de sitio mientras la página terminaba de cargar"
            value="0,00"
            method="CLS · medido de nuevo hoy, ago 2026 · sigue en cero"
            tone="ok"
          />
          <Measure
            meaning="La revisión automática de accesibilidad no encontró problemas al entregar"
            value="100/100"
            method="Lighthouse Accessibility · laboratorio · jun 2026"
          />
        </div>

        <div className="surface mt-3 rounded-lg p-5">
          <p className="text-sm text-ink">
            Un apunte sobre estos números, porque presentarlos sin él sería tramposo.
          </p>
          <ul className="mt-3 max-w-prose space-y-2 text-sm text-ink-muted">
            <li>
              · Los tres son medidas de <strong className="font-medium text-ink">laboratorio</strong>,
              no de usuarios reales. Un laboratorio corre en condiciones favorables.
            </li>
            <li>
              · Un 100 de Lighthouse en accesibilidad <strong className="font-medium text-ink">no
              demuestra conformidad WCAG</strong>. Comprueba una parte de los criterios de forma
              automática; el resto requiere revisión manual.
            </li>
            <li>
              · Al volver a medir hoy, agosto 2026, la accesibilidad da 96 con 18 avisos de
              contraste. El sitio recibió contenido y ajustes después de la entrega. Lo dejo escrito
              porque es lo que cualquiera va a encontrar si lo comprueba.
            </li>
          </ul>
        </div>
      </Chapter>

      {/* 04 */}
      <Chapter id="medir" n="04" title="Medir — el CyberDay fue la primera prueba de verdad">
        <p>
          Tres días de tráfico alto y descuentos. Antes del evento preparé los precios en tres pasos
          separados y versionados —limpiar los precios rebajados que quedaban de antes, activar los
          del evento, y normalizar todo al terminar— porque hacerlo a mano sobre 364 productos es
          exactamente el tipo de cosa que termina con un producto vendido a mil pesos.
        </p>
        <p>El sitio aguantó los tres días sin caerse y sin que yo tuviera que intervenir.</p>

        <div className="grid gap-3 sm:grid-cols-3">
          <Measure
            meaning="Por cada peso invertido en publicidad, el negocio recibió veintisiete"
            value="27,6×"
            method="ROAS · Meta Ads · CyberDay, jun 2026 · 3 días"
            tone="accent"
          />
          <Measure
            meaning="Ventas atribuidas a la campaña durante el evento"
            value="$1.936.000"
            method="Atribución de plataforma · jun 2026"
          />
          <Measure
            meaning="Lo que costó conseguir cada compra"
            value="$70.034"
            method="Coste por adquisición · jun 2026"
          />
        </div>

        <p className="mt-6">
          Cuando terminó, en vez de quedarme con el número bueno me puse a revisar las consultas del
          evento una por una. Ahí apareció lo que no se veía en ningún panel.
        </p>
      </Chapter>

      {/* 05 */}
      <Chapter id="deuda" n="05" title="Deuda técnica que sigue abierta">
        <p>
          Esto normalmente no se pone en un portfolio. Lo pongo porque un sitio en producción sin
          deuda técnica no existe, y porque prefiero que se vea que la tengo identificada a que
          parezca que no la veo.
        </p>
        <ul className="max-w-prose space-y-3">
          {[
            ['Funciones sueltas en el archivo de tema en lugar de estar organizadas en módulos.', 'media'],
            ['Plantillas de producto con lógica repetida entre variantes.', 'media'],
            ['Hojas de estilo antiguas que ya no se usan y siguen ahí.', 'baja'],
            ['El stock de variantes no se actualiza sin recargar la página.', 'alta'],
            ['Los precios de oferta se escriben directamente sobre la variante.', 'alta'],
          ].map(([d, sev]) => (
            <li key={d} className="surface flex flex-wrap items-start justify-between gap-3 rounded p-4">
              <span className="max-w-prose text-sm text-ink-muted">{d}</span>
              <span
                className={`measure shrink-0 text-xs ${
                  sev === 'alta' ? 'text-pending' : 'text-ink-faint'
                }`}
              >
                {sev}
              </span>
            </li>
          ))}
        </ul>
      </Chapter>

      {/* 06 — termina aquí, sin enlazar al otro caso */}
      <Chapter id="despues" n="06" title="Lo que apareció después">
        <p>
          El análisis posterior al CyberDay mostró que se habían perdido cerca de{' '}
          <strong className="font-medium text-ink">$800.000 en ventas</strong> por consultas que
          nadie alcanzó a responder a tiempo. No fueron ventas rechazadas: fueron personas que
          preguntaron, no obtuvieron respuesta y se fueron.
        </p>
        <p className="text-ink">
          La tecnología había funcionado. El siguiente problema no era técnico, era de capacidad de
          atención — y es el que estoy trabajando ahora.
        </p>
        <p className="text-sm text-ink-faint">
          Fuente de la cifra: revisión manual de las consultas del período, cruzada con el ticket
          promedio del evento. Es una estimación del negocio, no un dato de plataforma.
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
