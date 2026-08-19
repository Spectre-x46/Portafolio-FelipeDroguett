import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { EXTERNOS, EXTERNO_ATTRS } from '../lib/links'

/**
 * Pie.
 *
 * Dos grupos con funciones distintas: a la izquierda lo que sigue dentro del
 * sitio, a la derecha las rutas para comprobar lo que el sitio afirma. Estas
 * últimas van en tamaño menor a propósito — son verificación, no destino.
 *
 * En la versión anterior el pie tenía un único CTA que llevaba a GitHub. Eso
 * mandaba a la gente al eslabón más débil del ecosistema justo al terminar de
 * leer.
 */
const verificacion = [EXTERNOS.github, EXTERNOS.linkedin, EXTERNOS.credencial]

export default function Footer() {
  return (
    <footer className="rule py-10">
      <div className="mx-auto flex max-w-page flex-col gap-8 px-5 sm:px-8 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="font-display text-sm font-semibold text-ink">
            Felipe Droguett<span className="text-accent">.</span>
          </p>
          <p className="mt-1 text-xs text-ink-faint">
            © 2026 Droguett Consulting SpA · Santiago, Chile
          </p>
        </div>

        <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
          <nav aria-label="Secciones del sitio">
            <p className="eyebrow mb-1">En este sitio</p>
            <ul>
              <li>
                <Link
                  to="/caso/tokyo-tunning"
                  className="inline-flex min-h-[44px] items-center text-sm text-ink-muted transition-colors hover:text-accent-ink"
                >
                  Caso Tokyo Tunning
                </Link>
              </li>
              <li>
                <Link
                  to="/caso/agente-comercial"
                  className="inline-flex min-h-[44px] items-center text-sm text-ink-muted transition-colors hover:text-accent-ink"
                >
                  Caso Agente comercial
                </Link>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="inline-flex min-h-[44px] items-center text-sm text-ink-muted transition-colors hover:text-accent-ink"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Perfiles y verificación">
            <p className="eyebrow mb-1">Para comprobarlo</p>
            <ul>
              {verificacion.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...EXTERNO_ATTRS}
                    className="inline-flex min-h-[44px] items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-accent-ink"
                  >
                    {label}
                    <ArrowUpRight size={13} aria-hidden="true" className="text-ink-faint" />
                    <span className="sr-only">se abre en una pestaña nueva</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-page px-5 text-xs text-ink-faint sm:px-8">
        Sitio construido con React, Vite y Tailwind. Las métricas citadas incluyen fecha,
        herramienta y si se midieron en laboratorio o en uso real.
      </p>
    </footer>
  )
}
