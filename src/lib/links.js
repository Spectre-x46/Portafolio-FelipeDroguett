/**
 * Superficies profesionales externas.
 *
 * Definidas en un solo sitio porque aparecen en navbar, contacto, pie y
 * metadatos, y en la versión anterior del portfolio los enlaces a GitHub
 * estaban repetidos y desincronizados.
 *
 * El reparto es deliberado:
 *   este sitio  → trabajo, decisiones y evidencia
 *   GitHub      → profundidad técnica y documentación
 *   LinkedIn    → trayectoria y contexto profesional
 *   credencial  → validación formal, verificable en la plataforma emisora
 *   diploma     → el documento de la academia, servido desde este sitio
 */
export const EXTERNOS = {
  github: {
    label: 'GitHub',
    handle: 'github.com/Spectre-x46',
    href: 'https://github.com/Spectre-x46/',
    nota: 'Código y proyectos públicos',
  },
  linkedin: {
    label: 'LinkedIn',
    handle: '/in/fdroguetto',
    href: 'https://www.linkedin.com/in/fdroguetto/',
    nota: 'Trayectoria y formación',
  },
  credencial: {
    label: 'Credencial',
    handle: 'Full Stack Python · Talento Digital',
    href: 'https://www.acreditta.com/credential/8f73702b-0511-40f1-80b0-6224284c8eab',
    nota: 'Verificable',
  },
  diploma: {
    label: 'Diploma',
    handle: 'Full Stack Python Trainee · IT Academy by Kibernum',
    // Copia del PDF original con los metadatos limpios: el original llevaba
    // como autor el nombre de quien lo maquetó. El contenido es idéntico.
    href: '/assets/diploma-full-stack-python.pdf',
    nota: 'PDF · 462 horas',
  },
}

/** Atributos obligatorios en todo enlace que sale del sitio. */
export const EXTERNO_ATTRS = { target: '_blank', rel: 'noopener noreferrer' }
