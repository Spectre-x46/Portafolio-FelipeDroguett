import { Link } from 'react-router-dom'
import { ArrowLeft, CornerDownRight, ExternalLink } from 'lucide-react'
import { Measure, Status } from '../lib/ui'
import useSeo from '../lib/useSeo'
import { SEO } from '../lib/seo-routes'

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
 *
 * Revisado el 2026-09-13 contra el repositorio de la tienda y contra
 * producción. Varias cifras de la versión anterior no aguantaron la revisión
 * —fechas de medición, qué era atribuido y qué era total, la lista de deuda—
 * y el caso dice cuáles y por qué cambiaron, en vez de cambiarlas en silencio.
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

      <header className="mt-6 max-w-prose">
        <p className="eyebrow mb-4">Caso de estudio · 2023 – 2026 · actualizado el 13 sep 2026</p>
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
          sobre WooCommerce, un catálogo que hoy tiene 380 productos, pasarela de pago, medición y
          los llamados a la acción.
        </p>
        <p>
          Antes de tocar nada hice una auditoría formal en nueve fases. Salieron 35 hallazgos y
          cuatro decisiones de arquitectura que dejé registradas con su alternativa descartada,
          porque en tres meses ya no me iba a acordar de por qué elegí lo que elegí.
        </p>
        <p className="text-sm text-ink-faint">
          Una de esas cuatro decisiones —no tener carrito lateral— la revertí en agosto: añadir un
          producto recargaba la página entera. El documento de la decisión todavía no lo dice, y eso
          también es deuda.
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
            Verificado de nuevo el 13 sep 2026: ni la portada, ni el catálogo, ni la ficha, ni la
            página de servicios piden ese CDN.
          </p>
        </div>

        <p>
          El resto del trabajo de esta fase fue el menos vistoso: que las imágenes no se sirvieran
          seis veces más grandes de lo necesario en un teléfono, que se pudiera navegar con teclado y
          que el texto se leyera con contraste suficiente. Esto último no está terminado: está en la
          deuda, más abajo.
        </p>

        <div className="grid gap-3 sm:grid-cols-3">
          <Measure
            meaning="La página principal aparece en poco más de un segundo en un teléfono simulado con conexión lenta"
            value="1,22 s"
            method="LCP · producción · móvil emulado, 4G lenta, CPU 4× · 14 ago 2026"
          />
          <Measure
            meaning="Casi nada se mueve de sitio mientras la portada termina de cargar"
            value="0,03"
            method="CLS · misma medición · bajo el umbral de 0,1 · 14 ago 2026"
            tone="ok"
          />
          <Measure
            meaning="La revisión automática de accesibilidad sobre producción todavía encuentra problemas"
            value="1 crítica · 26 serias"
            method="axe-core 4.10 · producción · 5 sep 2026 · abiertas"
          />
        </div>

        <div className="surface mt-3 rounded-lg p-5">
          <p className="text-sm text-ink">
            Un apunte sobre estos números, porque presentarlos sin él sería tramposo.
          </p>
          <ul className="mt-3 max-w-prose space-y-2 text-sm text-ink-muted">
            <li>
              · Son medidas de <strong className="font-medium text-ink">laboratorio</strong> sobre la
              tienda en producción, no de usuarios reales. Un laboratorio corre en condiciones
              controladas.
            </li>
            <li>
              · La versión anterior de este caso citaba una carga de 0,3 s y un 100/100 de
              accesibilidad, fechados en junio. Al revisar de dónde salían encontré que{' '}
              <strong className="font-medium text-ink">eran del 9 de mayo, sobre el entorno de
              pruebas y sin limitar la red</strong>, y que el 100 era de la ficha de producto: la
              portada daba 96, y en agosto, ya en producción, seguía en 96 con 18 fallos de
              contraste. Los reemplacé por mediciones sobre producción.
            </li>
            <li>
              · Ni un 100 de Lighthouse ni un axe limpio{' '}
              <strong className="font-medium text-ink">demuestran conformidad WCAG</strong>: comprueban
              una parte de los criterios de forma automática, y el resto requiere revisión manual.
            </li>
          </ul>
        </div>
      </Chapter>

      {/* 04 */}
      <Chapter id="medir" n="04" title="Medir — el CyberDay fue la primera prueba de verdad">
        <p>
          Tres días de tráfico alto y descuentos. Antes del evento preparé los precios en tres pasos
          separados y versionados —limpiar los precios rebajados que quedaban de antes, activar los
          del evento, y normalizar todo al terminar— porque hacerlo a mano sobre más de 120
          productos de campaña es exactamente el tipo de cosa que termina con un producto vendido a
          mil pesos.
        </p>
        <p>El sitio aguantó los tres días sin caerse. Hubo tres incidentes, resueltos el mismo día.</p>

        <div className="grid gap-3 sm:grid-cols-3">
          <Measure
            meaning="Por cada peso invertido en publicidad en Meta, el negocio vendió veintisiete"
            value="27,6×"
            method="Ventas totales ÷ gasto en Meta · CyberDay, jun 2026 · 3 días"
            tone="accent"
          />
          <Measure
            meaning="Ventas confirmadas durante el evento"
            value="$1.936.000"
            method="23 órdenes · jun 2026"
          />
          <Measure
            meaning="Todo lo que se gastó en publicidad en Meta durante el evento"
            value="$70.034"
            method="≈ $3.045 de publicidad por venta · jun 2026"
          />
        </div>

        <p className="text-sm text-ink-faint">
          Un apunte: el 27,6× es un retorno combinado —todas las ventas del evento contra todo lo
          gastado en Meta—, no lo que la plataforma se atribuyó, que fueron dos compras. La versión
          anterior de este caso lo llamaba ROAS y presentaba el gasto como costo por compra; las dos
          cosas eran imprecisas. Y en agosto descubrí que hasta entonces el píxel contaba como
          compra cada pedido creado, pagado o no, así que no cito ninguna cifra del píxel anterior a
          esa fecha.
        </p>

        <p className="mt-6">
          Cuando terminó, en vez de quedarme con el número bueno me puse a revisar las consultas del
          evento una por una. Ahí apareció lo que no se veía en ningún panel.
        </p>
      </Chapter>

      {/* 05 */}
      <Chapter id="ordenar" n="05" title="Ordenar — lo que la tienda hacía mal sin que se viera">
        <p>
          En agosto dejé de construir y me puse a medir la tienda en producción. Salieron siete
          fases de trabajo, cada una desplegada con su manifiesto, su forma de deshacerla y una
          verificación en producción. Lo más importante de lo que cambió, hasta septiembre:
        </p>
        <ol className="max-w-prose space-y-3">
          {cambios.map(([fecha, antes, despues]) => (
            <li key={antes} className="surface rounded p-4">
              <span className="measure mr-2 text-xs text-accent-ink">{fecha}</span>
              <span className="text-base text-ink-muted">{antes}</span>
              <span className="mt-2 flex items-start gap-2 text-sm text-ink">
                <CornerDownRight size={14} className="mt-1 shrink-0 text-ink-faint" aria-hidden="true" />
                {despues}
              </span>
            </li>
          ))}
        </ol>
        <p className="text-sm text-ink-faint">
          Nada de esto se ve en una captura, y casi todo toca la venta: una tienda que mide mal, que
          no encuentra lo que buscas o que no te deja recibir en tu región pierde ventas sin que
          nadie se entere.
        </p>
      </Chapter>

      {/* 06 */}
      <Chapter id="deuda" n="06" title="Deuda técnica que sigue abierta">
        <p>
          Esto normalmente no se pone en un portfolio. Lo pongo porque un sitio en producción sin
          deuda técnica no existe, y porque prefiero que se vea que la tengo identificada a que
          parezca que no la veo.
        </p>
        <ul className="max-w-prose space-y-3">
          {[
            ['El rojo de la marca sobre su fondo no alcanza el contraste mínimo: 3,23:1, donde hacen falta 4,5:1.', 'alta'],
            ['Un atributo de accesibilidad puesto en el elemento equivocado, que axe marca como violación crítica.', 'alta'],
            ['El HTML no se guarda en la caché del borde: cada visita lo genera de nuevo, y el carrito y el checkout tardan cerca de un segundo en empezar a responder.', 'media'],
            ['1.048 declaraciones !important y estilos incrustados en el carrito y la portada.', 'media'],
            ['Dos implementaciones distintas del catálogo conviviendo en el tema.', 'media'],
            ['El documento de la decisión «sin carrito lateral» sigue marcado como vigente, aunque la revertí en agosto.', 'baja'],
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
        <p className="text-sm text-ink-faint">
          La versión anterior de esta lista tenía cinco puntos. Al revisarlos contra el código, uno
          ya no era cierto —las funciones del tema ya estaban separadas en 21 módulos— y tres no
          tenían ningún respaldo escrito. La cambié por la que sí está medida. La fase dedicada a
          mantenibilidad todavía no empezó.
        </p>
      </Chapter>

      {/* 07 — termina aquí, sin enlazar al otro caso */}
      <Chapter id="despues" n="07" title="Lo que apareció después">
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

/**
 * Agosto y septiembre, en el orden en que salieron a producción. Cada fila es
 * un antes → después que se puede comprobar en el repositorio de la tienda.
 */
const cambios = [
  ['14 ago', 'La portada pesaba 81 MB.', 'Quedó en 1,7 MB.'],
  ['15 ago', 'El navegador tenía que descargar 731 KB de estilos antes de pintar nada; 466 KB eran de un maquetador que ya no se usaba.', 'Bajó a 185 KB: un 74,7 % menos.'],
  ['18 ago', 'Añadir un producto al carrito recargaba la página entera.', 'Ahora se abre un carrito lateral que se rellena sin recargar.'],
  ['19 ago', 'La búsqueda no toleraba erratas: «bolante», «desplasador» o «fitro» daban cero resultados.', 'Ahora encuentran lo que se buscaba.'],
  ['19 ago', 'Meta contaba como compra cada pedido creado: 387, cuando pagados había 192.', 'Ahora sólo cuenta los pagados. De los 9 eventos del embudo, 8 están verificados en vivo.'],
  ['19 ago', 'El tipo de conector de los productos estaba escrito de 17 formas distintas.', 'Normalizado en las 11 familias que lo usan, con 138 cambios reversibles.'],
  ['20 ago', 'De las 4.454 direcciones que el sitio le ofrecía a Google, 4.009 eran redirecciones.', 'Hoy el mapa del sitio tiene 497 direcciones reales.'],
  ['ago – sep', 'Los Términos y Condiciones tenían cero caracteres, lo que llevaba el plazo de retracto de 10 a 90 días, y había cinco incumplimientos del reglamento de comercio electrónico.', 'Corregidos, con Términos y Privacidad publicados.'],
  ['5 sep', 'El checkout sólo ofrecía retirar en el local: quien compraba desde otra región no tenía cómo recibir.', 'Ahora ofrece envío con Starken. Fue una decisión del negocio; su efecto en ventas todavía no está medido.'],
  ['6 sep', 'Las estadísticas de la tienda estaban en cero desde octubre de 2025: faltaba una tabla interna.', 'Se recuperó y se importó el histórico: el panel volvió a cuadrar con los pedidos reales.'],
  ['12 sep', 'Los botones decían «agendar» en un taller que no trabaja con agenda.', '62 servicios con su precio «desde» y un botón para cotizar por WhatsApp.'],
]
