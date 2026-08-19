import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#trabajo',     label: 'Trabajo' },
  { href: '#criterio',    label: 'Criterio' },
  { href: '#capacidades', label: 'Capacidades' },
  { href: '#trayectoria', label: 'Trayectoria' },
  { href: '#contacto',    label: 'Contacto' },
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
        <div className="flex h-16 items-center justify-between">
          <Link
            to="/"
            className="font-display text-sm font-semibold tracking-tight text-ink"
          >
            Felipe Droguett<span className="text-accent">.</span>
          </Link>

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

        {isHome && open && (
          <ul id="menu-movil" className="border-t border-[color:var(--line)] py-2 md:hidden">
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
        )}
      </nav>
    </header>
  )
}
