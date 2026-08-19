import { motion } from 'framer-motion'
import { Users, Lightbulb, Network } from 'lucide-react'

const pillars = [
  {
    Icon: Users,
    title: 'Adentro, no afuera',
    sub: 'Operé antes de digitalizar',
    text: 'Gestioné equipos, logística, proveedores y flujo de caja con consecuencias reales — la plata era de verdad y los problemas también. Por eso no miro un negocio desde afuera: sé lo que se siente ser el responsable de que algo funcione un sábado a las 11 de la noche.',
  },
  {
    Icon: Lightbulb,
    title: 'El problema primero, la herramienta después',
    sub: 'Autodidacta desde siempre',
    text: 'Desarmo cosas para entender cómo funcionan desde que era niño. Cada habilidad técnica que tengo la aprendí porque un problema de negocio me obligó — no para completar un stack ni para sumar una certificación. Si el problema exige algo que aún no domino, lo aprendo rápido. Esa es la ventaja, no el stack.',
  },
  {
    Icon: Network,
    title: 'Veo los sistemas — y dónde se rompen',
    sub: 'Mentalidad de seguridad aplicada al negocio',
    text: 'Un negocio es un sistema: procesos, personas, dinero y tecnología conectados. Mi formación en seguridad y hardening de sistemas me entrenó para mirar cualquier operación y detectar el cuello de botella, la fuga de margen o la palanca de crecimiento antes de construir nada. La solución llega después del diagnóstico.',
  },
]

export default function About() {
  return (
    <section id="about" className="pt-20 pb-16 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <h2 className="font-outfit font-bold text-3xl sm:text-4xl text-white mb-3">No vendo una herramienta. Vendo criterio.</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            La tecnología aprendida desde el problema —y no al revés— resuelve distinto.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {pillars.map(({ Icon, title, sub, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div className="h-full glass border border-white/[0.13] hover:border-cyan-400/30 rounded-2xl p-6 transition-all duration-300 group cursor-default bg-gradient-to-b from-white/[0.02] to-transparent">
                <div className="w-11 h-11 rounded-xl border border-cyan-400/20 group-hover:border-cyan-400/50 bg-cyan-400/[0.06] group-hover:bg-cyan-400/[0.1] flex items-center justify-center text-cyan-400/70 group-hover:text-cyan-400 mb-5 transition-all duration-300">
                  <Icon size={20} />
                </div>
                <h3 className="font-outfit font-bold text-white text-[15px] leading-snug mb-1">{title}</h3>
                <p className="text-cyan-400 text-xs font-medium mb-4">{sub}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
