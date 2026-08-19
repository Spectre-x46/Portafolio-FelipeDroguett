import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import { Link } from 'react-router-dom'

const TagChip = ({ text, primary }) => (
  <span className={`px-2.5 py-1 rounded-md text-[11px] font-medium cursor-default ${
    primary
      ? 'glass border border-cyan-400/35 text-cyan-400'
      : 'glass border border-white/10 text-slate-500'
  }`}>
    {text}
  </span>
)

const Badge = ({ text }) => (
  <span className="px-2 py-0.5 rounded-full glass border border-cyan-400/30 text-cyan-400 text-[10px] font-medium">
    {text}
  </span>
)

export default function Projects() {
  return (
    <section id="projects" className="pt-20 pb-16 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <h2 className="font-outfit font-bold text-3xl sm:text-4xl text-white mb-3">Proyectos Destacados</h2>
          <p className="text-slate-400">Trabajo real, resultados medibles.</p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_340px] gap-5">

          {/* ── Featured: Tokyo Tunning ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            <div className="h-full glass border border-cyan-400/20 hover:border-cyan-400/40 rounded-2xl overflow-hidden transition-all duration-300 group glow-cyan">
              {/* Screenshot */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src="/assets/proyecto-tokyo.jpg"
                  alt="Tokyo Tunning — E-commerce automotriz en producción"
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                {/* Badges over image */}
                <div className="absolute bottom-3 left-4 flex flex-wrap gap-2">
                  <Badge text="En producción" />
                  <Badge text="WCAG 100/100" />
                  <Badge text="LCP 300ms" />
                </div>
                {/* External link */}
                <a
                  href="https://tokyotunning.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 w-8 h-8 rounded-full glass border border-white/20 flex items-center justify-center text-white hover:text-cyan-400 hover:border-cyan-400/40 transition-all duration-200 cursor-pointer"
                  aria-label="Ver Tokyo Tunning"
                >
                  <ArrowUpRight size={15} />
                </a>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-outfit font-bold text-white text-lg mb-0.5">Tokyo Tunning</h3>
                <p className="text-cyan-400 text-xs font-medium mb-3">E-commerce automotriz · $500K → $15M/mes en 18 meses</p>
                <div className="text-slate-400 text-sm leading-relaxed mb-4 space-y-2">
                  <p>Dos puestos de feria con toldos llenos de accesorios automotrices. Sin nombre de marca, sin presencia digital, sin sistema para vender fuera del persa. Creé el nombre, las redes sociales y la estrategia de contenido. El negocio creció a través de videos en Instagram y TikTok, consultas por WhatsApp y envíos a todo Chile — antes de que hubiera un local físico o una empresa formal.</p>
                  <p>Cuando volví en 2026, reconstruí la infraestructura técnica completa desde cero: el sitio, el catálogo, los pagos, el pixel de Meta, los CTAs, todo el sistema de ventas online que el negocio necesitaba para operar a la escala que ya había alcanzado.</p>
                  <p>El primer test real fue el CyberDay 2026. Tres días sin errores ni intervención. Por cada peso invertido en publicidad, el sistema devolvió 27. El análisis post-evento mostró que dejamos pasar cerca de $800.000 en ventas porque las consultas no fueron respondidas a tiempo. La tecnología funcionó. El siguiente problema no era técnico.</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-5">
                  {['PHP', 'WooCommerce', 'JavaScript', 'Tailwind'].map(t => <TagChip key={t} text={t} primary />)}
                  {['SEO técnico', 'Meta Ads'].map(t => <TagChip key={t} text={t} />)}
                </div>
                <Link
                  to="/caso-tokyo-tunning"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-xs font-medium transition-colors duration-200 group/link cursor-pointer"
                >
                  Ver caso de estudio completo
                  <ArrowUpRight size={13} className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* ── Side column ── */}
          <div className="flex flex-col gap-5">

            {/* Portfolio */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div className="glass border border-white/[0.13] hover:border-cyan-400/30 rounded-2xl overflow-hidden transition-all duration-300 group">
                <div className="relative h-36 overflow-hidden">
                  <img
                    src="/assets/proyecto-portfolio.jpg"
                    alt="Portafolio personal Felipe Droguett"
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent" />
                  <a
                    href="https://felipe-droguett.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-2 right-2 w-7 h-7 rounded-full glass border border-white/20 flex items-center justify-center text-white hover:text-cyan-400 transition-all duration-200 cursor-pointer"
                    aria-label="Ver portafolio"
                  >
                    <ArrowUpRight size={13} />
                  </a>
                </div>
                <div className="p-4">
                  <h3 className="font-outfit font-bold text-white text-sm mb-1">Este Portafolio</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-3">
                    React + Vite + Tailwind + Framer Motion. Schema.org, Open Graph, 0 errores de consola, Netlify.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {['React', 'Tailwind', 'Vite', 'Netlify'].map(t => <TagChip key={t} text={t} primary />)}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* GitHub */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <div className="glass border border-white/[0.13] hover:border-cyan-400/30 rounded-2xl p-4 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl glass border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-cyan-400 transition-colors">
                      <Github size={18} />
                    </div>
                    <div>
                      <h3 className="font-outfit font-bold text-white text-sm leading-none mb-0.5">GitHub — Spectre-x46</h3>
                      <p className="text-slate-500 text-[11px]">github.com/Spectre-x46</p>
                    </div>
                  </div>
                  <a
                    href="https://github.com/Spectre-x46/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded-full glass border border-white/15 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/40 transition-all duration-200 cursor-pointer"
                    aria-label="Ver GitHub"
                  >
                    <ArrowUpRight size={13} />
                  </a>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed mb-3">
                  Scripts Python, ejercicios Full Stack, herramientas de automatización y experimentos de Linux hardening. Repositorios en desarrollo activo.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {['Python', 'Linux', 'Bash'].map(t => <TagChip key={t} text={t} />)}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
