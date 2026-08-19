import { Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-10 bg-slate-950 border-t border-white/6">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 text-center">
        <p className="font-outfit font-bold text-white text-lg mb-1">
          Droguett<span className="text-cyan-400"> Consulting</span>
        </p>
        <p className="text-slate-400 text-sm mb-4">
          © 2026 Droguett Consulting SpA — Felipe Droguett O.
        </p>
        <a
          href="https://github.com/Spectre-x46/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-200 cursor-pointer"
        >
          <Github size={14} />
          Explorar proyectos en GitHub
        </a>
      </div>
    </footer>
  )
}
