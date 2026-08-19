# Estado de Implementación — Portafolio Felipe Droguett
**Fecha:** 2026-06-07  
**Sesión:** Bloque 1 completo + Bloque 2 completo + Auditoría estratégica profunda

---

## Identidad validada (resultado de la auditoría)

### Narrativa central aprobada
> "Primero entendí los negocios. Después aprendí las herramientas."

### Por qué esta formulación es la correcta
La ventaja de Felipe no está en la profundidad técnica de ninguna disciplina individual (no es el mejor desarrollador, ni el mejor marketer, ni el mejor creador de contenido). Está en el tipo de comprensión que produce haber operado negocios reales mientras tenía que resolver cada capa por su cuenta, sin equipo.

Esto es diferente a:
- **Saber un poco de muchas cosas** → generalista sin criterio
- **Conectar especialistas** → integrador que necesita equipo
- **Ejecutar múltiples áreas** → operador sin perspectiva estratégica
- **Entender cómo funciona un negocio porque vivió los problemas** → lo que Felipe realmente es

### Consecuencia concreta para el cliente
El cliente deja de ser la capa de integración entre especialistas. No necesita explicar cómo funciona su negocio antes de recibir ayuda. Las soluciones en una capa no rompen las otras porque quien las propone ya fue responsable de todas simultáneamente.

### Nota sobre contenido
Producción de contenido (grabación, edición, guionado, publicación) es un dominio primario en el trabajo actual — no una herramienta secundaria. Debe aparecer como dominio propio en Skills y estar visible en el Hero. Esto fue corregido en la implementación.

---

## Implementado en esta sesión

### Bloque 1 — Sin aprobación de copy requerida

| Componente | Cambio | Estado |
|---|---|---|
| `Roadmap.jsx` id:3 | "Co-Fundador & Lead de E-commerce" → "Lead de Digitalización & Crecimiento" | ✅ HECHO |
| `Skills.jsx` | Eliminado grupo "Infraestructura & Seguridad" (Linux Hardening, Bash Scripting, Auditoría de Redes, SSH & Permisos) | ✅ HECHO |
| `Skills.jsx` | `md:grid-cols-3` → `md:grid-cols-2` | ✅ HECHO |
| `Skills.jsx` | `secondaryLabel: 'En formación (Back-End)'` → `'Scripts & automatización'` | ✅ HECHO |
| `About.jsx` | Eliminado item `{ label: 'El Mañana:', text: '...' }` del primer pilar | ✅ HECHO |
| `Hero.jsx` | Métrica label: `'ventas/mes escalados'` → `'ventas/mes · TT · pico 2025'` | ✅ HECHO |

### Bloque 2 — Hero copy (aprobado tras auditoría estratégica)

| Elemento | Antes | Después | Estado |
|---|---|---|---|
| Badge | "Consultor Digital & Desarrollador Web" | "10 años dentro de negocios reales" | ✅ HECHO |
| H2 | "10 años operando negocios. Ahora los construyo con código." | "No aprendí negocios desde la tecnología. Aprendí tecnología trabajando en negocios." | ✅ HECHO |
| Lead | Párrafo único sobre escalar negocios con tecnología | 3 párrafos: experiencia previa → dominios aprendidos → cierre ("Las herramientas cambiaron. Los problemas de negocio siguen siendo los mismos.") | ✅ HECHO |

---

## Pendiente — Bloque 3

### `src/components/About.jsx`
Cambios aprobados en sesión de implementación, no ejecutados aún:
- **Título sección:** "¿Qué hago?" → "Cómo funciona diferente"
- **Subtítulo:** "Fusión de 10 años..." → "Operó estos sistemas antes de construirlos. Eso cambia lo que ve."
- **Tres nuevos pilares** con copy orientado a la perspectiva del cliente (no a las disciplinas de Felipe)
  - Pilar 1: Experiencia operativa real (antes de la tecnología)
  - Pilar 2: Diagnóstico antes de solución
  - Pilar 3: Ejecución sin delegación

### `src/components/Skills.jsx`
- Reorganizar chips: quitar "Gestión Logística" y "Liderazgo de Equipos" del grupo primario
- Quitar "Shopify" (sin proyecto que lo respalde)
- Actualizar títulos de columnas para reflejar la narrativa validada
- Considerar hacer "Producción de Contenido" un chip explícito en el grupo 1

### `src/components/Roadmap.jsx`
- `id:1` title: "Desarrollador Web & Consultor Digital" → título aún pendiente de decidir (propuesta previa: "Operador Digital")
- `id:1` sub: actualizar para reflejar el scope completo actual (contenido + desarrollo + ads)

### `src/components/Projects.jsx` (tarjeta Tokyo Tunning)
- Descripción: cambiar de descripción técnica a narrativa de diagnóstico + ejecución
- Subtitle/attribution: aclarar que TT es cliente, no negocio propio

### `src/components/Contact.jsx`
- Título: "¿Tienes un proyecto en mente?" → copy orientado a diagnóstico
- Subtítulo: propuesta previa: "Antes de proponer algo, hablamos de lo que está pasando."
- **Bloqueante:** implementar después de verificar que el Hero nuevo funciona

---

## Pendiente — Infraestructura

| Tarea | Prioridad | Notas |
|---|---|---|
| Deploy a Netlify | Alta | Nunca se ha hecho el primer deploy |
| `Footer.jsx`: `text-slate-500` → `text-slate-400` | Media | Fix de contraste accesibilidad (Lighthouse 94→100) |
| `Projects.jsx`: `loading="lazy"` en imágenes | Media | Performance |
| `index.html`: preconnect Google Fonts | Media | Performance |
| Actualizar `/public/assets/proyecto-portfolio.jpg` | Media | Muestra el sitio Bootstrap antiguo |
| Foto personal | Baja | No integrada aún |
| GA4 analytics | Baja | Script no agregado |
| Verificar URL LinkedIn | Baja | Actual: `linkedin.com/in/fdroguetto/` |

---

## Decisiones estratégicas archivadas

### Sobre el posicionamiento
- "Consultor", "integrador", "fractional", "operador embebido", "función digital completa" → ninguna de estas etiquetas captura la identidad correctamente
- La identidad no es una categoría de mercado — es un orden de aprendizaje: negocio primero, herramientas después
- Esta formulación es robusta en el tiempo: si el stack cambia, la narrativa sigue siendo verdad

### Sobre Tokyo Tunning
- TT es un **cliente**, no negocio propio de Felipe (S3 del Master Decision Record)
- $15M/mes = revenue total del negocio de TT; el canal e-commerce específico = $937K/mes promedio (5.5% del total)
- La métrica es válida como indicador de escala del negocio acompañado, no como atribución directa al sistema de e-commerce

### Sobre contenido
- Producción audiovisual (grabación, edición, guionado, publicación) es trabajo diario pagado en el rol actual
- Lleveva presente desde el periodo freelance 2021
- El portafolio anterior la relegaba a "Herramientas" (DaVinci Resolve como chip) — esto fue identificado como error de representación

### Sobre el Hero
- Hero anterior respondía "¿quién es Felipe?" → nuevo Hero responde "¿por qué debería importarme Felipe?"
- El beneficio central para el cliente: no necesita ser la capa de integración entre especialistas
- El cierre del lead ("Las herramientas cambiaron. Los problemas de negocio siguen siendo los mismos.") fue propuesto por el usuario — es la formulación más sólida de la sesión

---

## Archivos de referencia

| Archivo | Contenido |
|---|---|
| `PORTFOLIO_V2_MASTER_DECISION_RECORD.md` | Decisiones aprobadas y pendientes de la auditoría anterior |
| `PORTFOLIO_POSITIONING_AUDIT.md` | Auditoría original — 3 identidades en conflicto identificadas |
| `PORTFOLIO_V2_STRATEGY.md` | Propuesta de posicionamiento "Digital Operations Consultant" (superada) |
| `IMPLEMENTATION_PLAN.md` | 15 ítems en 3 fases |
| `MINIMUM_VIABLE_REPOSITIONING.md` | Bloque 1 + Bloque 2 como mínimo viable |
| `Mi_Historia.md` | Historia completa de Felipe — fuente primaria de la identidad |
| `CASO_TOKYO_TUNNING.md` | Case study completo con ADRs y métricas |
| `Plan_Maestro.md` | Plan de migración a Vietnam + productos aspiracionales (Make + OpenAI, SEO local) |
