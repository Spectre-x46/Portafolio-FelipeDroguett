import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowUpRight, ChevronDown, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

/* ── helpers ── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
})

function SectionLabel({ children }) {
  return (
    <p className="text-cyan-400 text-xs font-medium uppercase tracking-widest mb-3">
      {children}
    </p>
  )
}

function SectionTitle({ children, className = '' }) {
  return (
    <h2 className={`font-outfit font-bold text-2xl sm:text-3xl text-white ${className}`}>
      {children}
    </h2>
  )
}

function MetricPill({ children }) {
  return (
    <span className="chip-cyan text-[11px] sm:text-xs whitespace-nowrap">
      {children}
    </span>
  )
}

function Divider() {
  return <div className="border-t border-white/5 my-20" />
}

/* ── ADR expandable ── */
function ADRCard({ title, problem, decision, consequence, adrRef }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="glass border border-white/[0.13] hover:border-cyan-400/25 rounded-2xl overflow-hidden transition-all duration-300">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-start justify-between gap-4 p-6 text-left cursor-pointer group"
        aria-expanded={open}
      >
        <div className="flex-1 min-w-0">
          <span className="text-cyan-400/60 text-[11px] font-mono uppercase tracking-widest block mb-2">
            {adrRef}
          </span>
          <h3 className="font-outfit font-semibold text-white text-base leading-snug group-hover:text-cyan-400 transition-colors duration-200">
            {title}
          </h3>
        </div>
        <ChevronDown
          size={18}
          className={`text-slate-500 flex-shrink-0 mt-1 transition-transform duration-300 ${open ? 'rotate-180 text-cyan-400' : ''}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 space-y-4 border-t border-white/[0.07] pt-5">
              <div>
                <p className="text-[11px] text-cyan-400/70 uppercase tracking-wider font-medium mb-1.5">El problema</p>
                <p className="text-slate-300 text-sm leading-relaxed">{problem}</p>
              </div>
              <div>
                <p className="text-[11px] text-cyan-400/70 uppercase tracking-wider font-medium mb-1.5">La decisión</p>
                <p className="text-slate-300 text-sm leading-relaxed">{decision}</p>
              </div>
              <div>
                <p className="text-[11px] text-cyan-400/70 uppercase tracking-wider font-medium mb-1.5">Consecuencia aceptada</p>
                <p className="text-slate-400 text-sm leading-relaxed italic">{consequence}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ── Metric table row ── */
function MetricRow({ label, before, after, highlight }) {
  return (
    <div className={`grid grid-cols-[1fr_auto_auto] gap-4 items-center py-3 border-b border-white/[0.06] last:border-0 ${highlight ? 'text-white' : 'text-slate-300'}`}>
      <span className="text-sm">{label}</span>
      <span className="text-slate-500 text-sm text-right">{before}</span>
      <span className={`text-sm text-right font-medium ${highlight ? 'text-cyan-400' : 'text-white'}`}>{after}</span>
    </div>
  )
}

/* ── Debt table row ── */
function DebtRow({ id, desc, impact, status }) {
  return (
    <div className="grid grid-cols-[72px_1fr_1fr_auto] gap-4 items-start py-3 border-b border-white/[0.06] last:border-0">
      <span className="text-[11px] font-mono text-slate-500 pt-0.5">{id}</span>
      <span className="text-slate-300 text-sm leading-relaxed">{desc}</span>
      <span className="text-slate-500 text-sm leading-relaxed">{impact}</span>
      <span className="text-[11px] font-medium text-amber-400/80 whitespace-nowrap pt-0.5">{status}</span>
    </div>
  )
}

/* ══════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════ */
export default function CasoTokyoTunning() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-inter antialiased">

      {/* ── Sticky back nav ── */}
      <nav className="fixed top-0 inset-x-0 z-50 glass-nav">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 h-14 flex items-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-200 cursor-pointer"
          >
            <ArrowLeft size={15} />
            Portafolio
          </Link>
          <span className="text-white/10">·</span>
          <span className="text-slate-500 text-sm truncate">Tokyo Tunning — Caso de estudio</span>
          <div className="ml-auto">
            <a
              href="https://tokyotunning.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 text-[12px] font-medium transition-colors cursor-pointer"
            >
              Ver sitio
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-14">

        {/* ══ HERO ══ */}
        <section className="pt-20 pb-16 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-cyan-500/[0.07] rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-20 -right-40 w-[500px] h-[400px] bg-violet-600/[0.08] rounded-full blur-[120px] pointer-events-none" />
          <div className="bg-grid absolute inset-0 pointer-events-none opacity-40" />

          <div className="max-w-4xl mx-auto px-5 sm:px-6 relative">
            <motion.div {...fadeUp(0)}>
              <p className="inline-block text-cyan-400 text-xs font-medium uppercase tracking-widest mb-6 px-3 py-1 rounded-full glass border border-cyan-400/20">
                Caso de estudio · Transformación Digital · Varias etapas
              </p>
            </motion.div>

            <motion.h1
              {...fadeUp(0.08)}
              className="font-outfit font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-[1.12] mb-5"
            >
              De persa a e-commerce:<br className="hidden sm:block" />
              <span className="text-cyan-400"> la evolución digital</span><br className="hidden sm:block" />
              de Tokyo Tunning
            </motion.h1>

            <motion.p
              {...fadeUp(0.14)}
              className="text-slate-400 text-lg leading-relaxed mb-8 max-w-2xl"
            >
              Una relación profesional de varios años. Marca, digitalización, crecimiento y reconstrucción técnica completa.
            </motion.p>

            <motion.div
              {...fadeUp(0.2)}
              className="flex flex-wrap gap-2 mb-8"
            >
              <MetricPill>ROAS 27.6x · CyberDay 2026</MetricPill>
              <MetricPill>WCAG 100/100</MetricPill>
              <MetricPill>LCP 300ms</MetricPill>
              <MetricPill>363 productos</MetricPill>
            </motion.div>

            <motion.p
              {...fadeUp(0.25)}
              className="text-slate-600 text-xs leading-relaxed italic max-w-xl"
            >
              Este caso documenta distintas etapas de colaboración con Tokyo Tunning, desde la construcción de presencia digital hasta la arquitectura técnica y operacional.
            </motion.p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-5 sm:px-6">

          <Divider />

          {/* ══ 01 · HISTORIA ══ */}
          <motion.section {...fadeUp(0)} className="mb-20">
            <SectionLabel>01 · Historia</SectionLabel>
            <SectionTitle className="mb-3">Tres etapas, una relación</SectionTitle>
            <p className="text-slate-500 text-sm mb-8 max-w-2xl">
              No llegué solo al final del proceso. Estuve presente en más de una etapa relevante del negocio, con roles distintos en cada una.
            </p>

            {/* Timeline — 3 stage cards + pause connector */}
            <div className="flex flex-col sm:flex-row gap-0 sm:gap-0 mb-8">

              {/* Stage 1 */}
              <div className="flex-1">
                <div className="glass border border-white/[0.1] rounded-2xl p-5 h-full flex flex-col gap-3 opacity-70">
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Etapa 1</span>
                    <p className="text-slate-600 text-[11px] mt-0.5">Antes de 2023</p>
                  </div>
                  <h3 className="font-outfit font-semibold text-white text-sm leading-snug">Primeros pasos digitales</h3>
                  <ul className="space-y-2 flex-1">
                    {[
                      'Primera toma de contacto con el negocio',
                      'El negocio operaba a través de persa y canales informales',
                      'Primeros activos digitales y presencia online',
                      'Campañas y sistemas digitales iniciales',
                    ].map(item => (
                      <li key={item} className="flex items-start gap-2 text-slate-500 text-xs leading-relaxed">
                        <span className="text-slate-700 flex-shrink-0 mt-0.5">·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Connector 1→2 */}
              <div className="hidden sm:flex items-center justify-center flex-shrink-0 px-2">
                <div className="w-6 h-px bg-white/10" />
              </div>
              <div className="sm:hidden flex items-center justify-center h-5 my-1">
                <div className="w-px h-full bg-white/10" />
              </div>

              {/* Stage 2 */}
              <div className="flex-1">
                <div className="glass border border-white/[0.13] rounded-2xl p-5 h-full flex flex-col gap-3">
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Etapa 2</span>
                    <p className="text-slate-500 text-[11px] mt-0.5">2023 – 2025</p>
                  </div>
                  <h3 className="font-outfit font-semibold text-white text-sm leading-snug">Colaboración formal</h3>
                  <ul className="space-y-2 flex-1">
                    {[
                      'Propuse el nombre Tokyo Tunning y construí su identidad digital inicial: redes, contenido y presencia online',
                      'Producción de contenido orgánico: guión, grabación, edición y publicación',
                      'Gestión de campañas Meta Ads',
                      'Colaboré en procesos de formalización y estructura operativa',
                      'El negocio atravesó una etapa de crecimiento sostenido',
                    ].map(item => (
                      <li key={item} className="flex items-start gap-2 text-slate-400 text-xs leading-relaxed">
                        <span className="text-slate-600 flex-shrink-0 mt-0.5">·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Connector 2→3: pause */}
              <div className="hidden sm:flex flex-col items-center justify-center flex-shrink-0 px-2 gap-1">
                <div className="w-3 h-px bg-white/[0.08]" />
                <span className="text-slate-800 text-[9px] uppercase tracking-widest rotate-0 leading-none">···</span>
                <div className="w-3 h-px bg-white/[0.08]" />
              </div>
              <div className="sm:hidden flex items-center justify-center h-5 my-1">
                <div className="w-px h-full bg-white/[0.08]" />
              </div>

              {/* Stage 3 */}
              <div className="flex-1">
                <div className="glass border border-cyan-400/25 rounded-2xl p-5 h-full flex flex-col gap-3 glow-cyan">
                  <div>
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">Etapa 3</span>
                    <p className="text-cyan-400/60 text-[11px] mt-0.5">Febrero 2026</p>
                  </div>
                  <h3 className="font-outfit font-semibold text-white text-sm leading-snug">Retorno técnico</h3>
                  <ul className="space-y-2 flex-1">
                    {[
                      'Reconstrucción del sitio web desde cero',
                      'Auditoría técnica formal · 4 ADRs documentados',
                      'WCAG 100/100 · LCP 300ms',
                      'CyberDay 2026: ROAS 27.6x',
                      'Diagnóstico y roadmap TTCOS',
                    ].map(item => (
                      <li key={item} className="flex items-start gap-2 text-slate-300 text-xs leading-relaxed">
                        <span className="text-cyan-400 flex-shrink-0 mt-0.5">·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>

            {/* Pausa note */}
            <p className="text-slate-700 text-[11px] text-center mb-6 italic">
              La relación profesional evolucionó en distintas etapas, con responsabilidades diferentes según las necesidades del negocio.
            </p>

            {/* Context note */}
            <div className="glass border border-white/[0.07] rounded-xl px-5 py-4">
              <p className="text-slate-500 text-xs leading-relaxed">
                Este caso de estudio documenta en detalle la <span className="text-slate-400">Etapa 3</span> —
                la auditoría y reconstrucción técnica de 2026. Las etapas anteriores son el contexto de una relación
                profesional construida durante años, no de un proyecto puntual.
              </p>
            </div>
          </motion.section>

          <Divider />

          {/* ══ 02 · DOS HISTORIAS ══ */}
          <motion.section {...fadeUp(0)} className="mb-20">
            <SectionLabel>02 · Participación</SectionLabel>
            <SectionTitle className="mb-6">Dos tipos de trabajo, una relación</SectionTitle>

            {/* Ajuste 4 — Framing paragraph */}
            <div className="glass border border-white/[0.08] rounded-2xl p-6 mb-8">
              <p className="text-slate-400 text-sm leading-relaxed mb-2">
                La mayoría de los casos de estudio muestran una intervención puntual.{' '}
                <span className="text-white font-medium">Este no.</span>
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Tokyo Tunning documenta distintas etapas de una relación profesional construida durante varios años,
                desde iniciativas tempranas de digitalización hasta una reconstrucción técnica completa.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-4">

              {/* Historia A — marca y operaciones */}
              <div className="glass border border-white/[0.11] rounded-2xl p-6 flex flex-col">
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">2023 – 2025</span>
                  <span className="text-white/10">·</span>
                  <span className="text-slate-500 text-[11px]">Marca · contenido · operaciones</span>
                </div>
                <ul className="space-y-3 flex-1">
                  {[
                    'Propuse el nombre Tokyo Tunning y construí su identidad digital inicial: redes, contenido y presencia online',
                    'Diseño y construcción de presencia en redes sociales',
                    'Estrategia de contenido: guión, grabación, edición y publicación',
                    'Gestión de campañas Meta Ads',
                    'Colaboré en procesos de formalización y estructura operativa para apoyar el crecimiento',
                    'Documentación, procesos y herramientas de trabajo interno',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2.5 text-slate-400 text-sm leading-relaxed">
                      <span className="text-slate-600 mt-1 flex-shrink-0 leading-none">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
                {/* Growth metric — at the bottom of Historia A */}
                <div className="mt-5 pt-5 border-t border-white/[0.07]">
                  <p className="text-slate-400 text-xs leading-relaxed mb-1">
                    Durante este período el negocio atravesó una etapa de crecimiento sostenido y profesionalización
                    operativa, apoyada por iniciativas de marca, contenido, digitalización y estructura interna.
                  </p>
                  <p className="text-white font-outfit font-semibold text-sm mt-2">
                    ~$500.000 → más de $15.000.000 CLP / mes
                  </p>
                </div>
              </div>

              {/* Historia B — arquitectura técnica */}
              <div className="glass border border-cyan-400/15 rounded-2xl p-6 flex flex-col">
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-[10px] font-mono text-cyan-400/60 uppercase tracking-wider">2026</span>
                  <span className="text-white/10">·</span>
                  <span className="text-slate-400 text-[11px]">Arquitectura · auditoría · performance</span>
                </div>
                <ul className="space-y-3 flex-1">
                  {[
                    'Reconstrucción del sitio web desde cero — el sitio existía, requería reconstrucción completa',
                    'Tema PHP custom: tokyo-theme-1 · 0 dependencias del tema base',
                    'WooCommerce: 363 productos, variantes, Webpay Plus, despacho, retiro en tienda',
                    'SEO técnico: Schema.org, canonical tags, redirects de URLs legacy',
                    'Meta Pixel completo con CAPI como respaldo para Purchase',
                    'Diseño y ejecución campaña Meta Ads CyberDay 2026',
                    'Diagnóstico operacional y roadmap TTCOS',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2.5 text-slate-300 text-sm leading-relaxed">
                      <span className="text-cyan-400 mt-1 flex-shrink-0 leading-none">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Delimitación */}
            <div className="glass border border-white/[0.07] rounded-xl px-5 py-4">
              <p className="text-slate-500 text-xs leading-relaxed">
                <span className="text-slate-400 font-medium">Lo que no fue parte de mi rol:</span>{' '}
                Las decisiones sobre productos, precios, operación del taller y estrategia comercial pertenecen al negocio.
                No soy el responsable del resultado comercial — soy el responsable de la parte digital, técnica y operacional donde participé.
              </p>
            </div>
          </motion.section>

          <Divider />

          {/* ══ 03 · DIAGNÓSTICO 2026 ══ */}
          <motion.section {...fadeUp(0)} className="mb-20">
            <SectionLabel>03 · Diagnóstico</SectionLabel>
            <SectionTitle className="mb-3">Lo que encontré al retornar</SectionTitle>
            <p className="text-slate-500 text-sm mb-8 max-w-2xl">
              Al retornar en febrero 2026, el objetivo fue reconstruir el sitio con una base técnica sólida.
              La auditoría formal identificó los problemas estructurales que justificaron una reconstrucción
              completa en lugar de optimizaciones parciales.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  num: '01',
                  title: 'Accesibilidad sistémica',
                  body: 'La auditoría inicial arrojó un Lighthouse Accessibility de 37/100. El problema más crítico: en mobile, la galería del producto ocupaba el 83% de la pantalla sin mostrar el precio ni el botón de compra. Un usuario llegaba al producto y no veía por qué comprarlo ni cómo hacerlo.',
                  badge: 'Crítico',
                  badgeColor: 'text-red-400 border-red-400/30',
                },
                {
                  num: '02',
                  title: 'Botón de compra no determinista',
                  body: 'En productos con variantes, el botón sticky "Agregar al carrito" podía activarse antes de que el usuario seleccionara una opción válida. El origen: una diferencia de 300ms entre cuándo el código custom leía el estado del sistema y cuándo WooCommerce lo actualizaba.',
                  badge: 'Crítico',
                  badgeColor: 'text-red-400 border-red-400/30',
                },
                {
                  num: '03',
                  title: 'Cuello de botella operacional',
                  body: 'Este problema solo fue visible durante el primer evento de alta carga. El sistema técnico funcionó sin incidentes. Lo que falló: 75 leads sin respuesta durante el CyberDay, canal WhatsApp desatendido 8+ horas. Revenue potencial no capturado significativo sobre el total del evento.',
                  badge: 'Impacto mayor',
                  badgeColor: 'text-violet-400 border-violet-400/30',
                },
                {
                  num: '04',
                  title: 'Inconsistencias operativas internas',
                  body: 'Se detectaron inconsistencias operativas y oportunidades de mejora en los procesos internos del negocio. Sin sistemas estandarizados, las decisiones se tomaban sobre información que no siempre reflejaba la realidad operativa.',
                  badge: 'Alta',
                  badgeColor: 'text-amber-400 border-amber-400/30',
                },
              ].map(({ num, title, body, badge, badgeColor }) => (
                <motion.div
                  key={num}
                  {...fadeUp(0.05)}
                  className="glass border border-white/[0.11] hover:border-white/20 rounded-2xl p-6 transition-all duration-300 flex flex-col gap-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600 font-mono text-[11px]">{num}</span>
                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full glass border ${badgeColor}`}>
                      {badge}
                    </span>
                  </div>
                  <h3 className="font-outfit font-semibold text-white text-base leading-snug">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed flex-1">{body}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <Divider />

          {/* ══ 04 · ARQUITECTURA ══ */}
          <motion.section {...fadeUp(0)} className="mb-20">
            <SectionLabel>04 · Arquitectura</SectionLabel>
            <SectionTitle className="mb-3">Las decisiones que importaron</SectionTitle>
            <p className="text-slate-500 text-sm mb-8 max-w-2xl">
              Cada decisión técnica importante está documentada en un ADR — Architecture Decision Record. No es documentación para mostrar:
              es el mecanismo que obliga a pensar en las consecuencias antes de implementar.
            </p>

            <div className="space-y-3">
              <ADRCard
                adrRef="ADR-004"
                title="El botón de compra como suscriptor pasivo"
                problem="En productos con variantes, el sticky ATC podía habilitarse antes de que el usuario seleccionara una opción válida — dependiendo de la velocidad del navegador. Comportamiento no determinista en condiciones normales de uso."
                decision="El componente sticky se rediseñó para escuchar únicamente eventos que WooCommerce dispara después de resolver su propio estado (show_variation, hide_variation, reset_data), no el estado del DOM en tiempo real. Delega al botón nativo de WooCommerce en lugar de gestionar el estado en paralelo."
                consequence="El aria-label del sticky no actualiza dinámicamente con la variante seleccionada. Registrado como pendiente (TD-P2-A) — deuda técnica documentada, no ignorada."
              />
              <ADRCard
                adrRef="ADR-002"
                title="Fragmentos nativos de WooCommerce como fuente de verdad"
                problem="El tema base gestionaba el estado del carrito en JavaScript custom, en paralelo al estado real de WooCommerce. Cualquier desincronización podía mostrar un carrito vacío cuando había productos, o viceversa."
                decision="El estado del carrito lo gestiona únicamente WooCommerce via su propio sistema de fragmentos. El código custom solo suscribe y muestra — nunca gestiona estado propio. No se construyó lógica paralela."
                consequence="Sin control custom sobre los momentos exactos de actualización del carrito. A cambio: el estado siempre refleja la realidad del servidor. En un e-commerce con pagos de por medio, una desincronización es un problema de negocio, no solo técnico."
              />
              <ADRCard
                adrRef="ADR-003"
                title="Sin dependencias del tema base en producción"
                problem="El tema Basel cargaba decenas de archivos JavaScript independientemente de si sus componentes se usaban en la página — recursos que el tema custom no necesitaba pero que el usuario debía descargar en cada visita."
                decision="El tema custom tokyo-theme-1 desregistra todos los scripts de Basel antes de cargar los propios. Ningún archivo JavaScript de Basel se ejecuta en el frontend en producción."
                consequence="Si en alguna iteración futura se decide activar un componente de Basel, el proceso de re-integración requiere revertir el desregistro explícitamente. Considerado aceptable dado que el objetivo era un tema completamente custom."
              />
            </div>

            <div className="mt-6 glass border border-white/[0.07] rounded-xl px-5 py-4">
              <p className="text-slate-500 text-xs leading-relaxed">
                <span className="text-slate-400 font-medium">ADR-001</span> — Sin minicart:
                el drawer lateral del tema base se eliminó para reducir complejidad de JavaScript y eliminar potenciales condiciones de carrera.
                El usuario va directamente a la página de carrito. La confirmación del ATC ocurre via toast notification.
              </p>
            </div>
          </motion.section>

          <Divider />

          {/* ══ 05 · RESULTADOS ══ */}
          <motion.section {...fadeUp(0)} className="mb-20">
            <SectionLabel>05 · Resultados</SectionLabel>
            <SectionTitle className="mb-2">Los números</SectionTitle>
            <p className="text-slate-500 text-sm mb-10">Verificables, con fuente, sin adornos.</p>

            {/* ── Bloque A: Colaboración 2023-2025 ── */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <p className="text-white font-outfit font-semibold text-base">Colaboración 2023–2025</p>
                <span className="text-slate-700 text-xs">·</span>
                <p className="text-slate-500 text-xs">Marca · contenido · digitalización · operaciones</p>
              </div>
              <div className="glass border border-white/[0.1] rounded-2xl p-6">
                <div className="grid sm:grid-cols-2 gap-6 items-start">
                  <div>
                    <p className="text-white font-outfit font-bold text-2xl sm:text-3xl mb-1">
                      ~$500K → +$15M
                    </p>
                    <p className="text-slate-400 text-sm">CLP mensuales · en 18 meses</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Durante el período de colaboración, el negocio evolucionó desde aproximadamente $500.000 CLP
                      mensuales a cifras superiores a $15.000.000 CLP mensuales, mientras participé en áreas de marca,
                      contenido, digitalización y operaciones.
                    </p>
                    <p className="text-slate-600 text-xs mt-3">
                      El crecimiento del negocio responde a múltiples factores.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Bloque B: Reconstrucción técnica 2026 ── */}
            <div className="flex items-center gap-3 mb-4">
              <p className="text-white font-outfit font-semibold text-base">Reconstrucción técnica 2026</p>
              <span className="text-slate-700 text-xs">·</span>
              <p className="text-slate-500 text-xs">Arquitectura · accesibilidad · performance</p>
            </div>

            {/* Accesibilidad */}
            <div className="mb-8">
              <p className="text-slate-400 text-sm mb-1">Accesibilidad</p>
              <p className="text-slate-600 text-xs mb-4">Validado con axe-core 4.11.4 — WCAG 2.1 AA</p>
              <div className="glass border border-white/[0.1] rounded-2xl px-6 py-2">
                <div className="grid grid-cols-[1fr_auto_auto] gap-4 py-3 border-b border-white/[0.06]">
                  <span className="text-slate-500 text-[11px] uppercase tracking-wider">Métrica</span>
                  <span className="text-slate-500 text-[11px] uppercase tracking-wider text-right">Antes</span>
                  <span className="text-slate-500 text-[11px] uppercase tracking-wider text-right">Después</span>
                </div>
                <MetricRow label="Lighthouse Accessibility" before="37/100" after="100/100" highlight />
                <MetricRow label="Violaciones WCAG AA" before="Múltiples" after="0" highlight />
                <MetricRow label="Touch targets < 44px" before="8 elementos" after="0" />
                <MetricRow label="Atributo lang" before="Ausente" after="es-CL" />
                <MetricRow label="Emojis en H1/title" before="Presentes" after="Eliminados" />
              </div>
            </div>

            {/* Performance */}
            <div className="mb-8">
              <p className="text-slate-400 text-sm mb-1">Performance</p>
              <p className="text-slate-600 text-xs mb-4">WordPress + WooCommerce típicamente tiene LCP de 1.5–3.0s en implementaciones estándar</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: 'LCP', value: '300ms' },
                  { label: 'CLS', value: '0.00' },
                  { label: 'Core Web Vitals', value: 'Verdes' },
                  { label: 'Errores consola', value: '0' },
                ].map(({ label, value }) => (
                  <div key={label} className="glass border border-cyan-400/15 rounded-xl p-4 text-center">
                    <p className="text-cyan-400 font-outfit font-bold text-xl mb-1">{value}</p>
                    <p className="text-slate-500 text-[11px]">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CyberDay */}
            <div className="mb-8">
              <p className="text-slate-400 text-sm mb-1">CyberDay 2026</p>
              <p className="text-slate-600 text-xs mb-4">Validación bajo carga real · 1–3 junio 2026 · Primer evento de alta demanda del sistema</p>
              <div className="glass border border-cyan-400/20 rounded-2xl p-6 glow-cyan">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-6">
                  {[
                    { label: 'Revenue 3 días', value: '$1.936.000', unit: 'CLP' },
                    { label: 'ROAS', value: '27.6x', unit: 'vs 3–6x benchmark' },
                    { label: 'Inversión Ads', value: '$70.034', unit: 'CLP' },
                    { label: 'Incidentes técnicos', value: '0', unit: 'durante el evento' },
                  ].map(({ label, value, unit }) => (
                    <div key={label}>
                      <p className="text-cyan-400 font-outfit font-bold text-xl sm:text-2xl mb-0.5">{value}</p>
                      <p className="text-slate-400 text-[11px]">{unit}</p>
                      <p className="text-slate-600 text-[10px] mt-1">{label}</p>
                    </div>
                  ))}
                </div>
                <p className="text-slate-400 text-xs leading-relaxed border-t border-white/[0.07] pt-4">
                  Un ROAS de 27.6x no puede atribuirse solo a las campañas. Depende de que el sistema técnico completo
                  funcione sin fricción — catálogo, checkout, Webpay, pixel. Si alguna parte falla, el ROAS cae.
                  El sistema no tuvo ningún fallo técnico durante el evento.
                </p>
              </div>
            </div>

            {/* Hallazgo post-evento */}
            <div className="glass border border-violet-400/20 rounded-2xl p-6">
              <p className="text-violet-400 text-xs font-medium uppercase tracking-wider mb-3">El hallazgo que cambió la dirección del proyecto</p>
              <div className="mb-4">
                <p className="text-white font-outfit font-bold text-3xl mb-1">75</p>
                <p className="text-slate-400 text-sm">leads sin atención durante el evento</p>
                <p className="text-slate-500 text-xs mt-1">Canal WhatsApp desatendido 8+ horas · DMs en TikTok e Instagram sin respuesta</p>
              </div>
              <div className="border-t border-white/[0.07] pt-4">
                <p className="text-white font-medium text-sm mb-2">
                  La tecnología había funcionado. El cuello de botella era operacional.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Esta conclusión cambió la dirección del proyecto: de más trabajo técnico a diseñar el sistema operativo comercial.
                </p>
              </div>
            </div>
          </motion.section>

          <Divider />

          {/* ══ 06 · LECCIONES ══ */}
          <motion.section {...fadeUp(0)} className="mb-20">
            <SectionLabel>06 · Aprendizajes</SectionLabel>
            <SectionTitle className="mb-8">Lecciones</SectionTitle>

            <div className="space-y-6">
              {[
                {
                  n: '01',
                  title: 'El cuello de botella puede estar donde no se mira',
                  body: 'Cuando el sistema técnico funciona y los resultados no llegan, el problema está en otra parte. Identificar dónde está el cuello de botella real es más valioso que seguir optimizando lo que ya funciona. En el CyberDay, el sitio procesó órdenes sin incidentes. Lo que falló fue la atención comercial.',
                },
                {
                  n: '02',
                  title: 'Documentar la deuda es parte del trabajo',
                  body: 'Cuatro decisiones técnicas tienen consecuencias negativas documentadas en sus ADRs. No son errores — son compromisos conscientes. La diferencia entre deuda técnica y descuido es que la deuda está registrada y el descuido no.',
                },
                {
                  n: '03',
                  title: 'Una relación larga cambia la naturaleza del trabajo',
                  body: 'Entrar a una auditoría técnica conociendo el negocio desde sus primeras etapas cambia lo que es posible diagnosticar. Hay contexto histórico, hay confianza construida, hay comprensión del modelo operativo. Eso no se consigue en un proyecto puntual.',
                },
              ].map(({ n, title, body }) => (
                <div key={n} className="flex gap-6 items-start">
                  <span className="text-slate-700 font-mono text-sm flex-shrink-0 pt-1 w-6">{n}</span>
                  <div>
                    <h3 className="font-outfit font-semibold text-white text-base mb-2">{title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          <Divider />

          {/* ══ 07 · DEUDA TÉCNICA ══ */}
          <motion.section {...fadeUp(0)} className="mb-20">
            <SectionLabel>07 · Transparencia</SectionLabel>
            <SectionTitle className="mb-3">Deuda técnica activa</SectionTitle>
            <p className="text-slate-500 text-sm mb-6 max-w-2xl">
              Un profesional que documenta lo que no resolvió genera más confianza que uno que presenta solo lo que funcionó.
            </p>

            <div className="glass border border-white/[0.1] rounded-2xl overflow-hidden">
              <div className="grid grid-cols-[72px_1fr_1fr_auto] gap-4 px-6 py-3 border-b border-white/[0.07] bg-white/[0.02]">
                <span className="text-slate-600 text-[11px] uppercase tracking-wider">ID</span>
                <span className="text-slate-600 text-[11px] uppercase tracking-wider">Descripción</span>
                <span className="text-slate-600 text-[11px] uppercase tracking-wider">Impacto</span>
                <span className="text-slate-600 text-[11px] uppercase tracking-wider">Estado</span>
              </div>
              <div className="px-6 py-2">
                <DebtRow id="DT-01" desc="functions.php de ~2.800 líneas sin modularizar" impact="Mantenibilidad en futuras intervenciones" status="Pendiente" />
                <DebtRow id="DT-02" desc="Template catálogo replica lógica nativa WC" impact="Puede desincronizarse en actualizaciones WC" status="Evaluando" />
                <DebtRow id="DT-03" desc="CSS inline dentro de templates PHP" impact="No puede optimizarse ni hacer tree-shake" status="Identificado" />
                <DebtRow id="DT-04" desc="aria-label sticky ATC no actualiza con variante" impact="WCAG A (no AA) — accesibilidad mejorable" status="En ADR-004" />
                <DebtRow id="DT-05" desc="Precio en sticky no actualiza con variante" impact="Usuario no ve precio actualizado en sticky" status="Documentado" />
              </div>
            </div>
          </motion.section>

          <Divider />

          {/* ══ 08 · PRÓXIMA ETAPA ══ */}
          <motion.section {...fadeUp(0)} className="mb-20">
            <SectionLabel>08 · Lo que sigue</SectionLabel>
            <SectionTitle className="mb-6">TTCOS — Sistema Operativo Comercial</SectionTitle>

            <div className="glass border border-white/[0.1] rounded-2xl p-6 sm:p-8 mb-6">
              <p className="text-slate-400 leading-relaxed mb-6 text-sm sm:text-base">
                El hallazgo del CyberDay derivó en un plan estructurado para resolver el problema operacional.
                El objetivo no es más tecnología. Es hacer que la tecnología que ya funciona genere resultados
                consistentes a través de procesos que no dependan de que alguien esté atento en el momento exacto.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                {[
                  { label: 'Stack', value: 'Kommo CRM + Make.com + WhatsApp API' },
                  { label: 'Costo mensual', value: '$52 USD / mes' },
                  { label: '% del revenue mensual', value: '0.29%' },
                ].map(({ label, value }) => (
                  <div key={label} className="glass border border-white/[0.08] rounded-xl p-4">
                    <p className="text-slate-500 text-[11px] uppercase tracking-wider mb-1">{label}</p>
                    <p className="text-white font-medium text-sm">{value}</p>
                  </div>
                ))}
              </div>

              <div>
                <p className="text-slate-500 text-xs uppercase tracking-wider mb-3">7 automatizaciones planificadas</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Carrito abandonado → WhatsApp',
                    'Respuesta leads < 15 min',
                    'Encuesta post-venta D+3',
                    'Solicitud reseña D+7',
                    'Upsell complementario D+30',
                    'Reactivación inactivos D+90',
                    'Registro ventas presenciales',
                  ].map(a => (
                    <span key={a} className="chip-muted text-[11px]">{a}</span>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-slate-600 text-xs">
              Estado: plan documentado en TTCOS v1.1.
            </p>
          </motion.section>

          <Divider />

          {/* ══ CTA FINAL ══ */}
          <motion.section {...fadeUp(0)} className="mb-20 text-center">
            <p className="text-slate-500 text-sm mb-8">El sitio está en producción. Los números son reales.</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://tokyotunning.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-cyan-400 text-slate-950 font-outfit font-semibold text-sm hover:bg-cyan-300 transition-colors duration-200 cursor-pointer"
              >
                Ver tokyotunning.cl
                <ArrowUpRight size={16} />
              </a>
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl glass border border-white/[0.15] hover:border-cyan-400/40 text-slate-300 hover:text-cyan-400 font-outfit font-medium text-sm transition-all duration-200 cursor-pointer"
              >
                ¿Tenés un proyecto similar? Hablemos
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </motion.section>

        </div>
      </main>

      <Footer />
    </div>
  )
}
