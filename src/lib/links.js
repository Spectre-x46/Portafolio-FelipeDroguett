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
 *   credencial  → validación formal
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
}

/** Atributos obligatorios en todo enlace que sale del sitio. */
export const EXTERNO_ATTRS = { target: '_blank', rel: 'noopener noreferrer' }
