import { motion } from 'framer-motion'
import { Lightbulb, Code } from 'lucide-react'

const Chip = ({ text, primary }) => (
  <span className={primary ? 'chip-cyan' : 'chip-muted'}>{text}</span>
)

const groups = [
  {
    Icon: Lightbulb,
    title: 'Estrategia Digital & Contenido',
    primary: ['E-commerce Strategy', 'Meta Ads (ROI Focus)', 'Producción de Contenido', 'SEO / SEM Local'],
    secondary: ['WordPress / WooCommerce', 'Google Analytics 4', 'DaVinci Resolve'],
    secondaryLabel: 'Herramientas',
  },
  {
    Icon: Code,
    title: 'Desarrollo Web & Código',
    primary: ['HTML5 / CSS3', 'JavaScript ES6+', 'PHP', 'Bootstrap 5 / Tailwind', 'Git / GitHub'],
    secondary: ['Python', 'Django Framework', 'SQL / Bases de datos'],
    secondaryLabel: 'Scripts & automatización',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="pt-20 pb-16 relative bg-slate-900/30 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <h2 className="font-outfit font-bold text-3xl sm:text-4xl text-white mb-3">Stack & Habilidades</h2>
          <p className="text-slate-400">Herramientas aprendidas para resolver problemas reales.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {groups.map(({ Icon, title, primary, secondary, secondaryLabel }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="h-full glass border border-white/[0.13] hover:border-cyan-400/25 rounded-2xl p-6 transition-all duration-300 bg-gradient-to-b from-white/[0.02] to-transparent">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg border border-cyan-400/25 bg-cyan-400/[0.07] flex items-center justify-center text-cyan-400 flex-shrink-0">
                    <Icon size={17} />
                  </div>
                  <h3 className="font-outfit font-bold text-white text-sm leading-snug">{title}</h3>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {primary.map(t => <Chip key={t} text={t} primary />)}
                </div>

                {secondary.length > 0 && (
                  <>
                    <p className="text-[11px] text-slate-500 font-medium uppercase tracking-wider mb-2">{secondaryLabel}</p>
                    <div className="flex flex-wrap gap-2">
                      {secondary.map(t => <Chip key={t} text={t} />)}
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
