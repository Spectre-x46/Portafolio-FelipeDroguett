import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Reveal from '../lib/Reveal'

/**
 * Capacidades.
 *
 * Superficie clara, a media página. Es el corte de ritmo del recorrido: rompe
 * la sucesión de negro sobre negro y hace que esta sección se recuerde aparte.
 *
 * Número grande a la izquierda, contenido a la derecha, reglas horizontales.
 * Nada de cuatro cajas iguales. Las herramientas quedan subordinadas a la
 * capacidad: primero el problema en lenguaje normal, después con qué se
 * resuelve, y sólo entonces el enlace a la evidencia.
 */
const capacidades = [
  {
    n: '01',
    problema: 'El negocio no tiene quien lo conozca',
    title: 'Traer clientes',
    text:
      'Contenido grabado y editado, campañas pagadas y la medición de lo que devuelven. Tokyo Tunning creció por videos en Instagram y TikTok antes de tener local físico o siquiera empresa formal.',
    tools: ['Meta Ads', 'Producción de contenido', 'Analítica', 'SEO local'],
    to: '/caso/tokyo-tunning#atraer',
    evidencia: 'Caso Tokyo Tunning · capítulo Atraer',
  },
  {
    n: '02',
    problema: 'Llegan visitas pero no compran',
    title: 'Construir la tienda',
    text:
      'Tienda online sobre WordPress y WooCommerce con plantillas propias en PHP, catálogo, pagos, y el trabajo menos visible: que cargue rápido, que se pueda usar con teclado y que se lea bien en un teléfono.',
    tools: ['WooCommerce', 'PHP', 'JavaScript', 'Tailwind', 'Core Web Vitals'],
    to: '/caso/tokyo-tunning#convertir',
    evidencia: 'Caso Tokyo Tunning · capítulo Convertir',
  },
  {
    n: '03',
    problema: 'Hay más consultas de las que alguien puede responder',
    title: 'Automatizar la atención',
    text:
      'Sistemas que conectan el CRM, el catálogo y un modelo de lenguaje para responder consultas comerciales — con la regla de que el modelo nunca inventa un precio ni un stock: los consulta.',
    tools: ['Node.js', 'n8n', 'OpenAI API', 'CRM / webhooks', 'APIs REST'],
    to: '/caso/agente-comercial#flujo',
    evidencia: 'Caso Agente comercial · cómo funciona',
  },
  {
    n: '04',
    problema: 'Funciona, pero no sé si puedo confiar en él',
    title: 'Probar que funciona',
    text:
      'Suites de pruebas, bancos de evaluación sellados antes de ver una sola respuesta, criterios de aprobación congelados antes de medir, y registro de por qué el sistema decidió lo que decidió. Es la parte que nadie ve y la que decide si algo puede salir a producción — o, como pasó en septiembre, que todavía no.',
    tools: ['Tests deterministas', 'Bancos sellados', 'Pre-registro', 'Trazabilidad'],
    to: '/caso/agente-comercial#evaluacion',
    evidencia: 'Caso Agente comercial · cómo sé que funciona',
  },
]

export default function Capabilities() {
  return (
    <section id="capacidades" className="on-light scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-page px-5 sm:px-8">

        <Reveal>
          <p className="eyebrow-light mb-8">03 — Capacidades</p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            className="max-w-[18ch] font-display font-extrabold leading-[0.92] tracking-[-0.035em]"
            style={{ fontSize: 'clamp(2.2rem, 7vw, 5rem)' }}
          >
            Cada una apareció resolviendo el problema que dejó la anterior.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="ink-2 mt-8 max-w-prose text-lg">
            No es una lista de disciplinas. Es el orden en que fueron haciendo falta.
          </p>
        </Reveal>

        <div className="mt-16 sm:mt-24">
          {capacidades.map((c, i) => (
            <Reveal key={c.n} delay={Math.min(i * 0.05, 0.2)}>
              <div className="grid gap-5 border-t border-[rgba(11,13,16,0.16)] py-10 sm:py-14 md:grid-cols-[minmax(0,7rem)_minmax(0,1fr)] md:gap-12">
                <p
                  className="ink-deco measure font-display font-extrabold leading-none"
                  style={{ fontSize: 'clamp(2.6rem, 7vw, 5.5rem)' }}
                  aria-hidden="true"
                >
                  {c.n}
                </p>

                <div>
                  <p className="ink-3 measure text-xs">{c.problema}</p>
                  <h3
                    className="mt-3 font-display font-bold uppercase leading-none tracking-[-0.02em]"
                    style={{ fontSize: 'clamp(1.5rem, 3.4vw, 2.5rem)' }}
                  >
                    {c.title}
                  </h3>
                  <p className="ink-2 mt-5 max-w-prose text-base">{c.text}</p>

                  <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                    {c.tools.map(t => (
                      <span key={t} className="ink-3 measure text-xs">{t}</span>
                    ))}
                  </div>

                  <Link
                    to={c.to}
                    className="link-light mt-7 inline-flex min-h-[44px] items-center gap-2 text-sm"
                  >
                    {c.evidencia}
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-[rgba(11,13,16,0.16)]" />
        </div>

        <Reveal delay={0.1}>
          <p className="ink-3 mt-10 max-w-prose text-sm">
            También grabo y edito. Uso DaVinci Resolve y Photoshop a diario, pero son herramientas
            de la primera capacidad, no una competencia aparte.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
