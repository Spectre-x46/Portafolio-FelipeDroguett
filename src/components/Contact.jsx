import { motion } from 'framer-motion'
import { Mail, MessageSquare, Linkedin } from 'lucide-react'

const channels = [
  {
    Icon: Mail,
    label: 'Email',
    value: 'felipedroguett18@gmail.com',
    href: 'mailto:felipedroguett18@gmail.com',
    description: 'Respondo en menos de 24 horas',
  },
  {
    Icon: MessageSquare,
    label: 'WhatsApp',
    value: '+56 9 7621 4891',
    href: 'https://wa.me/56976214891',
    description: 'Para consultas rápidas',
  },
  {
    Icon: Linkedin,
    label: 'LinkedIn',
    value: 'Conectar en LinkedIn',
    href: 'https://www.linkedin.com/in/fdroguetto/',
    description: 'Perfil profesional y experiencia',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="pt-20 pb-16 relative bg-slate-900/30 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-5 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <h2 className="font-outfit font-bold text-3xl sm:text-4xl text-white mb-3">Hablemos del problema.</h2>
          <p className="text-slate-400 max-w-md mx-auto">
            Cuéntame qué está pasando en tu negocio. La solución la definimos cuando tengamos el diagnóstico.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4">
          {channels.map(({ Icon, label, value, href, description }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <a
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center p-6 rounded-2xl glass border border-white/[0.13] hover:border-cyan-400/40 hover:glow-cyan-sm transition-all duration-300 group cursor-pointer h-full bg-gradient-to-b from-white/[0.02] to-transparent"
              >
                <div className="w-12 h-12 rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] group-hover:border-cyan-400/50 group-hover:bg-cyan-400/[0.1] flex items-center justify-center text-cyan-400/70 group-hover:text-cyan-400 mb-4 transition-all duration-300">
                  <Icon size={22} />
                </div>
                <span className="font-outfit font-bold text-white text-base mb-1">{label}</span>
                <span className="text-cyan-400 text-sm font-medium mb-1.5">{value}</span>
                <span className="text-slate-500 text-xs">{description}</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
