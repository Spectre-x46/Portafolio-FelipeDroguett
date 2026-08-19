import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Roadmap from './components/Roadmap'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CasoTokyoTunning from './pages/CasoTokyoTunning'

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-inter antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Roadmap />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/caso-tokyo-tunning" element={<CasoTokyoTunning />} />
    </Routes>
  )
}
