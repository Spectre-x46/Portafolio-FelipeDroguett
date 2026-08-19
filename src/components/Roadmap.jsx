import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Code, Car, Rocket, BarChart2, Truck, Droplets, Users,
  ChevronDown, ChevronUp, MapPin, BookOpen
} from 'lucide-react'

const timeline = [
  {
    id: 1,
    period: 'Feb 2026 — Actualidad',
    tag: 'ACTUALIDAD',
    Icon: Code,
    title: 'Desarrollador Web & Consultor Digital',
    sub: 'Proyectos en Producción + Full Stack Python',
    body: 'Desarrollo y mantención de TokyoTunning.cl — WordPress + WooCommerce + PHP custom. Templates modulares, carrito AJAX, dark mode automotriz, WCAG 100/100, Core Web Vitals verdes. Examen final Full Stack Python (Desafío Latam / Talento Digital) aprobado Mayo 2026. Certificación oficial: Agosto 2026.',
    highlighted: true,
    optional: false,
  },
  {
    id: 2,
    period: 'Mayo 2025 — Nov 2025',
    tag: 'PHANTOM CUSTOMS',
    Icon: Car,
    title: 'Co-Fundador & Jefe de Operaciones',
    sub: 'Taller de Estética Automotriz (Wrapping / Detailing)',
    body: 'Lideré la operación completa y estrategia comercial. Meta Ads multicanal y automatización de contenido multimedia. Capital agotado en 4 meses por posicionamiento físico sin accesibilidad adecuada. Cerré cuando la viabilidad se agotó y retomé el proyecto que sí generaba resultados en menos de 90 días.',
    note: 'Aprendizaje: Validar accesibilidad y flujo de clientes de un local antes de invertir en posicionamiento físico.',
    optional: true,
  },
  {
    id: 3,
    period: 'Mar 2023 — Abr 2025',
    tag: 'TOKYO TUNNING',
    Icon: Rocket,
    title: 'Lead de Digitalización & Crecimiento',
    sub: '$500K → $15M/mes · Escalamiento 2,900% en 18 meses',
    body: 'Diseñé, propuse y ejecuté la transición de un puesto de feria a e-commerce completo. Full Stack sobre WordPress + WooCommerce con PHP custom: templates modulares, carrito AJAX con patrón pub/sub, dark mode automotriz, 364 productos con Webpay Plus. Growth: 25% ventas online + 100% del tráfico a tienda. Auditoría formal de 9 fases con 30+ hallazgos y 4 ADRs.',
    note: 'Resultado: Core Web Vitals verdes, WCAG 100/100, LCP 300ms.',
    optional: false,
  },
  {
    id: 4,
    period: 'Sep 2021 — Actualidad',
    tag: 'CONSULTORÍA DIGITAL',
    Icon: BarChart2,
    title: 'Consultor Web & Marketing de Performance',
    sub: 'Estrategia Digital Independiente · Freelance',
    body: 'Landing pages de alta conversión (WordPress + Elementor). Meta Ads con inversiones de hasta $500K mensuales con estrategias de segmentación avanzada. Producción audiovisual y diseño gráfico (DaVinci Resolve, Photoshop). Detección de brechas de mercado mediante análisis constante de métricas publicitarias.',
    optional: false,
  },
  {
    id: 5,
    period: 'Jun 2021 — Sep 2021',
    tag: 'STARKEN',
    Icon: Truck,
    title: 'Conductor Operativo · Operaciones de Última Milla',
    sub: '+90 entregas diarias · Cumplimiento SLA 100%',
    body: 'Rutas en Santiago (5:00 AM — 20:00 hrs). Puente financiero tras el cierre de Moana Kai. Disciplina operativa bajo presión real.',
    optional: true,
  },
  {
    id: 6,
    period: 'Jul 2019 — May 2021',
    tag: 'MOANA KAI',
    Icon: Droplets,
    title: 'Director de Operaciones & Fundador',
    sub: 'Agua Purificada · Primer Emprendimiento Real',
    body: 'Primera experiencia gestionando un modelo de negocio completo: producción, distribución y logística de última milla. Captación 100% digital vía Facebook Marketplace y Meta Ads. Cartera de 80–120 clientes mensuales recurrentes.',
    note: 'Cierre (Mayo 2021): Accidente destruyó vehículo y mercadería. Primera inmersión real en unit economics y resiliencia ante crisis operativas.',
    optional: true,
  },
  {
    id: 7,
    period: '2014 — 2018',
    tag: 'RETAIL & FUNDAMENTOS',
    Icon: Users,
    title: 'Fundamentos de Liderazgo en Retail de Alto Volumen',
    sub: 'La Polar (2017–2018) · Falabella (2014–2016)',
    body: 'La Polar: Jefe de Tienda Part-Time, responsable operativo de 100+ personas en turnos peak — KPIs de ventas, merma y rotación. Falabella: Asesor Comercial → Encargado de Zona, lideré 7 personas con +15% sobre meta mensual. Habilidades transferibles: autonomía, trabajo bajo métricas reales y adaptabilidad ante cambios de rubro.',
    optional: true,
  },
]

const education = [
  { label: 'Full Stack Python', place: 'Talento Digital — Desafío Latam', date: 'Nov 2024 — Ago 2026', highlight: true },
  { label: 'Linux & System Hardening', place: 'Hack4u Academy', date: '2024', highlight: true },
  { label: 'Digitalización de Negocio', place: 'Google', date: 'Sep 2022' },
  { label: 'Community Manager Estratégico', place: 'Academia Metrics', date: '2021' },
  { label: 'Anuncios Ganadores (Meta Ads)', place: 'Haciéndola', date: '2020' },
  { label: 'Téc. Administración de Empresas — Marketing', place: 'DuocUC San Bernardo', date: '2018–2020' },
]

export default function Roadmap() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section id="roadmap" className="pt-20 pb-20 relative">
      {/* Subtle top bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950 pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-5 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <h2 className="font-outfit font-bold text-3xl sm:text-4xl text-white mb-3">Mi Evolución Profesional</h2>
          <p className="text-slate-400">Cada etapa exigió herramientas nuevas. El punto de partida siempre fue el negocio.</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-2 bottom-8 w-px bg-gradient-to-b from-cyan-400/50 via-slate-700/40 to-transparent" />

          <div className="space-y-5">
            {timeline.map((item, i) => {
              const hidden = item.optional && !expanded
              return (
                <div key={item.id} className={hidden ? 'hidden md:block' : ''}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: Math.min(i * 0.06, 0.3) }}
                    className="pl-14 relative"
                  >
                    {/* Dot */}
                    <div className={`absolute left-0 top-3.5 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      item.highlighted
                        ? 'glass border border-cyan-400/60 text-cyan-400 glow-cyan-sm'
                        : 'glass border border-white/12 text-slate-500'
                    }`}>
                      <item.Icon size={16} />
                    </div>

                    {/* Card */}
                    <div className={`p-5 rounded-2xl border transition-all duration-300 cursor-default ${
                      item.highlighted
                        ? 'glass border-cyan-400/35 glow-cyan'
                        : 'glass border-white/10 hover:border-cyan-400/20'
                    }`}>
                      <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-1 mb-2">
                        <div className="flex flex-wrap items-center gap-2">
                          {item.highlighted && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-400 text-[10px] font-semibold uppercase tracking-wider">
                              <MapPin size={8} /> Actualidad
                            </span>
                          )}
                          <span className="text-[10px] text-cyan-400/70 font-semibold uppercase tracking-wider">{item.tag}</span>
                        </div>
                        <span className="font-mono text-[11px] text-slate-500 flex-shrink-0">{item.period}</span>
                      </div>

                      <h3 className="font-outfit font-bold text-white text-[15px] leading-snug mb-0.5">{item.title}</h3>
                      <p className="text-cyan-400 text-xs font-medium mb-3">{item.sub}</p>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.body}</p>

                      {item.note && (
                        <div className="mt-3 pt-3 border-t border-white/6">
                          <p className="text-xs text-slate-500">
                            <span className="text-cyan-400/70 font-medium not-italic">
                              {item.note.startsWith('Aprendizaje') ? '' : ''}
                            </span>
                            {item.note}
                          </p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </div>

          {/* Toggle — only on mobile */}
          <div className="pl-14 mt-5 md:hidden">
            <button
              onClick={() => setExpanded(v => !v)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-white/15 hover:border-cyan-400/30 text-slate-400 hover:text-cyan-400 text-sm transition-all duration-200 cursor-pointer"
            >
              {expanded
                ? <><ChevronUp size={14} /> Ocultar historial</>
                : <><ChevronDown size={14} /> Ver historial completo</>
              }
            </button>
          </div>
        </div>

        {/* ── Formación académica ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <BookOpen size={18} className="text-cyan-400" />
            <h3 className="font-outfit font-bold text-xl text-white">Formación Académica</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {education.map((e, i) => (
              <motion.div
                key={e.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className={`glass rounded-xl p-4 border transition-all duration-200 cursor-default ${
                  e.highlight
                    ? 'border-cyan-400/30 hover:border-cyan-400/50'
                    : 'border-white/8 hover:border-white/18'
                }`}
              >
                <p className="font-medium text-white text-sm leading-snug mb-0.5">{e.label}</p>
                <p className="text-slate-400 text-xs">{e.place}</p>
                <p className={`text-xs mt-1 ${e.highlight ? 'text-cyan-400' : 'text-slate-600'}`}>{e.date}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
