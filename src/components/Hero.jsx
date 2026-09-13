import { ArrowRight } from 'lucide-react'

import useParallax from '../lib/useParallax'
import { EXTERNOS, EXTERNO_ATTRS } from '../lib/links'

/**
 * Hero.
 *
 * Composición completa en lugar de «texto a la izquierda + tarjeta a la
 * derecha». Tres capas: fondo con una sola fuente de luz, el nombre a escala
 * tipográfica grande, y el personaje delante rompiendo la línea de texto.
 *
 * El retrato tapa el cuarto inferior de las letras, no su mitad: leemos por la
 * parte alta de los caracteres, así que ahí se gana profundidad sin perder
 * legibilidad. Sigue leyéndose FELIPE DROGUETT desde cualquier ancho.
 *
 * Sin eslogan. El nombre y dos frases de hechos.
 */
export default function Hero() {
  const { areaRef, targetRef } = useParallax()

  return (
    <section ref={areaRef} className="relative flex min-h-[100svh] flex-col overflow-hidden">

      {/* ── Capa 0 · fondo ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* luz cenital ámbar, muy contenida */}
        <div
          className="absolute inset-x-0 top-0 h-[55%]"
          style={{ background: 'radial-gradient(70% 100% at 50% 0%, rgba(232,163,61,0.11) 0%, transparent 68%)' }}
        />
        {/* pozo oscuro bajo el personaje: el retrato viene sobre negro puro y
            esto hace que su recuadro deje de existir visualmente */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 44% 92% at 50% 100%, #000 0%, rgba(0,0,0,0.93) 36%, rgba(0,0,0,0.66) 60%, rgba(0,0,0,0.26) 80%, transparent 96%)',
          }}
        />
      </div>

      {/* ── Capa 1 · nombre ──
          Se coloca arriba a propósito: así el retrato entra por debajo y sólo
          muerde el tercio inferior de las letras. Leemos por la parte alta de
          los caracteres, de modo que el nombre sigue completo. */}
      <div className="relative z-10 flex flex-1 items-start justify-center px-5 pt-[13svh] sm:px-8 sm:pt-[14svh] xl:pt-[16svh]">
        <h1 className="enter enter-1 w-full text-center">
          <span className="sr-only">Felipe Droguett</span>
          <span
            aria-hidden="true"
            className="hero-name display-metal block font-display font-extrabold uppercase leading-[0.86] tracking-[-0.04em] xl:leading-[0.84] xl:tracking-[-0.05em]"
          >
            <span className="block xl:inline">Felipe</span>
            <span className="hidden xl:inline">&nbsp;</span>
            <span className="block xl:inline">Droguett</span>
          </span>
        </h1>
      </div>

      {/* ── Capa 2 · personaje ──
          En pantallas grandes entra por el borde inferior. En móvil no cabe
          así —el contenido de abajo lo enterraría— de modo que se ancla arriba,
          solapando el nombre, y el torso se disuelve sobre el texto.

          El ancho en xl lleva un tercer término, `53svh`, y no es cosmético.
          El retrato se dimensionaba sólo contra el ANCHO del viewport mientras
          su posición y la del nombre dependían del ALTO: en 16:9 el alto que
          salía de ese ancho llegaba al 90% de la pantalla, el pelo subía hasta
          la banda del texto y "DRO" desaparecía —el hero se leía FELIPE GUETT
          a 1280, 1366 y 1536—. Con el tope por altura el retrato ocupa ~79% en
          cualquier relación de aspecto. A 1920 no cambia nada: ahí sigue
          mandando el tope de 545px. El solape se conserva: el pelo muerde la
          base de las letras, que es el efecto buscado. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[26svh] z-20 flex justify-center [perspective:1400px] xl:top-auto xl:bottom-0"
      >
        {/* La animación de entrada y el parallax viven en elementos distintos:
            una animación CSS con fill `both` sigue aplicando su transform al
            terminar y pisaría el que escribe el hook. */}
        <div className="enter enter-2">
          <div
            ref={targetRef}
            className="portrait-mask [backface-visibility:hidden] [transform-style:preserve-3d]"
          >
          <picture>
            <source srcSet="/assets/felipe-3d-sm.webp" media="(max-width: 640px)" />
            <img
              src="/assets/felipe-3d.webp"
              alt=""
              width="1100"
              height="1639"
              fetchpriority="high"
              decoding="async"
              className="block h-auto w-[74vw] sm:w-[52vw] lg:w-[44vw] xl:w-[min(34vw,545px,53svh)]"
            />
            </picture>
          </div>
        </div>
      </div>

      {/* ── Capa 3 · contenido funcional + raíl ──
          Van dentro de un mismo contenedor por una razón concreta: el velo que
          protege el copy se ancla a ESTE bloque, no al viewport.

          Antes el velo medía `52svh` desde el borde inferior de la sección. En
          pantallas altas eso cubría el texto por casualidad; en pantallas
          cortas la sección crece más que el viewport, el bloque de contenido
          sube y el velo se quedaba por debajo: a 320×568 el párrafo caía 185 px
          por encima del velo, directamente sobre la cara. Anclado al contenido
          la relación deja de depender de la altura de pantalla. */}
      <div className="relative z-30">
        <div aria-hidden="true" className="hero-veil pointer-events-none absolute inset-x-0 bottom-0 xl:hidden" />

        <div className="relative mx-auto w-full max-w-page px-5 pb-6 sm:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">

            <p className="enter enter-3 max-w-[26rem] text-sm text-ink-muted sm:text-base lg:max-w-[22rem]">
              Entré a grabar videos para un negocio. Tres años después sigo ahí:
              <span className="text-ink"> contenido, campañas, tienda online</span> y, desde julio,
              <span className="text-ink"> atención automatizada</span>.
            </p>

            <div className="enter enter-4 flex flex-wrap gap-3 lg:justify-end">
              <a
                href="#trabajo"
                className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-accent px-6 text-sm font-medium text-[#0B0D10] transition-colors duration-150 hover:bg-accent-ink"
              >
                Ver mi trabajo <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a
                href="#contacto"
                className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-strong px-6 text-sm font-medium text-ink transition-colors duration-150 hover:border-accent-line hover:text-accent-ink"
              >
                Hablemos
              </a>
            </div>
          </div>
        </div>

        {/* ── Raíl de evidencia ── */}
        <div className="relative border-t border-[color:var(--line)]">
          <dl className="enter enter-5 mx-auto grid max-w-page grid-cols-2 gap-x-6 gap-y-4 px-5 py-5 sm:px-8 lg:grid-cols-3">
            <div>
              <dt className="measure text-xs text-ink-faint">3 años</dt>
              <dd className="mt-0.5 text-sm text-ink">en el mismo negocio</dd>
            </div>
            <div>
              {/* Retorno combinado: ventas totales del evento ÷ gasto en Meta. No
                  es lo que la plataforma se atribuyó; el caso lo explica. */}
              <dt className="measure text-xs text-accent-ink">27:1</dt>
              <dd className="mt-0.5 text-sm text-ink">
                ventas por peso en publicidad<span className="text-ink-faint"> · CyberDay 2026</span>
              </dd>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <dt className="measure text-xs text-ink-faint">Full Stack Python · 462 h</dt>
              <dd className="mt-0.5 text-sm text-ink">
                <a href={EXTERNOS.diploma.href} {...EXTERNO_ATTRS} className="link">
                  diploma
                </a>
                <span className="text-ink-faint"> · </span>
                <a href={EXTERNOS.credencial.href} {...EXTERNO_ATTRS} className="link">
                  credencial verificable
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>

    </section>
  )
}
