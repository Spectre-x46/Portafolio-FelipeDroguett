import Reveal from '../lib/Reveal'

/**
 * Criterio.
 *
 * Era una fila de tres tarjetas idénticas, que hacía que la mejor frase del
 * sitio pareciera documentación. Ahora es editorial: la frase a escala de
 * manifiesto y los tres principios como entradas con regla, no como cajas.
 *
 * El texto no se tocó: estaba aprobado.
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
    <section id="criterio" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-page px-5 sm:px-8">

        <Reveal>
          <p className="eyebrow mb-8">02 — Criterio</p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            className="max-w-[16ch] font-display font-extrabold leading-[0.92] tracking-[-0.035em] text-ink"
            style={{ fontSize: 'clamp(2.2rem, 7vw, 5rem)' }}
          >
            No vendo una herramienta.{' '}
            <span className="text-accent-ink">Vendo criterio.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-prose text-lg text-ink-muted">
            La tecnología aprendida desde el problema —y no al revés— resuelve distinto.
          </p>
        </Reveal>

        <div className="mt-16 sm:mt-24">
          {pilares.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.06}>
              <div className="grid gap-4 border-t border-[color:var(--line)] py-9 sm:py-12 md:grid-cols-[5rem_minmax(0,22rem)_minmax(0,1fr)] md:gap-10">
                <p
                  className="measure font-display font-extrabold leading-none text-[color:var(--ink-deco)]"
                  style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}
                  aria-hidden="true"
                >
                  {p.n}
                </p>
                <h3
                  className="font-display font-semibold leading-tight text-ink"
                  style={{ fontSize: 'clamp(1.15rem, 2vw, 1.6rem)' }}
                >
                  {p.title}
                </h3>
                <p className="max-w-prose text-base text-ink-muted">{p.text}</p>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-[color:var(--line)]" />
        </div>
      </div>
    </section>
  )
}
