import { ArrowRight } from 'lucide-react'

import useParallax from '../lib/useParallax'

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
  const portrait = useParallax({ max: 9 })

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden">

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
              'radial-gradient(ellipse 46% 62% at 50% 92%, #000 0%, rgba(0,0,0,0.92) 34%, rgba(0,0,0,0.62) 58%, rgba(0,0,0,0.24) 78%, transparent 94%)',
          }}
        />
      </div>

      {/* ── Capa 1 · nombre ──
          Se coloca arriba a propósito: así el retrato entra por debajo y sólo
          muerde el tercio inferior de las letras. Leemos por la parte alta de
          los caracteres, de modo que el nombre sigue completo. */}
      <div className="relative z-10 flex flex-1 items-start justify-center px-5 pt-[13svh] sm:px-8 sm:pt-[14svh] lg:pt-[23svh]">
        <h1 className="enter enter-1 w-full text-center">
          <span className="sr-only">Felipe Droguett</span>
          <span
            aria-hidden="true"
            className="display-metal block font-display font-extrabold uppercase leading-[0.86] tracking-[-0.04em] lg:leading-[0.84] lg:tracking-[-0.045em]"
            style={{ fontSize: 'clamp(2.9rem, 15vw, 8.6rem)' }}
          >
            <span className="block lg:inline">Felipe</span>
            <span className="hidden lg:inline">&nbsp;</span>
            <span className="block lg:inline">Droguett</span>
          </span>
        </h1>
      </div>

      {/* ── Capa 2 · personaje ──
          En pantallas grandes entra por el borde inferior. En móvil no cabe
          así —el contenido de abajo lo enterraría— de modo que se ancla arriba,
          solapando el nombre, y el torso se disuelve sobre el texto. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[26svh] z-20 flex justify-center lg:top-auto lg:bottom-0"
      >
        <div ref={portrait} className="enter enter-2 portrait-mask">
          <picture>
            <source srcSet="/assets/felipe-3d-sm.webp" media="(max-width: 640px)" />
            <img
              src="/assets/felipe-3d.webp"
              alt=""
              width="1100"
              height="1639"
              fetchpriority="high"
              decoding="async"
              className="block h-auto w-[74vw] sm:w-[52vw] lg:w-[clamp(300px,38vw,448px)]"
            />
          </picture>
        </div>
      </div>

      {/* Velo entre el retrato y el texto. En móvil el torso llega hasta donde
          va el párrafo y sin esto el texto compite con la cara. Va por encima
          del personaje y por debajo del contenido. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[25] h-[52svh] lg:hidden"
        style={{ background: 'linear-gradient(to top, var(--bg) 18%, rgba(11,13,16,0.94) 42%, rgba(11,13,16,0.55) 68%, transparent 100%)' }}
      />

      {/* ── Capa 3 · contenido funcional ── */}
      <div className="relative z-30 mx-auto w-full max-w-page px-5 pb-6 sm:px-8">
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
      <div className="relative z-30 border-t border-[color:var(--line)]">
        <dl className="enter enter-5 mx-auto grid max-w-page grid-cols-2 gap-x-6 gap-y-4 px-5 py-5 sm:px-8 lg:grid-cols-3">
          <div>
            <dt className="measure text-xs text-ink-faint">3 años</dt>
            <dd className="mt-0.5 text-sm text-ink">en el mismo negocio</dd>
          </div>
          <div>
            <dt className="measure text-xs text-accent-ink">27:1</dt>
            <dd className="mt-0.5 text-sm text-ink">
              retorno publicitario<span className="text-ink-faint"> · CyberDay 2026</span>
            </dd>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <dt className="measure text-xs text-ink-faint">Full Stack Python</dt>
            <dd className="mt-0.5 text-sm text-ink">
              <a
                href="https://www.acreditta.com/credential/8f73702b-0511-40f1-80b0-6224284c8eab"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                credencial verificable
              </a>
            </dd>
          </div>
        </dl>
      </div>

    </section>
  )
}
