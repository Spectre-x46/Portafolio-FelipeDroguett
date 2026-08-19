import Reveal from '../lib/Reveal'
import { Section } from '../lib/ui'

/**
 * Criterio.
 *
 * El copy de esta sección era lo mejor del sitio anterior — concreto, en
 * primera persona, imposible de copiar a otro portfolio. Se conserva la voz;
 * sólo se corrigió el pilar de seguridad, que presentaba la formación en
 * hardening como si hubiera causado el trabajo de fiabilidad. Es al revés:
 * era un interés previo que después resultó útil.
 */
const pilares = [
  {
    n: '01',
    title: 'Adentro, no afuera',
    text:
      'Gestioné equipos, logística, proveedores y flujo de caja con consecuencias reales — la plata era de verdad y los problemas también. Por eso no miro un negocio desde afuera: sé lo que se siente ser el responsable de que algo funcione un sábado a las 11 de la noche.',
  },
  {
    n: '02',
    title: 'El problema primero, la herramienta después',
    text:
      'Cada habilidad técnica que tengo la aprendí porque un problema de negocio me obligó — no para completar un stack ni para sumar una certificación. Cuando el problema exige algo que aún no domino, lo aprendo. Esa es la ventaja, no el stack.',
  },
  {
    n: '03',
    title: 'Prefiero medir a suponer',
    text:
      'Cuando digo que algo mejoró, quiero poder mostrar contra qué lo comparé y cuándo lo medí. Me ha pasado más de una vez que el número que daba por bueno no aguantaba una segunda mirada, y prefiero descubrirlo yo antes que el cliente.',
  },
]

export default function About() {
  return (
    <Section
      id="criterio"
      className="bg-[color:var(--bg-sunken)]"
      n="02 — Criterio"
      title="No vendo una herramienta. Vendo criterio."
      lead="La tecnología aprendida desde el problema —y no al revés— resuelve distinto."
    >
      <div className="grid gap-px overflow-hidden rounded-lg border border-[color:var(--line)] bg-[color:var(--line)] md:grid-cols-3">
        {pilares.map((p, i) => (
          <Reveal key={p.n} delay={i * 0.07}>
            <div className="h-full bg-raised p-6 sm:p-7">
              <p className="measure mb-4 text-xs text-accent-ink">{p.n}</p>
              <h3 className="font-display text-lg font-semibold leading-snug text-ink">{p.title}</h3>
              <p className="mt-3 text-base text-ink-muted">{p.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
