import { Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Measure, Status } from '../lib/ui'
import CierreCaso from '../lib/CierreCaso'
import useSeo from '../lib/useSeo'
import { SEO } from '../lib/seo-routes'

/**
 * Caso · Tokyo Tunning.
 *
 * Escrito para quien está decidiendo si trabajar conmigo: primero los
 * resultados, después el problema y lo que hice, y al final lo que viene. El
 * detalle de implementación y la bitácora de cambios viven en el repositorio de
 * la tienda, no aquí.
 *
 * Termina en el problema que quedó abierto y NO enlaza al caso del agente: ese
 * caso está anonimizado y cruzarlos permitiría deducir el cliente.
 *
 * Cada cifra dice de dónde sale y cuándo, en una línea. Verificadas el
 * 2026-09-13 contra el repositorio de la tienda y contra producción.
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
  useSeo(SEO['/caso/tokyo-tunning'])

  return (
    <article className="mx-auto max-w-[54rem] px-5 pb-16 pt-24 sm:px-8 sm:pt-28">
      <Link
        to="/"
        className="inline-flex min-h-[44px] items-center gap-2 text-sm text-ink-muted transition-colors hover:text-accent-ink"
      >
        <ArrowLeft size={15} aria-hidden="true" /> Volver
      </Link>

      <header className="mt-6">
        <div className="max-w-prose">
          <p className="eyebrow mb-4">Caso de estudio · Tokyo Tunning · 2023 – 2026</p>
          <h1 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            De dos puestos de feria a vender $15 millones al mes
          </h1>
          <p className="mt-6 text-lg text-ink-muted">
            Tokyo Tunning vende accesorios automotrices y tiene un taller en San Bernardo. Cuando
            empecé a trabajar con ellos no tenían nombre de marca, redes ni tienda online. Hoy venden
            a todo Chile desde una tienda con 380 productos.
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
        </div>

        {/* Los números, antes que la historia */}
        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          <Measure
            meaning="Crecimiento de las ventas mensuales en año y medio"
            value="×30"
            method="de $500K a $15M · mar 2023 – abr 2025 · según el negocio"
            tone="accent"
          />
          <Measure
            meaning="Ventas por cada peso invertido en publicidad durante el CyberDay"
            value="27×"
            method="$1.936.000 con $70.034 en Meta · jun 2026"
            tone="accent"
          />
          <Measure
            meaning="Productos en la tienda online, más 62 servicios del taller con precio publicado"
            value="380"
            method="sep 2026"
          />
          <Measure
            meaning="Lo que tarda la portada en aparecer en un celular con 4G lenta"
            value="1,2 s"
            method="prueba de laboratorio · ago 2026"
            tone="ok"
          />
        </div>
      </header>

      <figure className="mt-10">
        <img
          src="/assets/proyecto-tokyo-2026-09.webp"
          alt="Portada de la tienda de Tokyo Tunning: el titular «¿Auto con problemas? Lo diagnosticamos, lo resolvemos», los botones Servicios y precios y Ver catálogo, y el menú con el botón Cotizar"
          width="1280"
          height="900"
          loading="eager"
          decoding="async"
          className="w-full rounded-lg border border-[color:var(--line)] object-cover"
        />
        <figcaption className="measure mt-3 text-xs text-ink-faint">
          La tienda en producción, septiembre 2026.
        </figcaption>
      </figure>

      {/* 01 */}
      <Chapter id="partida" n="01" title="El punto de partida">
        <p>
          Dos puestos de feria con buen surtido y gente que sabía de autos, pero sin nombre de
          marca, sin presencia digital y sin forma de vender fuera del persa. No había un plan de
          digitalización: había que vender más los fines de semana.
        </p>
      </Chapter>

      {/* 02 */}
      <Chapter id="atraer" n="02" title="Atraer — el contenido llegó antes que la web">
        <p>
          Le puse el nombre, le armé las redes y empecé a grabar: guion, grabación, edición y
          publicación. El negocio creció por videos de Instagram y TikTok, consultas por WhatsApp y
          envíos a todo Chile, antes de tener local físico o siquiera empresa formal.
        </p>
        <p className="text-ink">
          En año y medio las ventas pasaron de $500 mil a $15 millones al mes, y el canal online
          llegó a ser cerca de una cuarta parte del total.
        </p>
        <p>
          El problema siguiente vino de ese mismo éxito: el negocio vendía por mensajes privados,
          uno a uno, y la demanda crecía más rápido que su forma de atenderla.
        </p>
      </Chapter>

      {/* 03 */}
      <Chapter id="convertir" n="03" title="Convertir — una tienda a la altura del negocio">
        <p>
          En 2026 reconstruí la tienda online desde cero, con diseño y código propios sobre
          WooCommerce. Antes de tocar nada la audité a fondo y prioricé 35 problemas; después la
          llevé a producción y la seguí mejorando con datos.
        </p>
        <p>Lo que obtuvo el negocio:</p>
        <ul className="max-w-prose space-y-3">
          {logros.map(l => (
            <li key={l} className="flex gap-3 text-base text-ink-muted">
              <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {l}
            </li>
          ))}
        </ul>
      </Chapter>

      {/* 04 */}
      <Chapter id="medir" n="04" title="Medir — el CyberDay, la primera prueba de verdad">
        <p>
          Tres días de tráfico alto y descuentos. Preparé los precios de más de 120 productos de
          campaña de forma ordenada y reversible, para que ninguno terminara vendido a mil pesos por
          un error, y la tienda aguantó los tres días sin caerse.
        </p>
        <p className="text-ink">
          Resultado: $1.936.000 en ventas en 23 órdenes, con $70.034 invertidos en publicidad en
          Meta. Por cada peso en publicidad, el negocio vendió 27.
        </p>
        <p className="text-sm text-ink-faint">
          Retorno combinado: todas las ventas del evento sobre todo el gasto en Meta.
        </p>
        <p>
          Después dejé la medición contando sólo las ventas pagadas —antes registraba como compra
          cada pedido creado, casi el doble de lo real—, para que las campañas siguientes se decidan
          con números ciertos.
        </p>
      </Chapter>

      {/* 05 — termina aquí, sin enlazar al otro caso */}
      <Chapter id="despues" n="05" title="Lo que viene">
        <p>
          Al revisar las consultas del CyberDay una por una apareció lo que no mostraba ningún
          panel: cerca de <strong className="font-medium text-ink">$800.000 en ventas</strong> se
          perdieron porque nadie alcanzó a responder a tiempo. La tienda había funcionado. El
          siguiente problema era de atención, y es el que estoy trabajando ahora.
        </p>
        <p className="text-sm text-ink-faint">
          Estimación del negocio a partir de las consultas del período y el ticket promedio del
          evento.
        </p>
        <p>
          En la tienda, lo próximo es mejorar el contraste de algunos textos y hacer más rápidos el
          carrito y el pago.
        </p>
      </Chapter>

      <CierreCaso titulo="¿Tu negocio vende online y algo no está funcionando?">
        Cuéntame qué está pasando. Prefiero entender el problema antes de proponer nada.
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

/** Lo que el negocio obtuvo de la tienda, en resultados y no en tareas. */
const logros = [
  'Una tienda con 380 productos, pago en línea y envío a todo Chile, no sólo retiro en el local.',
  'Una portada que aparece en 1,2 segundos en un celular con 4G lenta. Llegó a pesar 81 MB; hoy, 1,7 MB.',
  'Una búsqueda que entiende errores de tipeo: «bolante» o «fitro» encuentran lo que el cliente quería.',
  'Los 62 servicios del taller con su precio publicado y un botón para cotizar por WhatsApp.',
  'Google encuentra 497 páginas reales, donde antes el sitio le ofrecía 4.454 direcciones, casi todas repetidas o redirigidas.',
  'Términos y política de privacidad al día con la ley chilena de comercio electrónico.',
]
