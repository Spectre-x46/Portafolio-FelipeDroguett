import { Suspense, lazy, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Capabilities from './components/Capabilities'
import Journey from './components/Journey'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useSeo from './lib/useSeo'

// Los case studies se cargan bajo demanda. Antes viajaban en el mismo bundle
// que la home: todo el mundo descargaba el caso completo sin abrirlo.
const CasoTokyoTunning = lazy(() => import('./pages/CasoTokyoTunning'))
const CasoAgente       = lazy(() => import('./pages/CasoAgente'))

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) { el.scrollIntoView({ block: 'start' }); return }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

function Home() {
  useSeo({
    title: 'Felipe Droguett — desarrollo, campañas y automatización comercial',
    description:
      'Trabajo dentro de negocios que venden online: su tienda, su publicidad y la automatización de su atención. Dos casos documentados con métricas fechadas.',
    path: '/',
  })

  return (
    <>
      <Hero />
      <Work />
      <About />
      <Capabilities />
      <Journey />
      <Contact />
    </>
  )
}

function Cargando() {
  return (
    <div className="mx-auto max-w-page px-5 py-32 sm:px-8">
      <p className="measure text-sm text-ink-faint">Cargando…</p>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-bg font-sans text-ink">
      <a href="#contenido" className="skip-link">Saltar al contenido</a>
      <ScrollManager />
      <Navbar />
      <main id="contenido">
        <Suspense fallback={<Cargando />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/caso/tokyo-tunning" element={<CasoTokyoTunning />} />
            <Route path="/caso/agente-comercial" element={<CasoAgente />} />
            {/* Rutas antiguas — se conserva el enlace que ya circulaba */}
            <Route path="/caso-tokyo-tunning" element={<CasoTokyoTunning />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
