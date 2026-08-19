import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Reveal from '../lib/Reveal'
import { Section, Tag } from '../lib/ui'

/**
 * Capacidades.
 *
 * Sustituye a la antigua sección "Stack & Habilidades", que era una nube de
 * chips: omitía todo lo que uso a diario (Node, n8n, LLM, APIs, CRM, tests) y
 * en cambio destacaba Bootstrap 5 y DaVinci Resolve al mismo nivel que PHP.
 *
 * Regla que se aplica aquí: ninguna capacidad aparece sin una evidencia que se
 * pueda abrir. Si no hay evidencia enlazable, la capacidad no se declara.
 */
const capacidades = [
  {
    problema: 'El negocio no tiene quien lo conozca',
    title: 'Traer clientes',
    text:
      'Contenido grabado y editado, campañas pagadas y la medición de lo que devuelven. Tokyo Tunning creció por videos en Instagram y TikTok antes de tener local físico o siquiera empresa formal.',
    tools: ['Meta Ads', 'Producción de contenido', 'Analítica', 'SEO local'],
    to: '/caso/tokyo-tunning#atraer',
    evidencia: 'Caso Tokyo Tunning · capítulo Atraer',
  },
  {
    problema: 'Llegan visitas pero no compran',
    title: 'Construir la tienda',
    text:
      'Tienda online sobre WordPress y WooCommerce con plantillas propias en PHP, catálogo, pagos, y el trabajo menos visible: que cargue rápido, que se pueda usar con teclado y que se lea bien en un teléfono.',
    tools: ['WooCommerce', 'PHP', 'JavaScript', 'Tailwind', 'Core Web Vitals'],
    to: '/caso/tokyo-tunning#convertir',
    evidencia: 'Caso Tokyo Tunning · capítulo Convertir',
  },
  {
    problema: 'Hay más consultas de las que alguien puede responder',
    title: 'Automatizar la atención',
    text:
      'Sistemas que conectan el CRM, el catálogo y un modelo de lenguaje para responder consultas comerciales — con la regla de que el modelo nunca inventa un precio ni un stock: los consulta.',
    tools: ['Node.js', 'n8n', 'OpenAI API', 'CRM / webhooks', 'APIs REST'],
    to: '/caso/agente-comercial#flujo',
    evidencia: 'Caso Agente comercial · cómo funciona',
  },
  {
    problema: 'Funciona, pero no sé si puedo confiar en él',
    title: 'Probar que funciona',
    text:
      'Suites de pruebas, conjuntos de evaluación construidos sobre conversaciones reales anonimizadas, y registro de por qué el sistema decidió lo que decidió. Es la parte que nadie ve y la que decide si algo puede salir a producción.',
    tools: ['Tests deterministas', 'Datasets de evaluación', 'Trazabilidad', 'Observabilidad'],
    to: '/caso/agente-comercial#evaluacion',
    evidencia: 'Caso Agente comercial · cómo sé que funciona',
  },
]

export default function Capabilities() {
  return (
    <Section
      id="capacidades"
      n="03 — Capacidades"
      title="Cada una apareció resolviendo el problema que dejó la anterior."
      lead="No es una lista de disciplinas. Es el orden en que fueron haciendo falta."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {capacidades.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.06}>
            <article className="surface flex h-full flex-col rounded-lg p-6 transition-colors duration-200 hover:border-[color:var(--accent-line)]">
              <p className="measure text-xs text-ink-faint">{c.problema}</p>
              <h3 className="mt-3 font-display text-lg font-semibold text-ink">{c.title}</h3>
              <p className="mt-3 flex-1 text-base text-ink-muted">{c.text}</p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {c.tools.map(t => <Tag key={t}>{t}</Tag>)}
              </div>

              <Link
                to={c.to}
                className="mt-5 inline-flex min-h-[44px] items-center gap-2 text-sm text-accent-ink underline decoration-[color:var(--accent-line)] underline-offset-4 transition-colors hover:decoration-[color:var(--accent)]"
              >
                {c.evidencia}
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <p className="mt-8 max-w-prose text-sm text-ink-faint">
          También grabo y edito. Uso DaVinci Resolve y Photoshop a diario, pero son herramientas de
          la primera capacidad, no una competencia aparte.
        </p>
      </Reveal>
    </Section>
  )
}
