import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Github, Linkedin, ArrowUpRight } from 'lucide-react'
import { EXTERNOS, EXTERNO_ATTRS } from '../lib/links'

const links = [
  { href: '#trabajo',     label: 'Trabajo' },
  { href: '#criterio',    label: 'Criterio' },
  { href: '#capacidades', label: 'Capacidades' },
  { href: '#trayectoria', label: 'Trayectoria' },
  { href: '#contacto',    label: 'Contacto' },
]

const perfiles = [
  { ...EXTERNOS.github,   Icon: Github },
  { ...EXTERNOS.linkedin, Icon: Linkedin },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${
        scrolled || open
          ? 'border-[color:var(--line)] bg-[color:var(--bg)]/95 backdrop-blur'
          : 'border-transparent bg-transparent'
      }`}
    >
      <nav aria-label="Principal" className="mx-auto max-w-page px-5 sm:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex min-h-[44px] items-center font-display text-sm font-semibold tracking-tight text-ink"
          >
            Felipe Droguett<span className="text-accent">.</span>
          </Link>

          <div className="flex items-center gap-1">
            {isHome && (
              <ul className="hidden items-center gap-1 md:flex">
                {links.map(l => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="inline-flex min-h-[44px] items-center rounded px-3 text-sm text-ink-muted transition-colors duration-150 hover:text-ink"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}

            {!isHome && (
              <Link
                to="/"
                className="hidden min-h-[44px] items-center rounded px-3 text-sm text-ink-muted transition-colors hover:text-ink md:inline-flex"
              >
                ← Volver al inicio
              </Link>
            )}

            {/* Perfiles externos. Deliberadamente sólo iconos y separados por una
                línea: son rutas de verificación, no navegación principal. */}
            <div className="ml-2 hidden items-center gap-0.5 border-l border-[color:var(--line)] pl-2 md:flex">
              {perfiles.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  {...EXTERNO_ATTRS}
                  aria-label={`${label} — se abre en una pestaña nueva`}
                  title={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded text-ink-faint transition-colors duration-150 hover:text-accent-ink"
                >
                  <Icon size={17} aria-hidden="true" />
                </a>
              ))}
            </div>

            {isHome && (
              <button
                type="button"
                onClick={() => setOpen(v => !v)}
                aria-expanded={open}
                aria-controls="menu-movil"
                aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
                className="inline-flex h-11 w-11 items-center justify-center rounded border border-strong text-ink md:hidden"
              >
                {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
              </button>
            )}

            {!isHome && (
              <Link
                to="/"
                className="inline-flex min-h-[44px] items-center rounded px-3 text-sm text-ink-muted md:hidden"
              >
                ← Inicio
              </Link>
            )}
          </div>
        </div>

        {isHome && open && (
          <div id="menu-movil" className="border-t border-[color:var(--line)] py-2 md:hidden">
            <ul>
              {links.map(l => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-[48px] items-center rounded px-2 text-base text-ink-muted transition-colors hover:text-ink"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <ul className="mt-2 border-t border-[color:var(--line)] pt-2">
              {perfiles.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...EXTERNO_ATTRS}
                    onClick={() => setOpen(false)}
                    className="flex min-h-[48px] items-center gap-3 rounded px-2 text-base text-ink-muted transition-colors hover:text-accent-ink"
                  >
                    <Icon size={17} aria-hidden="true" />
                    {label}
                    <ArrowUpRight size={14} aria-hidden="true" className="text-ink-faint" />
                    <span className="sr-only">se abre en una pestaña nueva</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
