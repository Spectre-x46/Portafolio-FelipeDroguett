# AUDITORÍA INTEGRAL — PORTFOLIO Y ECOSISTEMA PROFESIONAL

**Sujeto:** Felipe Droguett Ortiz · Droguett Consulting SpA
**Fecha de auditoría:** 2026-08-19 · **Revisión estratégica:** 2026-08-19 (v2)
**Alcance:** felipe-droguett.netlify.app · GitHub `Spectre-x46` · LinkedIn `fdroguetto` · credencial Acreditta · trabajo local (Tokyo Tunning, mvp-agente, mvp-agente-wf-first, Droguett_Agency_OS, El Bajón de la Cami)
**Estado:** DIAGNÓSTICO Y PLAN. Ningún cambio implementado. Ningún commit, push, deploy ni modificación de perfiles.
**Evidencia visual:** `./evidencia/`

> **Convención de lectura.**
> **HECHO** — observado y verificable por mí. **HECHO REPORTADO** — aportado por Felipe, no verificado independientemente. **INTERPRETACIÓN** — qué significa. **RECOMENDACIÓN** — qué propongo.
> Severidad visual: `CRITICAL` / `MAJOR` / `MODERATE` / `MINOR`. Prioridad: `P0`–`P4`.

> **Cambios de la revisión v2** (§0).

---

# 0. REGISTRO DE CAMBIOS — v1 → v2

| # | Cambio | Motivo |
|---|---|---|
| CH-01 | **D-02 reabierta.** La v1 la resolvía como binaria (*ingeniería vs agencia*) y recomendaba "ingeniería". Sustituida por **tres arquitecturas de posicionamiento** completas (§25) | La dicotomía no representa el trabajo real |
| CH-02 | **Marketing y contenido reclasificados** de "contexto" a **actividad profesional de primer orden con evidencia sistemática propia** (§15) | La v1 los subordinaba indebidamente |
| CH-03 | **Full Stack Python: TERMINADO Y ACREDITADO** (04-08-2026, verificado en Acreditta con registro blockchain). Eliminada toda referencia a "pendiente"/"examen aprobado" | Información nueva |
| CH-04 | **Nueva sección §16 — Formación y credenciales**: qué va en home, qué en sección propia, qué solo en LinkedIn | Petición explícita |
| CH-05 | **LinkedIn sube de prioridad**: de "no auditable" a **hallazgo de desalineación activa** (§18) | Información nueva reportada |
| CH-06 | **GitHub dividido en Fase A (inmediata) y Fase B (post case study)**. Dependencias corregidas | La v1 bloqueaba innecesariamente la limpieza |
| CH-07 | **Diseño dividido en A (estructural, temprano) y B (dirección de arte, posterior)**. D-07 pasa a parcialmente aprobada | El diseño estructural no es secundario |
| CH-08 | **Corregida la inconsistencia de scoring** (6,5 vs 5,2). Eliminada la media global; rúbrica por dimensiones con banda cualitativa (§41) | Falsa precisión |
| CH-09 | **Eliminado todo seniority atribuido** ("Senior AI Engineer", "es senior"). Sustituido por descripción de evidencia | Petición explícita |
| CH-10 | **"Taller de ingeniería" degradado de estética a principio** (§6.3). Prohibición explícita de skin industrial/automotriz | Riesgo de confusión con Tokyo Tunning |
| CH-11 | **Validada la cadena causal contra la evidencia** con una corrección y una salvedad (§3.8) | Petición explícita |
| CH-12 | **Nueva §19 — Recorrido del ecosistema** y **§20 — Arquitectura por audiencias** | Petición explícita |
| CH-13 | **D-01 APROBADA** (case study anonimizado). Sprint 2 desbloqueado | Decisión de Felipe |
| CH-14 | **D-03 a D-08 actualizadas** (§39) | Decisiones de Felipe |
| CH-15 | **Orden de sprints revisado**: nuevo Sprint 1B en paralelo; diseño estructural adelantado | Dependencias reales |
| CH-16 | **7 hallazgos nuevos** (F-046 → F-052) en la matriz | Información nueva |

---

# 1. EXECUTIVE SUMMARY

## 1.1 La conclusión en una frase

**Tu presencia pública describe con precisión al profesional que eras en febrero de 2026. No describe ninguna de las tres cosas que haces hoy: marketing sistematizado, ingeniería de producto y sistemas de IA.**

## 1.2 Corrección importante respecto a la v1

La primera versión de esta auditoría cometió un error de énfasis: al descubrir la profundidad técnica del agente de IA, **sobrecompensó hacia ingeniería** y planteó la decisión de posicionamiento como binaria (*ingeniería* vs *agencia/marketing*).

Esa dicotomía es falsa y la evidencia la desmiente. El discovery encontró trabajo sistemático y actual en **ambos** frentes:

**HECHO — evidencia de marketing sistematizado (no ocasional):**
- `Auditorias/meta-google-audit/` — 13 documentos numerados (`01-executive-summary` → `13-roadmap`) + `IMPLEMENTATION-OS.md`
- `Sistema/Marketing-Content/MIE_MARKETING_INTELLIGENCE_ENGINE.md`, `CONTENT_DATABASE_SCHEMA.md`, `PLAN_MARKETING_ANUAL_2026-2027.md`, `SOP_CAMPANAS_TOKYO_TUNNING.md`
- Pipeline de precios de CyberDay en 3 etapas versionadas
- `Droguett_Agency_OS/` — servicio productizado con RACI, 6 SOPs, pricing, exclusiones, scaffolding

**HECHO — evidencia de ingeniería de sistemas de IA:**
- `mvp-agente-wf-first/` — `B_PRODUCT_v1`, modificado el 2026-08-19 a las 04:35
- `mvp-agente/` — baseline R1, 523 archivos, ~880 aserciones, dataset de evals de 500 casos

**INTERPRETACIÓN.** El problema no es elegir cuál mostrar. **El problema es que ninguna de las dos es visible.** El portfolio muestra un tercer perfil —desarrollador WordPress con background comercial— que ya no describe a ninguna de las dos.

## 1.3 El hallazgo central (sin cambios respecto a v1)

**HECHO.** El sitio presenta como trabajo "ACTUALIDAD" (`Roadmap.jsx:11-19`):

> *"Desarrollo y mantención de TokyoTunning.cl — WordPress + WooCommerce + PHP custom… Examen final Full Stack Python aprobado Mayo 2026. Certificación oficial: Agosto 2026."*

**HECHO.** Dos de esas afirmaciones ya son falsas o están caducadas:
1. El trabajo actual no es mantención de WordPress (ver `mvp-agente-wf-first/ESTADO.md`, modificado hoy).
2. La certificación **ya fue emitida** el 04-08-2026 y es verificable públicamente.

**INTERPRETACIÓN.** El desfase no es de un mes. Es de seis meses en posicionamiento y de dos meses en trabajo demostrable, y afecta simultáneamente a las tres capas de tu actividad.

## 1.4 Estado por área (v2)

| Área | Veredicto | Prioridad |
|---|---|---|
| Posicionamiento / arquitectura de evidencia | **Decisión abierta** — 3 alternativas en §25 | **P0 · D-02** |
| Trabajo actual (IA) invisible | Ausente por completo | **P0** |
| Trabajo actual (marketing sistematizado) invisible | Reducido a chips de habilidades | **P0** |
| Formación / credencial acreditada | Desactualizada en 3 superficies | **P0** |
| Proyectos mostrados | 1 real + 1 autorreferencial + 1 enlace | **P0** |
| Credibilidad (imagen contradictoria, claims sin fecha) | Fugas activas | **P0** |
| GitHub | Contradice al portfolio | **P0** |
| LinkedIn | Posicionamiento público desalineado (reportado) | **P0** |
| Arquitectura de información | Roadmap 39%, Proyectos 16% | P1 |
| Diseño estructural (jerarquía, evidencia visual, a11y) | Deficiente | **P1** |
| Dirección de arte | Competente, genérica, sin identidad | P2 |
| Performance | 363 KB JS en un chunk, CSR puro | P2 |
| Responsive | Sin overflow; la prueba clave desaparece en móvil | P1 |

## 1.5 Los tres cambios de mayor impacto

1. **Publicar el agente de IA como case study anonimizado** — la capacidad más alta y menos visible.
2. **Reparar GitHub (Fase A, ejecutable ya)** — hoy funciona como desmentido del portfolio.
3. **Reorganizar el portfolio como arquitectura de evidencia** — que la amplitud se descubra por casos, no se declare por lista.

---

# 2. PERCEPCIÓN EXTERNA ACTUAL — SIMULACIÓN DE VISITANTES

## VISITANTE 1 — RECLUTADOR (20–30 segundos)

**HECHO — recorrido ocular sobre `evidencia/01-live-hero-1440.png`:**
1. `Felipe Droguett.` — 56px, blanco, peso 700.
2. Tarjeta "CASO REAL" (borde cyan + glow).
3. Métricas `$15M / 2.900% / 27:1`.
4. Botón cyan `Hablemos de tu negocio`.

**INTERPRETACIÓN.** El elemento tipográficamente dominante es un nombre propio — el dato con menor contenido informativo para un desconocido. El H2 hace todo el trabajo de posicionamiento a 24px en gris. A los 5 segundos el visitante todavía no sabe **qué contratar**.

**Qué entiende a los 30 s:** consultor/desarrollador chileno con un caso de e-commerce fuerte.
**Qué no entiende:** qué rol buscas, si programas o coordinas, si trabajas con IA, si haces marketing.
**Qué recuerda:** `$15M/mes` y `27:1`. Nada técnico, nada de marketing sistemático.
**Nivel percibido:** el stack visible (`HTML5/CSS3`, `Bootstrap 5`) y la formación descrita como pendiente proyectan un perfil **por debajo** de la evidencia. La contradicción entre números de negocio altos y stack básico se resuelve a la baja.

## VISITANTE 2 — TECH LEAD

**INTERPRETACIÓN.** El case study **sí** transmite pensamiento de ingeniería — especialmente `Deuda técnica activa`. Pero:

- El tech lead **verifica**. Lighthouse sobre `tokyotunning.cl` hoy: **Accessibility 96, 18 fallos de contraste, Best Practices 77** (§14.4). El badge dice `WCAG 100/100` sin fecha.
- `Skills` lista `HTML5 / CSS3`, `Bootstrap 5`, `DaVinci Resolve`. Se lee como perfil de 2019.
- No hay mención de Node.js, n8n, LLM, APIs REST, testing, observabilidad, CRM.
- No hay diagramas ni repositorios serios enlazados.

**Veredicto:** *"Sabe de negocio y hace WordPress bien. No tengo evidencia de que construya sistemas."* — Es falso, y demostrablemente falso con lo que hay en tu disco.

## VISITANTE 3 — FOUNDER / EMPRESA

**INTERPRETACIÓN.** Es el visitante mejor atendido. El copy está escrito para él. La narrativa `$500K → $15M` con el detalle de los `$800.000` perdidos por consultas sin responder demuestra pensamiento de producto.

**Problema:** esa frase abre un arco que **el sitio nunca cierra**. Es el mejor cliffhanger del portfolio y está sin resolver.

## VISITANTE 4 — CLIENTE DE MARKETING  *(nuevo en v2)*

**INTERPRETACIÓN.** Un potencial cliente de marketing ve: `Meta Ads (ROI Focus)`, `Producción de Contenido`, `SEO / SEM Local` como chips, y un ROAS de 27:1 en el hero. Suficiente para generar interés, **insuficiente para generar confianza operativa**.

No ve: cómo planificas, cómo mides, cómo reportas, qué proceso sigues, qué entregas. Todo eso existe documentado (`SOP_CAMPANAS`, `PLAN_MARKETING_ANUAL`, `MIE`, auditoría Meta/Google en 13 partes, `Agency_OS` con RACI y plantillas de reporte) y **nada es visible**.

**Este visitante es el que peor servido está en relación con la evidencia disponible.** Es el hallazgo que la v1 pasó por alto.

## VISITANTE 5 — DISEÑADOR (crítico)

**HECHO.** `#020617` base · `cyan-400 #22D3EE` acento único · `violet-600` decorativo · Outfit + Inter · glassmorphism (`rgba(15,23,42,.55)` + `blur(20px)`) · tres orbes de blur · grid a 64px · glows · `text-shadow` cyan en el H2.

**INTERPRETACIÓN — `MAJOR`.** Bien ejecutado y **completamente intercambiable**. Fondo slate + acento cyan + glass + orbes + grid es la configuración por defecto del portfolio de desarrollador 2023-2026. Sustituye el nombre y la página sigue funcionando igual — la prueba que planteaste, y falla.

Detalles concretos:
- **Seis opacidades de borde** conviviendo: `white/6`, `/8`, `/10`, `/12`, `/15`, `/[0.13]`.
- **Trece declaraciones tipográficas**, cinco arbitrarias: `text-[10px]`, `text-[11px]`, `text-[15px]`, `text-[1.05rem]`, `text-[3.5rem]`.
- **Glow cyan en tres jerarquías distintas** — el recurso pierde función de énfasis.
- **`text-glow-cyan` sobre texto de 24px** — reduce nitidez sin aportar jerarquía.
- **Ritmo vertical plano:** todas las secciones `pt-20 pb-16`. Una sección de prueba pesa lo mismo que una de relleno.

---

# 3. PERFIL PROFESIONAL DESCUBIERTO

## 3.1 Inventario de trabajo real localizado

| Ubicación | Qué es | Última actividad | ¿Visible? |
|---|---|---|---|
| `Marketing/mvp-agente-wf-first/` | Agente `B_PRODUCT_v1`, multi-cliente | **2026-08-19** | ❌ |
| `Marketing/mvp-agente/` | Baseline R1, 523 archivos versionados | 2026-08-01 | ❌ |
| `Droguett_Agency_OS/` | Servicio productizado, SOPs, RACI, pricing | 2026-08-12 | ❌ |
| `Marketing/Auditorias/meta-google-audit/` | Auditoría Meta/Google en 13 partes | 2026-06 | ❌ |
| `Marketing/Sistema/Marketing-Content/` | MIE, schema de contenido, plan anual 26-27, SOPs | 2026 | ❌ |
| `Marketing/Analisis/`, `KPI/` | Análisis de virales, KPI IG/FB/TikTok | 2026 | ❌ |
| `Web/Auditorias/auditoria_tokyo_tunning.md` | Auditoría frontend a nivel de línea | 2026 | ❌ |
| `Web/mystaging_completo/` | Staging WP/Woo con `.githooks`, tests, audit-reports | 2026-08-19 | Parcial |
| Credencial Acreditta | Full Stack Python acreditado | **2026-08-04** | ❌ |
| `El bajon de la cami/` | Menú digital + `generar_menu.py` | 2026-07-30 | ❌ (correcto) |
| `web-portfolio/` | Este portfolio | 2026-06-07 | ✅ |

## 3.2 El agente de IA

### Problema comercial
**HECHO.** Del case study existente: en CyberDay 2026 el sistema técnico funcionó tres días sin fallos, pero *"el análisis post-evento mostró que dejamos pasar cerca de $800.000 en ventas porque las consultas no fueron respondidas a tiempo."*

**INTERPRETACIÓN.** El agente nació de una pérdida cuantificada detectada por análisis post-evento. Es originación de producto desde el negocio, no experimentación técnica.

### Arquitectura (línea activa `B_PRODUCT_v1`)
**HECHO.** `src/b_product_v1/` con capas `understanding · policy · composer · ingress · egress · runtime`.
Enrutamiento multi-modelo: **Understanding = `gpt-5.6-luna`** (Structured Outputs strict); **Composer = `gpt-4o-mini`** (Structured Outputs por turno).

**INTERPRETACIÓN.** Separar comprensión de composición y asignar un modelo distinto a cada una es simultáneamente una decisión de arquitectura y de coste: capacidad alta solo donde hay interpretación, modelo barato para redactar sobre evidencia ya resuelta.

### Principio arquitectónico documentado
**HECHO.** `mvp-agente/CLAUDE.md`, principio **WORKFLOW FIRST**:
> *"El AI Agent recibe evidencia estructurada, interpreta lenguaje residual y redacta. No reconstruye libremente el estado vigente del negocio."*
> *"Una bandera que depende de que el LLM decida obedecerla no constituye una solución determinista completa."*
> *"No solucionar defectos operacionales ampliando el system prompt."*

### Guardrails y seguridad
**HECHO.** En `src/*.js`: `redactPII`, `redactObj`, `sanitizeLogData`, `sanitizeUnverifiedCommerce`, detección y persistencia de `takeover`, deduplicación, `allowlist`, `prompt_injection`.
**HECHO.** `tests/local/security_hardening.test.mjs`: *"logger pseudonimiza IDs y reemplaza texto por hash"*, *"alerta deshabilitada falla cerrada"*, *"alerta privada emite solo metadata allowlisted"*.

### Evaluación
**HECHO.** `data/evals/instagram-benchmark-summary-v1.json`:
```
Fuente:      3.990 hilos · 48.937 mensajes · 12 meses · parse_failures: 0
Proceso:     14.664 elegibles anonimizados → 11.463 únicos
             3.201 duplicados exactos eliminados · 10.897 clusters de plantilla
Benchmark:   500 casos estratificados, cuotas EXACTAMENTE cumplidas
             60 critical_sensitive · 60 multiturn · 80 multi_intent · 300 simple
PII:         residual_pii_signals: 0
Artefactos:  fijados por SHA256
```
**HECHO.** ~880 aserciones en 18 archivos de test. Línea activa: `51/51` E2E de producto · `464/464` wf1 · `84` turnos de replay real, 0 errores duros.

### Auditoría de procedencia
**HECHO.** `AUDIT-N8N-PROVENANCE-20260731`. Detuviste la implementación al notar que n8n no mostraba ejecuciones posteriores al 24 de julio. `saveDataSuccessExecution`/`saveDataErrorExecution` en `"none"` hacían **indistinguible** "nunca pasó por n8n" de "pasó pero no se guardó". Verificado **contra la base SQLite directamente**: 0 filas en `execution_entity` desde 2026-07-26 sobre 6.484 históricas. Prueba controlada autorizada: `execution_id` 13066/13067, `runData` inspeccionado nodo por nodo, settings restaurados y verificados por hash.

Y la conclusión:
> *"Esta prueba no crea `execution_id` retroactivos para Historias 3-5 — esas corridas siguen clasificadas `N8N_WEBHOOK_RESPONSE_ONLY + AGENT_CORE_CORROBORATED`."*

**INTERPRETACIÓN.** Detectaste que tu propia trazabilidad era ambigua, la mediste contra la fuente primaria y documentaste el límite exacto de lo que podías afirmar — negándote a reclasificar tu evidencia a tu favor. Es un comportamiento muy difícil de fingir y hoy nadie lo puede ver.

### Modos de fallo
**HECHO.** Defectos con impacto medido (línea activa):
```
1  afirmación de pago no derivaba a nadie
2  crash en toda continuación multi-turno (span null)
3  el referente resuelto no llegaba al catálogo (evidencia 1→5)
4  el agente preguntaba por datos que ya tenía
5  1 de cada 3 turnos caía en la respuesta canónica (29-30% → 0%)
→ 5 encontrados, 5 arreglados, 31 regresiones añadidas
```
**HECHO.** A/B con variable única (mismo `workflow_version_id`, prompt y modelo; solo cambia `agent-core`): exponer telemetría interna al LLM llevó Historia 1 T1 de **5/5 a 0/5**.
**HECHO.** Taxonomía propia: `safety_pass` / `evidence_pass` / `functional_pass` / `commercial_pass`.
**HECHO.** Huecos declarados sin maquillar: *"NO son defectos de política, son providers que no existen"* — R05, R06, R10, R12; catálogo exact-first vs lenguaje suelto (9/42 turnos).

## 3.3 Marketing sistematizado — capacidad de primer orden  *(reclasificado en v2)*

**HECHO — auditoría estructurada como entregable de consultoría.** `Auditorias/meta-google-audit/` contiene 13 documentos numerados: resumen ejecutivo, Meta Business, SEO en Facebook, SEO en Instagram, automatizaciones, sistemas de IA, customer journey, generación de leads, Google Business, Maps SEO, análisis de catálogo, matriz de prioridad, roadmap — más `IMPLEMENTATION-OS.md`.

**HECHO — sistema de marketing operativo.** `Sistema/Marketing-Content/`: `MIE_MARKETING_INTELLIGENCE_ENGINE.md`, `CONTENT_DATABASE_SCHEMA.md`, `PLAN_MARKETING_ANUAL_2026-2027.md`, `SOP_CAMPANAS_TOKYO_TUNNING.md`, `AUDITORIA_SOCIAL_MEDIA_JUN2026.md`, `GUIONES_QUICK_REFERENCE.md`, `SISTEMA_OPERATIVO_MARKETING.md`.

**HECHO — trabajo de datos comerciales.** CSVs de CyberDay con pipeline de precios en 3 etapas: `01-pre-cleanup-sale-prices` → `02-cyber-day-activation` → `03-normalizar-precios-todos`. Exports de catálogo WooCommerce fechados.

**HECHO — análisis.** `Analisis/`: análisis de vídeos virales, `Reporte_Viral_TokyoTunning.html`, `Informe_Final_v2.html`. `KPI/`: métricas de Facebook, Instagram y TikTok.

**HECHO — servicio productizado.** `Droguett_Agency_OS/`: catálogo de servicios, modelo de pricing, paquetes, posicionamiento, **límites y exclusiones**, checklist de calificación, guion de discovery, plantillas de propuesta/cotización, onboarding, **RACI**, 6 SOPs, flujos semanal y mensual, 8 plantillas, estructura replicable por cliente, 7 prompts versionados, schemas JSON/YAML, scripts de scaffolding.

Regla declarada:
> *"La agencia no vende acceso ilimitado a Felipe. Vende resultados, entregables, procesos y capacidades definidos."*

**INTERPRETACIÓN — corrección de la v1.** Esto no es "sé de marketing" ni es contexto de una carrera técnica. Es **marketing operado como sistema**: con schema de datos, SOPs, matriz de prioridad, pipeline de precios versionado y separación explícita de alcance comercial. Un cliente de marketing que viera esto contrataría con más confianza que viendo el ROAS solo.

**La v1 lo relegó a "contexto". Era un error de lectura y queda corregido.**

## 3.4 Producción de contenido — capacidad, no herramienta  *(nuevo en v2)*

**HECHO.** `Multimedia/` con vídeo raw y editado. `Guion_Tokyo.txt`, `GUIONES_QUICK_REFERENCE.md`, `brief_grabacion.md` y `parrilla_contenido.md` en Agency OS. `Analisis Videos Virales.pdf`. KPI de las tres plataformas.
**HECHO.** Del case study existente: *"El negocio creció a través de videos en Instagram y TikTok, consultas por WhatsApp y envíos a todo Chile — antes de que hubiera un local físico o una empresa formal."*

**INTERPRETACIÓN.** La producción de contenido no es una habilidad accesoria: **es el canal que originó el crecimiento del caso principal antes de que existiera infraestructura**. Es evidencia directa de adquisición, y es la capa que hizo aparecer todos los problemas posteriores de la cadena.

**RECOMENDACIÓN.** Distinguir estrictamente, como pediste:
- **Capacidad profesional:** *producción de contenido orientada a adquisición* — guion, grabación, edición, parrilla, análisis de rendimiento. **Sí** merece presencia.
- **Herramienta:** `DaVinci Resolve`. **No** merece figurar junto a Node.js o APIs. A lo sumo, nota al pie en la sección de formación/herramientas.

## 3.5 Producto digital y frontend

**HECHO.** `Web/Auditorias/auditoria_tokyo_tunning.md` diagnostica a nivel de línea:
> *C1 — Tailwind CDN en producción. `functions.php` línea 33. Se enqueue con `false` como 5to argumento → carga en `<head>` → render-blocking completo. El `tailwind.config` se inyecta en `wp_head` con hook 100 (línea 596), DESPUÉS de que el script ya cargó → existe una race condition real.*
> *C2 — Hero sin `srcset`. `front-page.php` líneas 85–93. El `sizes="100vw"` sin `srcset` es inútil. Esta es la imagen con `fetchpriority="high"` → daña el LCP directamente.*

**HECHO.** Verificado hoy en producción: `tokyotunning.cl` **ya no carga `cdn.tailwindcss.com`**. El hallazgo fue implementado.

**INTERPRETACIÓN.** Diagnóstico a nivel de línea, identificación de una race condition en el orden de hooks de WordPress, y fix verificable en producción. Es evidencia directa de capacidad de frontend, y es invisible.

## 3.6 Formación y credenciales  *(actualizado en v2)*

**HECHO — verificado en Acreditta, 2026-08-19:**
```
Titular ......... Felipe Orlando Droguett Ortiz
Credencial ...... BOOTCAMP DESARROLLO APLICACIONES FULL STACK PYTHON TRAINEE
Emisor .......... Talento Digital para Chile (cuenta verificada)
Emisión ......... 04-08-2026        Caducidad: ninguna
Registro ........ blockchain (transaction ID publicado)
Competencias .... Fundamentos de Front-End · Fundamentos de Programación en Python ·
                  Programación Avanzada en Python (V2) · Fundamentos de Bases de Datos
                  Relacionales · Desarrollo Web con Django (V2) · Acceso a Datos en
                  Django (V2) · Desarrollo de Portafolio de Producto Digital ·
                  Desarrollo de Empleabilidad en la Industria Digital
Criterio ........ aprobar los nueve módulos y el proyecto final de cada uno
URL ............. acreditta.com/credential/8f73702b-0511-40f1-80b0-6224284c8eab
```

**HECHO.** El portfolio dice hoy (`Roadmap.jsx:16`): *"Examen final Full Stack Python… aprobado Mayo 2026. Certificación oficial: Agosto 2026."* Y (`Roadmap.jsx:86`): *"Full Stack Python · Nov 2024 — Ago 2026"* marcado como formación en curso.
**HECHO REPORTADO.** LinkedIn contiene *"Python & Cybersecurity Student"*.

**INTERPRETACIÓN.** La misma información desactualizada aparece en tres superficies. En dos de ellas te describe como estudiante de un programa que ya completaste y acreditaste. Es una fuga de credibilidad gratuita, y de las más fáciles de cerrar.

**Salvedad honesta.** El nombre oficial de la credencial incluye **"TRAINEE"**. Es real, verificable y con registro blockchain — pero es un descriptor de nivel de entrada. Presentarla como argumento principal de capacidad trabajaría **en tu contra**: sitúa un techo por debajo de lo que tu trabajo demuestra. Su valor es de **validación formal complementaria**, exactamente como planteaste en tu punto 12. Ver §16.

## 3.7 Síntesis: quién eres según la evidencia

**Sin atribuir seniority** (§CH-09), la evidencia sostiene lo siguiente, en orden de fuerza demostrada:

| Capa | Qué demuestra la evidencia | Visibilidad actual |
|---|---|---|
| **Sistemas de IA en producción** | Arquitectura por capas, enrutamiento multi-modelo, evals sobre corpus real, guardrails, auditoría de procedencia, análisis de fallos | **0%** |
| **Marketing y crecimiento sistematizado** | Auditoría en 13 partes, plan anual, SOPs, pipeline de precios, ROAS 27:1, servicio productizado | **~10%** (chips) |
| **Producto digital y frontend** | Reconstrucción completa de e-commerce, auditoría a nivel de línea con fix verificado, performance, accesibilidad | **~60%** |
| **Contenido y adquisición** | Canal originador del crecimiento, guiones, parrilla, KPI, análisis de virales | **~5%** (un chip) |
| **Operación de negocio** | 10 años, unit economics, pricing, cierre honesto de un emprendimiento fallido | **~90%** ✅ |

**El patrón es inverso al deseable: cuanto más valiosa y menos común es la capacidad, menos visible está.**

## 3.8 Validación de la cadena causal  *(nuevo en v2)*

Pediste que verificara la cadena contra la evidencia sin forzarla. **La cadena se sostiene, con una corrección y una salvedad.**

### Verificación por etapa

| Etapa propuesta | Evidencia que la sostiene | ¿Se sostiene? |
|---|---|---|
| Problema comercial | Moana Kai (2019-21): modelo de negocio completo, unit economics, cierre por accidente | ✅ |
| Marketing / adquisición | Moana Kai captación 100% digital vía Marketplace + Meta Ads; Consultoría 2021+ con Meta Ads hasta $500K/mes | ✅ |
| Aparece mayor demanda | TT creció por IG/TikTok/WhatsApp **antes** de local físico o empresa formal (case study) | ✅ **fuerte** |
| E-commerce / producto digital | Reconstrucción 2026: sitio, catálogo, pagos, pixel, CTAs, 364 productos con Webpay Plus | ✅ |
| Problemas de UX / conversión / performance | `auditoria_tokyo_tunning.md` con diagnóstico a nivel de línea; Core Web Vitals; accesibilidad | ✅ |
| Problemas de escala operacional | CyberDay 2026: técnico OK, **$800.000 perdidos por consultas sin responder** | ✅ **fuerte** |
| Automatización / CRM | Integración Kommo, n8n, workflows | ⚠️ ver corrección |
| Agente de IA | `mvp-agente` desde jul-2026 | ⚠️ ver corrección |
| Problemas de confiabilidad | Validator, `safe_fallback`, ledger de hard_failures, replay real | ✅ |
| Testing / evals / observabilidad / seguridad | 500 casos, ~880 aserciones, logger pseudonimizado, auditoría de procedencia | ✅ **fuerte** |

### Corrección
**HECHO.** La integración CRM/Kommo y el agente **no son dos etapas sucesivas**: son el mismo movimiento. `kommo_runtime.js` vive dentro de `mvp-agente/src/` desde el inicio de esa línea, y los workflows `TT-Kommo-Bridge`, `TT-Kommo-In`, `TT-Kommo-Mirror` son parte del mismo proyecto.

**RECOMENDACIÓN.** Presentar la cadena en **cinco movimientos**, no siete. Es más honesta y se lee mejor:
```
1  Vender          →  entender dónde se pierde el dinero
2  Atraer          →  marketing, contenido, Ads  →  aparece demanda
3  Convertir       →  e-commerce, frontend, UX, performance  →  aparece escala
4  Atender         →  automatización, CRM y agente de IA  →  aparece incertidumbre
5  Confiar         →  evals, testing, guardrails, observabilidad, trazabilidad
```

### Salvedad
**HECHO.** La formación en Linux & System Hardening (Hack4u, 2024) es **anterior** a todo el trabajo de confiabilidad y no fue causada por él.
**INTERPRETACIÓN.** No pertenece a la cadena como consecuencia. El pilar de About que dice *"Mi formación en seguridad y hardening de sistemas me entrenó para mirar cualquier operación y detectar el cuello de botella"* es un encaje retrospectivo: defendible como descripción de mentalidad, pero **no debe presentarse como eslabón causal**. Es un interés paralelo que después resultó útil. Decirlo así es más creíble que forzarlo.

---

# 4. GAP ANALYSIS

| Dimensión | Evidencia | Portfolio comunica | Brecha |
|---|---|---|---|
| Trabajo actual | `B_PRODUCT_v1` (19-ago) | Mantención WordPress + cert. pendiente | **CRÍTICA** |
| IA | Arquitectura multi-modelo, evals de 500 casos, guardrails | *No se menciona* | **CRÍTICA** |
| Marketing sistematizado | Auditoría de 13 partes, MIE, plan anual, SOPs, pricing | 4 chips de habilidades | **CRÍTICA** |
| Testing | ~880 aserciones, 464/464 + 51/51 E2E | *No se menciona* | **CRÍTICA** |
| Stack | Node.js, n8n, OpenAI, Structured Outputs, APIs, CRM | HTML5/CSS3, Bootstrap 5, DaVinci Resolve | **CRÍTICA** |
| Formación acreditada | Credencial emitida 04-08-2026, verificable | "Certificación oficial: Agosto 2026" (pendiente) | **ALTA** |
| Contenido/adquisición | Canal originador del crecimiento, sistema editorial | 1 chip | **ALTA** |
| Proyectos | ≥5 sustanciales | 1 real + 1 autorreferencial + 1 enlace | **ALTA** |
| Rigor de ingeniería | Auditoría de procedencia, A/B con variable única, hashes | "4 ADRs" en texto corrido | **ALTA** |
| Diseño de servicio | Agency OS con RACI, SOPs, pricing, exclusiones | *No se menciona* | **MEDIA** |
| Negocio | $500K→$15M, ROAS 27:1, unit economics | Bien representado | **NINGUNA** ✅ |
| Narrativa | "Primero entendí los negocios" | Bien representada | **NINGUNA** ✅ |

---

# 5. AUDITORÍA VISUAL

## 5.1 Distribución de peso — problema estructural

**HECHO.** Alturas medidas en desktop 1440×900 (`scrollHeight = 6064px`):

| Sección | Altura | % |
|---|---:|---:|
| Hero | 900 px | 15% |
| About | 666 px | 11% |
| **Roadmap** | **2.381 px** | **39%** |
| Skills | 514 px | 8% |
| **Projects** | **954 px** | **16%** |
| Contact | 477 px | 8% |
| Footer | 173 px | 3% |

**INTERPRETACIÓN — `CRITICAL`.** El bloque más grande es un currículum cronológico. La página responde "¿dónde has estado?" con el 39% de su espacio, y "¿qué sabes construir?" con el 16%.

## 5.2 Primer viewport / Hero

**Desktop.** Composición equilibrada. **Jerarquía invertida**: el H1 (nombre, 56px) domina y no informa; el H2 hace el trabajo de posicionamiento a 24px en gris. El lead son ~60 palabras antes de la primera prueba (15-20 s de lectura de escaneo).

**Móvil `MAJOR`.** **HECHO:** hero de **965px** contra viewport de 844 (390px de ancho); **1.103px** contra 720 a 320px. La tarjeta de prueba (`Hero.jsx:119`, `hidden lg:block`) **no se renderiza bajo 1024px**.

**INTERPRETACIÓN.** En móvil desaparece toda la evidencia del hero: el `27:1`, el antes/después y el enlace al caso. Dado que el tráfico desde LinkedIn y WhatsApp es mayoritariamente móvil, **la mayoría de tus visitantes ve la versión sin pruebas**.

## 5.3 Proyectos

**HECHO — `evidencia/04-live-projects-1440.png`.** Grid `1fr 340px`: Tokyo Tunning destacado + "Este Portafolio" + "GitHub — Spectre-x46".

**INTERPRETACIÓN — `CRITICAL`.**
1. **Solo hay un proyecto.** Los otros dos son el sitio en el que estás parado y un enlace.
2. **"Este Portafolio" es autorreferencial y contradictorio** (§5.4).
3. **La tarjeta de GitHub subvende:** *"ejercicios Full Stack"*, *"experimentos de Linux hardening"*.
4. **La miniatura de TT** está recortada a `h-56` con `object-top`: header, franja roja y foto oscura. No comunica escala.
5. **`Ver caso de estudio completo`** es texto de 12px en la esquina. **En móvil mide 190×16 px.**

## 5.4 Fuga de credibilidad: la miniatura del portfolio

**HECHO — `CRITICAL`.** `public/assets/proyecto-portfolio.jpg` muestra el sitio **anterior**: logo `FD.dev`, *"Felipe Droguett Ortiz"*, subtítulo *"Consultoría de Negocios & Desarrollo Tecnológico"*, y un bloque de código decorativo:
```js
const felipe = { profile: "Consultor Digital & Dev Web",
                 motto: "Code that sells. Systems that scale." };
```
La tarjeta que la acompaña dice *"React + Vite + Tailwind + Framer Motion"*.

**INTERPRETACIÓN.** Tres daños en un elemento: texto e imagen se desmienten; dos posicionamientos incompatibles en la misma pantalla; y exhibe el cliché exacto que quieres evitar.

**RECOMENDACIÓN.** Eliminar la tarjeta completa. Un portfolio que se lista a sí mismo como proyecto señala inventario escaso, y tu inventario no es escaso.

## 5.5 Movimiento y microinteracciones

**HECHO.** Todas las secciones usan `whileInView` con `viewport={{ once: true }}` desde `opacity: 0`. Hovers sutiles con `cubic-bezier(0.22,1,0.36,1)`.

**INTERPRETACIÓN.** Bien calibradas — de lo mejor ejecutado del sitio. Tres problemas:
1. **`prefers-reduced-motion` incompleto** (`index.css:13-18`): la regla fija `animation-duration` y `transition-duration`, pero Framer Motion anima vía Web Animations API con estilos inline, que esa regla no gobierna. `MODERATE`.
2. **Coste de auditoría** (§22.2): las herramientas automáticas evalúan una página casi vacía.
3. **Riesgo de contenido invisible:** si JS falla o tarda, el 85% de la página queda en `opacity: 0`. Comparar `evidencia/02-live-fullpage-1440.png` con `03-live-fullpage-revealed-1440.png`.

---

# 6. DIRECCIÓN DE ARTE

## 6.1 Lenguaje visual actual
**HECHO.** Slate-950 · cyan-400 acento único · glassmorphism · orbes de blur · grid 64px · glows · display geométrico.
**INTERPRETACIÓN.** **"Tech startup oscuro"** con deriva a futurista genérico. Competente y anónimo. No es amateur: es intercambiable.

## 6.2 ¿Es coherente contigo?
**No del todo.** Tu argumento es *"primero entendí los negocios"* — terreno, operación, materialidad. El lenguaje visual comunica abstracción y laboratorio. **La estética contradice el argumento**, y es el mismo lenguaje que usaría alguien recién salido de un bootcamp — el perfil del que necesitas diferenciarte.

## 6.3 "Taller de ingeniería" — **principio, no skin**  *(corregido en v2)*

**Advertencia explícita.** El concepto **no debe traducirse literalmente** en: taller mecánico, franjas amarillas, tornillos, metal, chapa, señalética industrial, estética automotriz ni referencias a Tokyo Tunning. Tu identidad profesional es más amplia que la de un cliente, y adoptar su estética te ataría a él.

**Úsalo únicamente como principio rector de decisiones visuales:**

| Principio | Traducción visual |
|---|---|
| **Precisión** | Escala modular estricta; nada arbitrario |
| **Evidencia** | Screenshots, tablas y diagramas por delante de la decoración |
| **Proceso** | Mostrar iteraciones y antes/después, no solo resultados |
| **Materialidad** | Superficies sólidas y legibles en lugar de translucidez generalizada |
| **Medición** | Números con fecha, unidad y método visibles |
| **Documentación** | Notas, pies de figura, referencias |
| **Iteración** | Versionado y fechas como elemento de diseño |

| Elemento | Ahora | Dirección |
|---|---|---|
| Base | `#020617` | Mantener o migrar a neutro (decisión de la fase B) |
| Acento | Cyan `#22D3EE` (default del sector) | Un acento con densidad y menos usado |
| Fondo | Orbes blur + grid | Retirar orbes; retícula técnica discreta o nada |
| Superficie | Glass en todo | Glass solo en overlays; sólido para contenido |
| Glow | 3 jerarquías | Eliminar; énfasis por contraste y escala |
| Evidencia | Cards vacías | Screenshots, tablas, diagramas |

**RECOMENDACIÓN.** Esto es **Diseño B** (§7), posterior. Ver D-07.

---

# 7. DISEÑO A / DISEÑO B — SEPARACIÓN DE CAPAS  *(nuevo en v2)*

La v1 trataba "diseño" como un bloque único y lo relegaba entero. **Era un error**: buena parte del trabajo de diseño afecta directamente a la comprensión y no puede esperar.

## DISEÑO A — ESTRUCTURAL  ·  entra pronto (Sprint 3)

Afecta a si el visitante **entiende** y **cree**:
- Arquitectura de información y orden de secciones
- Jerarquía tipográfica y escala modular
- Hero: composición, densidad, evidencia visible en móvil
- Presentación de proyectos: cards, peso, CTA, tamaño
- Evidencia visual: screenshots, diagramas, tablas, antes/después
- Ritmo vertical y espaciado
- Responsive real por ancho
- Accesibilidad: contraste, foco, objetivos táctiles, motion
- Densidad de texto y ancho de lectura

## DISEÑO B — DIRECCIÓN DE ARTE  ·  se evalúa después (Sprint 6)

Afecta a si el visitante **recuerda**:
- Identidad visual y personalidad
- Paleta y lenguaje gráfico
- Materiales, texturas, efectos
- Sistema de diseño formal y tokens

**RECOMENDACIÓN.** Diseño A es P1 y no negociable. Diseño B es P2 y se reevalúa al cerrar los sprints 0-4. Ver **D-07** (§39).

---

# 8. UX

## 8.1 Arquitectura de información
**HECHO.** Orden: Hero → About → Roadmap → Skills → Projects → Contact.
**INTERPRETACIÓN — `MAJOR`.** Los proyectos están en quinta posición, tras 3.561 px (59% del scroll). Un visitante de 60 segundos se va sin ver ninguno.
**RECOMENDACIÓN.** **Hero → Proyectos → About → Skills → Trayectoria (colapsada) → Contacto.**

## 8.2 Fricción hacia el mejor contenido
**HECHO.** El case study `/caso-tokyo-tunning` mide 8.157px — más que la home — con ADRs, tabla de métricas, lecciones y deuda técnica. Sus únicos accesos son dos enlaces de texto.
**INTERPRETACIÓN — `CRITICAL`.** El activo público más fuerte está detrás del elemento visualmente más débil.

## 8.3 Defectos concretos

| # | HECHO | Severidad |
|---|---|---|
| U1 | Logo de navbar con `href="#"` | `MINOR` |
| U2 | El toggle del timeline es `md:hidden`; en desktop los 7 items se muestran siempre. **La divulgación progresiva protege al usuario móvil y no al reclutador de escritorio** | `MAJOR` |
| U3 | Dos entradas del timeline declaran "Actualidad" (id 1 y id 4) | `MODERATE` |
| U4 | Sin enlace "saltar al contenido" | `MINOR` |
| U5 | El CTA del footer dirige al activo más débil del ecosistema | `MAJOR` |

---

# 9. UI — DETALLE

## 9.1 Tipografía
**HECHO.** Outfit (display) + Inter (texto). Tamaños: 10, 11, 12, 15, 16, 16.8, 24, 56 px vía 13 declaraciones distintas, 5 arbitrarias.
**INTERPRETACIÓN.** Familias correctas y ancho de lectura adecuado (`max-w-xl`, `max-w-3xl`). **No existe escala modular** — principal razón de que el sitio "se vea bien pero no sistemático". **Suelo tipográfico demasiado bajo:** 10-11px para contenido real (labels de métricas, fechas, notas `Resultado:` / `Aprendizaje:`), combinado con `slate-500`/`600`.

## 9.2 Color
**HECHO.** `#020617` · `#22D3EE` · `violet-600` decorativo · escala slate 300-700 para texto.
**INTERPRETACIÓN.** Un solo acento es disciplina cromática correcta. **El violeta no cumple función.** La escala de grises se usa a la vez como jerarquía y como atenuación: `slate-500` marca información secundaria, pero contiene tus mejores datos (`Resultado: Core Web Vitals verdes, WCAG 100/100, LCP 300ms`). **Estás atenuando tu evidencia.**

## 9.3 Espaciado y composición
**HECHO.** Tres anchos de contenedor (`max-w-6xl`, `3xl`, `4xl`). Ritmo uniforme `pt-20 pb-16`. Seis opacidades de borde. Cinco radios.
**INTERPRETACIÓN.** Ninguna inconsistencia es visible aislada. Juntas producen "hecho a mano" en lugar de "diseñado con sistema" — la diferencia que un director de arte detecta en tres segundos.

---

# 10. RESPONSIVE

**HECHO:**

| Ancho | `scrollWidth` | Overflow | Hero | Página |
|---|---|---|---|---|
| 320 px | 305 | **No** ✅ | 1.103 px (1,53 vp) | — |
| 390 px | 375 | **No** ✅ | 965 px (1,14 vp) | 8.878 px |
| 1440 px | 1425 | **No** ✅ | 900 px (1,00 vp) | 6.064 px |

**Funciona:** cero overflow horizontal en todo el rango; blurs contenidos; grid de contacto colapsa bien; timeline legible a 320px.

**Falla:**

| # | HECHO | Severidad |
|---|---|---|
| R1 | Tarjeta de prueba `hidden lg:block` → invisible bajo 1024px | `MAJOR` |
| R2 | Hero de 1,53 viewports a 320px; ambos CTAs bajo el fold | `MODERATE` |
| R3 | **8 objetivos táctiles bajo 44×44** a 320px | `MAJOR` |
| R4 | Labels de métricas (11-12px, `slate-500`) envuelven a 4 líneas | `MODERATE` |
| R5 | Página móvil de 8.878px ≈ 10,5 viewports | `MODERATE` |

**Detalle R3:**
```
Abrir menú (hamburguesa) ....  38 × 38   ← navegación principal
Ver Tokyo Tunning ...........  32 × 32
Ver portafolio ..............  28 × 28
Ver GitHub ..................  28 × 28
Ver caso de estudio completo  190 × 16   ← único acceso al mejor activo
Explorar proyectos en GitHub  216 × 20
Logo ........................ 159 × 28
Ver historial completo ...... 208 × 42
```

---

# 11. CONTENIDO Y COPY

## 11.1 Lo que está bien — **preservar sin tocar**

**HECHO.** Frases del sitio:
> *"No vendo una herramienta. Vendo criterio."*
> *"Sé lo que se siente ser el responsable de que algo funcione un sábado a las 11 de la noche."*
> *"Cada habilidad técnica que tengo la aprendí porque un problema de negocio me obligó."*
> *"Hablemos del problema. La solución la definimos cuando tengamos el diagnóstico."*
> *"La tecnología funcionó. El siguiente problema no era técnico."*

**INTERPRETACIÓN.** Copy de nivel profesional: concreto, con voz propia, imposible de copiar-pegar a otro portfolio, sin un solo buzzword.
**Buscados y NO encontrados:** "soluciones innovadoras", "apasionado por", "transformando ideas", "disruptivo", "sinergia". **Cero.**

**RECOMENDACIÓN.** Esta voz es un activo. Cualquier reescritura debe conservarla.

## 11.2 Lo que está mal

| # | HECHO | Severidad |
|---|---|---|
| C1 | La entrada "ACTUALIDAD" describe feb–jun 2026; omite jul–ago | `CRITICAL` |
| C2 | `WCAG 100/100` y `LCP 300ms` sin fecha; hoy 96 y 940ms | `CRITICAL` |
| C3 | `Skills` omite Node.js, n8n, OpenAI/LLM, APIs REST, testing, CRM, observabilidad | `CRITICAL` |
| C4 | `Skills` destaca `Bootstrap 5`, `DaVinci Resolve`, `HTML5 / CSS3` | `MAJOR` |
| C5 | La tarjeta GitHub dice *"ejercicios"* y *"experimentos"* | `MAJOR` |
| C6 | *"Respondo en menos de 24 horas"* vs bio de GitHub *"I may be slow to respond."* | `MAJOR` |
| C7 | Timeline con 7 entradas a extensión completa en desktop | `MAJOR` |
| C8 | `Este Portafolio` con imagen del sitio anterior | `CRITICAL` |
| C9 | `<title>`, meta description y Schema con posicionamiento abandonado | `MAJOR` |
| **C10** | **Full Stack Python descrito como pendiente en 2 lugares; ya está acreditado** *(nuevo v2)* | `CRITICAL` |
| **C11** | **Marketing reducido a 4 chips pese a existir un sistema documentado completo** *(nuevo v2)* | `MAJOR` |
| **C12** | **Producción de contenido representada solo por `DaVinci Resolve`** *(nuevo v2)* | `MAJOR` |

**Sobre C7 — matiz.** No propongo eliminar entradas antiguas. Retail, logística, ventas y operación **son la prueba** de que tu relación con el negocio no nació recientemente. El problema es la extensión y el peso visual, no la existencia. Cuatro entradas expandidas y tres plegadas cuentan la misma historia en un tercio del espacio.

---

# 12. ARQUITECTURA DE INFORMACIÓN

**HECHO.** Dos rutas: `/` y `/caso-tokyo-tunning`.
**RECOMENDACIÓN.**
```
/                          Home
/caso/tokyo-tunning        Caso longitudinal (negocio → marketing → web → operación)
/caso/agente-comercial     NUEVO — sistema conversacional (anonimizado)
/caso/cyberday-2026        CONDICIONAL — ver D-02 (opción B)
/formacion                 OPCIONAL — solo si la sección crece
```

---

# 13. PROYECTOS — ANÁLISIS INDIVIDUAL

### P-01 · Tokyo Tunning — **MANTENER + REESTRUCTURAR COMO CASO LONGITUDINAL**
Ver §14. Es la mejor prueba de continuidad transversal que tienes.

### P-02 · Este Portafolio — **ELIMINAR**
Imagen del sitio anterior, contradicción texto/imagen, dos posicionamientos incompatibles, cliché `const felipe = {...}`.
**Cuestiono la premisa de que deba existir:** listarse a uno mismo como proyecto señala inventario escaso.

### P-03 · GitHub — Spectre-x46 — **REESTRUCTURAR (no eliminar)**
No eliminar el enlace: **arreglar el destino primero** (Sprint 1B), después reescribir la tarjeta.

### P-04 · Agente Comercial de IA — **CREAR CASE STUDY** `P0` · **D-01 APROBADA (anonimizado)**
Ver §15.

### P-05 · Marketing / CyberDay 2026 — **EVALUAR SEGÚN D-02**  *(nuevo v2)*
Caso autocontenido con números duros: estrategia creativa, pipeline de precios en 3 etapas, ROAS 27:1, CPA $70.034, análisis post-evento que detectó los $800K.
- **D-02 opción A** → capítulo dentro del caso de Tokyo Tunning.
- **D-02 opción B** → case study propio, tercera pieza del portfolio.
Es la bisagra narrativa hacia el agente en ambos casos.

### P-06 · Droguett Agency OS — **NO PUBLICAR / DERIVAR METODOLOGÍA**
Contiene pricing, márgenes y estructura de clientes. **No publicable.** Sí puede derivarse una nota breve de "cómo trabajo" sin cifras ni clientes.

### P-07 · Auditoría técnica de tokyotunning.cl — **INCORPORAR COMO CAPÍTULO**
Evidencia directa de capacidad frontend. Va dentro del caso de TT, no como proyecto propio.

### P-08 · El Bajón de la Cami — **NO INCORPORAR** ✅
**De acuerdo contigo, y se mantiene.** No está aceptado. **Pero** `Proyecto_Elbajon_dela_cami` (12,5 MB) ya es público en GitHub desde feb-2026 → D-04.

---

# 14. TOKYO TUNNING — ANÁLISIS PROFUNDO

## 14.1 Qué es realmente  *(reforzado en v2)*

**INTERPRETACIÓN.** Tokyo Tunning no es "un cliente de marketing", ni "un proyecto web", ni "un proyecto de IA". Es **el mismo negocio atravesado durante tres años por capas sucesivas de problemas**, cada una resuelta con una disciplina distinta.

**Esa continuidad es probablemente tu mayor diferenciador**, porque no se puede simular: requiere haber estado en el mismo sitio el tiempo suficiente para que los problemas evolucionaran.

## 14.2 Evidencia por capa

| Capa | Evidencia en disco |
|---|---|
| Marca / naming | Creador del nombre (case study) |
| Contenido | `Sistema/Marketing-Content/`: MIE, schema de BD, guiones, plan anual 26-27 |
| Ads | `AUDITORIA-META-BUSINESS-2026-06.md`, `CYBERDAY_2026_CREATIVE_STRATEGY_AUDIT.md`, 13 docs Meta/Google |
| E-commerce | `Web/mystaging_completo/` — WP/Woo con `.githooks`, `tests/`, `audit-reports/` |
| Performance / QA | `auditoria_tokyo_tunning.md` — diagnóstico a nivel de línea |
| Catálogo / pricing | Exports Woo + pipeline CyberDay en 3 etapas |
| CRM | Kommo — 15 capturas documentando la configuración completa |
| IA | `mvp-agente/` + `mvp-agente-wf-first/` |

## 14.3 Estructura recomendada del caso longitudinal

```
1  El punto de partida     Dos puestos de feria, sin marca ni venta online.
2  Atraer                  Nombre, redes, contenido. Creció por IG/TikTok/WhatsApp
                           ANTES de local físico o empresa formal.
3  Convertir               Reconstrucción del e-commerce. Catálogo, pagos, pixel, CTAs.
                           El hallazgo de la race condition de hooks y su fix.
4  Medir                   CyberDay 2026: pipeline de precios, ROAS 27:1, CPA $70.034.
                           Y el análisis post-evento: $800.000 perdidos.
5  Atender                 → enlace al case study del agente.
6  Deuda técnica activa    (ya existe y es excelente — conservar)
```

**INTERPRETACIÓN.** Contado así, el caso demuestra simultáneamente marketing, contenido, e-commerce, frontend, datos comerciales y origen de producto — **sin necesidad de declarar ninguna de esas etiquetas**. Es exactamente la "arquitectura de evidencia" que pediste.

## 14.4 Verificación de claims — `CRITICAL`

**HECHO.** Lighthouse mobile sobre `https://www.tokyotunning.cl/`, 2026-08-19:
```
Accessibility ....... 96    (18 fallos de color-contrast, 1 label-content-name-mismatch)
Best Practices ...... 77
SEO ................. 100
CLS ................. 0     ✅
LCP (campo, desktop)  940 ms
Peso ................ 2.568 KB en 45 peticiones
Tailwind CDN ........ ya no se carga  ✅  (tu hallazgo C1 fue implementado)
```
**HECHO.** El portfolio afirma `WCAG 100/100` (3 veces) y `LCP 300ms` (2 veces), en presente y sin fecha.

**INTERPRETACIÓN.** Lo más probable es que fueran ciertos en la entrega y que el sitio haya derivado por contenido y plugins del cliente — normal y fuera de tu control. Pero se presentan como estado presente sobre una tarjeta etiquetada "En producción". Un tech lead que verifique encontrará 96 y 18 fallos.

**RECOMENDACIÓN.** No borrar los números: **fecharlos y declarar el método.**
> `WCAG AA · Lighthouse 100/100 — medido jun-2026, entrega de reconstrucción`
> `LCP 300 ms (lab) · 940 ms (campo, ago-2026)`

Convierte una vulnerabilidad en demostración de rigor.

---

# 15. AGENTE DE IA — ANÁLISIS PROFUNDO

## 15.1 Cómo presentarlo para que no se lea como "un chatbot"

**No muestres la conversación. Muestra el sistema que la hace confiable.**

Un chatbot se demuestra con una captura de chat. Un sistema de producción se demuestra con cuatro cosas que un chatbot no tiene: **un contrato**, **una suite de evaluación**, **modos de fallo documentados** y **trazabilidad**. Tienes las cuatro.

## 15.2 Estructura del case study — versión anonimizada (D-01 aprobada)

```
1  El problema          Pérdida cuantificada por consultas sin responder a tiempo
                        durante un evento comercial de alta demanda. Medida, no estimada.
                        (Sin nombrar cliente; cifra agregada admisible.)

2  Por qué no un bot    El principio WORKFLOW FIRST y su cita textual.

3  Arquitectura         DIAGRAMA conceptual. Capas understanding · policy · composer ·
                        ingress · egress · runtime. Enrutamiento multi-modelo y su
                        justificación de coste. Sin IDs, webhooks ni puertos.

4  Cómo sé que funciona 3.990 hilos → 48.937 mensajes → dedup → clustering → 500 casos
                        estratificados (60/60/80/300), 0 PII residual, artefactos con
                        SHA256. Resultados: 464/464 · 51/51 E2E · 84 turnos de replay.

5  Lo que se rompió     Los 5 defectos con impacto medido (esp. 29-30% → 0%) y el
                        hallazgo del A/B de telemetría (5/5 → 0/5, variable única).

6  El día que me detuve LA AUDITORÍA DE PROCEDENCIA, completa.

7  Lo que falta         Huecos declarados: providers R05/R06/R10/R12; catálogo
                        exact-first vs lenguaje suelto (9/42 turnos). Sin maquillar.
```

**El capítulo 6 es la pieza más valiosa del portfolio entero.** Es corto, concreto, verificable y prácticamente imposible de inventar.

**Advertencia de encuadre.** El caso debe presentarse como **una capa dentro de una evolución profesional**, no como el centro de la identidad. El enlace de entrada debe venir desde el caso de Tokyo Tunning (capítulo 5), de modo que quien llegue entienda **por qué** existe el agente antes de ver **qué** es.

## 15.3 Qué permanece privado (anonimizado)

| Publicar | Nunca publicar |
|---|---|
| Arquitectura conceptual (diagrama) | Código fuente de `src/` |
| Metodología del dataset y cifras agregadas | El corpus de WhatsApp/Instagram |
| Categorías de defectos y su impacto | Nombres, teléfonos, conversaciones |
| Principios y taxonomía de gates | Datos bancarios |
| Nombres de modelo y razón del enrutamiento | Claves, tokens Kommo, `N8N_ENCRYPTION_KEY` |
| Rangos de latencia y coste | IDs de workflow, webhooks, `execution_id`, puertos |
| Aprendizajes y decisiones | Cifras de contrato · **identidad del cliente** (fase 1) |

## 15.4 Estado de seguridad del repositorio — **verificado, sin fugas** ✅

**HECHO.** `.gitignore` excluye correctamente `.env*`, los tres tokens Kommo, `*.pem/key/p12`, `*credentials*.json`, el `README.md` de raíz (contiene `N8N_ENCRYPTION_KEY`), `scripts/start-staging-3002.bat` (clave OpenAI + datos bancarios), `raw_consolidated.jsonl` y tres JSON con datos bancarios.
**HECHO.** `git ls-files | grep -Ei "env|token|secret|key|cred"` no devuelve ningún secreto real.
**HECHO.** El repositorio **no tiene remoto configurado**.

**INTERPRETACIÓN.** El `.gitignore` no solo excluye: **documenta cada exclusión con su razón y cómo regenerar el artefacto**, e incluye una sección "BLOQUEADOS POR LA AUDITORÍA DE SECRETOS DEL CIERRE R1" con la decisión de rotación registrada como pendiente. Higiene superior a la de la mayoría de repositorios profesionales.

**RECOMENDACIÓN.** Ver D-08: rotar antes de cualquier publicación o conexión a remoto. Sin remoto, no hay exposición activa.

---

# 16. FORMACIÓN Y CREDENCIALES  *(nueva sección v2)*

## 16.1 Principio de tratamiento

Tal como planteaste, la relación debe ser:
```
Proyecto        →  demuestra que sé hacerlo
GitHub / docs   →  demuestra profundidad
Credencial      →  demuestra que además existe formación formal
```
**Nunca al revés.** La credencial **valida**, no **define**.

## 16.2 Inventario y recomendación de ubicación

| Formación | Fecha | Señal | Home | Sección Formación | LinkedIn | Enlace verificable |
|---|---|---|---|---|---|---|
| **Full Stack Python** — Talento Digital | **04-08-2026** ✅ acreditado | Alta (verificable, reciente) | ✅ discreto | ✅ | ✅ | ✅ **Acreditta** |
| **Téc. Administración de Empresas — Marketing**, DuocUC | 2018-2020 | Alta (base formal del criterio de negocio) | ✅ discreto | ✅ | ✅ | ❌ |
| **Linux & System Hardening**, Hack4u | 2024 | Media (sin proyecto público que lo respalde salvo `tplink-monitor-mode`) | ❌ | ✅ | ✅ | ❌ |
| **Digitalización de Negocio**, Google | 2022 | Baja individualmente | ❌ | Agrupar | ✅ | Si existe |
| **Community Manager Estratégico** | 2021 | Baja individualmente | ❌ | Agrupar | ✅ | ❌ |
| **Anuncios Ganadores (Meta Ads)** | 2020 | Baja individualmente | ❌ | Agrupar | ✅ | ❌ |

**RECOMENDACIÓN.**
- **Home:** máximo dos credenciales, presentadas **junto a la evidencia que validan**, no en un bloque aislado. Full Stack Python junto a la capa de producto digital; Administración de Empresas junto a la capa de negocio.
- **Sección Formación:** las seis, con las tres de marketing agrupadas bajo un epígrafe ("formación continua en marketing digital, 2020-2022") en lugar de tres tarjetas de igual peso que Full Stack Python.
- **LinkedIn:** todas, con fechas y enlaces donde existan. Es su función natural (§19).
- **Enlace verificable:** solo Full Stack Python lo tiene. Úsalo — un enlace de verificación externo vale más que tres tarjetas sin respaldo.

## 16.3 Advertencia sobre "TRAINEE"

**HECHO.** El nombre oficial de la credencial es `BOOTCAMP DESARROLLO APLICACIONES FULL STACK PYTHON TRAINEE`.
**INTERPRETACIÓN.** Es real y verificable, pero "TRAINEE" es un descriptor de nivel de entrada. Si la credencial ocupa una posición destacada como argumento de capacidad, **fija un techo por debajo de lo que tu trabajo demuestra**. Un tech lead que vea "TRAINEE" en grande y luego lea sobre evals de 500 casos experimentará disonancia — y tenderá a creer a la etiqueta.
**RECOMENDACIÓN.** Presencia discreta + enlace de verificación. El texto que la acompaña debe apuntar al proyecto, no al revés. Nunca en el hero.

## 16.4 Formación ↔ proyectos ↔ experiencia

Pediste que se refuercen entre sí en lugar de vivir en bloques separados. Relaciones que la evidencia sostiene:

| Formación | Se aplica en | Evidencia |
|---|---|---|
| Téc. Admin. Empresas — Marketing | 10 años de operación, pricing, unit economics | Moana Kai, TT, Phantom Customs |
| Formación continua en marketing digital | Auditoría Meta/Google, plan anual, SOPs, ROAS 27:1 | `meta-google-audit/`, `Marketing-Content/` |
| Full Stack Python (Django, BD, front) | Reconstrucción del e-commerce, scripts, `generar_menu.py` | TT, El Bajón |
| Linux & System Hardening | Guardrails, logger pseudonimizado, fail-closed | `security_hardening.test.mjs` |
| *(sin formación formal)* | Sistemas de IA: arquitectura, evals, observabilidad | `mvp-agente/` — **aprendido en el problema** |

**INTERPRETACIÓN.** La última fila es la más interesante y refuerza tu narrativa central (*"cada habilidad técnica la aprendí porque un problema me obligó"*). La capacidad más avanzada que tienes **no procede de ninguna formación formal** — procede de haber tenido el problema. Decir eso explícitamente es más potente que cualquier certificado.

---

# 17. MARKETING, CONTENIDO Y NEGOCIO  *(reescrito en v2)*

## 17.1 Corrección de la v1

La v1 recomendaba tratar el marketing como "contexto" y sacarlo de las competencias destacadas. **Eso era una lectura incorrecta de la evidencia** y queda corregido: el marketing es una actividad profesional actual, sistematizada y con entregables documentados (§3.3).

## 17.2 El riesgo real, correctamente formulado

El peligro **no** es que el marketing aparezca. El peligro es que aparezca **con la misma gramática** que las capacidades técnicas — como una fila de chips paralela — porque entonces el conjunto se lee como *"hago un poco de todo"*.

**HECHO.** Hoy `Skills` presenta dos columnas equivalentes: `Estrategia Digital & Contenido` y `Desarrollo Web & Código`, con chips del mismo tamaño y peso. `DaVinci Resolve` está a la misma altura visual que `PHP`.

**INTERPRETACIÓN.** El problema es de **gramática visual**, no de contenido. Dos listas paralelas de disciplinas dicen "sé de ambas cosas". Una secuencia de problemas resueltos dice "he estado en los cinco puntos de la cadena".

## 17.3 La solución: cambiar la gramática, no ocultar el contenido

| Gramática | Efecto |
|---|---|
| **Lista de disciplinas** (actual) | *"Marketing + programación + IA"* → suena a generalista |
| **Cadena de problemas** (propuesta) | *"Cada capa apareció porque la anterior funcionó"* → suena a continuidad |

La cadena de cinco movimientos (§3.8) hace este trabajo sin necesidad de un slogan. El marketing no queda subordinado: **queda en la posición 2, que es donde empieza todo**, y con evidencia propia.

## 17.4 Jerarquía recomendada por evidencia y objetivo

Esta jerarquía **depende de D-02**. Bajo cualquier opción, se mantiene:

1. **Marketing y contenido conservan superficie propia con evidencia**, no chips sueltos.
2. **`DaVinci Resolve` sale de las competencias técnicas destacadas**; la capacidad "producción de contenido orientada a adquisición" entra en su lugar.
3. **Ninguna capacidad se declara sin una evidencia enlazable** (§18).

---

# 18. REGLA DE EVIDENCIA  *(nueva sección v2)*

## 18.1 El principio

> **Cada afirmación profesional importante debe tener una evidencia visible que la respalde.**

Ninguna capacidad debería aparecer en el portfolio sin un enlace, una cifra fechada o un artefacto que la sostenga. Si no hay evidencia, la afirmación se retira.

## 18.2 Auditoría afirmación → evidencia

| Afirmación | Evidencia disponible | ¿Enlazable hoy? | Estado |
|---|---|---|---|
| Trabajo adquisición y Ads | ROAS 27:1 fechado, CPA $70.034, auditoría Meta/Google en 13 partes, plan anual, SOPs | Parcial (solo la cifra) | ⚠️ **falta superficie** |
| Produzco contenido para adquisición | TT creció por IG/TikTok antes del local; guiones, parrilla, KPI de 3 plataformas, análisis de virales | No | ❌ **sin evidencia visible** |
| Sé desarrollo web | tokyotunning.cl en producción; auditoría a nivel de línea con fix verificado; Core Web Vitals | Parcial | ⚠️ **falta el detalle técnico** |
| Trabajo con IA | Arquitectura por capas, evals de 500 casos, guardrails, replay real, auditoría de procedencia | No | ❌ **sin evidencia visible** |
| Sé automatizar y conectar sistemas | n8n, Kommo, APIs, workflows, 15 capturas de configuración | No | ❌ **sin evidencia visible** |
| Testeo lo que construyo | ~880 aserciones, 464/464 + 51/51 E2E, 31 regresiones | No | ❌ **sin evidencia visible** |
| Entiendo negocio | $500K→$15M, unit economics, pricing, cierre honesto de Phantom Customs | Sí | ✅ |
| Tengo formación formal | Credencial verificable en Acreditta (04-08-2026) | No (dice "pendiente") | ❌ **desactualizada** |

**INTERPRETACIÓN.** De ocho afirmaciones profesionales, **una está correctamente respaldada**, tres lo están parcialmente y **cuatro no tienen ninguna evidencia visible**. Esta tabla es, en sí misma, el plan de contenido del portfolio.

## 18.3 Los cuatro planos (A / B / C / D)

Pediste separar cuatro cosas y no meterlas todas en el hero. Correcto — y así deben distribuirse:

| Plano | Qué responde | Dónde vive | Qué NO debe hacer |
|---|---|---|---|
| **A · QUIÉN SOY** | Base profesional, forma de abordar problemas | Hero (breve) + About | No enumerar disciplinas |
| **B · QUÉ TRABAJO HAGO** | Tipos de problema en los que trabajo | Sección propia tras los proyectos | No convertirse en lista de servicios genérica |
| **C · QUÉ CAPACIDADES TENGO** | Marketing, producto, desarrollo, automatización, IA | Sección de capacidades, **cada una con enlace a evidencia** | No ser una nube de chips |
| **D · QUÉ EVIDENCIA LO DEMUESTRA** | Casos, resultados, métricas, docs, GitHub, credenciales | Case studies + GitHub + credencial | No quedar enterrada tras enlaces de 12px |

**El hero solo contiene A.** Todo lo demás se descubre bajando. Esa es la arquitectura que sustituye al slogan.

---

# 19. RECORRIDO DEL ECOSISTEMA  *(nueva sección v2)*

## 19.1 Función de cada superficie

| Superficie | Función | Qué NO debe duplicar |
|---|---|---|
| **LinkedIn** | Trayectoria, experiencia actual, responsabilidades, formación, certificaciones, continuidad temporal. **Descubrimiento.** | No es el lugar de los case studies completos |
| **Portfolio** | Qué sé hacer, cómo pienso, problemas, decisiones, resultados, evidencia. **Demostración.** | No es un CV cronológico |
| **GitHub** | Profundidad técnica, documentación, prácticas de ingeniería, metodología. **Respaldo.** | No publica código privado de clientes |
| **Credenciales** | Formación formal acreditada y verificable. **Validación.** | No es argumento principal de capacidad |

## 19.2 El recorrido deseado

```
1  Encuentra LinkedIn
   → entiende trayectoria y en qué trabaja hoy
                    ↓
2  Abre el portfolio
   → ve evidencia, no adjetivos
                    ↓
3  Abre el caso Tokyo Tunning
   → comprende la combinación negocio + marketing + tecnología,
     y por qué cada capa apareció después de la anterior
                    ↓
4  Abre el caso del agente
   → comprende la profundidad técnica y el rigor de método
                    ↓
5  Abre GitHub
   → encuentra respaldo, documentación y prácticas coherentes
                    ↓
6  Revisa formación / credencial
   → encuentra validación formal que confirma, no que sustituye
```

**En ningún punto del recorrido debe aparecer una contradicción.**

## 19.3 Contradicciones detectadas hoy

| # | Superficie A | Superficie B | Estado |
|---|---|---|---|
| X1 | Portfolio: *"Respondo en menos de 24 horas"* | GitHub: *"I may be slow to respond."* | **Verificada** |
| X2 | Portfolio: hero sin posicionamiento de rol | `<title>`: *"Consultor Digital & Desarrollador Web"* | **Verificada** |
| X3 | Portfolio: *"Certificación oficial: Agosto 2026"* (pendiente) | Acreditta: emitida 04-08-2026 | **Verificada** |
| X4 | Portfolio: consultor/desarrollador | LinkedIn: *"E-commerce & Operations Manager"* | **Reportada** (§20) |
| X5 | Acreditta: Full Stack Python completado | LinkedIn: *"Python & Cybersecurity Student"* | **Reportada** (§20) |
| X6 | Portfolio: tarjeta "React + Vite + Tailwind" | Su propia imagen: sitio Bootstrap anterior | **Verificada** |

**Seis contradicciones, cuatro verificadas directamente.** Ninguna es grave por separado; juntas producen la impresión de un perfil que no se mantiene.

---

# 20. AUDITORÍA POR AUDIENCIAS  *(nueva sección v2)*

Pediste que el portfolio funcione para varios públicos sin convertirse en cuatro portfolios. La solución no es escribir para todos en cada párrafo: es **estratificar la profundidad**.

| Audiencia | Qué busca | Dónde debe encontrarlo | Profundidad |
|---|---|---|---|
| **Recruiter técnico** | Evidencia técnica rápida, stack, nivel | Hero + tarjetas de proyecto + capacidades con enlace | Nivel 1 (30 s) |
| **Tech Lead** | Decisiones, fallos, tests, arquitectura | Case study del agente, cap. 3-7 | Nivel 3 (10 min) |
| **Founder** | Capacidad de pensar transversalmente | Caso Tokyo Tunning como caso longitudinal | Nivel 2 (3 min) |
| **PyME / cliente de marketing** | Problemas, resultados, proceso, experiencia | Capítulo de marketing/CyberDay + contacto | Nivel 2 (3 min) |
| **Empresa buscando automatización** | Sistemas conectados funcionando | Cap. 5 de TT + cap. 1-3 del agente | Nivel 2 (3 min) |
| **Potencial socio** | Coherencia y continuidad | Recorrido completo del ecosistema | Nivel 3 |

**Regla de diseño:** cada nivel debe ser **completo en sí mismo** y ofrecer una puerta al siguiente. Nadie debe necesitar leer el nivel 3 para entender el 1, y nadie del nivel 3 debe sentirse frenado por el 1.

**INTERPRETACIÓN.** Con esta estratificación, el mismo portfolio sirve a los seis públicos sin diluirse — y, crucialmente, **sin que el hero tenga que nombrar seis disciplinas**.

---

# 21. PERFORMANCE

**HECHO.** Mediciones sobre `felipe-droguett.netlify.app`, 2026-08-19:
```
FCP 316 ms · LCP 1.232 ms · DOMContentLoaded 247 ms
index-z2DOYjim.js ......  363,2 KB   ← chunk único
index-ru_y50zl.css .....   25,9 KB
proyecto-tokyo.jpg .....  151,8 KB   (1280×900 nativo)
proyecto-portfolio.jpg .  136,3 KB   (1280×900 nativo)
Inter + Outfit woff2 ...   78,6 KB
TOTAL ..................  ~768 KB
```
**HECHO.** `netlify.toml` con HSTS preload, X-Frame-Options DENY, nosniff, Referrer-Policy, Permissions-Policy e inmutabilidad de un año en `/assets/*`. **Bien hecho.**

| # | Hallazgo | Severidad |
|---|---|---|
| PF1 | **Bundle único de 363 KB sin code splitting.** `CasoTokyoTunning.jsx` viaja con la home | `MAJOR` |
| PF2 | **CSR puro sin prerender.** Nada se pinta hasta parsear el bundle | `MAJOR` |
| PF3 | Imágenes 1280×900 en contenedores de 340-880px, sin `srcset`, sin WebP/AVIF | `MODERATE` |
| PF4 | Sin `width`/`height` en `<img>` → riesgo de CLS | `MODERATE` |
| PF5 | Fuentes de origen externo (78,6 KB). `preconnect` ✅ | `MINOR` |
| PF6 | Grid + 3 blurs de 700/600/400px con `blur(110-120px)` costosos en GPU móvil | `MINOR` |

**RECOMENDACIÓN.** PF1 y PF2 son los únicos con impacto real y se resuelven mejor **después** de fijar la estructura de rutas: con dos o tres case studies, el code splitting se diseña una sola vez.

---

# 22. ACCESIBILIDAD

| # | HECHO | Severidad |
|---|---|---|
| A1 | **Cero reglas `:focus`.** Outline por defecto `rgb(16,16,16)` sobre `#020617` → foco invisible. WCAG 2.4.7 | `CRITICAL` |
| A2 | **36 fallos de contraste.** `slate-500 (#64748B)` ≈4,25:1 sobre `#020617` y ≈4,0:1 sobre `.glass`, a 10-12px. `slate-600 (#475569)` ≈2,69:1 | `MAJOR` |
| A3 | **8 objetivos táctiles bajo 44×44** a 320px | `MAJOR` |
| A4 | `prefers-reduced-motion` no gobierna Framer Motion | `MODERATE` |
| A5 | Sin enlace "saltar al contenido" | `MINOR` |
| A6 | Logo con `href="#"` | `MINOR` |
| A7 | ✅ Jerarquía de encabezados correcta — un H1, H2 por sección, sin saltos | — |
| A8 | ✅ `alt` presente y descriptivo en las 2 imágenes | — |
| A9 | ✅ `aria-label` en los 3 enlaces solo-icono | — |
| A10 | ✅ HTML semántico: `main`, `section`, `footer`, `nav` | — |

## 22.2 Por qué Lighthouse dice 100 y aun así hay fallos

**HECHO.** Lighthouse mobile: Accessibility 100, Best Practices 100, SEO 100. El audit `color-contrast` devolvió `score=1` con **0 items evaluados**.

**INTERPRETACIÓN.** Falso positivo por dos causas combinadas:
1. **El 85% de la página está en `opacity: 0`** cuando Lighthouse audita (reveals `whileInView`). axe-core no evalúa contraste sobre elementos no visibles.
2. **El glassmorphism impide resolver el fondo**: con `rgba(15,23,42,.55)` + `backdrop-filter` sobre capas, axe devuelve *incomplete*, que Lighthouse no puntúa como fallo.

Además, `focusable-controls`, `focus-traps` e `interactive-element-affordance` son auditorías **manuales**: Lighthouse ni intenta puntuar A1.

**RECOMENDACIÓN.** No uses "Lighthouse 100" como prueba de accesibilidad. Es el mismo riesgo que el badge `WCAG 100/100` de Tokyo Tunning. **Ironía a corregir: el sitio que exhibe accesibilidad como logro tiene el foco de teclado invisible.**

---

# 23. SEO Y SOCIAL PREVIEW

| Elemento | Estado |
|---|---|
| `<title>` | ✅ presente — ❌ posicionamiento abandonado |
| `meta description` | ✅ presente — ❌ ídem |
| `canonical` / `lang="es"` | ✅ correctos |
| Open Graph | ⚠️ **`og:image` AUSENTE** |
| Twitter Card | ❌ `summary_large_image` **sin imagen** → tarjeta rota |
| Favicon | ❌ **ROTO** |
| Schema.org | ✅ `Person` válido — ❌ `jobTitle` caducado; `knowsAbout` sin IA, Node.js ni n8n |
| robots.txt | ✅ correcto |
| sitemap.xml | ⚠️ solo `/`; `lastmod: 2026-01-23` |
| Meta por ruta | ❌ el case study hereda el `<title>` de la home |

**Favicon `MAJOR`.**
```
GET /favicon.svg         → 200  text/html; charset=UTF-8   2590 b   ← devuelve el index.html
GET /assets/favicon.svg  → 200  image/svg+xml               302 b   ← el archivo real
```
`index.html:47` declara `/favicon.svg` pero el archivo vive en `public/assets/`. La regla SPA lo captura.

**Sin `og:image` `CRITICAL`.** Cada vez que compartes el portfolio por WhatsApp, LinkedIn o Slack —que es lo que estás haciendo ahora— llega **sin imagen**. Y `twitter:card="summary_large_image"` sin imagen produce una tarjeta rota, peor que no declarar nada. Es un PNG de 1200×630 y dos metas: **el mejor ratio impacto/esfuerzo de toda la auditoría.**

---

# 24. CREDIBILIDAD

## 24.1 Señales que suman ✅
Deuda técnica declarada · cierre honesto de Phantom Customs con su aprendizaje · métricas con contexto en lugar de superlativos · cliente real verificable en producción · cabeceras de seguridad correctas · copy sin buzzwords · cero errores de consola · **credencial con verificación pública y registro blockchain**.

## 24.2 Señales que restan ❌

| # | HECHO | Severidad |
|---|---|---|
| CR1 | Miniatura del portfolio con el sitio anterior y posicionamiento contradictorio | `CRITICAL` |
| CR2 | `WCAG 100/100` / `LCP 300ms` sin fecha, no reproducibles hoy | `CRITICAL` |
| CR3 | GitHub contradice al portfolio | `CRITICAL` |
| CR4 | Sin `og:image` | `CRITICAL` |
| **CR5** | **Formación descrita como pendiente estando acreditada** *(nuevo v2)* | `CRITICAL` |
| CR6 | *"Respondo <24h"* vs *"I may be slow to respond"* | `MAJOR` |
| CR7 | Favicon roto | `MAJOR` |
| CR8 | `<title>` y Schema con posicionamiento abandonado | `MAJOR` |
| CR9 | Dominio gratuito `.netlify.app` | `MAJOR` |
| **CR10** | **LinkedIn con posicionamiento desalineado** *(reportado, nuevo v2)* | `MAJOR` |
| CR11 | Email gmail personal representando a una SpA | `MODERATE` |
| CR12 | `sitemap.xml` con `lastmod` de hace 7 meses | `MINOR` |

## 24.3 Versionado — `GIT-01` `MAJOR`

**HECHO.**
- El directorio de trabajo **no es un repositorio Git**.
- El repo público `Portafolio-FelipeDroguett` apunta a otro directorio con el sitio **anterior** (3 commits, últ. 2026-01-24, cambios sin commitear desde feb-2026).
- El CSS en producción es `index-ru_y50zl.css`; el `dist/` local es `index-Cpr8_pVU.css` (7-jun). **Build local y producción han divergido.**

**INTERPRETACIÓN.** Tu carta de presentación **no tiene historial de versiones**. Prerrequisito de todo lo demás.

---

# 25. D-02 — ARQUITECTURAS DE POSICIONAMIENTO  *(REABIERTA — decisión pendiente)*

## 25.0 Por qué la v1 se equivocó

La v1 formuló D-02 como *"¿ingeniería o agencia?"* y recomendó ingeniería. **Error.** La pregunta correcta no es qué mostrar, sino **con qué gramática organizar lo que se muestra**. Las tres opciones siguientes no eligen entre disciplinas: eligen **qué va en primer plano y qué se descubre**.

## 25.1 Separación previa: posicionamiento ≠ título

Como pediste, cuatro cosas distintas:

| Nivel | Qué es | Extensión | Dónde |
|---|---|---|---|
| **PROPUESTA PROFESIONAL** | La narrativa de fondo. No aparece literal en ningún sitio | 3-5 frases | Estructura todo el portfolio |
| **TÍTULO CORTO** | Etiqueta operativa donde hace falta una | 3-6 palabras | LinkedIn headline, `<title>`, Schema, CV |
| **CAPACIDADES** | Áreas reales de trabajo | 4-5 bloques | Sección propia, cada una con evidencia |
| **EVIDENCIA** | Lo que lo prueba | 2-3 casos + GitHub + credencial | Case studies |

**El título corto no tiene que explicar tu carrera.** Solo tiene que no mentir y no cerrar puertas.

---

## OPCIÓN A — «El sistema completo de venta»

**Nombre conceptual:** *Ingeniería de sistemas comerciales.*

**Primer plano.** La construcción: e-commerce, automatización, agentes de IA, testing. El portfolio abre con los dos case studies técnicos.
**Segunda capa.** Marketing y contenido como **origen del criterio** y como capa 2 de la cadena, con evidencia propia pero sin abrir la narrativa.
**Título corto sugerido.** *Product Engineer · e-commerce y sistemas de IA*
**Evidencia que la respalda.** `mvp-agente` (arquitectura, evals, guardrails, procedencia) · reconstrucción de e-commerce · auditoría frontend a nivel de línea · credencial Full Stack Python · ~880 aserciones.

**Percepción por audiencia:**

| Audiencia | Percepción |
|---|---|
| Recruiter técnico | **Muy buena** — encaja en una vacante identificable |
| Tech Lead | **Muy buena** — encuentra decisiones, fallos y tests |
| Founder | Buena — ve construcción, menos ve estrategia |
| PyME / cliente marketing | **Débil** — puede pensar que no ofreces marketing |
| Empresa de automatización | **Muy buena** |
| Socio potencial | Buena |

**Ventajas.** Máxima claridad. Encaja en categorías de contratación existentes. Aprovecha la evidencia más escasa y mejor documentada. Diferencia frente al bootcamp genérico.
**Riesgos.** Puede leerse como un pivote — y quien pivota compite con quien lleva 8 años en ello. Deja el ingreso actual (marketing) fuera del escaparate.
**¿Parece "sé un poco de todo"?** No. Es la opción con menor riesgo de dispersión.
**¿Esconde capacidad injustamente?** **Sí.** Subordina un sistema de marketing documentado y una capacidad de contenido que originó el crecimiento del caso principal.

**Tests:** T1 no copiable ✅ · T2 demostrable ✅ · T3 **oculta parte del trabajo actual** ❌ · T4 no aparenta saberlo todo ✅ · T5 se comprende mejor ✅ → **4/5**

---

## OPCIÓN B — «Los cinco movimientos»

**Nombre conceptual:** *La cadena completa: de la demanda a la confiabilidad.*

**Primer plano.** La cadena causal de cinco movimientos como estructura del portfolio. Cada movimiento es una sección con su evidencia. Marketing e ingeniería quedan **al mismo nivel jerárquico**, en secuencia temporal y causal.
**Segunda capa.** La profundidad de IA como el punto más avanzado de la cadena, no como identidad.
**Título corto sugerido.** *Construyo sistemas de venta, de la campaña al código*
**Evidencia que la respalda.** Toda. Es la única opción que usa el 100% del material: KPI y virales (mov. 2), e-commerce y auditoría frontend (mov. 3), CyberDay y pricing (mov. 4 bisagra), agente y evals (mov. 4-5).

**Percepción por audiencia:**

| Audiencia | Percepción |
|---|---|
| Recruiter técnico | **Media** — no encaja en una vacante estándar; puede descartar por ambigüedad |
| Tech Lead | Buena si llega al caso del agente; **riesgo de no llegar** |
| Founder | **Excelente** — es exactamente lo que busca |
| PyME / cliente marketing | **Excelente** |
| Empresa de automatización | **Muy buena** |
| Socio potencial | **Excelente** |

**Ventajas.** Es la más fiel a la evidencia. No esconde nada. Genera el efecto *"esta persona tiene más profundidad de la que esperaba"* de forma natural. Es la más difícil de replicar por un competidor.
**Riesgos.** El público que mejor sirve (founders, pymes, socios) **no es el que usa filtros de reclutamiento**. Un recruiter técnico con 30 segundos puede no clasificarte. Requiere que el visitante **baje** para entender, y no todos bajan.
**¿Parece "sé un poco de todo"?** **Riesgo real**, y depende enteramente de la ejecución: si la secuencia se lee como cadena, no; si se lee como lista, sí. **Este es el punto crítico de la opción.**
**¿Esconde capacidad?** No. Es la única que no esconde nada.

**Tests:** T1 no copiable ✅ · T2 demostrable ✅ · T3 no oculta nada ✅ · T4 **riesgo de dispersión** ⚠️ · T5 se comprende mucho mejor ✅ → **4,5/5**

---

## OPCIÓN C — «Un negocio, tres años, cinco problemas»

**Nombre conceptual:** *El caso longitudinal como posicionamiento.*

**Primer plano.** **Tokyo Tunning ocupa el centro del portfolio** como caso único y profundo que atraviesa las cinco capas. Todo lo demás (agente incluido) son capítulos o derivadas de ese caso.
**Segunda capa.** Un bloque breve de capacidades transferibles y otros contextos (Moana Kai, Phantom Customs, consultoría, El Bajón cuando proceda).
**Título corto sugerido.** *Trabajo dentro de negocios, no sobre ellos*
**Evidencia que la respalda.** El caso longitudinal completo: la misma operación durante tres años, con las siete capas documentadas (§14.2).

**Percepción por audiencia:**

| Audiencia | Percepción |
|---|---|
| Recruiter técnico | **Débil** — un solo cliente puede leerse como poca experiencia |
| Tech Lead | Buena si el capítulo del agente tiene profundidad suficiente |
| Founder | **Excelente** — la continuidad es exactamente la señal que valora |
| PyME / cliente marketing | **Muy buena** |
| Empresa de automatización | Buena |
| Socio potencial | **Excelente** |

**Ventajas.** La continuidad de tres años en el mismo negocio es imposible de simular y muy poco común. Máxima coherencia narrativa. Elimina de raíz el riesgo de "lista de disciplinas".
**Riesgos.** **Dependencia de un solo cliente** — si Tokyo Tunning termina, el portfolio queda huérfano. Un recruiter puede leer "un cliente" como "poca trayectoria". Y es la opción que más depende de que el cliente autorice ser nombrado (choca con D-01, que aprobó empezar anonimizado).
**¿Parece "sé un poco de todo"?** No, en absoluto.
**¿Esconde capacidad?** Parcialmente: el trabajo de consultoría independiente y el Agency OS quedan fuera del foco.

**Tests:** T1 no copiable ✅ · T2 demostrable ✅ · T3 oculta parte ⚠️ · T4 no aparenta ✅ · T5 se comprende mejor ✅ → **4/5**

---

## 25.2 Comparación y recomendación

| Criterio | A | B | C |
|---|:---:|:---:|:---:|
| Claridad para recruiter técnico | ●●● | ●○○ | ●○○ |
| Fidelidad a la evidencia | ●●○ | ●●● | ●●○ |
| Riesgo de "sé un poco de todo" | Bajo | **Medio** | Bajo |
| Sirve al cliente de marketing | ●○○ | ●●● | ●●○ |
| Dificultad de ejecución | Baja | **Alta** | Media |
| Dependencia de un cliente | Baja | Baja | **Alta** |
| Reversibilidad | Alta | Alta | Baja |
| Nº de case studies necesarios | 2 | 3 | 1 profundo + capítulos |
| Puntuación en los 5 tests | 4/5 | **4,5/5** | 4/5 |

**RECOMENDACIÓN — con reservas explícitas.**

**Opción B**, ejecutada con la disciplina de la §17.3: la cadena de cinco movimientos como estructura, **no** como lista. Es la única que no obliga a esconder nada y la que mejor responde a tu pregunta central (§26).

**Pero su riesgo es real y depende de la ejecución.** Si al escribirla la secuencia se convierte en enumeración, produce exactamente el efecto que quieres evitar. Dos salvaguardas obligatorias si eliges B:
1. **Cada movimiento debe nombrar el problema, no la disciplina.** "Aparecía demanda que la web no convertía" en lugar de "Desarrollo web".
2. **Cada movimiento debe enlazar a una evidencia.** Si un movimiento no tiene evidencia enlazable, se retira hasta tenerla (§18.2).

**Si prefieres minimizar riesgo y maximizar empleabilidad inmediata → opción A.** Es más segura y más rápida de ejecutar. El coste es dejar el marketing en segundo plano, que es precisamente lo que objetaste.

**No recomiendo C** como posicionamiento principal, por la dependencia de un solo cliente y su choque con D-01. Su mejor uso es **dentro** de A o B: el caso longitudinal de Tokyo Tunning (§14.3) funciona igual de bien en ambas.

## 25.3 Consecuencias de la decisión

| | Opción A | Opción B |
|---|---|---|
| Case studies | 2 (TT + agente) | 3 (TT + agente + CyberDay/marketing) |
| Estructura de home | Proyectos → capacidades → about → trayectoria | Cinco movimientos → casos → about → trayectoria |
| `Skills` | Reordenado con lo técnico primero | Sustituido por "capacidades con evidencia" |
| `<title>` / LinkedIn headline | *Product Engineer · e-commerce y sistemas de IA* | *Construyo sistemas de venta, de la campaña al código* |
| Sprint 3 | Estándar | +1 ticket (tercera pieza) |
| Riesgo principal | Esconder el marketing | Leerse como lista |

---

# 26. LA PREGUNTA CENTRAL

> **¿Cómo representar fielmente a alguien que trabaja en marketing, contenido, producto, desarrollo, automatización e IA sin que parezca que se atribuye seis profesiones?**

**La respuesta no es una frase. Es esta arquitectura:**

```
1  EL HERO NO ENUMERA.
   Contiene solo el plano A (quién soy). Nunca una lista de disciplinas.

2  LA ESTRUCTURA SUSTITUYE AL SLOGAN.
   El orden de las secciones es el argumento. Cinco movimientos, o proyectos
   primero — pero nunca una nube de etiquetas.

3  CADA CAPACIDAD LLEGA CON SU EVIDENCIA ADJUNTA.
   Sin enlace, cifra fechada o artefacto → la afirmación se retira (§18).

4  LA AMPLITUD SE DESCUBRE, NO SE DECLARA.
   El visitante llega a "esta persona hace muchas cosas" por acumulación
   de pruebas, no porque se lo hayamos dicho.

5  UN SOLO CASO DEMUESTRA LA TRANSVERSALIDAD.
   Tokyo Tunning atraviesa las cinco capas. Un caso longitudinal prueba
   la amplitud mejor que seis proyectos aislados.

6  LA FORMACIÓN VALIDA AL FINAL, NO ABRE.
   La credencial confirma lo que los proyectos ya demostraron.

7  EL TÍTULO CORTO NO EXPLICA LA CARRERA.
   Solo tiene que no mentir y no cerrar puertas.
```

**Por qué funciona.** Nadie que lea seis etiquetas cree las seis. Todo el que verifique seis evidencias sí las cree. La diferencia no está en lo que afirmas: está en si el visitante llegó a la conclusión por sí mismo.

---

# 27. RIESGOS

| ID | Riesgo | Prob. | Impacto |
|---|---|---|---|
| RS1 | Un tech lead verifica `WCAG 100/100` y encuentra 96 + 18 fallos | **Alta** | **Alto** |
| RS2 | Un recruiter abre GitHub, ve la bio y los repos de curso, y cierra el proceso | **Alta** | **Alto** |
| RS3 | Compartes el portfolio y llega sin preview visual | **Muy alta** | Medio |
| **RS4** | **Alguien verifica la credencial y ve que el portfolio dice "pendiente"** *(nuevo v2)* | **Alta** | Medio |
| **RS5** | **LinkedIn y portfolio proyectan dos profesiones distintas** *(nuevo v2)* | **Alta** | **Alto** |
| RS6 | Se corrompe el directorio local sin versionar | Baja | **Muy alto** |
| RS7 | Publicar el caso del agente con datos identificables sin autorización | **Mitigado por D-01** | Alto |
| RS8 | Usuario de teclado o lector de pantalla no puede navegar (A1) | Media | Medio |
| RS9 | Rediseñar antes de arreglar el contenido | **Alta** | **Alto** |
| **RS10** | **Elegir opción B y ejecutarla como lista → efecto "sé un poco de todo"** *(nuevo v2)* | Media | **Alto** |
| **RS11** | **Sobrecorregir hacia IA y perder al cliente de marketing** *(nuevo v2)* | Media | Medio |

---

# 28. OPORTUNIDADES

| # | Oportunidad | Impacto |
|---|---|---|
| O1 | Case study del agente (anonimizado) | **Transformador** |
| O2 | README de perfil de GitHub — narra el trabajo privado sin publicarlo | **Muy alto** |
| O3 | Capítulo de la auditoría de procedencia | **Muy alto** |
| O4 | **Superficie propia para el marketing sistematizado** *(nuevo v2)* | **Muy alto** |
| O5 | Caso longitudinal de Tokyo Tunning como prueba de transversalidad | **Muy alto** |
| O6 | Diagramas de arquitectura — hoy hay 0 diagramas y 2 imágenes | **Alto** |
| O7 | **Credencial verificable con enlace público** *(nuevo v2)* | **Alto** |
| O8 | Fechar los claims — convierte vulnerabilidad en rigor | **Alto** |
| O9 | Invertir el orden Proyectos ↔ Trayectoria | **Alto** |
| O10 | Dominio propio | **Alto** |
| O11 | Métricas de evaluación como evidencia visual | **Alto** |
| O12 | Dirección de arte diferenciada | Medio |

---

# 29. BENCHMARK

## 29.1 Qué busca el mercado en 2026

- *"Qualified candidates are engineers who have **shipped at least one production agent system**."*
- *"Screen for production experience: **evals, observability, error handling, cost engineering**."*
- *"**Failure-mode fluency** — can they talk concretely about hallucination containment and rollback? **Operators have scars; theorists have citations.**"*
- *"**Evaluation discipline matters** — mature engineers describe evals, not vibes."*
- *"**Two to four fully documented case studies outperform eight to ten shallow entries.**"*
- *"**Building eval infrastructure is the single highest-signal project in 2026.** Almost no candidates have actually built one."*

## 29.2 Dónde estás

| Señal del mercado | ¿La tienes? | ¿Es visible? |
|---|---|---|
| Sistema de agente en producción | ✅ | ❌ |
| Infraestructura de evaluación | ✅ **destacada** | ❌ |
| Observabilidad | ✅ | ❌ |
| Manejo de errores | ✅ | ❌ |
| Ingeniería de coste | ✅ | ❌ |
| Fluidez sobre modos de fallo | ✅ **destacada** | ❌ |
| Rollback | ✅ | ❌ |
| 2-4 case studies documentados | ⚠️ 1 | ⚠️ 1 |
| Métricas de producción reales | ✅ | Parcial |

**Cumples ocho de nueve señales de alto valor. Ninguna es visible.** No es un problema de capacidad ni de mercado: es de exposición.

## 29.3 Comparación estructural

| Dimensión | Referencias | El tuyo |
|---|---|---|
| Proyectos con caso profundo | 2-4 | 1 |
| Peso de proyectos | 50-70% | **16%** |
| Peso de CV/trayectoria | 5-15% | **39%** |
| Evidencia visual por caso | 4-10 piezas | **0** |
| Diagramas de arquitectura | 1-2 por caso | **0** |
| Identidad visual propia | Alta | Baja |
| Calidad de escritura | Variable | **Alta** ✅ |
| Honestidad (deuda, límites) | Rara | **Alta** ✅ |

**Ganas en escritura y honestidad** — las dos cosas más difíciles de enseñar. **Pierdes en cantidad de casos, evidencia visual e identidad.**

---

# 30. P0 — CRÍTICO

| ID | Hallazgo |
|---|---|
| **P0-01** | El agente de IA no existe en ninguna superficie pública |
| **P0-02** | La entrada "ACTUALIDAD" describe feb–jun 2026 |
| **P0-03** | `proyecto-portfolio.jpg` muestra el sitio anterior |
| **P0-04** | Bio de GitHub *"I may be slow to respond."* + repos de curso + 67 días sin actividad |
| **P0-05** | `WCAG 100/100` y `LCP 300ms` sin fecha; hoy 96 y 940ms |
| **P0-06** | Sin `og:image` |
| **P0-07** | `Skills` omite todo el stack real |
| **P0-08** | El portfolio en producción no está versionado |
| **P0-09** | **Formación descrita como pendiente estando acreditada** *(nuevo v2)* |
| **P0-10** | **Marketing sistematizado reducido a 4 chips** *(nuevo v2)* |
| **P0-11** | **LinkedIn con posicionamiento público desalineado** *(reportado, nuevo v2)* |

---

# 31. P1 — ALTO IMPACTO

| ID | Hallazgo |
|---|---|
| P1-01 | Solo 1 proyecto real |
| P1-02 | Roadmap 39% vs Proyectos 16% |
| P1-03 | Case study accesible solo por enlace de 12px (190×16 en móvil) |
| P1-04 | 0 reglas `:focus` |
| P1-05 | Tarjeta de prueba del hero invisible bajo 1024px |
| P1-06 | 2 imágenes en todo el sitio; 0 diagramas |
| P1-07 | 36 fallos de contraste |
| P1-08 | `<title>`, meta description y Schema caducados |
| P1-09 | Favicon roto |
| P1-10 | 8 objetivos táctiles bajo 44×44 |
| P1-11 | Proyectos en 5ª posición, tras 59% de scroll |
| P1-12 | El CTA del footer dirige al activo más débil |
| P1-13 | Dominio `.netlify.app` gratuito |
| **P1-14** | **Producción de contenido sin evidencia visible** *(nuevo v2)* |
| **P1-15** | **4 de 8 afirmaciones profesionales sin ninguna evidencia enlazable** *(nuevo v2)* |

---

# 32. P2 — IMPORTANTE

| ID | Hallazgo |
|---|---|
| P2-01 | Sin identidad visual diferenciada |
| P2-02 | Bundle único de 363 KB sin code splitting |
| P2-03 | CSR puro sin prerender |
| P2-04 | Timeline con 7 entradas sin colapsar en desktop |
| P2-05 | Imágenes sobredimensionadas, sin `srcset`/WebP/dims |
| P2-06 | Sin escala tipográfica modular |
| P2-07 | 6 opacidades de borde, 5 radios, 3 anchos |
| P2-08 | `prefers-reduced-motion` no gobierna Framer Motion |
| P2-09 | Sitemap incompleto, `lastmod` de hace 7 meses |
| P2-10 | Email gmail personal para una SpA |
| P2-11 | Dos entradas del timeline declaran "Actualidad" |
| P2-12 | Sin meta por ruta |
| **P2-13** | **Formación en 6 tarjetas de igual peso, sin enlaces de verificación** *(nuevo v2)* |

---

# 33. P3 — REFINAMIENTO

| ID | Hallazgo |
|---|---|
| P3-01 | Logo con `href="#"` |
| P3-02 | Sin enlace "saltar al contenido" |
| P3-03 | `text-glow-cyan` reduce nitidez del H2 |
| P3-04 | Blur violeta sin función |
| P3-05 | Ritmo vertical uniforme |
| P3-06 | Glow cyan en 3 jerarquías |
| P3-07 | Miniatura de Tokyo Tunning mal recortada |
| P3-08 | Sin CSP en las cabeceras |

---

# 34. P4 — OPCIONAL / EXPERIMENTAL

| ID | Idea | Veredicto |
|---|---|---|
| P4-01 | Demo interactiva del agente | **NO HACER** — coste alto, riesgo de fallo público, contradice "no es un chatbot" |
| P4-02 | Blog / notas técnicas | **EVALUAR** — solo si sostienes la cadencia |
| P4-03 | Versión en inglés | **EVALUAR** — necesario si apuntas a remoto internacional |
| P4-04 | Modo claro | **NO HACER** — duplica QA sin retorno |
| P4-05 | Métricas en vivo | **NO HACER** — riesgo de mostrar números malos sin contexto |

---

# 35. SPRINTS PROPUESTOS  *(reordenados en v2)*

## SPRINT 0 — Baseline técnico y contradicciones críticas
**Objetivo.** Control de versiones + eliminar las fugas de credibilidad que no dependen de contenido nuevo.
**Prioridad** P0 · **Riesgo** Bajo · **Dependencias** ninguna (salvo D-03 para un ticket)
**Tareas.** Versionar el proyecto · reparar favicon · crear `og:image` · actualizar `<title>`/description/Schema · **actualizar la formación acreditada** · eliminar la tarjeta "Este Portafolio" · fechar los claims · `:focus-visible` · sitemap · logo.
**Impacto.** Elimina 6 de 11 hallazgos P0 y el riesgo RS6.
**Aceptación.** Repositorio con historial · `/favicon.svg` devuelve `image/svg+xml` · preview visible en LinkedIn · ningún claim sin fecha · ninguna referencia a formación pendiente · foco visible ≥3:1 en los 17 enlaces.
**Recomendación: HACER.**

## SPRINT 1 — Contenido, formación y posicionamiento
**Objetivo.** Que el sitio describa al profesional de agosto de 2026 en sus tres capas.
**Prioridad** P0 · **Riesgo** Bajo · **Dependencias** Sprint 0 + **D-02**
**Tareas.** Reescribir "ACTUALIDAD" · reconstruir capacidades con la regla de evidencia · **dar superficie propia al marketing y al contenido** · reordenar la formación con el enlace de Acreditta · colapsar el timeline también en desktop · resolver "Actualidad" duplicada · ajustar el hero según D-02.
**Aceptación.** Un lector externo dice correctamente en qué trabajas hoy · Roadmap <25% de la altura · ninguna capacidad declarada sin evidencia enlazable · formación coherente con Acreditta.
**Recomendación: HACER.**

## SPRINT 1B — GitHub Fase A (limpieza inmediata) · **EN PARALELO**
**Objetivo.** Que GitHub deje de contradecir al portfolio, sin esperar a los case studies.
**Prioridad** P0 · **Riesgo** Bajo · **Dependencias** ninguna (salvo D-03, D-04)
**Tareas.** Reescribir la bio · README de perfil mínimo · cambiar repos fijados · descripciones y topics · archivar repos de curso · resolver `Portafolio-FelipeDroguett` y `Proyecto_Elbajon_dela_cami`.
**Impacto.** Elimina RS2 — el riesgo con mayor combinación de probabilidad e impacto.
**Recomendación: HACER.** Es el mejor ratio impacto/esfuerzo del plan.

## SPRINT 2 — Case study del agente (anonimizado) ★
**Objetivo.** Publicar la capacidad más alta y menos visible.
**Prioridad** P0 · **Riesgo** Bajo *(reducido: D-01 aprobada)* · **Dependencias** Sprint 1
**Tareas.** Redactar los 7 capítulos (§15.2) · diagrama de arquitectura · visualización de la metodología de evaluación · ruta y tarjeta · cerrar el arco de Tokyo Tunning · revisión de confidencialidad.
**Aceptación.** Un tech lead entiende sin ver código por qué no es un chatbot · cero datos sensibles ni identificación del cliente · el capítulo 6 se lee en <3 min · se llega al caso desde Tokyo Tunning.
**Recomendación: HACER.** Máximo impacto individual.

## SPRINT 3 — Diseño estructural, arquitectura de página y evidencia visual
**Objetivo.** Que el portfolio pese donde debe y muestre pruebas.
**Prioridad** P1 · **Riesgo** Medio · **Dependencias** Sprint 2 + D-02
**Tareas.** Reordenar secciones · elevar el acceso a los casos · tarjeta de prueba visible en móvil · reestructurar el caso de TT como longitudinal · evidencia visual (screenshots, diagramas, antes/después, pipeline de precios) · contraste · objetivos táctiles · miniatura de TT · escala tipográfica base.
**Aceptación.** Proyectos ≥40% del peso · ningún texto informativo bajo 4,5:1 · ningún objetivo táctil bajo 44×44 · ≥8 piezas de evidencia visual.
**Recomendación: HACER.**

## SPRINT 4 — GitHub Fase B (integración)
**Objetivo.** Convertir GitHub en respaldo activo del portfolio.
**Prioridad** P1 · **Riesgo** Bajo · **Dependencias** Sprints 1B y 2
**Tareas.** README de perfil completo con enlaces a los case studies · storytelling técnico del trabajo privado sin publicar IP · reescribir la tarjeta de GitHub del portfolio · reubicar el CTA del footer.
**Recomendación: HACER.**

## SPRINT 5 — LinkedIn y coherencia del ecosistema
**Objetivo.** Alinear las cuatro superficies y eliminar las seis contradicciones (§19.3).
**Prioridad** P0 *(elevada en v2)* · **Riesgo** Bajo · **Dependencias** Sprints 1, 2, 4 + D-02
**Tareas.** Auditoría autenticada con el checklist de §20 · headline y "Acerca de" · experiencia actual jul–ago 2026 · **formación y credencial Full Stack** · retirar "Python & Cybersecurity Student" · skills · Featured con portfolio y casos · verificación de coherencia.
**Aceptación.** Las cuatro superficies describen al mismo profesional · cero contradicciones de §19.3.
**Recomendación: HACER.**

## SPRINT 6 — Dirección de arte (Diseño B) · **EVALUAR**
**Objetivo.** Que el portfolio sea reconocible como tuyo.
**Prioridad** P2 · **Riesgo** **Alto** · **Dependencias** Sprints 0-5 + **D-07B**
**Tareas.** Tokens y escala modular · nueva dirección según §6.3 (principio, **no** skin industrial) · retirar violeta y reducir glow · ritmo diferenciado · code splitting · optimización de imágenes · `prefers-reduced-motion` completo · meta por ruta · CSP.
**Aceptación.** Cambiar el nombre hace que la página **deje** de tener sentido · cero valores arbitrarios · bundle inicial <200 KB.
**Recomendación: EVALUAR.** Si el tiempo es limitado, este sprint se sacrifica.

---

# 36. QUICK WINS  *(reevaluados en v2)*

| # | Acción | Esfuerzo | Impacto |
|---|---|---|---|
| QW1 | Reescribir la bio de GitHub | 2 min | **Muy alto** |
| QW2 | **Actualizar la formación: acreditada, con enlace** *(nuevo v2)* | 15 min | **Muy alto** |
| QW3 | Crear `og:image` + 2 metas | 30 min | **Muy alto** |
| QW4 | Eliminar la tarjeta "Este Portafolio" | 5 min | **Alto** |
| QW5 | Cambiar los repos fijados de GitHub | 3 min | **Alto** |
| QW6 | Fechar los claims `WCAG` y `LCP` | 15 min | **Alto** |
| QW7 | Reparar la ruta del favicon | 2 min | Alto |
| QW8 | Añadir `:focus-visible` global | 10 min | Alto |
| QW9 | Actualizar `<title>` + meta description | 5 min | Alto |
| QW10 | `slate-500` → `slate-400` en labels y fechas | 15 min | Medio |
| QW11 | Añadir descripción a los 10 repos sin ella | 20 min | Medio |
| QW12 | Corregir `href="#"` del logo | 1 min | Bajo |
| QW13 | Actualizar `sitemap.xml` | 5 min | Bajo |

**QW1 + QW2 + QW3 + QW4 + QW5 + QW6 ≈ 70 minutos, y resuelven seis hallazgos P0.**

> **Nota.** QW9 (`<title>`) depende de D-02. Los demás son ejecutables sin decisión previa.

---

# 37. CAMBIOS QUE NO RECOMIENDO

| # | Idea | Por qué no |
|---|---|---|
| N1 | Rediseño artístico completo antes que el contenido | Envase mejor para un mensaje caducado |
| N2 | Abrir repositorios privados de cliente | Riesgo legal y de confianza; el README de perfil lo resuelve |
| N3 | Demo interactiva del agente | Coste alto, riesgo público, contradice el mensaje |
| N4 | Eliminar Starken, La Polar y Falabella | Son la prueba de "10 años dentro de negocios reales". Colapsar ≠ eliminar |
| N5 | Barras de porcentaje de habilidades | Cliché, arbitrario, no verificable |
| N6 | Terminal falsa, partículas, código decorativo | Ya lo sufres: el `const felipe = {...}` sigue vivo en tu miniatura |
| N7 | Convertir cada proyecto en case study largo | 2-4 casos profundos superan a 8 superficiales |
| N8 | Publicar el Agency OS | Pricing, márgenes y estructura de clientes |
| N9 | Añadir El Bajón al portfolio | De acuerdo contigo: no está aceptado |
| N10 | Presumir "Lighthouse 100" en accesibilidad | Falso positivo verificable en 5 minutos |
| N11 | Modo claro | Duplica QA sin retorno |
| N12 | Migrar a Next.js "por SEO" | Vite + prerender resuelve el 90% con el 10% del trabajo |
| **N13** | **Ocultar el marketing para parecer más ingeniero** *(nuevo v2)* | Es actividad profesional actual con evidencia sistemática. Ocultarlo miente por omisión y pierde un público que ya te contrata |
| **N14** | **Slogan paraguas** ("Transformo negocios con tecnología") | Copiable a 10.000 perfiles. La arquitectura sustituye al slogan (§26) |
| **N15** | **Atribuirte seniority** ("Senior AI Engineer") | No demostrable con la evidencia disponible. El objetivo es que **el visitante** llegue a esa conclusión |
| **N16** | **Traducir "taller de ingeniería" a estética industrial/automotriz** *(nuevo v2)* | Te ataría visualmente a un cliente. Es un principio, no un skin (§6.3) |
| **N17** | **Poner la credencial "TRAINEE" en el hero** *(nuevo v2)* | Fija un techo por debajo de lo que tu trabajo demuestra (§16.3) |

---

# 38. INFORMACIÓN PÚBLICA vs PRIVADA

## 38.1 Puede incorporarse

**Del agente:** arquitectura conceptual · principio WORKFLOW FIRST · metodología de evaluación y cifras agregadas · resultados (464/464, 51/51, 84 turnos) · los 5 defectos con impacto · el A/B de telemetría · **la auditoría de procedencia** · los huecos declarados · enrutamiento multi-modelo y su justificación de coste · taxonomía de gates.

**De Tokyo Tunning:** la race condition de hooks con su fix verificado · pipeline de precios de CyberDay · antes/después de LCP con metodología · screenshots del e-commerce · la cadena pérdida de $800K → origen del agente.

**De marketing** *(nuevo v2)*: la estructura de la auditoría Meta/Google (índice, no contenido) · ROAS 27:1 y CPA $70.034 fechados · metodología del plan anual · el hecho de que existe un sistema editorial con schema de datos · KPI agregados de las tres plataformas.

**De formación:** credencial Full Stack Python con enlace de verificación · Téc. Administración de Empresas — Marketing · formación continua agrupada.

**De metodología:** el principio del Agency OS (*"no vende acceso ilimitado, vende resultados y capacidades definidos"*) sin cifras · la práctica de checkpoints con manifest de rollback.

## 38.2 Debe permanecer privado

| Categoría | Detalle |
|---|---|
| Credenciales | Claves OpenAI, tokens Kommo, `N8N_ENCRYPTION_KEY`, credenciales WP, `wp-config.php` |
| Financiero de cliente | Datos bancarios de TT en `start-staging-3002.bat` y 3 JSON de resultados |
| Datos personales | RUT, dirección, corpus WhatsApp/Instagram, `gonzalo_shortcuts.local.md`, nombres del cliente |
| Comercial sensible | Cifras del contrato TT, pricing del Agency OS, márgenes, estructura de clientes |
| Infraestructura | IDs de workflow, rutas de webhook, `execution_id`, puertos, `workflow_version_id` |
| Código propietario | `src/` de mvp-agente, workflows n8n, `catalog.json`, reglas de negocio |
| Personal | Deuda activa, situación familiar, planes de migración, negociaciones en curso |
| **Identidad del cliente** | **En fase 1 del case study del agente (D-01)** |

**Nota positiva.** El `.gitignore` de `mvp-agente` ya protege todo lo anterior con justificación documentada. El riesgo aparece solo al publicar sin revisar.

---

# 39. DECISIONES — TABLA ACTUALIZADA

| ID | Decisión | Estado | Detalle |
|---|---|---|---|
| **D-01** | Identificación del cliente en el case study del agente | ✅ **APROBADA** | **Comenzar anonimizado.** Sin cliente, contrato, personas, IDs, webhooks, `execution_id`, infraestructura, código ni conversaciones. Sí: problema, método, arquitectura conceptual, metodología de evaluación, decisiones, fallos, aprendizajes, resultados agregados. Versión nominal solo con autorización explícita posterior. **Sprint 2 desbloqueado.** |
| **D-02** | Arquitectura de posicionamiento | 🔴 **ABIERTA** | Tres alternativas completas en §25. Recomendación: **Opción B con las dos salvaguardas**, o **Opción A** si se prioriza empleabilidad inmediata y menor riesgo de ejecución. **Bloquea 6 tickets.** |
| **D-03** | Repositorio canónico del portfolio | 🟡 **PENDIENTE (técnica)** | Producción sin versionar; el repo público tiene el sitio anterior con `homepage` ya apuntando al dominio correcto. Recomendación: **reemplazar el contenido de `Portafolio-FelipeDroguett`** — conserva URL, historial y el enlace ya configurado. Alternativa: repo nuevo + archivar el viejo. |
| **D-04** | `Proyecto_Elbajon_dela_cami` público (12,5 MB) | ✅ **APROBADA CONCEPTUALMENTE** | El Bajón queda fuera del portfolio. Privatizar el repositorio **cuando se ejecute el Sprint 1B**. No modificar ahora. Trabajo local intacto. |
| **D-05** | Dominio propio | ✅ **APROBADA (diferida)** | Aprobada como mejora. **No comprar todavía.** No bloquea los primeros sprints. |
| **D-06** | Email profesional en dominio propio | ✅ **APROBADA (condicional a D-05)** | No configurar todavía. No bloquea. |
| **D-07** | Trabajo de diseño | 🟨 **PARCIALMENTE APROBADA** | **D-07A — Diseño estructural: APROBADO.** Entra en Sprint 3 (AI, jerarquía, hero, proyectos, evidencia visual, tipografía, spacing, responsive, accesibilidad). **D-07B — Dirección de arte: SE REEVALÚA** al cerrar los Sprints 0-5. Restricción vinculante: "taller de ingeniería" es principio, nunca skin industrial o automotriz. |
| **D-08** | Rotación y revisión de secretos | ✅ **APROBADA (condicional)** | Antes de publicar o conectar a remoto cualquier repo del agente: revisar historial, rotar secretos, verificar `.gitignore`, revisar staged files, ejecutar chequeo de secretos. **No ejecutar ahora** salvo riesgo activo. Sin remoto, no hay exposición. |

**Única decisión que bloquea trabajo hoy: D-02.**

---

# 40. MATRIZ DE HALLAZGOS

| ID | Área | Hallazgo | Evidencia | Impacto | Prio | Recomendación | Sprint |
|---|---|---|---|---|---|---|---|
| F-001 | Contenido | Agente de IA ausente del ecosistema público | `mvp-agente-wf-first/ESTADO.md` mod. 2026-08-19 04:35 | Crítico | P0 | Case study anonimizado | S2 |
| F-002 | Contenido | "ACTUALIDAD" describe feb–jun 2026 | `Roadmap.jsx:11-19` | Crítico | P0 | Reescribir | S1 |
| F-003 | Credibilidad | Miniatura muestra el sitio anterior | `public/assets/proyecto-portfolio.jpg` | Crítico | P0 | Eliminar tarjeta | S0 |
| F-004 | GitHub | Bio *"I may be slow to respond."* | API GitHub | Crítico | P0 | Reescribir | **S1B** |
| F-005 | Credibilidad | `WCAG 100/100` / `LCP 300ms` sin fecha | Lighthouse TT: 96, 18 fallos; LCP 940ms | Crítico | P0 | Fechar y contextualizar | S0 |
| F-006 | SEO | Sin `og:image`; twitter card rota | `<head>` en producción | Crítico | P0 | Crear imagen + metas | S0 |
| F-007 | Contenido | `Skills` omite el stack real | `Skills.jsx:8-23` vs `src/` de mvp-agente | Crítico | P0 | Reconstruir con evidencia | S1 |
| F-008 | Infra | Portfolio en producción sin versionar | `git rev-parse` falla; repo público = sitio anterior | Crítico | P0 | Inicializar + remoto | S0 |
| F-009 | GitHub | 67 días sin actividad; 9/15 repos de curso | API GitHub | Crítico | P0 | Fase A + README | **S1B** |
| F-010 | Proyectos | 1 proyecto real de 3 | `Projects.jsx` | Alto | P1 | Añadir agente | S2 |
| F-011 | AI/Estructura | Roadmap 39% vs Proyectos 16% | Alturas medidas, total 6.064px | Alto | P1 | Reordenar + colapsar | S1,S3 |
| F-012 | UX | Acceso al case study: 190×16 px en móvil | Medición a 320px | Alto | P1 | Botón completo | S3 |
| F-013 | A11y | 0 reglas `:focus`; outline `rgb(16,16,16)` | Recorrido de `styleSheets` | Alto | P1 | `:focus-visible` | S0 |
| F-014 | Responsive | Tarjeta de prueba invisible bajo 1024px | `Hero.jsx:119` `hidden lg:block` | Alto | P1 | Variante móvil | S3 |
| F-015 | Contenido | 2 imágenes, 0 diagramas en todo el sitio | `querySelectorAll('img')` | Alto | P1 | Evidencia visual | S3 |
| F-016 | A11y | 36 fallos de contraste | slate-500 ≈4,25:1; slate-600 ≈2,69:1 | Alto | P1 | Subir un escalón | S3 |
| F-017 | SEO | `<title>`/description/Schema caducados | `index.html:8-40` | Alto | P1 | Actualizar | S0 |
| F-018 | SEO | Favicon devuelve `text/html` | `curl /favicon.svg` → 2590b HTML | Alto | P1 | Corregir ruta | S0 |
| F-019 | A11y | 8 objetivos táctiles bajo 44×44 | Medición a 320px | Alto | P1 | Ampliar | S3 |
| F-020 | UX | Proyectos en 5ª posición (59% de scroll) | Offsets medidos | Alto | P1 | Reordenar | S3 |
| F-021 | UX | CTA del footer dirige a GitHub | `Footer.jsx:12-21` | Alto | P1 | Recolocar | S4 |
| F-022 | Credibilidad | Dominio `.netlify.app` gratuito | URL en producción | Alto | P1 | Dominio propio | D-05 |
| F-023 | Diseño | Sin identidad visual diferenciada | Cyan+glass+blur+grid | Medio | P2 | Diseño B | S6 |
| F-024 | Perf | Bundle único de 363 KB | `performance.getEntriesByType` | Medio | P2 | `React.lazy` | S6 |
| F-025 | Perf | CSR puro sin prerender | Sin HTML en el documento inicial | Medio | P2 | Prerender | S6 |
| F-026 | UX | Timeline sin colapsar en desktop | `Roadmap.jsx:124,181` | Medio | P2 | Invertir lógica | S1 |
| F-027 | Perf | Imágenes sin `srcset`/WebP/dims | `naturalWidth` vs render | Medio | P2 | Optimizar | S6 |
| F-028 | Diseño | Sin escala tipográfica modular | 13 declaraciones, 5 arbitrarias | Medio | P2 | Tokens | S3,S6 |
| F-029 | Diseño | 6 opacidades de borde, 5 radios, 3 anchos | Auditoría de clases | Medio | P2 | Tokens | S6 |
| F-030 | A11y | `reduced-motion` no cubre Framer Motion | `index.css:13-18` | Medio | P2 | `useReducedMotion` | S6 |
| F-031 | SEO | Sitemap incompleto, `lastmod` 2026-01-23 | `public/sitemap.xml` | Bajo | P2 | Actualizar | S0 |
| F-032 | Credibilidad | Email gmail personal para una SpA | `Contact.jsx:10` | Medio | P2 | Email de dominio | D-06 |
| F-033 | Contenido | Dos entradas declaran "Actualidad" | `Roadmap.jsx` id 1 y 4 | Bajo | P2 | Resolver | S1 |
| F-034 | SEO | Sin meta por ruta | Case study hereda el `<title>` | Medio | P2 | Meta dinámica | S6 |
| F-035 | Credibilidad | *"Respondo <24h"* vs bio de GitHub | Contact.jsx vs API | Medio | P1 | Alinear | S1B |
| F-036 | UX | Logo con `href="#"` | `Navbar.jsx` | Bajo | P3 | Corregir | S0 |
| F-037 | A11y | Sin "saltar al contenido" | Recorrido del DOM | Bajo | P3 | Añadir | S3 |
| F-038 | Diseño | `text-glow-cyan` reduce nitidez | `Hero.jsx:70` | Bajo | P3 | Retirar | S6 |
| F-039 | Diseño | Blur violeta sin función | `Hero.jsx:29` | Bajo | P3 | Retirar | S6 |
| F-040 | Diseño | Glow cyan en 3 jerarquías | Hero, Projects, Roadmap | Bajo | P3 | Reducir a una | S6 |
| F-041 | Diseño | Miniatura de TT mal recortada | `Projects.jsx:48-54` | Bajo | P3 | Recapturar | S3 |
| F-042 | Seguridad | Sin CSP en cabeceras | `netlify.toml` | Bajo | P3 | Añadir | S6 |
| F-043 | GitHub | `Proyecto_Elbajon_dela_cami` público (12,5 MB) | API GitHub | Medio | P1 | Privatizar | **S1B** · D-04 |
| F-044 | GitHub | 10/15 repos sin descripción, 14/15 sin topics | API GitHub | Medio | P1 | Documentar | **S1B** |
| F-045 | Método | Lighthouse 100 es falso positivo | `color-contrast` con 0 items | Medio | P1 | No usarlo como claim | S0 |
| **F-046** | **Formación** | **Full Stack Python descrito como pendiente; acreditado 04-08-2026** | Acreditta, verificado 2026-08-19 · `Roadmap.jsx:16,86` | **Crítico** | **P0** | Actualizar 3 superficies + enlace | **S0, S1, S5** |
| **F-047** | **LinkedIn** | **Headline público desalineado: "E-commerce & Operations Manager \| … \| Python & Cybersecurity Student"** | **Reportado por Felipe** — no verificado (HTTP 999) | **Crítico** | **P0** | Auditar autenticado y realinear | **S5** |
| **F-048** | **Contenido** | **Marketing sistematizado reducido a 4 chips** | `meta-google-audit/` (13 docs), `Marketing-Content/`, Agency OS vs `Skills.jsx` | **Crítico** | **P0** | Superficie propia con evidencia | **S1, S3** |
| **F-049** | **Contenido** | **Producción de contenido representada solo por `DaVinci Resolve`** | `Multimedia/`, guiones, parrilla, KPI de 3 plataformas | Alto | **P1** | Capacidad, no herramienta | **S1** |
| **F-050** | **Evidencia** | **4 de 8 afirmaciones profesionales sin evidencia enlazable** | Tabla §18.2 | Alto | **P1** | Regla de evidencia | **S1, S2, S3** |
| **F-051** | **Formación** | **6 formaciones con igual peso visual; ninguna con enlace de verificación** | `Roadmap.jsx:85-92` | Medio | **P2** | Jerarquizar + enlazar Acreditta | **S1** |
| **F-052** | **Método** | **Inconsistencia de scoring visual en la v1 (6,5 vs 5,2)** | v1 §25.3 vs v1 §40 | Bajo | P3 | Rúbrica por dimensiones, sin media | **Resuelto en §41** |

---

# 41. VEREDICTO VISUAL  *(rúbrica corregida en v2)*

> **Nota metodológica.** La v1 contenía dos cifras incompatibles (6,5 en el cuerpo, 5,2 como media). Se elimina la **media global**: las dimensiones no son equiponderables y promediarlas produce falsa precisión. Se conserva la puntuación por dimensión, cada una justificada, más una banda cualitativa.

> **¿Visualmente el portfolio está al nivel del trabajo que quiere representar?**
> **No. Está al nivel del trabajo que representaba en febrero.**

| Dimensión | Nota | Justificación |
|---|:---:|---|
| **Dirección de arte** | **6,0** | Coherente y bien ejecutada, pero es la configuración por defecto de la categoría |
| **Tipografía** | **6,5** | Buenas familias y ancho de lectura. Sin escala modular; suelo de 10-11px demasiado bajo |
| **Composición** | **6,0** | El hero funciona. El reparto global (39% CV / 16% proyectos) es el error más grave |
| **Jerarquía** | **5,5** | El elemento dominante es el menos informativo; los datos más valiosos van en el gris más tenue |
| **Identidad** | **3,5** | Cambia el nombre y la página sigue funcionando igual |
| **UX** | **5,5** | Navegación clara y sin overflow, pero los proyectos llegan al 59% del scroll |
| **UI** | **6,5** | Componentes pulidos, microinteracciones bien calibradas; sistema inconsistente por debajo |
| **Responsive** | **6,0** | Cero overflow en todo el rango — mérito real. Pero móvil pierde toda la evidencia del hero |
| **Presentación de proyectos** | **3,5** | Un proyecto real, uno autorreferencial contradictorio y un enlace |
| **Credibilidad visual** | **4,5** | Sube por la deuda técnica declarada; baja por la miniatura contradictoria y los claims sin fecha |
| **Diferenciación** | **3,0** | Indistinguible de cientos de portfolios del mismo periodo |

**Banda cualitativa:** **competente pero indiferenciado.** La artesanía técnica del front está por encima del promedio (cero overflow, cero errores de consola, cabeceras de seguridad, semántica correcta, microinteracciones medidas). **El problema no es la ejecución. Es qué se decidió mostrar.**

**Dimensiones críticas** (bajo 4,0): identidad, presentación de proyectos, diferenciación. Las tres se resuelven con **contenido y estructura** (Sprints 1-3), no con dirección de arte.

---

# 42. VEREDICTO PROFESIONAL

> **¿Te estás vendiendo por debajo, correctamente o por encima?**

## **Muy por debajo, y en las tres capas simultáneamente.**

**Lo que un evaluador competente concluye hoy:**
> *"Desarrollador web con background comercial. Hizo un e-commerce WordPress que escaló y sabe de Meta Ads. Está terminando un bootcamp de Python. GitHub con trabajos de curso, inactivo hace dos meses, bio poco seria. LinkedIn dice E-commerce & Operations Manager y estudiante de Python."*

**Lo que la evidencia sostiene** *(descripción, no etiqueta — §CH-09)*:
> *"Ha llevado un sistema conversacional a staging con arquitectura por capas y enrutamiento multi-modelo; construyó una suite de evaluación sobre 48.937 mensajes reales con anonimización verificada y muestreo estratificado; mantiene ~880 aserciones y 464/464 E2E en verde; detuvo su propio desarrollo al detectar que su trazabilidad era ambigua, lo verificó contra la base de datos y se negó a reclasificar su evidencia a favor. Además opera marketing como sistema documentado —auditoría en 13 partes, plan anual, SOPs, pipeline de precios— reconstruyó un e-commerce completo con auditoría a nivel de línea, y lleva diez años operando negocios reales. Tiene formación formal acreditada y verificable."*

**La distancia entre esas dos descripciones es tu brecha.**

**Por qué el ecosistema empeora el diagnóstico.** El portfolio en solitario proyecta un perfil sólido pero acotado. GitHub introduce **duda activa**. LinkedIn introduce **un tercer perfil distinto** (reportado). Un evaluador que consulte las tres superficies no encuentra un profesional: encuentra **tres versiones de tres personas parecidas**, y por defecto cree la más baja.

**La ironía final:** las tres cosas más difíciles de conseguir —capacidad real, evidencia documentada y honestidad intelectual— ya las tienes. Falta lo más fácil: enseñarlas de forma coherente.

---

# 43. VEREDICTO FINAL

## ¿Tu presencia pública está a la altura del trabajo que estás haciendo?

# **No.**

Tu presencia describe con precisión razonable al profesional que eras hace seis meses. El trabajo que hiciste ayer —`ESTADO.md` modificado hoy a las 04:35— no existe en ninguna superficie que alguien pueda encontrar. Y el trabajo de marketing que facturas hoy tampoco.

No tienes un problema de capacidad. No tienes un problema de evidencia: tienes más y mejor documentada que la mayoría de perfiles que compiten por lo mismo. **Tienes un problema de exposición y de coherencia entre superficies** — el más barato de resolver de los tres.

## ¿Cuál sería el cambio individual de mayor impacto?

# **Publicar el case study del agente de IA, anonimizado.**

Resuelve simultáneamente: la brecha de trabajo actual, la de profundidad técnica, la de cantidad de casos (1 → 2, el rango que el mercado premia) y el arco narrativo abierto en el case study existente.

Dentro de él, el elemento más valioso es **el capítulo 6 — la auditoría de procedencia**. Imposible de fingir, se lee en tres minutos, y demuestra más que cualquier lista de tecnologías.

## Los tres cambios que más transformarían la percepción

### 1 · Publicar el agente como case study anonimizado *(Sprint 2)*
De "hace webs de WordPress" a "lleva sistemas a producción con disciplina de evaluación".

### 2 · Reparar GitHub — Fase A *(Sprint 1B, ejecutable ya, una tarde)*
Hoy desmiente al portfolio; después lo respaldará. Mejor ratio impacto/esfuerzo del plan.

### 3 · Reorganizar el portfolio como arquitectura de evidencia *(Sprints 1 y 3)*
Proyectos antes que trayectoria. Cada capacidad con su evidencia enlazada. Marketing e IA con superficie propia. Que la amplitud **se descubra** en lugar de declararse.

---

# PRINCIPIO RECTOR — CIERRE

No se trata de que el portfolio diga que eres impresionante.

Se trata de que alguien pueda **verificar por qué eres capaz de hacer lo que dices que haces**.

No escondas la formación. No escondas el marketing. No escondas el desarrollo. No escondas la IA. Pero tampoco los conviertas en una lista de títulos.

**Organiza la evidencia para que todo cuadre.**

La coherencia entre experiencia, trabajo actual, proyectos, formación, credenciales, GitHub y LinkedIn hace un trabajo que ningún slogan genérico podría hacer — porque el visitante llega solo a la conclusión, y a las conclusiones propias se les cree.

El trabajo difícil ya está hecho. Está en tu disco, versionado, con hashes, tests y manifiestos de rollback. Y ahora también acreditado.

**Solo falta que alguien más pueda verlo.**

---

**FIN DEL DOCUMENTO — v2**

*Auditoría 2026-08-19. Revisión estratégica 2026-08-19. Ningún cambio implementado en portfolio, repositorios, Netlify, GitHub ni LinkedIn.*
*Backlog ejecutable: `PORTFOLIO_AUDIT_2026-08_BACKLOG.md` · Evidencia visual: `./evidencia/`*
*Credencial verificada: acreditta.com/credential/8f73702b-0511-40f1-80b0-6224284c8eab*
