# BACKLOG EJECUTABLE — AUDITORÍA 2026-08  ·  v3

**Documento maestro:** `PORTFOLIO_AUDIT_2026-08.md`
**Fecha:** 2026-08-19 · **v2:** revisión estratégica · **v3:** ejecución local
**Uso:** ejecutar sprints sin repetir la investigación. Basta con *"Ejecuta Sprint 0"* o *"Ejecuta PORT-P0-005"*.

---

# ⚑ REGISTRO DE EJECUCIÓN LOCAL — 2026-08-19

**Alcance ejecutado:** Sprints 0, 1, 2, 3 y hardening técnico. **Sólo en local.**
**NO ejecutado (por instrucción):** Sprint 1B (GitHub), Sprint 4 (GitHub), Sprint 5 (LinkedIn), dominio, email, rotación de secretos.
**Sin push, sin deploy, sin remoto, sin cambios en Netlify, GitHub, LinkedIn ni en el repositorio de El Bajón.**

## Checkpoints locales

```
860051b  hardening: a11y, foco, imagen social, enlaces duplicados, escala base
5f79530  sprint 0-3: reposicionamiento, dos case studies, sistema de diseño
1e8b5bb  checkpoint: baseline pre-auditoría v2   ← punto de retorno
```
`git remote -v` está vacío a propósito. Para volver atrás: `git reset --hard 1e8b5bb`.

## Estado de los tickets

| Ticket | Estado | Nota |
|---|---|---|
| `INFRA-P0-001` | ✅ **parcial** | Repositorio Git local inicializado con 3 checkpoints. **Falta el remoto** (D-03) |
| `PORT-P0-002` | ✅ hecho | `href="/assets/favicon.svg"` + favicon redibujado en la paleta nueva |
| `PORT-P0-003` | ✅ hecho | `og-image.png` 1200×630 generada y enlazada, con `og:image:*` y `twitter:image` |
| `PORT-P0-004` | ✅ hecho | `:focus-visible` global + variante oscura sobre el enlace de salto |
| `PORT-P0-005` | ✅ hecho | Todo claim fechado, con herramienta y lab/campo. Ver §Metodología abajo |
| `PORT-P0-006` | ✅ hecho | `<title>`, description, Schema y `knowsAbout` reescritos. **Sin título-eslogan** |
| `PORT-P0-007` | ✅ hecho | Tarjeta "Este Portafolio" y `proyecto-portfolio.jpg` eliminados |
| `PORT-P0-008` | ✅ hecho | Formación acreditada con enlace de verificación a Acreditta |
| `PORT-P2-009` | ✅ hecho | Sitemap con las 3 rutas y `lastmod` real |
| `PORT-P3-010` | ✅ hecho | Logo → `/` con objetivo táctil de 44px |
| `PORT-P0-101` | ✅ hecho | Entrada "actualidad" reescrita con las tres capas |
| `PORT-P0-102` | ✅ hecho | `Skills` → `Capabilities`: 4 capacidades, cada una con evidencia enlazada |
| `PORT-P1-103` | ⚠️ **parcial** | El marketing tiene capacidad propia y capítulos «Atraer» y «Medir» en el caso de TT. **No** tiene case study propio (depende de D-02 opción B completa) |
| `PORT-P1-104` | ✅ hecho | Formación jerarquizada, cursos cortos agrupados, credencial enlazada |
| `PORT-P2-105` | ✅ hecho | Colapso del timeline en **todos** los anchos. 7 entradas → 2 visibles |
| `PORT-P2-106` | ⚠️ **requiere confirmación** | Entrada id 4 cerrada en «Feb 2026» para eliminar el doble «Actualidad». **Asunción mía** |
| `PORT-P1-107` | ✅ hecho | Hero sin eslogan: nombre + descripción factual + evidencia |
| `CASE-P0-201` | ✅ hecho | Case study del agente, 9 capítulos, anonimizado |
| `CASE-P1-202` | ✅ hecho | Arquitectura por capas, en texto estructurado (no SVG: más legible y accesible) |
| `CASE-P1-203` | ✅ hecho | Embudo de evaluación 3.990 → 48.937 → 500 |
| `CASE-P0-204` | ✅ hecho | `/caso/agente-comercial` + tarjeta + sitemap |
| `CASE-P1-205` | ❌ **anulado** | Sustituido: el caso de TT termina en el problema operativo y **no** enlaza al agente (§18 de tus instrucciones) |
| `CASE-P0-206` | ✅ hecho | Revisión de confidencialidad aplicada. Ver §Anonimización abajo |
| `PORT-P1-301` | ✅ hecho | Hero → Trabajo → Criterio → Capacidades → Trayectoria → Contacto |
| `PORT-P1-302` | ✅ hecho | «Leer el caso» es botón de 44px; el enlace de 190×16 px ya no existe |
| `PORT-P1-303` | ✅ hecho | La tarjeta de evidencia se renderiza en **todos** los anchos |
| `PORT-P1-304` | ✅ hecho | Caso de TT reestructurado en 6 capítulos longitudinales |
| `PORT-P1-305` | ⚠️ **parcial** | Hay evidencia estructural (tablas, embudos, flujo, arquitectura, deuda técnica). **Faltan capturas reales** — ver deuda |
| `PORT-P1-306` | ✅ hecho | **0 fallos de contraste** en las 3 rutas (antes 36) |
| `PORT-P1-307` | ✅ hecho | Sólo queda un enlace en línea dentro de un párrafo (exento por WCAG 2.5.8) |
| `PORT-P2-308` | ✅ hecho | Escala modular de 7 pasos, suelo real de 13px |
| `PORT-P3-309` | ⏸️ no hecho | La miniatura de TT sigue siendo la misma captura |
| `PORT-P3-310` | ✅ hecho | Enlace «Saltar al contenido» con foco propio |
| `PORT-P2-604` | ✅ **adelantado** | Code splitting: los casos son chunks aparte |
| `PORT-P2-607` | ✅ **adelantado** | `prefers-reduced-motion` real, ahora sí gobierna el JS |
| `PORT-P2-608` | ✅ **adelantado** | Meta por ruta sin añadir dependencias (`useSeo`) |
| `DESIGN-P2-601/602` | ✅ **adelantado parcial** | Tokens completos y dirección visual nueva. Ver §Dirección de arte |
| `GH-*`, `LI-*` | ⏸️ **no ejecutado** | Fuera del alcance de esta sesión por instrucción |
| `INFRA-P1-701/702/703` | ⏸️ diferidos | Dominio, email y rotación de secretos |

## Correcciones al propio backlog (pediste que las hiciera)

| # | Corrección |
|---|---|
| 1 | **«Medir» no sustituye a «Atender».** Los cinco movimientos canónicos siguen siendo **Vender → Atraer → Convertir → Atender → Confiar**. «Medir» es transversal y existe únicamente como **capítulo 04 dentro del caso de Tokyo Tunning**, no como movimiento global |
| 2 | **Metodología de métricas.** Se eliminó la fórmula «940 ms campo» aplicada a un dato de Lighthouse. Ahora: Lighthouse = **laboratorio** siempre; y se dice explícitamente que **un 100 de Lighthouse no demuestra conformidad WCAG** |
| 3 | **Anonimización del agente.** Se elimina `CASE-P1-205` (enlace cruzado). Los dos casos no se enlazan en ninguna dirección |
| 4 | **Hardening separado de dirección artística.** Los tickets de rendimiento, accesibilidad y build ya no dependen del Sprint 6 |
| 5 | **Conteo.** 62 tickets → **35 ejecutados o adelantados**, 3 parciales, 1 anulado, 23 fuera de alcance o diferidos |

## Metodología de métricas aplicada en el sitio

Toda cifra pública lleva ahora: qué se midió · cuándo · con qué herramienta · laboratorio o campo · limitación cuando la hay. Ejemplos reales del sitio:

```
0,3 s      LCP · Lighthouse, laboratorio · jun 2026
0,00       CLS · medido de nuevo hoy, ago 2026 · sigue en cero
100/100    Lighthouse Accessibility · laboratorio · jun 2026
           + nota explícita: un 100 de Lighthouse NO demuestra conformidad WCAG,
             y al remedir hoy da 96 con 18 avisos de contraste
27,6×      ROAS · Meta Ads · CyberDay, jun 2026 · 3 días
$800.000   estimación del negocio por revisión manual, no dato de plataforma
```

## Anonimización del agente — comprobado

No aparece en ninguna parte del case study: nombre del cliente · cifras de contrato · personas · identificadores de workflow · rutas o URLs de webhook · ids de ejecución · puertos · credenciales · conversaciones · corpus · código propietario · datos bancarios.

Sí aparece, porque se pidió que la función se entendiera: que existe un **webhook de entrada desde el CRM**, descrito por su papel en el flujo y sin ningún dato que permita alcanzarlo.

## Deuda técnica que queda abierta

| # | Deuda | Prioridad |
|---|---|---|
| D1 | **Sin prerender.** Sigue siendo render en cliente puro. `PORT-P2-605` no ejecutado | P2 |
| D2 | **Una sola imagen fotográfica en todo el sitio.** La evidencia es estructural. Faltan capturas reales (panel de campañas, antes/después, tienda) que sean seguras de publicar | P1 |
| D3 | **El marketing no tiene case study propio.** Vive como capacidad y como capítulos del caso de TT | P1 · D-02 |
| D4 | **Página larga en móvil:** ~12 viewports a 390px (antes ~10,5). El contenido creció | P3 |
| D5 | **CLS de 0,0132** en el build local, probablemente por el intercambio de fuentes. Bajo el umbral de 0,1, pero no es cero | P3 |
| D6 | **Imágenes sin `srcset` ni WebP.** `PORT-P2-606` no ejecutado | P2 |
| D7 | **Sin CSP.** `PORT-P3-609` no ejecutado | P3 |
| D8 | La miniatura de Tokyo Tunning sigue sin recapturar | P3 |

---

## Cambios v1 → v2

| # | Cambio |
|---|---|
| B-01 | **D-01 aprobada** → Sprint 2 desbloqueado (case study anonimizado) |
| B-02 | **Nuevo Sprint 1B — GitHub Fase A**, ejecutable en paralelo sin esperar a los case studies |
| B-03 | **Sprint 4 pasa a GitHub Fase B** (integración post case study) |
| B-04 | **Sprint 3 renombrado a "Diseño estructural"** (D-07A aprobado) y con alcance ampliado |
| B-05 | **Sprint 6 pasa a "Dirección de arte"** (D-07B a reevaluar) |
| B-06 | **Sprint 5 (LinkedIn) sube a P0** por el hallazgo F-047 |
| B-07 | **9 tickets nuevos**: formación acreditada, superficie de marketing, capacidad de contenido, regla de evidencia, LinkedIn ampliado, caso longitudinal de TT |
| B-08 | **`PORT-P0-006` reformulado**: ya no asume "ingeniería"; depende de D-02 |
| B-09 | **`PORT-P0-102` reformulado**: `Skills` → "capacidades con evidencia", sin subordinar marketing |
| B-10 | Estados recalculados: **31 LISTOS** (antes 24) |

## Convención

```
PORT-*   portfolio (código y contenido del sitio)
GH-*     GitHub (perfil y repositorios)
LI-*     LinkedIn
INFRA-*  infraestructura, versionado, dominio, deploy
CASE-*   case studies (contenido nuevo)
DESIGN-* dirección de arte y sistema de diseño
```

| Estado | Significado |
|---|---|
| `LISTO` | Ejecutable ya, sin decisiones previas |
| `BLOQUEADO` | Requiere una decisión de Felipe (§39 del maestro) |
| `DEPENDE` | Requiere que otro ticket se complete antes |

---

# SPRINT 0 — BASELINE TÉCNICO Y CONTRADICCIONES CRÍTICAS

---

### `INFRA-P0-001` · Versionar el portfolio en producción
**Estado:** `BLOQUEADO` (D-03) · **P0** · Riesgo Bajo · **F-008**

**Problema.** El directorio de trabajo no es un repositorio Git. El repo público `Portafolio-FelipeDroguett` apunta a otro directorio con el sitio *anterior* (3 commits, últ. 2026-01-24, cambios sin commitear). El CSS en producción (`index-ru_y50zl.css`) no coincide con el `dist/` local (`index-Cpr8_pVU.css`, 7-jun).

**Propuesta.** Resolver D-03 → `git init` + `.gitignore` (`node_modules/`, `dist/`) → commit inicial → conectar remoto → verificar que Netlify construye desde ahí.
**Aceptación.** `git log` con historial · `git remote -v` configurado · Netlify construye del repo · `git status` limpio = lo que hay en producción.

---

### `PORT-P0-002` · Reparar la ruta del favicon
**Estado:** `LISTO` · **P0** · Riesgo Nulo · **F-018** · 2 min

**Problema.** `index.html:47` declara `href="/favicon.svg"`; el archivo vive en `public/assets/favicon.svg`. La regla SPA `/* → /index.html 200` lo captura. Verificado: `GET /favicon.svg` → `200 text/html`, 2590 bytes.
**Propuesta.** `href="/assets/favicon.svg"`, o mover el archivo a `public/favicon.svg`.
**Aceptación.** `curl -I .../favicon.svg` devuelve `image/svg+xml`.

---

### `PORT-P0-003` · Crear e integrar `og:image`
**Estado:** `DEPENDE` (de `PORT-P0-006`) · **P0** · Riesgo Nulo · **F-006** · 30 min

**Problema.** No existe `og:image`. `twitter:card="summary_large_image"` está declarado sin imagen → tarjeta rota. Cada enlace compartido llega sin preview.
**Propuesta.** PNG/JPG 1200×630 en `public/assets/og-image.jpg` (<300 KB) con nombre, posicionamiento (post D-02) y una métrica ancla. Añadir `og:image`, `og:image:width`, `og:image:height`, `og:image:alt`, `twitter:image`.
**Aceptación.** Preview correcto en el Post Inspector de LinkedIn y al pegar el enlace en WhatsApp.

---

### `PORT-P0-004` · Estilos de foco visibles
**Estado:** `LISTO` · **P0** · Riesgo Nulo · **F-013** · 10 min

**Problema.** Cero reglas `:focus` en toda la hoja de estilos. Outline por defecto `rgb(16,16,16)` sobre `#020617` → invisible. Incumple WCAG 2.4.7.
**Propuesta.** En `src/index.css`, `@layer base`:
```css
:focus-visible { outline: 2px solid #22D3EE; outline-offset: 3px; border-radius: 4px; }
:focus:not(:focus-visible) { outline: none; }
```
**Aceptación.** Foco visible con contraste ≥3:1 en los 17 enlaces · no aparece al clicar con ratón.

---

### `PORT-P0-005` · Fechar y contextualizar los claims técnicos
**Estado:** `LISTO` · **P0** · Riesgo Bajo · **F-005** · 15 min

**Problema.** `WCAG 100/100` (×3) y `LCP 300ms` (×2) en presente y sin fecha (`Projects.jsx:59-60`, `Roadmap.jsx:16,39`, case study). Verificado hoy: Lighthouse mobile sobre `tokyotunning.cl` da **Accessibility 96 con 18 fallos de contraste**, Best Practices 77, LCP real 940 ms.
**Propuesta.** No eliminar, fechar y declarar método:
```
WCAG AA · Lighthouse 100/100 — medido jun-2026, entrega de reconstrucción
LCP 300 ms (lab) · 940 ms (campo, ago-2026)
```
Añadir nota breve en el case study sobre por qué las métricas derivan tras la entrega.
**Aceptación.** Ningún claim numérico sin fecha ni método.

---

### `PORT-P0-006` · Actualizar metadatos de posicionamiento
**Estado:** `BLOQUEADO` (D-02) · **P0** · Riesgo Bajo · **F-017** · 15 min
*(reformulado en v2: la v1 asumía posicionamiento "ingeniería")*

**Problema.** `index.html:8-40` mantiene *"Consultor Digital & Desarrollador Web"* en `<title>`, `meta description`, `og:*`, `twitter:*` y `Person.jobTitle`. `knowsAbout` no incluye ninguna tecnología del trabajo actual.
**Propuesta.** Aplicar el **TÍTULO CORTO** que resulte de D-02 (§25.1 del maestro):
- Opción A → *Product Engineer · e-commerce y sistemas de IA*
- Opción B → *Construyo sistemas de venta, de la campaña al código*

Ampliar `knowsAbout` con: `Node.js`, `n8n`, `LLM`, `OpenAI API`, `AI Agents`, `REST APIs`, `Automation`, `CRM`, `Marketing Analytics`, `Content Production`.
**Aceptación.** `<title>`, description y Schema describen al mismo profesional que el hero, y no subordinan ninguna de las tres capas.

---

### `PORT-P0-007` · Eliminar la tarjeta "Este Portafolio"
**Estado:** `LISTO` · **P0** · Riesgo Nulo · **F-003** · 5 min

**Problema.** `Projects.jsx:102-137`. La tarjeta dice *"React + Vite + Tailwind + Framer Motion"* pero `proyecto-portfolio.jpg` muestra el sitio **anterior**: logo `FD.dev`, *"Consultoría de Negocios & Desarrollo Tecnológico"* y el bloque decorativo `const felipe = { motto: "Code that sells..." }`.
**Propuesta.** Eliminar el bloque y el asset. No reemplazar la imagen.
**Aceptación.** Tarjeta eliminada · `proyecto-portfolio.jpg` fuera de `public/assets/` · grid lateral recompuesto sin hueco.

---

### `PORT-P0-008` · Corregir la formación acreditada en el sitio  🆕
**Estado:** `LISTO` · **P0** · Riesgo Nulo · **F-046** · 15 min

**Problema.** Dos lugares describen como pendiente una formación ya acreditada:
- `Roadmap.jsx:16` — *"Examen final Full Stack Python… aprobado Mayo 2026. Certificación oficial: Agosto 2026."*
- `Roadmap.jsx:86` — *"Full Stack Python · Talento Digital — Desafío Latam · Nov 2024 — Ago 2026"* (formación en curso)

**Verificado (Acreditta, 2026-08-19):**
```
Titular ...... Felipe Orlando Droguett Ortiz
Credencial ... BOOTCAMP DESARROLLO APLICACIONES FULL STACK PYTHON TRAINEE
Emisor ....... Talento Digital para Chile (cuenta verificada)
Emisión ...... 04-08-2026 · sin caducidad · registro blockchain
URL .......... acreditta.com/credential/8f73702b-0511-40f1-80b0-6224284c8eab
```

**Propuesta.**
1. Retirar de `Roadmap.jsx:16` toda referencia a examen/certificación pendiente.
2. En la tarjeta de formación: fecha de finalización real y **enlace de verificación** a Acreditta (`target="_blank" rel="noopener noreferrer"`).
3. Añadir microcopy discreto de verificación (p. ej. *"credencial verificable"*), **sin** convertirlo en argumento principal.

**Restricción (§16.3 del maestro).** El nombre oficial incluye "TRAINEE". **No** debe aparecer en el hero ni con peso tipográfico alto: fijaría un techo por debajo de lo que el trabajo demuestra. Presencia discreta + enlace.
**Aceptación.** Cero referencias a formación pendiente · enlace de verificación funcional · la credencial no ocupa posición jerárquica superior a ningún proyecto.

---

### `PORT-P2-009` · Actualizar `sitemap.xml`
**Estado:** `LISTO` · P2 · Riesgo Nulo · **F-031** · 5 min
**Problema.** Solo lista `/`. Falta `/caso-tokyo-tunning`. `lastmod: 2026-01-23`.
**Propuesta.** Añadir rutas y actualizar `lastmod`.

---

### `PORT-P3-010` · Corregir el enlace del logo
**Estado:** `LISTO` · P3 · Riesgo Nulo · **F-036** · 1 min
**Problema.** El logo de `Navbar.jsx` usa `href="#"`.
**Propuesta.** `href="/"` o scroll al top.

---

# SPRINT 1 — CONTENIDO, FORMACIÓN Y POSICIONAMIENTO

---

### `PORT-P0-101` · Reescribir la entrada "ACTUALIDAD" del timeline
**Estado:** `LISTO` · **P0** · Riesgo Bajo · **F-002** · 45 min

**Problema.** `Roadmap.jsx:11-19` describe como trabajo actual la mantención de TokyoTunning.cl y una certificación pendiente. Omite julio y agosto. Referencia: `mvp-agente-wf-first/ESTADO.md` modificado 2026-08-19 04:35.
**Propuesta.** Reescribir `title`, `sub` y `body` incorporando las tres capas actuales:
- Sistema conversacional comercial: arquitectura por capas, enrutamiento multi-modelo, suite de evaluación.
- Integración CRM y automatización de workflows.
- Marketing y contenido operados como sistema (auditoría, plan anual, SOPs, pricing).

Mantener el tono actual (concreto, sin buzzwords). **Sin identificar cliente ni citar cifras de contrato** (D-01).
**Aceptación.** Un lector externo dice correctamente en qué trabajas hoy · aparecen las tres capas · sin datos sensibles (§38.2 del maestro).

---

### `PORT-P0-102` · Sustituir `Skills` por capacidades con evidencia
**Estado:** `BLOQUEADO` (D-02) · **P0** · Riesgo Bajo · **F-007, F-048, F-049, F-050** · 1,5 h
*(reformulado en v2: la v1 subordinaba el marketing — corregido)*

**Problema.**
1. `Skills.jsx:8-23` omite Node.js, n8n, OpenAI/Structured Outputs, APIs REST, testing, CRM/Kommo, observabilidad, Playwright.
2. Destaca `HTML5 / CSS3`, `Bootstrap 5` y `DaVinci Resolve`.
3. **Reduce a 4 chips** un sistema de marketing documentado: `meta-google-audit/` (13 docs), `MIE_MARKETING_INTELLIGENCE_ENGINE.md`, `PLAN_MARKETING_ANUAL_2026-2027.md`, `SOP_CAMPANAS`, pipeline de precios de CyberDay, Agency OS.
4. **Representa la producción de contenido solo por su herramienta** pese a ser el canal que originó el crecimiento del caso principal.
5. Cuatro de ocho afirmaciones profesionales no tienen ninguna evidencia enlazable (§18.2).

**Propuesta.** Sustituir la lista de chips por **capacidades con evidencia adjunta**. Cada bloque: nombre del tipo de problema + 1 línea + **enlace a la evidencia**. Estructura según D-02:

*Opción A (proyectos primero):*
```
Sistemas de IA y automatización   → caso del agente
Producto digital y e-commerce      → caso Tokyo Tunning
Adquisición y crecimiento          → capítulo CyberDay
Contenido para adquisición         → capítulo de contenido
```
*Opción B (cinco movimientos):* cada movimiento es la capacidad, con su enlace.

**Reglas obligatorias.**
- **`DaVinci Resolve` sale** de las competencias técnicas destacadas. En su lugar: *"producción de contenido orientada a adquisición"* como **capacidad**. La herramienta, a lo sumo, nota al pie.
- **`Bootstrap 5` sale.**
- **Ninguna capacidad sin evidencia enlazable.** Si no hay evidencia, la capacidad se retira hasta tenerla.
- **Marketing y contenido no se subordinan.** Ocupan el mismo nivel gramatical que las capacidades técnicas.

**Aceptación.** Refleja el `package.json` y los `src/` reales · cada capacidad tiene enlace · cero capacidades huérfanas · marketing y contenido con superficie propia.

---

### `PORT-P1-103` · Superficie propia para marketing y contenido  🆕
**Estado:** `BLOQUEADO` (D-02) · **P1** · Riesgo Bajo · **F-048, F-049** · 2 h

**Problema.** Existe evidencia sistemática de marketing y contenido (§3.3, §3.4 del maestro) y **cero superficie** donde verla. El visitante 4 (cliente de marketing) es el peor servido en relación con la evidencia disponible.
**Propuesta.** Según D-02:
- **Opción A** → capítulo "Medir" dentro del caso de Tokyo Tunning (§14.3), con CyberDay, pipeline de precios, ROAS 27:1 y CPA $70.034 fechados.
- **Opción B** → movimiento 2 ("Atraer") y movimiento 4 ("Medir") como secciones propias del home, cada una con su evidencia.

Material disponible: índice de la auditoría Meta/Google (estructura, **no** contenido), metodología del plan anual, KPI agregados de IG/FB/TikTok, análisis de virales, el hecho de que existe un sistema editorial con schema de datos.
**Restricción.** Sin cifras de contrato, sin nombres de cliente en fase 1, sin pricing del Agency OS.
**Aceptación.** Un cliente de marketing entiende **cómo trabajas**, no solo qué resultado obtuviste · al menos 3 evidencias enlazadas o mostradas.

---

### `PORT-P1-104` · Reordenar y jerarquizar la formación  🆕
**Estado:** `LISTO` · **P1** · Riesgo Bajo · **F-051** · 45 min

**Problema.** `Roadmap.jsx:85-92` presenta 6 formaciones en tarjetas de igual peso, ninguna con enlace de verificación, y con dos marcadas como `highlight` sin criterio evidente.
**Propuesta** (§16.2 del maestro):
- **Home:** máximo 2, presentadas **junto a la evidencia que validan** (Full Stack Python junto a la capa de producto digital; Téc. Admin. Empresas — Marketing junto a la capa de negocio). No en bloque aislado.
- **Sección Formación:** las 6, con las tres de marketing (Google 2022, Community Manager 2021, Meta Ads 2020) **agrupadas** bajo *"formación continua en marketing digital, 2020-2022"*.
- **Enlace de verificación:** solo Full Stack Python lo tiene → usarlo.
- **Añadir la fila que falta:** los sistemas de IA no proceden de ninguna formación formal — se aprendieron en el problema. Decirlo refuerza la narrativa central.

**Aceptación.** Ninguna formación con más peso visual que un proyecto · el enlace de Acreditta presente · las tres formaciones cortas agrupadas.

---

### `PORT-P2-105` · Colapsar el timeline también en desktop
**Estado:** `LISTO` · P2 · Riesgo Bajo · **F-026, F-011** · 20 min

**Problema.** `Roadmap.jsx:124` usa `hidden md:block` para los items `optional` y `Roadmap.jsx:181` hace el toggle `md:hidden`. En desktop se muestran siempre los 7 sin poder ocultar. El Roadmap ocupa 2.381 px = 39% de la página.
**Propuesta.** Misma lógica de colapso en todos los breakpoints: 4 entradas expandidas + 3 plegadas. Retirar `md:hidden` del botón.
**Restricción.** **No eliminar** Starken, La Polar ni Falabella: son la prueba de que tu relación con el negocio no nació recientemente. Solo reducir peso visual.
**Aceptación.** El toggle funciona en desktop y móvil · Roadmap <25% de la altura de página.

---

### `PORT-P2-106` · Resolver la duplicidad de "Actualidad"
**Estado:** `LISTO` · P2 · Riesgo Nulo · **F-033** · 10 min
**Problema.** Dos entradas declaran periodo actual: id 1 (`Feb 2026 — Actualidad`) e id 4 (`Sep 2021 — Actualidad`).
**Propuesta.** Cerrar el rango de id 4 o reetiquetarlo como actividad continua diferenciada.

---

### `PORT-P1-107` · Ajustar el hero al posicionamiento
**Estado:** `BLOQUEADO` (D-02) · **P1** · Riesgo Bajo · 30 min

**Problema.** `Hero.jsx:78-80` cierra con *"estrategia, operación y tecnología"* — abstracto, sin señal de las capas actuales.
**Propuesta.** Ajustar el segundo párrafo del lead según el plano **A** de §18.3 (quién soy). **Restricciones vinculantes:**
- **El hero NO enumera disciplinas.** Ni seis, ni tres.
- **Sin slogan paraguas** ("transformo negocios con tecnología" y equivalentes → descartar, §37 N14).
- **Sin seniority atribuido** ("senior", "experto") → §37 N15.
- **Sin crecer en número de palabras** (el lead ya son ~60).
- **Conservar la voz actual** — es un activo (§11.1).

**Aceptación.** En 15 s el visitante sabe qué tipo de problemas resuelves · el hero no contiene ninguna lista · pasa los 5 tests de §45 del brief.

---

# SPRINT 1B — GITHUB FASE A (LIMPIEZA INMEDIATA)  ·  EN PARALELO 🆕

> **No depende de los case studies.** Ejecutable desde el primer día.

---

### `GH-P0-1B1` · Reescribir la bio
**Estado:** `BLOQUEADO` (D-02, solo para el texto exacto) · **P0** · Riesgo Nulo · **F-004, F-035** · 5 min

**Problema.** La bio completa del perfil es **"I may be slow to respond."** Es lo primero que lee quien llega desde el portfolio (enlazado 4 veces) y contradice el *"Respondo en menos de 24 horas"* de Contact.
**Propuesta.** Una línea concreta alineada con el TÍTULO CORTO de D-02. Sin autoatribución de seniority.
**Aceptación.** La bio describe capacidad profesional · contradicción X1 (§19.3) resuelta.

> **Nota.** Si se quiere avanzar antes de D-02: retirar la frase actual es ya una mejora neta. Sustituirla por una línea neutra y factual no requiere decisión.

---

### `GH-P0-1B2` · README de perfil — versión mínima
**Estado:** `LISTO` · **P0** · Riesgo Bajo · **F-009** · 45 min

**Problema.** No existe README de perfil. Es el único mecanismo que permite narrar el trabajo privado **sin publicar código de cliente**.
**Propuesta.** Crear `Spectre-x46/Spectre-x46` con versión mínima:
- Qué construyes hoy (1 párrafo, las tres capas).
- Stack real agrupado.
- Nota explícita: parte del trabajo está en repositorios privados de cliente.
- Enlaces a portfolio y LinkedIn.
- **Sin** enlaces a case studies todavía (llegan en Fase B).

**Aceptación.** README visible en el perfil · coherente con el portfolio · sin exponer código ni datos de cliente.

---

### `GH-P0-1B3` · Cambiar los repositorios fijados
**Estado:** `DEPENDE` (de `GH-P0-1B2`) · **P0** · Riesgo Nulo · 5 min

**Problema.** Fijados: `tplink-monitor-mode`, `Portafolio-FelipeDroguett` (contiene el sitio **anterior**), `Buscador_HTB`, `Codigo-Morse`. Cuentan la historia de un entusiasta autodidacta de ciberseguridad, no la del trabajo real.
**Propuesta.** Despinear los de curso y el del sitio anterior. Fijar herramientas propias defendibles (`tplink-monitor-mode` lo es) y el repo del portfolio una vez resuelto D-03.
**Aceptación.** Ningún repo fijado con nombre de entrega de curso · ninguno con una versión obsoleta del portfolio.

---

### `GH-P1-1B4` · Descripciones y topics
**Estado:** `LISTO` · **P1** · Riesgo Nulo · **F-044** · 20 min
**Problema.** 10 de 15 repos sin descripción; 14 de 15 sin topics.
**Propuesta.** Descripción de una línea + 3-5 topics en cada repo que se conserve activo.
**Aceptación.** Ningún repo activo sin descripción.

---

### `GH-P1-1B5` · Archivar repositorios de curso
**Estado:** `LISTO` · **P1** · Riesgo Bajo · 10 min
**Problema.** Nueve de quince son entregas de curso: `Actividad-Clase-17`, `Evaluacion-Modular-2`, `Evaluacion-Modular-SQL`, `ProyectoModular6`, `Modulos-de-Estudio-Full-Stack-P`, `Proyecto_Veterinaria`, `vitalcare-django-crud`, `Estudios-FrontEnd`, `FintrackProyecto`.
**Propuesta.** **Archivar, no eliminar.** GitHub los marca visualmente y dejan de leerse como trabajo actual, conservando el historial de aprendizaje.
**Aceptación.** Repos de curso archivados · no aparecen en primer plano del perfil.

---

### `GH-P1-1B6` · Privatizar `Proyecto_Elbajon_dela_cami`
**Estado:** `LISTO` · **P1** · Riesgo Bajo · **F-043** · 2 min · **D-04 aprobada conceptualmente**

**Problema.** Repositorio público de 12,5 MB desde 2026-02-11, de un cliente que aún no ha confirmado el proyecto. Tu criterio (correcto) es que no se asocie a tu trabajo profesional.
**Propuesta.** Cambiar a privado. Reversible, sin coste. **El trabajo local queda intacto.**
**Aceptación.** No accesible públicamente.

---

### `GH-P0-1B7` · Resolver el repositorio del portfolio
**Estado:** `BLOQUEADO` (D-03) · **P0** · Riesgo Bajo · **F-008**

**Problema.** `Portafolio-FelipeDroguett` contiene el sitio anterior y tiene `homepage: https://felipe-droguett.netlify.app/`. Quien lo abra encuentra un portfolio peor que el actual presentado como tuyo.
**Propuesta.** Según D-03, reemplazar su contenido por el portfolio actual (recomendado).
**Aceptación.** El repo enlazado desde el portfolio contiene el código en producción.

---

# SPRINT 2 — CASE STUDY DEL AGENTE (ANONIMIZADO) ★

> **D-01 APROBADA.** Todo el sprint queda desbloqueado.

---

### `CASE-P0-201` · Redactar el case study del agente
**Estado:** `LISTO` · **P0** · Riesgo Bajo · **F-001** · 4-6 h

**Problema.** El trabajo profesional más avanzado (activo hoy) no existe en ninguna superficie pública.
**Propuesta.** Siete capítulos (§15.2 del maestro), **versión anonimizada**:

```
1  El problema          Pérdida cuantificada por consultas sin responder durante un
                        evento comercial de alta demanda. Sin nombrar cliente.
2  Por qué no un bot    Principio WORKFLOW FIRST, con cita textual.
3  Arquitectura         Capas understanding · policy · composer · ingress · egress ·
                        runtime. Enrutamiento multi-modelo y su justificación de coste.
4  Cómo sé que funciona 3.990 hilos → 48.937 mensajes → dedup (3.201) → clusters
                        (10.897) → 500 casos estratificados (60/60/80/300), 0 PII
                        residual, SHA256. Resultados: 464/464 · 51/51 E2E · 84 turnos.
5  Lo que se rompió     Los 5 defectos con impacto (esp. 29-30% → 0%) y el A/B de
                        telemetría (5/5 → 0/5, variable única).
6  El día que me detuve LA AUDITORÍA DE PROCEDENCIA, completa.   ← pieza más valiosa
7  Lo que falta         Providers R05/R06/R10/R12; catálogo exact-first vs lenguaje
                        suelto (9/42 turnos). Sin maquillar.
```

**Fuentes.** `mvp-agente/CLAUDE.md`, `mvp-agente/ESTADO.md`, `data/evals/instagram-benchmark-summary-v1.json`, `mvp-agente-wf-first/ESTADO.md`.
**Restricción de encuadre (§15.2).** El caso es **una capa dentro de una evolución**, no el centro de la identidad. Debe alcanzarse desde el capítulo 5 del caso de Tokyo Tunning.
**Aceptación.** Un tech lead entiende sin ver código por qué no es un chatbot · cero datos sensibles ni identificación de cliente · el capítulo 6 se lee en <3 min.

---

### `CASE-P1-202` · Diagrama de arquitectura del agente
**Estado:** `DEPENDE` (de `CASE-P0-201`) · **P1** · Riesgo Bajo · 2 h
**Problema.** El sitio no tiene ningún diagrama; la arquitectura por capas es incomprensible solo con texto.
**Propuesta.** Diagrama **conceptual** (no de implementación): entrada → capas → salida, marcando qué resuelve el workflow y qué el LLM. SVG inline. **Sin IDs de workflow, webhooks ni puertos.**
**Aceptación.** Comunica la separación workflow/LLM sin leer el texto · sin datos de infraestructura.

---

### `CASE-P1-203` · Visualización de la metodología de evaluación
**Estado:** `DEPENDE` (de `CASE-P0-201`) · **P1** · Riesgo Bajo · 1,5 h
**Problema.** Las cifras del dataset son el activo más contratable y solo existen como JSON.
**Propuesta.** Embudo: `3.990 hilos → 48.937 mensajes → 14.664 elegibles → 11.463 únicos → 500 casos`, con desglose de cuotas (60/60/80/300) y sello `0 PII residual`.
**Aceptación.** Se entiende en <20 s · cifras idénticas a `instagram-benchmark-summary-v1.json`.

---

### `CASE-P0-204` · Crear la ruta y la entrada en Projects
**Estado:** `DEPENDE` (de `CASE-P0-201`) · **P0** · Riesgo Bajo · 1 h
**Propuesta.** `src/pages/CasoAgenteComercial.jsx`, ruta `/caso/agente-comercial`, tarjeta con el mismo peso visual que Tokyo Tunning, entrada en `sitemap.xml`.

---

### `CASE-P1-205` · Cerrar el arco narrativo de Tokyo Tunning
**Estado:** `DEPENDE` (de `CASE-P0-201`) · **P1** · Riesgo Bajo · 45 min
**Problema.** El case study cierra con *"La tecnología funcionó. El siguiente problema no era técnico."* — el mejor cliffhanger del portfolio, nunca resuelto.
**Propuesta.** Capítulo final breve que enlace al caso del agente, en ambas direcciones.

---

### `CASE-P0-206` · Revisión de confidencialidad previa a publicar
**Estado:** `DEPENDE` (de todo el Sprint 2) · **P0** · Riesgo Alto si se omite
**Propuesta.** Recorrer el case study contra §15.3 y §38.2 del maestro. Verificar ausencia de: identidad del cliente, IDs de workflow, rutas de webhook, `execution_id`, puertos, nombres de personas, datos bancarios, cifras de contrato, fragmentos de código propietario, conversaciones.
**Aceptación.** Checklist recorrida ítem por ítem antes del deploy.

---

# SPRINT 3 — DISEÑO ESTRUCTURAL, ARQUITECTURA Y EVIDENCIA VISUAL

> **D-07A APROBADO.** Este sprint es Diseño A (§7 del maestro): afecta a comprensión y credibilidad, no a identidad visual.

---

### `PORT-P1-301` · Reordenar las secciones
**Estado:** `BLOQUEADO` (D-02) · **P1** · Riesgo Medio · **F-020, F-011** · 45 min
**Problema.** Orden actual: Hero → About → Roadmap → Skills → Projects → Contact. Los proyectos aparecen tras 3.561 px (59% del scroll).
**Propuesta.** Según D-02:
- **Opción A** → Hero → **Proyectos** → Capacidades → About → Trayectoria → Contacto
- **Opción B** → Hero → **Cinco movimientos** (cada uno con su evidencia) → Casos → About → Trayectoria → Contacto

Actualizar el orden del navbar en ambos casos.
**Aceptación.** Proyectos/evidencia visibles en el segundo scroll · Proyectos ≥40% del peso · Roadmap ≤25%.

---

### `PORT-P1-302` · Elevar el acceso a los case studies
**Estado:** `DEPENDE` (de Sprint 2) · **P1** · Riesgo Bajo · **F-012** · 30 min
**Problema.** `Projects.jsx:87-93`: *"Ver caso de estudio completo"* es texto de 12px en la esquina inferior. A 320px mide **190 × 16 px**. Es el único acceso al mejor activo.
**Propuesta.** Botón de peso completo (tratamiento del CTA primario), altura mínima 44px. Tarjeta entera clicable manteniendo el botón como affordance.
**Aceptación.** Objetivo táctil ≥44×44 en todos los anchos · el acceso se detecta en el primer barrido de la tarjeta.

---

### `PORT-P1-303` · Tarjeta de prueba del hero visible en móvil
**Estado:** `LISTO` · **P1** · Riesgo Medio · **F-014** · 1 h
**Problema.** `Hero.jsx:119` es `hidden lg:block`: **no se renderiza bajo 1024px**. Móvil y tablet pierden el `27:1`, el antes/después y el enlace al caso. El tráfico desde LinkedIn y WhatsApp es mayoritariamente móvil.
**Propuesta.** Variante compacta **debajo de las métricas y antes de los CTAs**: antes→después, el `27:1` con contexto de una línea, enlace al caso.
**Aceptación.** Evidencia visible a 320, 390 y 768px · hero móvil ≤1,2 viewports.

---

### `PORT-P1-304` · Reestructurar Tokyo Tunning como caso longitudinal  🆕
**Estado:** `DEPENDE` (de `CASE-P0-201`) · **P1** · Riesgo Medio · **F-048** · 3 h

**Problema.** El caso actual cuenta bien el arco de negocio pero no hace visible la **transversalidad**: marketing, contenido, Ads, e-commerce, catálogo, pricing, UX, frontend, performance, automatización, CRM e IA sobre la **misma operación durante tres años**. Esa continuidad es probablemente tu mayor diferenciador y no se puede simular.
**Propuesta.** Reestructurar en seis capítulos (§14.3 del maestro):
```
1 El punto de partida   2 Atraer   3 Convertir   4 Medir   5 Atender   6 Deuda técnica activa
```
El capítulo 4 (Medir) absorbe CyberDay, el pipeline de precios y el análisis post-evento. El capítulo 5 enlaza al agente.
**Restricción.** No meter todo. Usar la continuidad para contar cómo **evolucionó el problema**, no para inventariar tareas.
**Preservar.** El capítulo "Deuda técnica activa" tal como está — es excelente.
**Aceptación.** El caso demuestra 5+ disciplinas **sin declarar ninguna etiqueta** · la evolución del problema es la línea narrativa.

---

### `PORT-P1-305` · Evidencia visual
**Estado:** `LISTO` · **P1** · Riesgo Bajo · **F-015** · 3 h
**Problema.** El case study mide 8.157 px y no contiene **ni una imagen, diagrama o captura**. Todo el sitio tiene 2 imágenes.
**Propuesta.** 4-6 piezas:
1. Captura del e-commerce que comunique escala.
2. Diagrama de la arquitectura WP/Woo/PHP custom.
3. Extracto del hallazgo de la race condition (`functions.php:33` vs `wp_head` hook 100) con el fix — fuente: `Web/Auditorias/auditoria_tokyo_tunning.md`.
4. Antes/después de LCP con metodología declarada.
5. Pipeline de precios de CyberDay en 3 etapas.
6. Tabla de métricas fechada.
**Aceptación.** ≥8 piezas de evidencia visual en el sitio · toda imagen con `alt`, `width`, `height`, `loading="lazy"`.

---

### `PORT-P1-306` · Corregir contraste de texto
**Estado:** `LISTO` · **P1** · Riesgo Bajo · **F-016** · 45 min
**Problema.** 36 fallos. `slate-500 (#64748B)` ≈4,25:1 sobre `#020617` y ≈4,0:1 sobre `.glass`, a 10-12px, en labels de métricas, fechas y las notas `Resultado:` / `Aprendizaje:` — **que contienen tus mejores datos**. `slate-600 (#475569)` ≈2,69:1 en fechas de formación.
**Propuesta.** `slate-500` → `slate-400` en texto informativo · `slate-600` → `slate-500` en fechas · suelo tipográfico de 10-11px a 12px · `slate-500` solo en decorativo no informativo.
**Aceptación.** Ningún texto informativo bajo 4,5:1 (verificar con el script del maestro, **no** con Lighthouse — §22.2) · ningún tamaño bajo 12px salvo etiquetas decorativas.

---

### `PORT-P1-307` · Ampliar objetivos táctiles
**Estado:** `LISTO` · **P1** · Riesgo Bajo · **F-019** · 30 min
**Problema.** 8 objetivos bajo 44×44 a 320px:
```
Abrir menú ....................  38 × 38   ← navegación principal
Ver Tokyo Tunning .............  32 × 32
Ver portafolio ................  28 × 28
Ver GitHub ....................  28 × 28
Ver caso de estudio completo ..  190 × 16  ← cubierto por PORT-P1-302
Explorar proyectos en GitHub ..  216 × 20
Logo ..........................  159 × 28
Ver historial completo ........  208 × 42
```
**Propuesta.** Mínimo 44×44 vía padding, sin alterar el tamaño visual del icono.

---

### `PORT-P2-308` · Escala tipográfica base
**Estado:** `LISTO` · P2 · Riesgo Bajo · **F-028** · 1,5 h
**Problema.** 13 declaraciones tipográficas, 5 arbitrarias (`text-[10px]`, `text-[11px]`, `text-[15px]`, `text-[1.05rem]`, `text-[3.5rem]`).
**Propuesta.** Definir en `tailwind.config.js` una escala modular de 6-7 pasos con mínimo 12px, y migrar los valores arbitrarios. **No** abordar paleta ni efectos aquí (eso es Sprint 6).
**Aceptación.** Cero valores tipográficos arbitrarios · suelo de 12px.

---

### `PORT-P3-309` · Recapturar la miniatura de Tokyo Tunning
**Estado:** `LISTO` · P3 · Riesgo Nulo · **F-041** · 20 min
**Problema.** `Projects.jsx:48-54` usa `h-56` + `object-top`: se ve header, franja roja y foto oscura. No comunica escala.
**Propuesta.** Captura nueva de catálogo o página de producto, en WebP con `srcset`.

---

### `PORT-P3-310` · Enlace "saltar al contenido"
**Estado:** `LISTO` · P3 · Riesgo Nulo · **F-037** · 10 min
**Propuesta.** Enlace visible solo al recibir foco, primer elemento del DOM, apuntando a `<main>`.

---

# SPRINT 4 — GITHUB FASE B (INTEGRACIÓN)

---

### `GH-P1-401` · README de perfil — versión completa
**Estado:** `DEPENDE` (de `GH-P0-1B2` y Sprint 2) · **P1** · Riesgo Bajo · 1,5 h
**Propuesta.** Ampliar el README mínimo con: enlaces a ambos case studies · storytelling técnico del trabajo privado **sin publicar IP** · prácticas de ingeniería (evals, checkpoints con manifest de rollback, trazabilidad) · las tres capas con su evidencia.
**Restricción.** Ni código de cliente, ni IDs, ni datos. Narrar el método, no el contenido.
**Aceptación.** El agente aparece narrado sin exponer nada · coherente con el portfolio y con LinkedIn.

---

### `PORT-P1-402` · Reescribir la tarjeta de GitHub del portfolio
**Estado:** `DEPENDE` (de `GH-P1-401`) · **P1** · Riesgo Bajo · 10 min
**Problema.** `Projects.jsx:167-172`: *"Scripts Python, ejercicios Full Stack… experimentos de Linux hardening. Repositorios en desarrollo activo."* Lenguaje de estudiante; y "desarrollo activo" es inexacto (67 días sin actividad).
**Propuesta.** Reescribir apuntando al README de perfil como entrada.
**Aceptación.** Sin "ejercicios" ni "experimentos" · ninguna afirmación de actividad que el perfil no respalde.

---

### `PORT-P1-403` · Reubicar el CTA del footer
**Estado:** `DEPENDE` (de `GH-P1-401`) · **P1** · Riesgo Nulo · **F-021** · 10 min
**Problema.** `Footer.jsx:12-21`: el único CTA del footer dirige al activo más débil del ecosistema.
**Propuesta.** Mientras GitHub no esté reparado → CTA a los case studies o a contacto. Tras el Sprint 4 → puede volver a GitHub apuntando al README.

---

# SPRINT 5 — LINKEDIN Y COHERENCIA DEL ECOSISTEMA

> **Prioridad elevada a P0 en v2** por el hallazgo F-047.

---

### `LI-P0-501` · Auditoría autenticada del perfil
**Estado:** `LISTO` · **P0** · Riesgo Nulo · **F-047** · 30 min

**HECHO REPORTADO (no verificado).** El perfil público aparece asociado aproximadamente a:
> *"E-commerce & Operations Manager | Estrategia Digital, Logística y Rentabilidad | Python & Cybersecurity Student"*

**LIMITACIÓN.** LinkedIn devuelve HTTP 999 a peticiones automatizadas y la búsqueda web no corroboró el texto. **No existe auditoría visual o autenticada del perfil.** Este ticket la produce.
**Propuesta.** Recorrer con sesión iniciada y registrar el estado real de: foto · banner · headline · Acerca de · experiencia · trabajo actual · formación · certificaciones · aptitudes · Featured · enlaces · fechas · URL personalizada.
**Aceptación.** Estado real registrado de los 14 elementos, con captura si procede.

---

### `LI-P0-502` · Retirar "Python & Cybersecurity Student"
**Estado:** `DEPENDE` (de `LI-P0-501`) · **P0** · Riesgo Nulo · **F-046, F-047** · 5 min
**Problema.** Describe como estudiante un programa **completado y acreditado el 04-08-2026**. Contradicción X5 (§19.3).
**Propuesta.** Retirar del headline. La formación acreditada va a la sección Formación/Licencias con el enlace de Acreditta, no al headline.
**Aceptación.** Contradicción X5 resuelta.

---

### `LI-P1-503` · Alinear headline y "Acerca de"
**Estado:** `BLOQUEADO` (D-02) · **P1** · Riesgo Bajo · 45 min
**Problema.** *"E-commerce & Operations Manager"* proyecta un tercer perfil, distinto del portfolio y de GitHub. Contradicción X4.
**Propuesta.** Aplicar el TÍTULO CORTO de D-02, idéntico al de `PORT-P0-006`. El "Acerca de" cuenta la **cadena de cinco movimientos** (§3.8 del maestro), no una lista de disciplinas.
**Restricción.** Sin seniority atribuido. Sin slogan paraguas.
**Aceptación.** Headline y Acerca de describen al mismo profesional que el portfolio · contradicción X4 resuelta.

---

### `LI-P1-504` · Añadir formación y credencial acreditada
**Estado:** `LISTO` · **P1** · Riesgo Nulo · **F-046** · 20 min
**Propuesta.** Añadir la credencial en Licencias y Certificaciones con emisor (*Talento Digital para Chile*), fecha (04-08-2026), sin caducidad y **URL de verificación**. Revisar que las 6 formaciones estén con fechas correctas.
**Aceptación.** Credencial presente con enlace verificable · ninguna formación marcada como en curso si está terminada.

---

### `LI-P1-505` · Añadir la experiencia jul–ago 2026
**Estado:** `DEPENDE` (de `LI-P0-501`) · **P1** · Riesgo Bajo · 30 min
**Propuesta.** Entrada que cubra el trabajo actual en sus tres capas. Respetar D-01 en cuanto a identificación de cliente.
**Aceptación.** La experiencia cubre hasta el mes actual sin huecos.

---

### `LI-P1-506` · Featured con portfolio y case studies
**Estado:** `DEPENDE` (de Sprint 2 y `PORT-P0-003`) · **P1** · Riesgo Nulo · 10 min
**Propuesta.** Añadir portfolio y ambos case studies a Featured. Requiere `og:image` para que muestren preview.

---

### `LI-P0-507` · Verificación final de coherencia del ecosistema
**Estado:** `DEPENDE` (de Sprints 1, 1B, 2, 4, 5) · **P0** · Riesgo Nulo · 45 min
**Propuesta.** Verificar que las **seis contradicciones** de §19.3 del maestro están resueltas:
```
X1  "Respondo <24h"  vs  "I may be slow to respond."          → S1B
X2  hero  vs  <title> "Consultor Digital & Desarrollador Web" → S0
X3  "Certificación pendiente"  vs  Acreditta 04-08-2026       → S0
X4  portfolio  vs  LinkedIn "E-commerce & Operations Manager" → S5
X5  Full Stack completado  vs  "Python & Cybersecurity Student" → S5
X6  tarjeta "React + Vite"  vs  imagen del sitio Bootstrap    → S0
```
Y recorrer el trayecto completo de §19.2 como un visitante externo.
**Aceptación.** Cero contradicciones · el recorrido LinkedIn → portfolio → TT → agente → GitHub → credencial se lee sin saltos.

---

# SPRINT 6 — DIRECCIÓN DE ARTE (DISEÑO B)  ·  `EVALUAR`

> **D-07B: se reevalúa al cerrar los Sprints 0-5.** Riesgo alto: puede romper lo que funciona. Si el tiempo es limitado, este sprint se sacrifica.

---

### `DESIGN-P2-601` · Completar el sistema de tokens
**Estado:** `DEPENDE` (de `PORT-P2-308` y Sprints 0-5) · P2 · Riesgo Medio · **F-029** · 2 h
**Problema.** Seis opacidades de borde (`white/6`, `/8`, `/10`, `/12`, `/15`, `/[0.13]`), cinco radios, tres anchos de contenedor. `tailwind.config.js` solo extiende fuentes y un color.
**Propuesta.** Definir escala de espaciado, **2** opacidades de borde, **3** radios, **2** anchos. Migrar componentes.
**Aceptación.** Cero valores arbitrarios `[...]` · tokens en un único lugar.

---

### `DESIGN-P2-602` · Nueva dirección de arte
**Estado:** `BLOQUEADO` (D-07B) · P2 · Riesgo **Alto** · **F-023** · 8-12 h
**Problema.** Slate-950 + cyan + glassmorphism + orbes + grid es la configuración por defecto de la categoría. Diferenciación: 3,0/10.
**Propuesta.** Aplicar los principios de §6.3 del maestro: precisión, evidencia, proceso, materialidad, medición, documentación, iteración.

> **RESTRICCIÓN VINCULANTE.** "Taller de ingeniería" es un **principio**, nunca un skin. **Prohibido:** taller mecánico, franjas amarillas, tornillos, metal, chapa, señalética industrial, estética automotriz o cualquier referencia visual a Tokyo Tunning. Tu identidad es más amplia que la de un cliente.

**Aceptación.** Sustituir el nombre por otro hace que la página **deje** de tener sentido · ningún elemento remite visualmente a un cliente concreto.

---

### `DESIGN-P3-603` · Limpieza de efectos
**Estado:** `DEPENDE` (de `DESIGN-P2-601`) · P3 · **F-038, F-039, F-040** · 45 min
**Propuesta.** Retirar `text-glow-cyan` del H2 · retirar el blur violeta (`Hero.jsx:29`, sin función) · reducir el glow cyan de 3 jerarquías a una · introducir ritmo vertical diferenciado (hoy todo es `pt-20 pb-16`).

---

### `PORT-P2-604` · Code splitting
**Estado:** `DEPENDE` (de Sprint 2) · P2 · Riesgo Bajo · **F-024** · 1 h
**Problema.** Bundle único de 363,2 KB. `CasoTokyoTunning.jsx` viaja con la home. Con un segundo case study el problema se duplica.
**Propuesta.** `React.lazy` + `Suspense` para las rutas de case study.
**Aceptación.** Bundle inicial <200 KB · casos cargados bajo demanda.

---

### `PORT-P2-605` · Prerender
**Estado:** `DEPENDE` (de Sprint 3) · P2 · Riesgo Medio · **F-025** · 2 h
**Problema.** CSR puro: nada se pinta hasta parsear el bundle. LCP medido 1.232 ms con caché caliente y conexión rápida.
**Propuesta.** Prerender estático en build (`vite-plugin-prerender` o equivalente). **No migrar a Next.js** (§37 N12).
**Aceptación.** El HTML inicial contiene el contenido del hero · LCP mejora con throttling 4G.

---

### `PORT-P2-606` · Optimizar imágenes
**Estado:** `DEPENDE` (de Sprint 3) · P2 · Riesgo Bajo · **F-027** · 1,5 h
**Problema.** Imágenes de 1280×900 (152 KB y 136 KB) en contenedores de 340-880px. Sin `srcset`, sin WebP/AVIF, sin `width`/`height`.
**Propuesta.** WebP en 3 anchos, `srcset` + `sizes`, dimensiones explícitas en todas (incluidas las de `PORT-P1-305`).
**Aceptación.** Ninguna imagen sirve más del doble de su tamaño de render · CLS = 0.

---

### `PORT-P2-607` · Completar `prefers-reduced-motion`
**Estado:** `LISTO` · P2 · Riesgo Bajo · **F-030** · 1 h
**Problema.** `index.css:13-18` fija `animation-duration` y `transition-duration`, pero Framer Motion anima vía Web Animations API con estilos inline, que esa regla no gobierna.
**Propuesta.** `useReducedMotion` de Framer Motion; desactivar los `variants` de entrada. Aplicar en Hero, About, Roadmap, Skills, Projects, Contact.
**Aceptación.** Con `prefers-reduced-motion: reduce`, el contenido aparece sin animación y **con `opacity: 1` desde el inicio**.

---

### `PORT-P2-608` · Meta por ruta
**Estado:** `DEPENDE` (de Sprint 2) · P2 · Riesgo Bajo · **F-034** · 1 h
**Problema.** El case study hereda el `<title>` de la home. Ambas rutas son indistinguibles en buscadores y al compartirse.
**Propuesta.** `<head>` por ruta (`react-helmet-async` o equivalente): `title`, `description`, `og:image`, `canonical` propios.

---

### `PORT-P3-609` · Content-Security-Policy
**Estado:** `LISTO` · P3 · Riesgo Medio (puede romper Google Fonts) · **F-042** · 45 min
**Problema.** `netlify.toml` tiene HSTS, X-Frame-Options, nosniff, Referrer-Policy y Permissions-Policy — bien configurado — pero no CSP.
**Propuesta.** CSP permitiendo `fonts.googleapis.com` y `fonts.gstatic.com`. Probar en preview antes de producción.

---

# DIFERIDOS — NO EJECUTAR AHORA

| ID | Ticket | Estado | Nota |
|---|---|---|---|
| `INFRA-P1-701` | Adquirir dominio propio | **D-05 aprobada, diferida** | No comprar todavía. No bloquea ningún sprint |
| `INFRA-P1-702` | Email profesional en dominio | **D-06 aprobada, condicional a D-05** | No configurar todavía |
| `INFRA-P0-703` | Rotación y revisión de secretos del agente | **D-08 aprobada, condicional** | Solo antes de publicar o conectar a remoto: revisar historial, rotar, verificar `.gitignore`, revisar staged files, chequeo de secretos. Sin remoto no hay exposición activa |

---

# RESUMEN DE EJECUCIÓN

| Sprint | Tickets | `LISTO` | `BLOQUEADO` | `DEPENDE` | Prio | Recomendación |
|---|---:|---:|---:|---:|---|---|
| **S0** — Baseline técnico | 10 | 7 | 2 | 1 | P0 | **HACER** |
| **S1** — Contenido y formación | 7 | 3 | 4 | 0 | P0 | **HACER** |
| **S1B** — GitHub Fase A | 7 | 4 | 2 | 1 | P0 | **HACER (paralelo)** |
| **S2** — Case study del agente | 6 | 1 | 0 | 5 | P0 | **HACER ★** |
| **S3** — Diseño estructural | 10 | 7 | 1 | 2 | P1 | **HACER** |
| **S4** — GitHub Fase B | 3 | 0 | 0 | 3 | P1 | **HACER** |
| **S5** — LinkedIn y coherencia | 7 | 2 | 1 | 4 | P0 | **HACER** |
| **S6** — Dirección de arte | 9 | 2 | 1 | 6 | P2 | **EVALUAR** |
| Diferidos | 3 | — | — | — | — | No ejecutar |
| **TOTAL** | **62** | **31** | **11** | **22** | | |

## Decisiones que desbloquean trabajo

| Decisión | Estado | Tickets bloqueados |
|---|---|---:|
| **D-02** — arquitectura de posicionamiento | 🔴 **ABIERTA** | **6** (`PORT-P0-006`, `PORT-P0-102`, `PORT-P1-103`, `PORT-P1-107`, `PORT-P1-301`, `LI-P1-503`) + parcialmente `GH-P0-1B1` |
| **D-03** — repositorio canónico | 🟡 Pendiente técnica | 2 (`INFRA-P0-001`, `GH-P0-1B7`) |
| **D-07B** — dirección de arte | 🟨 A reevaluar | 1 (`DESIGN-P2-602`) + cadena |
| D-01, D-04, D-05, D-06, D-08 | ✅ Resueltas | 0 bloqueados |

## Ruta crítica

```
S0 ──┬── S1 ──── S2 ★ ──┬── S3 ──┬── S5 ── (verificación de coherencia)
     │                   │        │
     └── S1B ────────────┴── S4 ──┘
                                         └── S6  (EVALUAR)
```

- **S0 y S1B pueden empezar el mismo día.** S1B no depende de nada más que de D-03/D-04.
- **S2 es la ruta crítica.** Todo lo que más impacta pasa por ahí.
- **S6 no está en la ruta crítica** y puede eliminarse sin afectar al resultado.

## Si solo tienes 70 minutos

```
GH-P0-1B1   Retirar la bio actual de GitHub .............   5 min   ← empieza aquí
GH-P0-1B3   Despinear repos de curso y sitio anterior ...   5 min
PORT-P0-008 Corregir la formación acreditada + enlace ...  15 min
PORT-P0-007 Eliminar la tarjeta "Este Portafolio" .......   5 min
PORT-P0-005 Fechar los claims WCAG / LCP ................  15 min
PORT-P0-002 Reparar el favicon ..........................   2 min
PORT-P0-004 Añadir :focus-visible .......................  10 min
PORT-P0-010 Corregir el enlace del logo .................   1 min
PORT-P2-009 Actualizar sitemap.xml ......................   5 min
```
**Resuelve 6 de 11 hallazgos P0 y 3 de las 6 contradicciones del ecosistema.**
*(`PORT-P0-003` og:image y `PORT-P0-006` `<title>` quedan fuera: dependen de D-02.)*

---

# ESTADO DEL BACKLOG

**¿Está listo para comenzar el Sprint 0?** **Sí, con una salvedad.**

- **7 de 10 tickets del Sprint 0 son `LISTO`** y pueden ejecutarse de inmediato.
- **`INFRA-P0-001`** necesita D-03 (decisión técnica, no estratégica).
- **`PORT-P0-006`** y **`PORT-P0-003`** necesitan D-02, porque el `<title>` y la imagen de preview deben decir lo que D-02 decida.
- **El Sprint 1B es ejecutable en paralelo desde el primer día** y es el de mejor ratio impacto/esfuerzo.

**D-02 es la única decisión que bloquea trabajo estratégico.** Todo lo demás está definido.

---

*Backlog v2 generado 2026-08-19. Ningún ticket ejecutado. Documento maestro: `PORTFOLIO_AUDIT_2026-08.md`.*
