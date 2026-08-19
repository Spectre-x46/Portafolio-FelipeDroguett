# Implementation Plan — Portfolio V2
## Felipe Droguett — Plan de Implementación Estratégica

**Versión:** 1.0  
**Fecha:** 2026-06-06  
**Basado en:** PORTFOLIO_POSITIONING_AUDIT.md + PORTFOLIO_V2_STRATEGY.md  
**Estado:** Plan estratégico — pendiente de aprobación antes de código

---

## Principio de Implementación

Los cambios se ejecutan en orden de riesgo de credibilidad, no de visibilidad.

Una inconsistencia crítica visible a los 30 segundos destruye más credibilidad que diez mejoras narrativas la recuperan. La secuencia correcta: resolver lo que puede dañar → luego construir lo que puede diferenciar.

---

## Matriz de Prioridades

| ID | Cambio | Prioridad | Impacto | Riesgo de no hacerlo | Esfuerzo |
|---|---|---|---|---|---|
| I-01 | Corregir "Co-Fundador" en Roadmap | **CRÍTICO** | Alto | Pérdida de credibilidad con cualquier evaluador que lea ambas secciones | Bajo |
| I-02 | Agregar contexto temporal a $15M/mes | **Medio** | Medio | Ambigüedad de lectura — la métrica puede interpretarse como estado actual | Bajo |
| I-03 | Eliminar sección Infraestructura & Seguridad | **Alto** | Medio | Fragmentación de identidad, señal de inventario personal | Bajo |
| I-04 | Hero — badge y tagline alineados con posicionamiento V2 | **Alto** | Alto | El visitante no puede identificarse en los primeros 10 seg | Medio |
| I-05 | About — rediseño de tres pilares | **Alto** | Alto | La sección más visible no responde la pregunta del visitante | Medio |
| I-06 | Eliminar "En formación (Back-End)" del Skills | **Alto** | Medio | Contradice el título de "Desarrollador Web" en hero | Bajo |
| I-07 | CTA — reformular para cliente de retainer | **Medio** | Alto | El cliente ideal no se reconoce; el modelo de negocio no está comunicado | Medio |
| I-08 | Card TT en Projects — agregar narrativa de diagnóstico | **Medio** | Medio | El visitante ve métricas sin entender el método diferenciador | Medio |
| I-09 | Roadmap — ajustar título de entrada TT actual | **Medio** | Medio | Inconsistencia de terminología entre secciones | Bajo |
| I-10 | Eliminar "El Mañana" de About | **Medio** | Bajo | Señala perfil incompleto | Bajo |
| I-11 | About — reorientar pilares hacia problemas del cliente | **Medio** | Alto | Sección responde ¿Quién soy? en lugar de ¿Qué resuelvo? | Alto |
| I-12 | Contact — especificar tipo de consulta ideal | **Bajo** | Medio | CTA no califica al cliente antes del contacto | Bajo |
| I-13 | Agregar sección "Proceso de Trabajo" | **Bajo** | Alto | El cliente de retainer no puede imaginar cómo sería trabajar con Felipe | Alto |
| I-14 | Skills — reorganizar alrededor de problemas, no herramientas | **Bajo** | Medio | Skills léidos como inventario en lugar de capacidades | Medio |
| I-15 | Hero code block — reemplazar inventario de tools por proceso | **Bajo** | Bajo | Oportunidad perdida de comunicar el método, no las herramientas | Medio |

---

## Fase 1 — Correcciones Críticas

*Resolver antes de cualquier distribución pública del portafolio.*  
*Esfuerzo total estimado: 2–3 horas. Sin cambios de estructura.*

### I-01 — Corregir "Co-Fundador" en Roadmap

**Problema:** Roadmap etiqueta a Felipe como "Co-Fundador & Lead de E-commerce" de Tokyo Tunning. El caso de estudio usa "participé en distintas etapas de colaboración" y "construí su identidad digital inicial."

**Cambio:** En Roadmap.jsx, entrada id:3 (Mar 2023 — Abr 2025):
- Título actual: `"Co-Fundador & Lead de E-commerce"`
- Título nuevo: `"Lead de Digitalización & Crecimiento"` o `"Consultor Digital — Lead de Digitalización"`

**Subtítulo** puede mantenerse: `"$500K → $15M/mes · Escalamiento 2,900% en 18 meses"`

**Cuerpo** — revisar y alinear con el lenguaje del caso de estudio. Específicamente, eliminar o reformular:
- "Diseñé, propuse y ejecuté la transición de un puesto de feria a e-commerce completo" — puede mantenerse si describe con precisión el rol
- Asegurar que no use "Co-fundé" o equivalentes

**Impacto esperado:** Elimina la inconsistencia más peligrosa del portafolio. Un evaluador que lee Roadmap y luego el caso deja de encontrar dos versiones distintas del mismo rol.

**Riesgo de implementación:** Bajo. Cambio de texto en un array del componente.

---

### I-02 — Agregar contexto temporal a $15M/mes en Hero

**Problema:** La métrica `{ value: '$15M', label: 'ventas/mes escalados' }` no indica que fue el pico de una colaboración específica (2023-2025). Un visitante sin contexto puede interpretarla como el estado actual del negocio del cliente. La métrica es históricamente correcta — le falta contexto temporal para ser inequívoca.

**Cambio:** En Hero.jsx, actualizar la métrica:

```javascript
// Actual
{ value: '$15M', label: 'ventas/mes escalados' }

// Propuesto
{ value: '$15M', label: 'ventas/mes · Tokyo Tunning · pico 2025' }
```

O alternativamente usar la métrica que SÍ es actual (ROAS CyberDay 2026):
```javascript
{ value: '$15M', label: 'ventas/mes escalados · 2023–2025' }
```

**Impacto esperado:** Cierra el riesgo de verificación sin reducir el impacto de la métrica.

**Riesgo de implementación:** Bajo. Label del metric card.

---

### I-03 — Eliminar sección Infraestructura & Seguridad de Skills

**Problema:** La tercera columna (Linux Hardening, Bash Scripting, Auditoría de Redes, SSH & Permisos) no tiene respaldo en ningún proyecto, caso de estudio, o entrada de Roadmap. Fragmenta la identidad profesional sin aportar credibilidad.

**Cambio:** En Skills.jsx, eliminar el tercer elemento del array `groups`:
```javascript
// Eliminar:
{
  Icon: ShieldCheck,
  title: 'Infraestructura & Seguridad',
  primary: ['Linux Hardening', 'Bash Scripting', 'Auditoría de Redes', 'SSH & Permisos'],
  ...
}
```

Ajustar el grid de `md:grid-cols-3` a `md:grid-cols-2` para las dos columnas restantes.

**Impacto esperado:** Elimina la señal de inventario personal. El portafolio comunica dos capacidades claras (estrategia/marketing + desarrollo web) sin una tercera que no conecta con ningún cliente objetivo.

**Riesgo de implementación:** Bajo. Requiere ajuste de grid.

---

### I-06 — Eliminar label "En formación (Back-End)"

**Problema:** El label `secondaryLabel: 'En formación (Back-End)'` en Skills contradice el título de "Desarrollador Web" del hero.

**Cambio:** En Skills.jsx, grupo de desarrollo:
```javascript
// Actual
secondary: ['Python', 'Django Framework', 'SQL / Bases de datos'],
secondaryLabel: 'En formación (Back-End)',

// Propuesto — opción A: eliminar la subsección
secondary: [],
secondaryLabel: '',

// Propuesto — opción B: reformular sin el label de formación
secondary: ['Python', 'SQL / Bases de datos'],
secondaryLabel: 'Scripts & automatización',
```

**Impacto esperado:** Elimina la señal de que el stack está incompleto.

**Riesgo de implementación:** Bajo.

---

## Fase 2 — Posicionamiento Core

*Cambios estructurales al hero y about. Requieren copywriting aprobado primero.*  
*Esfuerzo total estimado: 6–10 horas. Cambios de componentes.*

### I-04 — Hero — badge y tagline V2

**Cambio en badge (Hero.jsx, línea ~62):**
```jsx
// Actual
"Consultor Digital & Desarrollador Web"

// Propuesto
"Diagnóstico · Operaciones · Resultados medibles"
// o: "Digital Operations Consultant"
```

**Cambio en tagline (Hero.jsx, h2, línea ~79):**
```jsx
// Actual
"10 años operando negocios. Ahora los construyo con código."

// Propuesto
"Resuelvo el problema real que está frenando tu negocio digital."
// Subtexto en el lead: "No siempre es el sitio. No siempre son las campañas."
```

**Cambio en lead text (Hero.jsx, línea ~87):**
```jsx
// Actual
"Escalo negocios con tecnología — porque entiendo el problema de fondo 
antes de escribir una línea. E-commerce, marketing digital y desarrollo 
web con resultados medibles en producción."

// Propuesto
"Cuando el negocio digital tiene tráfico, campañas activas y tecnología 
— pero no crece proporcionalmente — el cuello de botella rara vez es 
lo que parece. Lo diagnostico antes de proponer una solución."
```

**Impacto esperado:** El visitante correcto (PYME con operación digital que no crece) se identifica inmediatamente. El visitante que busca "alguien que me haga el sitio web" se auto-descalifica.

**Dependencia:** Requiere aprobación del copy antes de implementar.

---

### I-05 / I-11 — About — rediseño de pilares

**Cambio estructural:** Los tres pilares actuales (Consultoría Digital, Visión de Negocio, Curiosidad Técnica) se reemplazan por tres pilares orientados al cliente.

**Nuevo pilar 1:**
```javascript
{
  title: 'El problema técnico que parece comercial',
  sub: 'Diagnóstico antes de ejecución',
  body: 'Cuando el tráfico llega y no convierte, la respuesta instintiva es invertir más en ads. A veces el problema es técnico — el sitio, la velocidad, el checkout. Diagnosticar primero evita optimizar lo equivocado.'
}
```

**Nuevo pilar 2:**
```javascript
{
  title: 'El cuello de botella que migró de capa',
  sub: 'La tecnología funciona. El revenue no crece.',
  body: 'El sistema técnico puede estar perfecto y el negocio seguir perdiendo revenue en la capa operacional. Identificar dónde está el problema real en este momento del negocio es el trabajo de mayor impacto.'
}
```

**Nuevo pilar 3:**
```javascript
{
  title: '10 años operando, no observando',
  sub: 'Track record real antes del código',
  body: 'Gestionó equipos en retail de alto volumen, escaló un e-commerce de $500K a $15M/mes, fundó y cerró emprendimientos. El criterio técnico se aplica con comprensión real de lo que está en juego para un negocio.'
}
```

**Lo que se elimina:**
- "El Mañana: Full Stack Python, Ciberseguridad"
- Historia de infancia / curiosidad personal
- "Fusión de 10 años" como subtítulo genérico

**Impacto esperado:** El About pasa de responder "¿Quién es Felipe?" a responder "¿Qué problema resuelve Felipe mejor que otros?"

**Dependencia:** Requiere aprobación del copy.

---

### I-10 — Eliminar "El Mañana" del About

**Cambio:** En About.jsx, eliminar el item con label "El Mañana:":
```javascript
// Eliminar:
{ label: 'El Mañana:', text: 'Full Stack Python, Ciberseguridad y Arquitectura de Sistemas, aplicados a proyectos reales.' }
```

**Impacto esperado:** El perfil comunica estabilidad y claridad actual, no transición.

**Esfuerzo:** Bajo.

---

## Fase 3 — Refinamiento y Conversión

*Cambios que maximizan la efectividad del posicionamiento ya establecido.*  
*Esfuerzo total estimado: 8–15 horas. Incluye secciones nuevas.*

### I-07 — CTA reformulado

**Cambio en Contact.jsx, section header:**
```jsx
// Actual título
"Hablemos"

// Actual subtítulo
"¿Tienes un proyecto en mente? Cuéntame. Respondo en menos de 24 horas."

// Propuesto título
"¿Tu operación digital no crece como debería?"

// Propuesto subtítulo
"Antes de proponer una solución: diagnosticamos dónde está el cuello de botella real. 
Sin compromiso. Sin brief de proyecto. Solo una conversación de diagnóstico."
```

**Impacto esperado:** El cliente ideal (PYME con operación digital que no crece) se reconoce. El CTA genera conversaciones de diagnóstico, no briefs de proyecto.

---

### I-08 — Card de TT en Projects — narrativa de diagnóstico

**Cambio en Projects.jsx, descripción de Tokyo Tunning:**
```jsx
// Actual
"Diseñé y ejecuté la migración de un puesto de feria a e-commerce completo.
Stack custom sobre WordPress + WooCommerce..."

// Propuesto
"Diagnóstico técnico de una operación e-commerce existente. Reconstrucción 
desde cero. Validación bajo carga real (CyberDay 2026). Descubrimiento de 
que el cuello de botella había migrado a operaciones. Diseño del sistema 
de resolución (TTCOS)."
```

**Impacto esperado:** La card comunica el método diferenciador, no solo el resultado.

---

### I-09 — Roadmap — título de entrada TT actual

**Cambio en Roadmap.jsx, entrada id:1 (Feb 2026 — Actualidad):**
```javascript
// Actual
title: 'Desarrollador Web & Consultor Digital'

// Propuesto
title: 'Digital Operations Consultant'
// o: 'Consultor de Operaciones Digitales'

// Actual sub
sub: 'Proyectos en Producción + Full Stack Python'

// Propuesto sub
sub: 'Diagnóstico · Arquitectura · Revenue Operations'
```

---

### I-13 — Nueva sección "Proceso de Trabajo" (opcional pero recomendada)

Esta sección no existe. Su ausencia es una fricción para el cliente de retainer.

**Estructura propuesta:**
```jsx
<section id="process">
  <h2>Cómo trabajo</h2>
  
  <Step n="01" title="Diagnóstico">
    Primera semana: revisión de la operación digital completa.
    Entregable: mapa del sistema y priorización de cuellos de botella.
  </Step>
  
  <Step n="02" title="Priorización">
    Qué resolver primero. Por qué. Impacto vs. esfuerzo.
    No se construye hasta tener claridad en la causa.
  </Step>
  
  <Step n="03" title="Ejecución">
    Construcción de la solución con el medio correcto.
    Documentado — decisiones, consecuencias, deuda aceptada.
  </Step>
  
  <Step n="04" title="Validación">
    Test bajo carga real. Métricas antes/después.
    El negocio puede operar sin dependencia del consultor.
  </Step>
</section>
```

**Impacto esperado:** El cliente de retainer puede imaginar qué ocurre desde el primer contacto. Reduce la fricción de "no sé cómo sería trabajar con Felipe."

---

## Secuencia de Ejecución Recomendada

```
SEMANA 1 — Fase 1 (Correcciones Críticas)
├── I-01: Corregir "Co-Fundador" en Roadmap
├── I-02: Agregar contexto temporal a $15M/mes
├── I-03: Eliminar Infraestructura & Seguridad
├── I-06: Eliminar "En formación" de Skills
└── I-10: Eliminar "El Mañana" de About
    → Deploy en Netlify al finalizar

SEMANA 2 — Aprobación de copy
├── Revisar y aprobar copy del Hero V2
├── Revisar y aprobar copy del About V2
├── Revisar y aprobar copy del CTA V2
└── Revisar y aprobar terminología del Roadmap

SEMANA 3 — Fase 2 (Posicionamiento Core)
├── I-04: Hero badge + tagline + lead
├── I-05/I-11: About pilares rediseñados
└── I-09: Roadmap entradas ajustadas
    → Deploy en Netlify al finalizar

SEMANA 4 — Fase 3 (Refinamiento)
├── I-07: CTA reformulado
├── I-08: Card TT en Projects
├── I-12: Contact calificación
└── I-13: Nueva sección "Proceso de Trabajo" (si se aprueba)
    → Deploy final + distribución activa del portafolio
```

---

## Métricas de Éxito

El portafolio V2 será exitoso si:

**Indicador 1 — Calidad del contacto**
Las consultas entrantes describen el problema de negocio, no el entregable técnico. "Tengo un e-commerce que no convierte como debería" > "necesito que me rehagan el sitio web."

**Indicador 2 — Auto-calificación**
Los contactos que no son el cliente ideal dejan de llegar, o se reducen significativamente. Si siguen llegando muchos pedidos de "hazme el sitio web barato," el posicionamiento no está funcionando.

**Indicador 3 — Primera conversación**
En la primera llamada de diagnóstico, el cliente ya entiende el proceso de trabajo. No necesita explicación del modelo de servicio desde cero.

**Indicador 4 — Velocidad al caso de estudio**
El visitante llega al caso de estudio completo antes de abandonar. La card en Projects debe generar clics al caso completo.

---

## Notas de Riesgo

**Riesgo 1 — Posicionamiento demasiado abstracto**
"Digital Operations Consultant" puede sonar vacío para un dueño de PYME que no conoce el término. Mitigación: combinar siempre con el problema concreto que resuelve ("cuando tu negocio digital no crece como debería").

**Riesgo 2 — Perder clientes de proyectos puntuales**
El nuevo posicionamiento puede reducir consultas de clientes que buscan un proyecto específico (hacer el sitio, hacer las campañas). Esto es intencional si el objetivo es retainers — pero conviene monitorear si el volumen de contacto cae sin que mejore la calidad.

**Riesgo 3 — Copy aprobado vs copy implementado**
Ningún texto de la Fase 2 debe implementarse sin aprobación explícita del copy. La estrategia narrativa puede ser correcta pero la ejecución de copy es donde el posicionamiento se gana o pierde.
