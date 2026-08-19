# Portfolio V2 — Estrategia Narrativa Completa
## Felipe Droguett — Rediseño desde la Propuesta de Valor Correcta

**Versión:** 1.0  
**Fecha:** 2026-06-06  
**Basado en:** PORTFOLIO_POSITIONING_AUDIT.md v1.0  
**Estado:** Borrador estratégico — sin código todavía

---

## Principio Rector

Todo el portafolio debe responder una sola pregunta antes de que el visitante abandone:

> ¿Por qué contratar a Felipe en lugar de contratar un desarrollador, un marketer y un consultor de procesos por separado?

**La respuesta que evidencia el portafolio:**

Porque cuando el problema digital de un negocio no crece como debería, la causa rara vez es lo que parece. Un desarrollador va a optimizar el código aunque el problema sea operacional. Un marketer va a mejorar las campañas aunque el problema sea técnico. Un consultor va a diagnosticar pero no va a construir la solución.

Felipe diagnostica primero y resuelve con el medio correcto — código, campañas o procesos — según lo que el sistema de negocio necesita en ese momento.

**El caso Tokyo Tunning 2026 es evidencia completa de esta propuesta:**

1. Diagnóstico técnico (37/100 → 100/100 accesibilidad, LCP 300ms)
2. Validación bajo carga real (CyberDay, ROAS 27.6x, 0 fallos técnicos)
3. Descubrimiento del cuello de botella operacional (75 leads sin atención)
4. Diseño del sistema de resolución (TTCOS — no más código, sino proceso)

Esa secuencia completa es única. Ningún freelancer de marketing ni desarrollador web puede presentar un caso equivalente.

---

## Norte Estratégico

**Posicionamiento:**
Digital Operations Consultant para PYMEs en etapa de escalamiento digital.

**Cliente ideal:**
PYME con operación digital activa (e-commerce, campañas, presencia) que tiene tráfico pero no tiene conversión proporcional, o tiene revenue pero lo pierde en fricción operacional.

**El diferenciador que nadie más puede usar:**
No vende herramientas ni servicios aislados. Diagnostica el cuello de botella de esta etapa específica y lo resuelve con el medio correcto.

**Modelo de negocio objetivo:**
Retainer mensual de diagnóstico + operación continua ($300k–$800k CLP/mes).

---

## Rediseño por Sección

---

### HERO — V2

**Problema actual:**
Tres señales simultáneas (desarrollador, marketer, consultor) sin jerarquía. El visitante no puede responder "¿esto es para mí?" antes del primer scroll. El code block muestra un inventario de herramientas cuando debería mostrar la propuesta de valor.

**Principio del nuevo hero:**
En los primeros 10 segundos, el visitante correcto debe reconocerse. El incorrecto debe descalificarse. Actualmente ninguno de los dos puede hacer eso.

**Arquitectura propuesta:**

```
BADGE
"Diagnóstico · Ejecución · Resultados medibles"
— reemplaza "Consultor Digital & Desarrollador Web"

H1
Felipe Droguett.

H2
Resuelvo el problema real
que está frenando tu negocio digital.

LEAD
No siempre es el sitio. No siempre es el marketing. 
A veces el cuello de botella migró de capa — y optimizar 
lo que ya funciona no lo resuelve.
[Muestra el caso de estudio como prueba de la afirmación]

MÉTRICAS (mantener las tres, agregar contexto)
$15M/mes  →  "pico de ventas mensuales · Tokyo Tunning 2023–2025"
27.6x ROAS  →  "CyberDay 2026 · primer evento de alta carga"
100/100  →  "Lighthouse Accessibility · desde 37/100"

CTAs
[Principal] Ver el caso completo  →  /caso-tokyo-tunning
[Secundario] Conversemos  →  #contact
```

**El code block (derecha desktop):**

Reemplazar el inventario de herramientas por el proceso de diagnóstico:

```javascript
// El proceso real
const diagnostico = {
  entrada: "¿Dónde está bloqueado el crecimiento?",
  
  layers: [
    "Técnica — arquitectura, performance, accesibilidad",
    "Comercial — campañas, conversión, atribución",
    "Operacional — procesos, atención, sistemas",
  ],
  
  principio: "El cuello de botella no siempre es obvio.",
  resultado: "Se resuelve con el medio correcto — no con el favorito."
}
```

Esto comunica el método, no las herramientas. Diferencia a Felipe de cualquier otro perfil técnico.

**Métricas — revisión temporal:**

La métrica "$15M ventas/mes escalados" debe llevar subtexto temporal para evitar que un visitante la interprete como el estado actual del negocio:
`"$15M / mes · pico · Tokyo Tunning 2023–2025"`

---

### ABOUT — V2

**Problema actual:**
Tres pilares que responden "¿Quién soy?" en lugar de "¿Qué te resuelvo?". La sección de curiosidad técnica personal (infancia, sistemas operativos) es auténtica pero no aporta valor comercial al visitante.

**Principio del nuevo About:**
Cada pilar debe nombrar un problema de negocio que el visitante reconoce, y mostrar cómo Felipe lo resuelve desde una capacidad diferenciada.

**Arquitectura propuesta:**

```
TÍTULO
Por qué funciona diferente.

SUBTÍTULO  
La mayoría de los problemas digitales tienen diagnóstico equivocado.
Alguien los ve solo desde el código. Alguien desde el marketing.
Alguien desde los procesos. Felipe los ve desde los tres.

PILAR 1 — "El problema técnico que parece comercial"
Cuando el tráfico llega y no convierte, la respuesta instintiva es invertir 
más en ads. A veces el problema es que el sitio tarda 3 segundos en mobile.
Diagnóstico técnico antes de recomendación comercial.
[Icono: diagnóstico / búsqueda]

PILAR 2 — "El cuello de botella que migró de layer"
La tecnología funciona. Los ads funcionan. El revenue no crece.
¿Dónde está el problema? En el proceso de atención, en la operación, 
en el gap entre el sistema digital y el equipo humano.
[Icono: sistema / flujo]

PILAR 3 — "10 años operando, no observando"
No habla de negocios desde una consultora o un bootcamp.
Escaló operaciones reales, gestionó equipos, tomó decisiones 
bajo presión económica. El código llegó después — para resolver 
problemas que ya conocía desde adentro.
[Icono: trayectoria / experiencia]
```

**Lo que se elimina:**
- "El Mañana: Full Stack Python, Ciberseguridad" — señala que el perfil está incompleto
- La historia personal de infancia — relevante biográficamente, no comercialmente
- "Fusión de 10 años de operación comercial con desarrollo de software" — demasiado genérico como subtítulo

---

### SKILLS — V2

**Problema actual:**
Tres columnas iguales con inventario de herramientas, incluyendo una sección de Infraestructura & Seguridad sin respaldo de proyectos. La columna de backend lleva el label "En formación" que contradice el título de "Desarrollador Web."

**Principio del nuevo Skills:**
Organizar alrededor de qué problemas resuelvo, no qué herramientas uso. Las herramientas son el cómo — el problema que resuelven es el qué.

**Arquitectura propuesta:**

```
TÍTULO
Herramientas al servicio del diagnóstico.

SUBTÍTULO
No son skills aislados. Son las capas de resolución.

COLUMNA 1 — "Diagnóstico & Estrategia"
[Primary chips]: E-commerce Strategy, Meta Ads (ROI Focus), 
                 SEO Técnico, Auditoría de Sistemas, 
                 Google Analytics 4, Revenue Operations

COLUMNA 2 — "Construcción & Ejecución"
[Primary chips]: WordPress · WooCommerce · PHP Custom,
                 JavaScript ES6+, HTML5 · CSS3 · Tailwind,
                 Webpay Plus, Schema.org · SEO Técnico,
                 Core Web Vitals, axe-core (WCAG)

COLUMNA 3 — [OPCIONAL — solo si existe proyecto que lo respalde]
Si existe un caso de cliente con trabajo de infraestructura:
"Infraestructura & Automatización"
Si no existe: eliminar esta columna completamente.
```

**Lo que se elimina:**
- Sección de Infraestructura & Seguridad completa (Linux hardening, auditoría de redes, SSH) — sin evidencia de proyecto
- Label "En formación (Back-End)" — reemplazar por solo mostrar lo que está production-ready
- "Gestión Logística", "Liderazgo de Equipos" como primary skills — pertenecen a Roadmap, no a Skills de consultor digital

---

### ROADMAP — V2

**Problema actual:**
Siete entradas cronológicas que leen como un currículum vitae, incluyendo trabajos en Starken, Falabella, y La Polar que no aportan a la propuesta de valor de consultor digital. La etiqueta "Co-Fundador" de Tokyo Tunning crea una inconsistencia directa con el caso de estudio.

**Principio del nuevo Roadmap:**
Cada entrada debe responder: "¿Qué capacidad desarrollé aquí que me hace mejor en lo que hago hoy?" No es una lista de lo que hice — es la historia de cómo llegué a poder hacer lo que hago.

**Cambios específicos:**

**Entrada TT (Mar 2023 — Abr 2025):**
- Eliminar "Co-Fundador" — reemplazar por "Lead de Digitalización & Crecimiento"
- Ajustar descripción para alinear con lenguaje del caso de estudio
- El cuerpo puede mantener la métrica de escalamiento y el trabajo técnico

**Entrada "El Mañana":**
- Eliminar completamente de About
- Si se quiere mencionar el Full Stack Python: incluir en Roadmap como entrada de formación, no como propuesta de valor futura

**Entradas a colapsar / hacer opcionales en desktop (no solo mobile):**
- La Polar / Falabella — mantener como contexto colapsado, no como entradas destacadas
- Starken — contexto de transición financiera, no de capacidad

**Entrada Phantom Customs:**
- Mantener con el enfoque actual (fracaso + aprendizaje) — es el mejor signal de honestidad del portafolio
- Enfocar la nota en la lección operacional ("validar flujo de clientes antes de invertir") más que en el detalle del cierre

**Entrada TT 2026 (actualidad):**
- Cambiar título de "Desarrollador Web & Consultor Digital" a "Digital Operations Consultant"
- Subtítulo: "Diagnóstico · Arquitectura · Revenue Operations"

---

### PROJECTS — V2

**Problema actual:**
La card de Tokyo Tunning muestra métricas de resultado pero no comunica el proceso de diagnóstico-resolución. La descripción técnica ("carrito AJAX con patrón pub/sub, dark mode automotriz") no conecta con el cliente de PYME que busca un consultor.

**Principio del nuevo Projects:**
El proyecto destacado debe demostrar el método, no solo el resultado. El visitante debe entender la secuencia: entra → diagnostica → construye → valida → descubre → redirecciona.

**Arquitectura propuesta para la card de TT:**

```
TÍTULO: Tokyo Tunning
SUBTÍTULO: De diagnóstico técnico a sistema de operaciones comerciales

BADGES: "En producción" · "ROAS 27.6x" · "LCP 300ms"

DESCRIPCIÓN:
"Diagnóstico de 9 hallazgos sobre una operación digital existente.
Reconstrucción técnica completa. Validación bajo carga real (CyberDay 2026).
Descubrimiento de que el cuello de botella había migrado a operaciones.
Diseño de TTCOS — el sistema operativo comercial para la siguiente etapa."

TAGS: PHP · WooCommerce · Meta Ads · Revenue Operations

CTA: Ver caso completo →
```

**La diferencia con la versión actual:**
La versión actual vende el resultado (métricas). La versión V2 vende el proceso (diagnóstico → resolución multi-layer). El cliente que necesita métricas puede encontrar a alguien más. El cliente que necesita el proceso — alguien que sepa dónde buscar el problema — tiene muchas menos opciones.

---

### CTA — V2

**Problema actual:**
"¿Tienes un proyecto en mente? Cuéntame." — genérico, orientado a proyectos, no a la relación de retainer que es el objetivo del modelo de negocio.

**Principio del nuevo CTA:**
Debe nombrar el problema del cliente ideal para que se reconozca. El que no tiene ese problema debe descalificarse antes de contactar.

**Propuesta:**

```
TÍTULO
¿Tu operación digital no crece como debería?

SUBTÍTULO
Antes de optimizar campañas o cambiar el sitio:
diagnosticamos dónde está el cuello de botella real.

DESCRIPCIÓN
Trabajo con PYMEs que ya tienen tráfico, campañas y tecnología —
pero no ven el crecimiento proporcional. La causa suele estar 
en una capa distinta de la que se está optimizando.

CTA PRINCIPAL
Iniciar diagnóstico →  [email / WhatsApp]

NOTA DE CALIFICACIÓN (pequeña, bajo el CTA)
"Respondo en menos de 24 horas. Si el diagnóstico 
no identifica un problema resoluble, lo digo."
```

**Por qué esto funciona mejor:**
- Nombra el problema del cliente ideal (tiene tráfico/tech/ads pero no crece)
- Establece el diagnóstico como el primer paso (no el sitio web, no las campañas)
- La nota de calificación ("si no hay problema resoluble, lo digo") es una señal de confianza que un consultor tiene y un freelancer no

---

### Sección nueva — PROCESO DE TRABAJO (recomendada)

Esta sección no existe actualmente y su ausencia es una fricción para el cliente de retainer.

Un cliente de retainer necesita saber no solo qué hace Felipe sino cómo trabaja. ¿Qué ocurre desde el primer contacto? ¿Qué entregables produce? ¿Cómo se reporta?

**Propuesta mínima:**

```
TÍTULO: Cómo trabajo

PASO 1 — DIAGNÓSTICO
Primera semana: Revisión de la operación digital completa.
Entregable: Mapa del sistema y diagnóstico de cuellos de botella.

PASO 2 — PRIORIZACIÓN
Qué resolver primero. Por qué. Impacto esperado vs. esfuerzo.
No se empieza a construir hasta tener claridad en la causa.

PASO 3 — EJECUCIÓN
Construcción de la solución con el medio correcto.
Documentado (ADRs, decisiones, deuda aceptada).

PASO 4 — VALIDACIÓN & TRANSFERENCIA
Test bajo carga real. Métricas antes/después.
Todo documentado para que el negocio pueda operar sin dependencia.
```

Esta sección cierra la pregunta que el visitante tiene y no puede responder: "¿Qué es trabajar con Felipe?"

---

## Narrativa Global — Reglas de Consistencia

**Regla 1 — Un solo título profesional**
En todo el portafolio: "Digital Operations Consultant" o equivalente en español.
No "Consultor Digital & Desarrollador Web", no "Co-Fundador", no "Lead de E-commerce."

**Regla 2 — El resultado no justifica el método; el método justifica el resultado**
No: "ROAS 27.6x"
Sí: "El sistema técnico funcionó sin fallos durante el evento de mayor demanda. Eso es lo que hizo posible el ROAS 27.6x."

**Regla 3 — Cada sección debe responder "¿para quién es esto?"**
Si una sección no ayuda al cliente ideal a reconocerse o al cliente incorrecto a descalificarse, cuestionar si debe existir.

**Regla 4 — Sin aspiraciones futuras en el portafolio actual**
Lo que Felipe quiere aprender no pertenece a la propuesta de valor de hoy.
Lo que Felipe ya puede ejecutar en producción: sí.

**Regla 5 — Consistencia del caso de estudio**
La terminología sobre Tokyo Tunning debe ser idéntica en todas las secciones:
- Roadmap, Projects, Hero, CasoTokyoTunning: mismo lenguaje para el rol, misma métrica con mismo contexto temporal.

---

## Copy — Formulaciones aprobadas para uso consistente

**Para el rol:**
"Digital Operations Consultant"
"Consultor de Operaciones Digitales" (en español)

**Para la propuesta de valor (variantes):**
- "Diagnostico el cuello de botella real de tu operación digital — y lo resuelvo con el medio correcto."
- "Cuando el negocio digital no crece como debería, el problema rara vez es lo que parece."
- "Entro al sistema, diagnostico la capa que está fallando, y construyo la solución correcta."

**Para el caso TT (en todas las secciones):**
- Período: "2023–2025 (colaboración) y febrero 2026 (retorno técnico)"
- Métrica de crecimiento: "$500K → $15M/mes · durante la colaboración 2023–2025"
- Rol: "Lead de Digitalización" (Roadmap) / "colaboración profesional de varias etapas" (CasoTokyoTunning)

**Para el diagnóstico del CyberDay:**
- "El sistema técnico funcionó sin fallos. El cuello de botella había migrado a operaciones."
- No usar frases de revenue estimado o porcentajes de pérdida sin evidencia verificable.
