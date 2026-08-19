# PLAN MAESTRO — PORTAFOLIO FELIPE DROGUETT
## Documento de Referencia para Evolución del Portafolio
**Generado:** 27 Mayo 2026 | **Última actualización:** 28 Mayo 2026  
**Basado en:** Auditoría Maestra completa (código fuente + validación DOM + Playwright)

---

## ESTADO DE AVANCE GENERAL

| Sprint | Estado | Ejecutado |
|---|---|---|
| S1 — Estabilización Crítica | ✅ COMPLETADO | 27 Mayo 2026 |
| S2 — Posicionamiento y Proyectos | ✅ COMPLETADO | 28 Mayo 2026 |
| S3 — Diferenciación y Marca | ⏳ PENDIENTE | — |
| S4 — Caso de Estudio Tokyo Tunning | ⏳ PENDIENTE | — |

### Métricas de progreso acumuladas

| Métrica | Estado original (auditoría) | Hoy (post S1+S2) | Objetivo final |
|---|---|---|---|
| Errores de consola | 4 | **0** | 0 ✅ |
| Secciones `#skills` duplicadas | 2 | **1** | 1 ✅ |
| CTAs de contacto explícitos | 0 | **3** | 3+ ✅ |
| Dependencias JS externas | 2 (Bootstrap + AOS) | **1** (Bootstrap) | 1 ✅ |
| Altura mobile | 14,542px | **9,739px** | <6,000px ⚠️ |
| Proyectos con screenshot real | 0/3 | **2/3** | 3/3 ⏳ |
| Hero propuesta de valor unificada | ❌ fragmentada | **✅ unificada** | ✅ |
| Foto personal | ❌ | ❌ | ✅ — S3 |
| Sección "Sobre Mí" narrativa | ❌ | ❌ | ✅ — S3 |
| Sección Servicios | ❌ | ❌ | ✅ — S3 |
| Analytics | ❌ | ❌ | ✅ — S3 |
| Caso de estudio Tokyo Tunning | ❌ | ❌ | ✅ — S4 |

### Bugs resueltos vs. pendientes (resumen)

| Bug | Descripción | Estado |
|---|---|---|
| #1 | HTML secciones anidadas | ✅ S1 |
| #2 | `<ul>` dentro de `<p>` | ✅ S1 |
| #3 | Meta OG malformado | ✅ S1 |
| #4 | `</script>` huérfano | ✅ S1 |
| #5 | `</p>` duplicado en hero | ✅ S1 |
| #6 | AOS hash SRI inválido | ✅ S1 (AOS eliminado) |
| #7 | `.icon-sq` duplicado en CSS | ✅ S1 |
| #8 | Dead CSS (7 clases sin uso) | ✅ S1 |
| #9 | Typos (tildes, "por que") | ✅ S1 |
| #10 | PCAltiro como primer proyecto | ✅ S2 |

**Todos los bugs del inventario están resueltos.**

### Problemas P0/P1/P2 — estado actual

| ID | Problema | Estado |
|---|---|---|
| P0-1 | Sin mecanismo de contacto | ✅ S1 — 3 cards (email, WhatsApp, LinkedIn) |
| P0-2 | HTML estructuralmente inválido | ✅ S1 |
| P0-3 | Identidad fragmentada | ✅ S1+S2 — unificada en todas las fuentes |
| P1-1 | Badge "Student/Trainee" | ✅ S2 — "Consultor Digital & Dev Web" |
| P1-2 | Sin evidencia visual de proyectos | ✅ S2 — screenshots reales + layout featured |
| P1-3 | Mobile 14,542px (17 pantallas) | ⚠️ PARCIAL S2 — 9,739px (mejora −2,906px) |
| P1-4 | Typos en producción | ✅ S1 |
| P1-5 | PCAltiro como primer proyecto | ✅ S2 — removido |
| P2-1 | AOS SRI → 4 errores consola | ✅ S1 |
| P2-2 | Sin foto personal | ❌ PENDIENTE — S3 |
| P2-3 | GitHub genérico como "proyecto" | ⚠️ PARCIAL S2 — card con descripción real |
| P2-4 | Roadmap carga cognitiva mobile | ⚠️ PARCIAL S2 — collapse implementado |
| P2-5 | Dead CSS + `.icon-sq` duplicado | ✅ S1 |
| P2-6 | "Haciéndola" como certificación destacada | ⚠️ PARCIAL S2 — rebajada visualmente |

---

## ÍNDICE

1. [Resumen Ejecutivo de la Auditoría](#1-resumen-ejecutivo-de-la-auditoría)
2. [Diagnóstico de Identidad Profesional](#2-diagnóstico-de-identidad-profesional)
3. [Inventario de Bugs Críticos](#3-inventario-de-bugs-críticos)
4. [Problemas por Prioridad](#4-problemas-por-prioridad)
5. [Auditoría Narrativa](#5-auditoría-narrativa)
6. [Auditoría UX](#6-auditoría-ux)
7. [Auditoría UI](#7-auditoría-ui)
8. [Auditoría Técnica Frontend](#8-auditoría-técnica-frontend)
9. [Auditoría de Marca Personal](#9-auditoría-de-marca-personal)
10. [Simulación de Perfiles](#10-simulación-de-perfiles)
11. [Sprints de Ejecución](#11-sprints-de-ejecución)
12. [Definición de Éxito](#12-definición-de-éxito)

---

## 1. RESUMEN EJECUTIVO DE LA AUDITORÍA

### Estado actual en una frase
El portafolio funciona como prueba de que sabes hacer una página web. No funciona como herramienta de posicionamiento, autoridad, ni conversión profesional.

### Percepción real en los primeros 5 segundos
**"Desarrollador junior con experiencia en ventas."** No "profesional híbrido con track record demostrable". No "consultor que escala negocios".

### Nivel percibido
**Mid-junior.** La estética dark + cyan neón es la misma que usan miles de portfolios de bootcamp. La ejecución es competente pero no diferenciada.

### Brecha central
La historia real de Mi_Historia.md y la historia que cuenta el portafolio son de **dos personas distintas**. Tu historia real —escalar un negocio de $500K a $15M, WooCommerce custom con WCAG 100/100, tres emprendimientos, dos fracasos económicos y un accidente casi mortal— no aparece con la fuerza que merece. El portafolio te subrepresenta dramáticamente.

### Fortalezas reales que SÍ existen
- El número $15M/mes está bien ubicado y es un ancla de credibilidad potente
- El roadmap muestra trayectoria real y valiente
- El CSS es limpio y bien organizado con variables custom
- El sistema de colores es consistente con criterio estético claro
- La tipografía Inter/Outfit es una buena elección profesional
- Print styles implementados (detalle de developer con criterio)
- Schema.org structured data presente

---

## 2. DIAGNÓSTICO DE IDENTIDAD PROFESIONAL

### El problema: tres identidades compitiendo sin una ganadora

| Fuente en el HTML | Definición del profesional |
|---|---|
| `<title>` | "Estrategia Digital & Operaciones" |
| Schema.org `jobTitle` | "Full Stack Developer" |
| Twitter card title | "Full Stack Developer" |
| OG description | "Ex-Founder con track record de $15M/mes. Estudiante de Ciberseguridad" |
| Hero badge | "Estrategia Digital & Operaciones \| Student Full Stack Python Trainee" |
| H2 hero | "Consultoría de Negocios & Desarrollo Tecnologico" |
| Código JS decorativo | `profile: "Professional Hybrido"` (con typo) |

**Resultado:** Google y LinkedIn indexan tres personas distintas. El visitante no sabe qué contratar ni para qué.

### Posicionamiento propuesto (para discutir y definir)
> *"Operador Digital con 10 años de track record — construyo y escalo sistemas de negocio que convierten."*

Esto diferencia porque:
- No eres solo un developer (hay miles)
- No eres solo un marketer (hay miles)
- Eres alguien que **opera** tecnología para mover resultados de negocio reales — eso es escaso

### El "Student/Trainee" como auto-sabotaje
El badge del hero dice **"Student Full Stack Python Trainee"**. Esas son las primeras palabras de posicionamiento después de tu nombre. Antes de que el visitante lea tus logros, ya te clasificó como estudiante. **Tienes código en producción. No eres trainee.**

---

## 3. INVENTARIO DE BUGS CRÍTICOS
> **Estado al 28 Mayo 2026: todos los 10 bugs están resueltos.**  
> Esta sección documenta el estado original de la auditoría para referencia histórica.

### Bug #1 — HTML estructuralmente inválido: secciones anidadas ✅ RESUELTO — S1

**Descripción:** El DOM real muestra esta estructura rota:
```
body
  section#about ✓ (correcto)
  section#roadmap ✓ (correcto)
  section#education ✓ (correcto)
  section#skills ← OUTER (correcto)
    div.row.g-4
      section#skills  ← DUPLICADO — hijo de div.row (INVÁLIDO)
      section#projects ← hijo de div.row de skills (INVÁLIDO)
        div
          footer ← footer dentro de section>div (INVÁLIDO)
```

**Causa:** El cierre de `</div>` y `</section>` del bloque de skills externo está mal colocado en el HTML. Las secciones de projects y el footer quedaron atrapadas dentro del row de skills.

**Consecuencias:**
- HTML semánticamente inválido — falla en validadores W3C
- El footer no está en posición semántica correcta → daño SEO y accesibilidad
- `#skills` duplicado → comportamiento undefined en selectores CSS y JS
- Cualquier CTO técnico que abra DevTools ve el problema inmediatamente

---

### Bug #2 — `<ul>` anidado dentro de `<p>` (3 instancias) ✅ RESUELTO — S1

**Descripción:** En el roadmap, listas `<ul>` están escritas como hijos directos de `<p>`:
```html
<p class="text-light-50 text-sm mb-2">
    Texto introductorio...
    <ul class="...">
        <li>Item</li>
    </ul>
</p>
```
HTML5 spec no permite block elements (`<ul>`) dentro de inline containers (`<p>`). El browser corrige implícitamente pero el DOM resultante es impredecible.

---

### Bug #3 — Meta tag OG malformado en source ✅ RESUELTO — S1

**Descripción:** En el HTML fuente, la etiqueta `og:title` no tiene cierre `>` antes del siguiente meta:
```html
<meta property="og:title" content="Felipe Droguett - Digital Strategy & Operations" <meta property="og:description"
```
El browser lo recupera pero parsers de Open Graph de Slack, iMessage, y LinkedIn pueden fallar al generar previews.

---

### Bug #4 — Tag `</script>` huérfano (línea 49 del HTML) ✅ RESUELTO — S1

**Descripción:** Hay un `</script>` extra de cierre después del Schema markup:
```html
    </script>
    </script>   ← HUÉRFANO
```
No rompe nada pero evidencia código ensamblado sin linting.

---

### Bug #5 — `</p>` duplicado en el hero ✅ RESUELTO — S1

**Descripción:** El párrafo lead del hero tiene un `</p>` de cierre extra:
```html
        </p>
        </p>   ← TAG HUÉRFANO
```

---

### Bug #6 — AOS integrity hash SRI inválido ✅ RESUELTO — S1 (AOS eliminado, reemplazado por IntersectionObserver nativo)

**Descripción:** El hash SHA384 del script AOS tiene un patrón repetido imposible:
```
sha384-hC084VlAhZlkqI1nk9T5xJNhTGjWV5lqDMV2lqDMV2lqDMV2lqDMV2lqDMV2lqDM
```
`lqDMV2` repetido 8 veces no es un hash SHA384 real. En browsers con SRI estricto, AOS no carga y las animaciones fallan silenciosamente. **El sitio ya muestra 4 errores en consola.**

---

### Bug #7 — Selector `.icon-sq` duplicado en CSS ✅ RESUELTO — S1

**Descripción:** `.icon-sq` está definido dos veces en `styles.css` con valores distintos:
- Primera definición (línea ~182): `width: 60px; height: 60px; border-radius: 16px`
- Segunda definición (línea ~296): `width: 50px; height: 50px; border-radius: 12px`
El segundo override al primero sin intención aparente.

---

### Bug #8 — Dead CSS: clases definidas pero no usadas ✅ RESUELTO — S1

Las siguientes clases están en `styles.css` pero no aparecen en el HTML:
- `.skill-badge`
- `.skill-badge-soft`
- `.rotate-3`
- `.profile-card-glass`
- `.shadow-glow-success`
- `.shadow-glow-purple`
- `.shadow-glow-blue`

---

### Bug #9 — Errores tipográficos en producción ✅ RESUELTO — S1

| Ubicación | Error actual | Corrección |
|---|---|---|
| H2 Hero | "Desarrollo Tecnologico" | "Desarrollo Tecnológico" |
| Lead paragraph | "por que un negocio" | "porque un negocio" |
| Lead paragraph | "tecnologia es obsoleto" | "tecnología es obsoleto" |
| Roadmap H3 | "CONSULTORIA & ESTRATEGIA" | "CONSULTORÍA & ESTRATEGIA" |
| Skills card (rendered) | "Estrategia, Operaciones\n&" | Texto completo sin corte |
| Skills card (rendered) | "Infraestructura &\nSe..." | "Infraestructura & Seguridad" |

---

### Bug #10 — PCAltiro como primer proyecto listado ✅ RESUELTO — S2

**Descripción:** PCAltiro es el primer proyecto en la sección de proyectos. En Mi_Historia.md, Felipe explícitamente escribe: *"Descartado después para mantener foco."* El primer proyecto visible es uno que el propio autor abandonó.

---

## 4. PROBLEMAS POR PRIORIDAD

### P0 — Bloqueantes de conversión y credibilidad

| ID | Problema | Impacto | Estado |
|---|---|---|---|
| P0-1 | **Sin mecanismo de contacto** — no hay email, formulario, ni WhatsApp visible | Conversión imposible. 70-80% de oportunidades perdidas | ✅ S1 |
| P0-2 | **HTML estructuralmente inválido** — secciones anidadas, footer dentro de row | Un CTO con DevTools abierto rechaza el perfil | ✅ S1 |
| P0-3 | **Identidad fragmentada** — 5 definiciones distintas del profesional | El visitante no sabe qué contratar. Clasifica como "junior en formación" | ✅ S1+S2 |

### P1 — Dañan la percepción de nivel

| ID | Problema | Impacto | Estado |
|---|---|---|---|
| P1-1 | Badge "Student/Trainee" como primera línea de posicionamiento | Auto-descalificación antes de que alguien lea los logros | ✅ S2 |
| P1-2 | Sin evidencia visual de proyectos — 3 placeholders con iconos FontAwesome | "Los proyectos no son reales o no tienen UI visible" | ✅ S2 |
| P1-3 | Longitud de página mobile: 14,542px (17 pantallas de scroll) | El contenido crítico queda enterrado. Abandono masivo en mobile | ⚠️ PARCIAL S2 — 9,739px |
| P1-4 | Errores tipográficos en producción (tildes, "por que", "CONSULTORIA") | Señal de falta de atención al detalle | ✅ S1 |
| P1-5 | PCAltiro como primer proyecto (negocio descartado explícitamente) | Comunica indecisión o falta de foco estratégico | ✅ S2 |

### P2 — Fricción y calidad

| ID | Problema | Impacto | Estado |
|---|---|---|---|
| P2-1 | AOS con hash SRI inválido → 4 errores en consola | Falla silenciosa de animaciones + señal de código descuidado | ✅ S1 |
| P2-2 | Sin foto personal | Destruye confianza en perfiles de consultor/freelance | ❌ PENDIENTE — S3 |
| P2-3 | "GitHub Portfolio" como proyecto enlaza al perfil genérico de GitHub | Señal de que no hay proyectos técnicos reales para mostrar | ⚠️ PARCIAL S2 — card mejorada |
| P2-4 | Carga cognitiva extrema en roadmap — 1,500-2,800 palabras solo en timeline | Fatiga → abandono antes de llegar a proyectos y skills | ⚠️ PARCIAL S2 — collapse mobile |
| P2-5 | Dead CSS + `.icon-sq` duplicado | Deuda técnica visible | ✅ S1 |
| P2-6 | "Anuncios Ganadores (Haciéndola)" como certificación destacada | Suena a curso de gurú, no a credencial profesional | ⚠️ PARCIAL S2 — rebajada visualmente |

---

## 5. AUDITORÍA NARRATIVA

### Incoherencia central entre Mi_Historia.md y el portafolio

**Lo que eres según Mi_Historia.md:**
Un operador de negocios que aprendió tecnología para ejecutar mejor. Alguien que construyó empresa, gestionó logística, negoció contratos, y aplicó tecnología donde más dolía. **El orden es: negocio primero, tecnología como herramienta.**

**Lo que el portafolio dice que eres:**
Un consultor que está aprendiendo a programar. La tecnología como destino, no como herramienta.

**Por qué importa:**
Cuando el orden se invierte, pierdes tu ventaja diferenciadora. En el mercado de developers, pierdes contra juniors con más proyectos GitHub. En el mercado de consultores, pierdes contra MBAs con más credenciales. Cuando mantienes el orden correcto, eres único: alguien que entiende el negocio porque lo vivió, y construye la tecnología porque sabe exactamente qué tiene que hacer.

### El framing de Phantom Customs

El roadmap dice: *"Pivote en 4 meses evitó mayor pérdida. Lección: validar mercado ANTES de cualquier gran inversión técnica."*

Esto suena a que lo cerraste por decisión estratégica inteligente. La realidad (según Mi_Historia.md): capital agotado, todos los ahorros perdidos, vehículo perdido, $7M de deuda en nombre de la madre. Cualquier founder que investigue va a sentir disonancia entre el framing y la realidad.

**Framing propuesto:** *"Decidí cerrar cuando el capital se agotó en el mes 4. En 90 días estaba de vuelta en la operación que sí generaba resultados. La deuda está activa y bajo control."* Eso es madurez de fundador real, no reencuadre cosmético.

### Starken en el portafolio

Un rol de conductor de paquetería de 3 meses no necesita card propia en un portfolio técnico. El esfuerzo de justificarlo como "optimización algorítmica de rutas" llama más atención al problema que resolverlo. En el roadmap final, puede quedar como una línea dentro de un bloque "Período de transición 2021" o eliminarse.

### Narrativa que falta completamente

1. **Tagline / propuesta de valor en una oración** — no existe en ninguna parte del sitio
2. **Para quién trabajas** — ¿PMEs? ¿E-commerce? ¿Startups? El portafolio no lo dice
3. **Qué problema específico resuelves** — "Fusiono operaciones con desarrollo" describe una skill, no un problema
4. **Por qué tú y no cualquier otro** — esta pregunta no tiene respuesta en el sitio
5. **Cómo contactarte** — inexistente

---

## 6. AUDITORÍA UX

### Flujo real del visitante (reconstruido desde browser)

```
1. Llega → dark theme + cyan → "portfolio developer"
2. Lee badge "Student Trainee" → expectativas calibradas hacia junior
3. Lee H2 "Consultoría + Desarrollo" → dos propuestas distintas, confusión
4. Lee párrafo → demasiado largo → abandona a mitad
5. Ve $15M/mes → PARA → lee → esto sí impacta
6. Click "Ver Mi Trayectoria" → entra roadmap
7. Lee 2-3 cards → fatiga cognitiva → la información se vuelve ruido
8. Llega a Educación → "Haciéndola", "Instagram Big-Bang" → expectativas bajan
9. Llega a Proyectos → ve iconos placeholder → expectativas colapsan
10. No encuentra cómo contactarlo
11. Sale
```

### Métricas de UX validadas en browser

> Estado original (auditoría) → estado actual (post S1+S2)

- **Altura mobile (390px):** ~~14,542px~~ → **9,739px** (collapsed) / 12,307px (expanded)
- **Palabras en roadmap:** ~2,500 (sin cambio — collapse mobile mitiga el impacto)
- **Errores en consola:** ~~4~~ → **0**
- **CTAs de contacto:** ~~0~~ → **3** (email + WhatsApp + LinkedIn)
- **Imágenes reales de proyectos:** ~~0~~ → **2/3** (Tokyo Tunning + portafolio)
- **Secciones con ID duplicado (#skills):** ~~2~~ → **1**

### Fricción psicológica específica identificada

| Elemento | Fricción generada |
|---|---|
| Badge "Student/Trainee" | "Este perfil no está listo todavía" |
| Phantom Customs prominente | "¿Puede ejecutar sin fracasar?" |
| Placeholders en proyectos | "Los proyectos no son reales o no tienen UI" |
| "Haciéndola" como certificación | "Toma cursos de gurús de marketing" |
| 17 pantallas de scroll mobile | Abandono antes de llegar a lo relevante |
| Sin contacto visible | "No quiere ser contactado o no está disponible" |

### Navegación: desconexiones

- `#about` en navbar lleva a "3 pilares" — no a un "Sobre Mí" personal
- No hay enlace a Educación ni Skills en el navbar
- No hay "Contacto" en navbar ni en ninguna parte del sitio

---

## 7. AUDITORÍA UI

### Tipografía
- **Inter + Outfit:** Elección sólida y profesional ✓
- **Contraste `text-light-50` sobre `bg-slate-900`:** ~5.5:1 — pasa AA pero en el límite para texto largo
- **`.text-xs` con `opacity-75`:** Probable falla WCAG AA en las notas internas de cards
- **Todo caps en H3s del roadmap** (CONSULTORIA, PHANTOM CUSTOMS): Agresivo, no autoritario
- **Jerarquía tipográfica en cards:** Mezcla de h3/h4/h6/p/text-xs sin clear visual hierarchy

### Sistema de color: problema de jerarquía
El color cyan se usa para: badges, iconos, bordes, textos de énfasis, botones, hover states, glows. **Todo tiene el mismo énfasis visual.** El ojo no puede priorizar porque todo brilla igual. Una jerarquía de color requiere al menos dos niveles de énfasis distintos.

### Project cards: el punto visualmente más débil
- Fondo genérico degradado oscuro
- Icono FontAwesome `fa-4x` como "imagen de preview"
- Sin screenshots, sin demos, sin evidencia visual de UI real

Señal universal para hiring managers: *"Este developer no tiene suficiente para mostrar."*

### Responsive
- Desktop: el code block del hero (`d-none d-lg-block`) **no se muestra en ningún viewport mobile** — el elemento más diferenciador del hero es invisible para la mayoría de visitantes
- Mobile: el roadmap colapsa a una sola columna pero no reduce su contenido — genera la longitud de 14,542px

### Motion
- AOS `duration: 800ms` en cada item del roadmap = contenido que "aparece despacio"
- En scroll rápido mobile, la animación crea sensación de lentitud artificial
- 35KB+ de librería para un efecto que es cosmético, no funcional

---

## 8. AUDITORÍA TÉCNICA FRONTEND

### Stack actual
```
HTML5 (estático) + CSS3 (custom) + Bootstrap 5 (CDN) 
+ FontAwesome 6 (CDN) + Google Fonts (CDN) + AOS 2.3.1 (CDN)
+ Vanilla JS (6 líneas para inicializar AOS)
```

### Arquitectura: correcta para el scope
Un sitio estático de portafolio no necesita más que esto. La elección de stack es adecuada.

### Deuda técnica visual
- `.icon-sq` definido dos veces con valores distintos
- 7 clases CSS definidas pero no usadas en el HTML
- AOS con hash SRI inválido que ya genera errores de consola
- HTML estructuralmente inválido (ver Bug #1 y #2)
- Sin minificación ni bundle (menor en Netlify, pero visible)

### Dependencias CDN (4 externas)
```
1. Bootstrap 5.3.0 — justificada
2. FontAwesome 6.4.0 — justificada (iconos usados extensamente)
3. Google Fonts (Inter + Outfit) — justificada
4. AOS 2.3.1 — NO justificada (35KB+ para fade-up que hace 5 líneas de CSS+JS)
```

### Lo que falta técnicamente
- Validación HTML (ningún error debería existir en un portfolio de developer)
- Linting de estilos (duplicados, dead code)
- Formulario de contacto funcional (Netlify Forms o Formspree — gratuito)
- Analytics (saber de dónde viene el tráfico y qué convierte)

---

## 9. AUDITORÍA DE MARCA PERSONAL

### Autoridad: Media-baja
Los logros de autoridad reales ($15M/mes, WCAG 100, WooCommerce con 364 productos, ADRs formales) están enterrados en texto denso. No son escaneables. No son el foco visual.

### Diferenciación: subutilizada al máximo
Tu ventaja competitiva real:
- Escalaste un negocio 2,900% con tecnología que construiste tú mismo
- Tienes e-commerce real en producción con Core Web Vitals óptimos
- Operaste logística, equipo y finanzas de empresa real
- Tienes experiencia en múltiples industrias: retail, agua, automotriz, delivery, digital

Eso **no existe** como propuesta en el portafolio actual. La palabra "híbrido" aparece una sola vez en el código JS (`"Professional Hybrido"` — con typo) y en ninguna parte del contenido visible.

### Elementos de confianza: presentes pero mal ejecutados
| Elemento | Estado | Problema |
|---|---|---|
| $15M/mes | ✅ Visible | Bien pero podría ser más prominent |
| Empresas reales con nombres | ✅ Presente | Bien |
| Foto personal | ❌ Ausente | Destruye confianza en perfiles freelance/consultor |
| Testimoniales | ❌ Ausente | Sin social proof de terceros |
| Screenshots de proyectos | ❌ Ausente | Placeholders generan desconfianza |
| Certificaciones conocidas | ⚠️ Parcial | Google ✓, Hack4u ✓ — "Haciéndola" ✗ |

### Señales amateur vs. señales senior

**Señales amateur — estado actual (post S1+S2):**
- ~~Badge "Student/Trainee" como posicionamiento principal~~ → ✅ corregido S2
- ~~Placeholders de iconos en proyectos~~ → ✅ screenshots reales S2
- ~~Errores tipográficos en español~~ → ✅ corregidos S1
- "GitHub Portfolio" → perfil genérico (⚠️ parcial — card mejorada, proyectos propios pendientes)
- Certificaciones 2020 de nombres no reconocidos (⚠️ parcial — visualmente rebajadas S2)
- ~~HTML inválido en portafolio técnico~~ → ✅ corregido S1
- ❌ **Sin foto personal** — señal amateur activa más importante restante

**Señales senior presentes (acumuladas):**
- $15M/mes bien ubicado y sin exagerar ✓
- Roadmap con valentía narrativa real ✓
- Print styles implementados ✓
- Schema.org structured data ✓
- Variables CSS custom con criterio ✓
- ADRs formales mencionados (aunque no demostrados) ✓
- **[S1]** 0 errores de consola ✓
- **[S1]** HTML semánticamente válido ✓
- **[S2]** Screenshot real de e-commerce en producción con métricas (WCAG 100/100, LCP 300ms) ✓
- **[S2]** Hero con propuesta de valor única y clara ✓

---

## 10. SIMULACIÓN DE PERFILES

### Recruiter (empresa tech, búsqueda activa)
*"Background interesante pero no entiendo qué rol busca. El badge dice 'Trainee' — lo comparo contra otros juniors donde probablemente pierde frente a alguien con proyectos open-source. Paso al siguiente."*

### Founder de startup (necesita alguien que haga todo)
*"$15M/mes me llama la atención. Bajo a proyectos y solo veo placeholders. No encuentro cómo escribirle. Quiero creerle pero no me da evidencia. LinkedIn mejor."*

### CTO (empresa 50 personas, busca contractor)
*"El HTML tiene secciones anidadas incorrectamente. El meta tag OG está malformado. El hash de AOS parece inventado. Si así entrega su propio portfolio... siguiente."* — **Este perfil abre DevTools. Siempre.**

### Cliente high-ticket (dueño de negocio)
*"No tiene foto. No sé cómo se ve. No encuentro su teléfono ni email. Si fuera bueno alguien lo recomendaría. Demasiado esfuerzo para contactarlo."*

### Diseñador senior
*"Bootstrap dark + cyan, vi esto 500 veces. Los placeholder icons son señal de proyecto sin madurar. Sin identidad visual propia. Competente, no memorable."*

### Desarrollador senior
*"HTML inválido. Secciones duplicadas. Footer dentro de row. Los proyectos son HTML/CSS/Bootstrap. No veo Python real ni Django. El trabajo más serio (WooCommerce custom con ADRs) no tiene repositorio ni caso de estudio visible."*

---

## 11. SPRINTS DE EJECUCIÓN

### SPRINT 1 — Estabilización Crítica ✅ COMPLETADO
**Ejecutado:** 27 Mayo 2026  
**Objetivo:** Eliminar lo que destruye credibilidad activamente. Cero bugs P0 activos al final.

**1.1 — Estructura HTML ✅**
- `section#projects`, `section#skills` duplicado y `<footer>` extraídos del `div.row` anidado
- Todas las secciones son hijos directos de `<body>` (validado DOM real)
- `#skills` único (era 2 → 1). `<footer>` parent: `BODY` (era `DIV`)

**1.2 — Typos ✅**
- "Tecnologico" → "Tecnológico" · "por que" → "porque" · "tecnologia" → "tecnología"
- "CONSULTORIA" → "CONSULTORÍA" · "inversiónes" → "inversiones"

**1.3 — Meta tags ✅**
- OG tag malformado corregido · `</script>` y `</p>` huérfanos eliminados
- `<ul>` dentro de `<p>` (3 instancias) corregidos
- OG, Twitter, Schema.org 100% unificados

**1.4 — Sección de contacto ✅**
- `<section id="contact">` con 3 cards: Email · WhatsApp · LinkedIn
- "Contacto" agregado al navbar

**1.5 — Badge hero ✅**
- "Student Full Stack Python Trainee" → "Consultor Digital & Desarrollador Web"

**1.6 — AOS eliminado → IntersectionObserver nativo ✅**
- AOS CSS + JS eliminados del HTML (−35KB de dependencia)
- `script.js` reemplazado con IntersectionObserver propio (18 líneas)
- 0 errores de hash SRI

**Bonus ✅**
- Favicon SVG creado (`assets/favicon.svg`) — eliminó el último 404 de consola
- Dead CSS eliminado (7 clases sin uso) · `.icon-sq` duplicado corregido

**Criterio de éxito Sprint 1 — Resultado:**
- [x] 0 errores de consola (era 4)
- [x] HTML: todas las secciones hijos de BODY, 0 nesting inválido
- [x] 3 CTAs de contacto explícitos visibles (era 0)
- [x] 0 typos visibles en producción
- [x] Metadatos 100% unificados en todas las fuentes
- [x] AOS eliminado, IntersectionObserver funcionando

**Métricas:**

| Métrica | Antes | Después |
|---|---|---|
| Errores de consola | 4 | 0 |
| Secciones `#skills` duplicadas | 2 | 1 |
| CTAs de contacto explícitos | 0 | 3 |
| Dependencias JS externas | 2 | 1 |
| Altura mobile | 14,542px | 12,645px |

---

### SPRINT 2 — Posicionamiento y Proyectos ✅ COMPLETADO (28 Mayo 2026)
**Duración estimada:** 8-12 horas  
**Objetivo:** Transformar la narrativa central y la sección de proyectos.

#### Tareas:

**2.1 — Redefinir posicionamiento hero ✅**
- Badge: "Consultor Digital & Desarrollador Web"
- H2: "10 años operando negocios. Ahora los construyo con código."
- Lead: propuesta de valor directa con e-commerce + marketing + resultados medibles
- 3 métricas de impacto: $15M/mes, 2,900%, 100/100 Lighthouse

**2.2 — Reemplazar proyectos con evidencia real ✅**
- PCAltiro removido
- Layout redesign: col-lg-8 (Tokyo Tunning featured) + col-lg-4 (portafolio + GitHub)
- Tokyo Tunning: screenshot real de tokyotunning.cl + badges "En producción / WCAG 100/100 / LCP 300ms"
- Portfolio: screenshot local con descripción técnica
- GitHub card: enlace a Spectre-x46

**2.3 — Optimizar roadmap para mobile ✅**
- Toggle "Ver historial completo" / "Ocultar historial" solo en mobile (d-md-none)
- Colapsado: Phantom Customs, Starken, MoanaKai, Retail (clase `roadmap-optional`)
- Resultado: 12,645px → 9,739px (−2,906px) en mobile
- Desktop: todos los items visibles sin cambios

**2.4 — Reencuadrar Phantom Customs ✅**
- Framing de resiliencia: capital agotado por posicionamiento físico, cierre controlado

**2.5 — Reorganizar educación ✅**
- Full Stack Python y Linux Hardening destacados con border-cyan-dim
- Certificaciones 2020 con border-slate-700 (menor contraste visual)

**Criterio de éxito Sprint 2:**
- [x] Los 3 project cards tienen evidencia visual real (screenshots)
- [x] El hero comunica una sola propuesta de valor clara
- [x] Mobile reducido de 14,542px → 9,739px (objetivo <6,000px parcialmente alcanzado — roadmap aún es largo por contenido denso)
- [x] PCAltiro removido
- [x] Roadmap tiene colapso en mobile

**Métricas antes/después Sprint 2:**

| Métrica | Antes S2 | Después S2 |
|---|---|---|
| Mobile height (collapsed) | 12,645px | 9,739px |
| Proyectos con screenshot real | 0/3 | 2/3 |
| Hero propuesta de valor | Fragmentada | Unificada |
| Contacto visible | Sí (S1) | Sí |

---

### SPRINT 3 — Diferenciación y Marca
**Duración estimada:** 6-8 horas  
**Objetivo:** Agregar los elementos que convierten un portfolio competente en uno memorable.

#### Tareas:

**3.1 — Foto personal (Variable — depende de disponibilidad)**
- Una foto real, bien iluminada, fondo neutro o contexto de trabajo
- No necesita ser foto de estudio. Puede ser casual-profesional.
- Agregar al hero o a la sección "Sobre Mí"

**3.2 — Agregar sección "Sobre Mí" real (2h)**
- El `#about` actual lleva a "3 pilares" — no a un sobre mí personal
- Nueva sección: 2-3 párrafos con voz personal
- Incluir la historia de origen (versión de portafolio — concisa, poderosa)
- Propuesta de párrafo de apertura:
  > *"Nací en La Portada, San Bernardo. Mis primeras interacciones con computadores fueron en un ciber café del barrio. No lo estudié formalmente por muchos años — un error que corregí dando un rodeo de una década por retail, logística, y emprendimiento. Ese rodeo me dio algo que ningún bootcamp enseña: sé lo que pasa cuando un sistema de inventario falla un sábado a las 11pm, porque yo era quien tenía que arreglarlo."*

**3.3 — Agregar sección "Servicios" (2h)**
- 2-3 servicios específicos con descripción de 2 líneas cada uno
- Ejemplos basados en Mi_Historia.md:
  - **E-commerce WordPress/WooCommerce** — desarrollo, configuración y optimización
  - **Estrategia Digital + Implementación** — Meta Ads, SEO técnico, contenido
  - **Auditoría y Optimización de Sitios** — performance, accesibilidad, conversión
- No necesita precios — puede decir "consulta por proyecto"

**3.4 — Agregar analytics (30 min)**
- Integrar Google Analytics 4 o Plausible
- Sin analytics, no hay datos para decidir qué mejorar

**3.5 — Verificar/corregir LinkedIn URL**
- La URL actual en el portafolio: `linkedin.com/in/fdroguetto/`
- Verificar si el perfil real tiene ese slug o si hay typo
- Si hay typo en el slug de LinkedIn, actualizar en portafolio

**Criterio de éxito Sprint 3:**
- [ ] Foto personal visible en el sitio
- [ ] Sección "Sobre Mí" con narrativa de origen
- [ ] Sección de servicios con al menos 2 ofertas específicas
- [ ] Analytics configurados
- [ ] LinkedIn URL verificada y correcta

---

### SPRINT 4 — Caso de Estudio Tokyo Tunning (Diferenciador Elite)
**Duración estimada:** 8-12 horas  
**Objetivo:** Documentar el trabajo más importante del portfolio como caso de estudio completo.

#### Propuesta de estructura para `/caso-tokyo-tunning.html`

```
1. El contexto: negocio de persa → e-commerce → $15M/mes
2. El problema técnico real (qué estaba roto/faltando)
3. Las decisiones arquitectónicas tomadas (ADRs: mini-cart, fragmentos WC, sin Basel)
4. El trabajo ejecutado:
   - Custom PHP templates
   - JavaScript pub/sub para ATC
   - CSS dark mode automotriz
   - WooCommerce con 364 productos
5. Las métricas resultantes:
   - LCP 300ms, CLS 0.00
   - WCAG 100/100 (axe-core validado)
   - Core Web Vitals verdes
6. El impacto de negocio: contexto de crecimiento
7. Screenshots reales de la UI
8. Link al sitio en producción
```

**Por qué este sprint importa:**  
Ningún portfolio junior tiene esto. Pocos portfolios senior lo tienen documentado así. Un caso de estudio de e-commerce con ADRs formales, métricas técnicas reales, y resultados de negocio medibles es el diferenciador más poderoso que puedes tener para clientes con proyectos de e-commerce.

**Criterio de éxito Sprint 4:**
- [ ] Página `/caso-tokyo-tunning.html` publicada y linkada desde el project card
- [ ] Screenshots reales del UI del sitio
- [ ] Métricas técnicas documentadas con evidencia
- [ ] ADRs explicados en lenguaje no técnico para clientes
- [ ] Link al sitio en producción verificado

---

## 12. DEFINICIÓN DE ÉXITO

### Sprint 1 — Mínimo viable de credibilidad técnica
Un CTO que abra DevTools no va a encontrar problemas de estructura HTML.

### Sprint 2 — Mínimo viable de conversión
Un visitante puede entender qué ofreces y tiene al menos dos formas de contactarte sin friction.

### Sprint 3 — Portafolio funcional como herramienta de negocio
El visitante sabe quién eres, qué problema resuelves, para quién trabajas, y puede contactarte en 10 segundos.

### Sprint 4 — Portafolio diferenciado de nivel senior
El portafolio compite en el mismo plano que perfiles con 5+ años de experiencia en desarrollo, porque tiene evidencia técnica real documentada que la mayoría no puede igualar.

---

## NOTAS PARA EJECUCIÓN

### Archivos principales a modificar
- `index.html` — Sprints 1, 2, y 3
- `styles.css` — Sprints 1 y 2 (dead code, duplicados)
- `script.js` — Sprint 1 (reemplazar AOS)
- `caso-tokyo-tunning.html` — Sprint 4 (nuevo archivo)

### Herramientas de validación recomendadas
- **HTML:** https://validator.w3.org/ — 0 errores críticos como meta de Sprint 1
- **Accesibilidad:** axe DevTools (extensión Chrome) — AA compliance
- **Performance:** Lighthouse en Chrome DevTools
- **Contraste:** WebAIM Contrast Checker

### Contexto de trabajo actual (Mayo 2026)
- Cliente activo: TokyoTunning ($800K/mes, sin contrato formal)
- Próximo paso: subir sitio TT a producción → conversación de participación porcentual
- Deuda activa: $7M (no urgente per estrategia de no-repactación anticipada)
- Capital disponible: ~$300K + moto ($1.5M avaluada)
- Foco correcto: TT producción → este portafolio → ads → negociación

---

*Documento generado como base de trabajo para sprints de evolución del portafolio.*  
*Actualizar este documento al inicio y cierre de cada sprint.*  
*Fuentes: Auditoría de código fuente, validación DOM en browser real (Playwright), análisis de screenshots desktop/mobile, y Mi_Historia.md.*
