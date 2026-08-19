import { Mail, MessageSquare, Linkedin } from 'lucide-react'
import Reveal from '../lib/Reveal'
import { Section } from '../lib/ui'

const canales = [
  {
    Icon: Mail,
    label: 'Correo',
    value: 'felipedroguett18@gmail.com',
    href: 'mailto:felipedroguett18@gmail.com',
    note: 'Lo reviso todos los días',
  },
  {
    Icon: MessageSquare,
    label: 'WhatsApp',
    value: '+56 9 7621 4891',
    href: 'https://wa.me/56976214891',
    note: 'Para algo corto',
  },
  {
    Icon: Linkedin,
    label: 'LinkedIn',
    value: '/in/fdroguetto',
    href: 'https://www.linkedin.com/in/fdroguetto/',
    note: 'Trayectoria y formación',
  },
]

export default function Contact() {
  return (
    <Section
      id="contacto"
      className="bg-[color:var(--bg-sunken)]"
      n="05 — Contacto"
      title="Cuéntame qué está pasando en tu negocio."
      lead="Prefiero entender el problema antes de proponer nada. Si resulta que no soy la persona adecuada, te lo digo."
    >
      <div className="grid gap-px overflow-hidden rounded-lg border border-[color:var(--line)] bg-[color:var(--line)] sm:grid-cols-3">
        {canales.map(({ Icon, label, value, href, note }, i) => (
          <Reveal key={label} delay={i * 0.06}>
            <a
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="flex h-full min-h-[44px] flex-col bg-raised p-6 transition-colors duration-200 hover:bg-[color:var(--bg-sunken)]"
            >
              <Icon size={18} className="text-accent-ink" aria-hidden="true" />
              <span className="mt-4 text-sm font-medium text-ink">{label}</span>
              <span className="measure mt-1 break-all text-sm text-accent-ink">{value}</span>
              <span className="mt-1 text-xs text-ink-faint">{note}</span>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
