import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'

const metrics = [
  { value: '$15M',   label: 'ventas/mes · peak e-commerce 2025' },
  { value: '2.900%', label: 'crecimiento en 18 meses' },
  { value: '27:1',   label: 'retorno sobre inversión publicitaria' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11 } },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">

      {/* Background layers */}
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-60" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-[700px] h-[700px] bg-cyan-500/[0.18] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-violet-600/[0.15] rounded-full blur-[110px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-400/[0.07] rounded-full blur-[100px]" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 w-full pt-24 pb-20 lg:py-0">
        <div className="grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_440px] gap-12 xl:gap-20 items-center">

          {/* ── Left column ── */}
          <motion.div variants={container} initial="hidden" animate="show">

            {/* Brand kicker */}
            <motion.p
              variants={item}
              className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan-400/80 mb-3"
            >
              Droguett Consulting SpA
            </motion.p>

            {/* Badge */}
            <motion.div variants={item} className="mb-5">
              <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-cyan-400/30 glass text-cyan-400 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse-slow" />
                10 años dentro de negocios reales
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={item}
              className="font-outfit font-bold text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl text-white leading-[1.08] mb-4"
            >
              Felipe Droguett<span className="text-cyan-400">.</span>
            </motion.h1>

            {/* Tagline */}
            <motion.h2
              variants={item}
              className="font-inter text-xl sm:text-2xl text-slate-400 leading-snug mb-5"
            >
              No aprendí negocios desde la tecnología.{' '}
              <span className="text-cyan-400 text-glow-cyan">Aprendí tecnología trabajando en negocios.</span>
            </motion.h2>

            {/* Lead */}
            <motion.div
              variants={item}
              className="text-slate-400 text-base sm:text-[1.05rem] leading-relaxed max-w-xl mb-8 space-y-3"
            >
              <p>Vendí, gestioné equipos, manejé proveedores y flujo de caja antes de escribir una línea de código. Cuando la tecnología me hizo falta, la aprendí — porque tenía un problema de negocio que resolver, no un stack que completar.</p>
              <p className="text-slate-300">Hoy entro a un negocio, entiendo cómo funciona como sistema, y construyo lo que necesita para crecer: estrategia, operación y tecnología.</p>
            </motion.div>

            {/* Impact metrics */}
            <motion.div variants={item} className="grid grid-cols-3 gap-3 mb-8">
              {metrics.map(m => (
                <div
                  key={m.value}
                  className="glass border border-white/10 hover:border-cyan-400/30 rounded-2xl p-3 sm:p-4 text-center transition-all duration-300 cursor-default group"
                >
                  <div className="font-outfit font-bold text-lg sm:text-xl text-white group-hover:text-cyan-400 transition-colors duration-300 mb-0.5">
                    {m.value}
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-500 leading-tight">{m.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/35 hover:-translate-y-0.5 cursor-pointer"
              >
                Hablemos de tu negocio <ArrowRight size={15} />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-white/15 hover:border-cyan-400/40 text-white text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                Ver el caso real
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right column — Proof card (desktop only) ── */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <div className="glass border border-cyan-400/20 rounded-2xl p-6 glow-cyan">
              {/* Header */}
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/8">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-400/80">Caso real</span>
                <span className="text-xs font-mono text-slate-500">Tokyo Tunning</span>
              </div>

              {/* Before → After */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-1">
                  <p className="text-slate-500 text-xs mb-1">Punto de partida</p>
                  <p className="text-slate-300 text-sm font-medium leading-snug">Dos puestos de feria, sin marca ni venta online</p>
                </div>
                <ArrowRight size={18} className="text-cyan-400 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-slate-500 text-xs mb-1">Resultado</p>
                  <p className="font-outfit font-bold text-cyan-400 text-glow-cyan text-xl leading-none">
                    $15M<span className="text-sm text-slate-400 font-inter font-normal">/mes</span>
                  </p>
                </div>
              </div>

              {/* ROAS highlight */}
              <div className="rounded-xl border border-cyan-400/15 bg-cyan-400/[0.04] p-4 mb-5">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp size={15} className="text-cyan-400" />
                  <span className="font-outfit font-bold text-white text-2xl leading-none">27:1</span>
                </div>
                <p className="text-slate-400 text-xs leading-snug">
                  Por cada peso invertido en publicidad, el sistema devolvió 27 — CyberDay 2026, tres días sin intervención.
                </p>
              </div>

              <p className="text-slate-500 text-xs leading-relaxed mb-4">
                E-commerce, catálogo, pagos y todo el sistema de ventas — diseñado y construido de cero.
              </p>

              <Link
                to="/caso-tokyo-tunning"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors duration-200 group/link cursor-pointer"
              >
                Ver el caso completo
                <ArrowUpRight size={14} className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] text-slate-700 font-mono tracking-[0.2em] uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-white/12 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-cyan-400/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
