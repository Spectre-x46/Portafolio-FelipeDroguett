import { useState, useEffect } from 'react'
import { Menu, X, Github } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '#about', label: 'Sobre Mí' },
  { href: '#roadmap', label: 'Trayectoria' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#contact', label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-nav shadow-2xl' : 'bg-transparent'
        }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#" className="font-outfit font-bold text-lg text-white tracking-tight select-none">
            Droguett<span className="text-cyan-400"> Consulting</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="text-slate-400 hover:text-cyan-400 text-sm font-medium transition-colors duration-200 cursor-pointer"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://github.com/Spectre-x46/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 text-slate-300 text-sm font-medium hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-200 cursor-pointer"
            >
              <Github size={14} />
              GitHub
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(v => !v)}
            className="md:hidden text-slate-300 hover:text-white p-2 cursor-pointer transition-colors"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="md:hidden glass-nav overflow-hidden"
          >
            <div className="max-w-6xl mx-auto px-5 py-4 flex flex-col gap-0.5">
              {links.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-slate-300 hover:text-cyan-400 py-3 text-sm font-medium border-b border-white/5 last:border-0 transition-colors cursor-pointer"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://github.com/Spectre-x46/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-full border border-white/20 text-slate-300 text-sm w-fit cursor-pointer"
              >
                <Github size={14} />
                GitHub & Proyectos
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
