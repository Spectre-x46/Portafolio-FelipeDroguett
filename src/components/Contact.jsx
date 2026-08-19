import { Mail, MessageSquare, Linkedin, Github, ArrowUpRight } from 'lucide-react'
import { EXTERNOS, EXTERNO_ATTRS } from '../lib/links'
import Reveal from '../lib/Reveal'

/**
 * Contacto.
 *
 * Cierre de mayor escala, pero el texto es el mismo: es humano y concreto, y
 * cambiarlo por un «LET'S WORK TOGETHER» sería perder lo único que lo hace
 * suyo.
 */
const canales = [
  { Icon: Mail, label: 'Correo', value: 'felipedroguett18@gmail.com', href: 'mailto:felipedroguett18@gmail.com', note: 'Lo reviso todos los días' },
  { Icon: MessageSquare, label: 'WhatsApp', value: '+56 9 7621 4891', href: 'https://wa.me/56976214891', note: 'Para algo corto' },
  { Icon: Linkedin, label: EXTERNOS.linkedin.label, value: EXTERNOS.linkedin.handle, href: EXTERNOS.linkedin.href, note: EXTERNOS.linkedin.nota },
  { Icon: Github,   label: EXTERNOS.github.label,   value: EXTERNOS.github.handle,   href: EXTERNOS.github.href,   note: EXTERNOS.github.nota },
]

export default function Contact() {
  return (
    <section id="contacto" className="relative scroll-mt-20 overflow-hidden bg-sunken py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2"
        style={{ background: 'radial-gradient(60% 100% at 50% 100%, rgba(232,163,61,0.10) 0%, transparent 70%)' }}
      />

      <div className="relative mx-auto max-w-page px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow mb-8">05 — Contacto</p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            className="max-w-[15ch] font-display font-extrabold leading-[0.9] tracking-[-0.035em] text-ink"
            style={{ fontSize: 'clamp(2.4rem, 8.5vw, 6rem)' }}
          >
            Cuéntame qué está pasando en tu negocio.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-prose text-lg text-ink-muted">
            Prefiero entender el problema antes de proponer nada. Si resulta que no soy la persona
            adecuada, te lo digo.
          </p>
        </Reveal>

        <div className="mt-14 sm:mt-20">
          {canales.map(({ Icon, label, value, href, note }, i) => (
            <Reveal key={label} delay={i * 0.06}>
              <a
                href={href}
                {...(href.startsWith('mailto') ? {} : EXTERNO_ATTRS)}
                className="group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-x-5 gap-y-1 border-t border-[color:var(--line)] py-6 transition-colors duration-200 hover:bg-[color:var(--bg-raised)] sm:gap-x-8 sm:py-8"
              >
                <Icon size={18} className="text-ink-faint transition-colors group-hover:text-accent-ink" aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block font-display text-lg font-semibold text-ink">{label}</span>
                  <span className="measure mt-1 block break-all text-sm text-accent-ink">{value}</span>
                  <span className="mt-0.5 block text-xs text-ink-faint">{note}</span>
                </span>
                <ArrowUpRight
                  size={20}
                  className="text-ink-faint transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-ink"
                  aria-hidden="true"
                />
              </a>
            </Reveal>
          ))}
          <div className="border-t border-[color:var(--line)]" />
        </div>
      </div>
    </section>
  )
}
