import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="rule py-10">
      <div className="mx-auto flex max-w-page flex-col gap-6 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="font-display text-sm font-semibold text-ink">
            Felipe Droguett<span className="text-accent">.</span>
          </p>
          <p className="mt-1 text-xs text-ink-faint">
            © 2026 Droguett Consulting SpA · Santiago, Chile
          </p>
        </div>

        <nav aria-label="Pie de página" className="flex flex-wrap gap-x-5 gap-y-2">
          <Link
            to="/caso/tokyo-tunning"
            className="inline-flex min-h-[44px] items-center text-sm text-ink-muted transition-colors hover:text-accent-ink"
          >
            Caso Tokyo Tunning
          </Link>
          <Link
            to="/caso/agente-comercial"
            className="inline-flex min-h-[44px] items-center text-sm text-ink-muted transition-colors hover:text-accent-ink"
          >
            Caso Agente comercial
          </Link>
          <a
            href="#contacto"
            className="inline-flex min-h-[44px] items-center text-sm text-ink-muted transition-colors hover:text-accent-ink"
          >
            Contacto
          </a>
        </nav>
      </div>

      <p className="mx-auto mt-8 max-w-page px-5 text-xs text-ink-faint sm:px-8">
        Sitio construido con React, Vite y Tailwind. Las métricas citadas incluyen fecha,
        herramienta y si se midieron en laboratorio o en uso real.
      </p>
    </footer>
  )
}
