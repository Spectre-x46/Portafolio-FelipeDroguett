# Portfolio V2 — Master Decision Record
## Felipe Droguett — Documento Maestro de Decisiones

**Versión:** 1.0  
**Fecha:** 2026-06-07  
**Estado:** ACTIVO — este documento reemplaza a efectos de implementación a todos los anteriores  
**Documentos fuente:** PORTFOLIO_POSITIONING_AUDIT.md · PORTFOLIO_V2_STRATEGY.md · IMPLEMENTATION_PLAN.md · MINIMUM_VIABLE_REPOSITIONING.md

---

## Supuestos del proyecto

Los siguientes supuestos fueron validados durante el análisis estratégico y no requieren reverificación:

| ID | Supuesto | Fuente |
|---|---|---|
| S1 | El objetivo del portafolio es atraer clientes de retainer, no empleo ni proyectos puntuales | Plan_Migracion.md |
| S2 | El cliente ideal es PYME con operación digital activa que no crece proporcionalmente | PORTFOLIO_POSITIONING_AUDIT.md |
| S3 | Tokyo Tunning es un cliente, no el negocio propio de Felipe | Corrección explícita del usuario |
| S4 | $15M/mes es el revenue de TT durante la colaboración 2023–2025, no estado actual | Corrección explícita del usuario |
| S5 | La propuesta de valor central es: diagnosticar el cuello de botella + resolverlo con el medio correcto | Consenso en los 4 documentos |
| S6 | El caso de estudio (CasoTokyoTunning.jsx) es el activo más fuerte del portafolio | Consenso en los 4 documentos |
| S7 | El diseño visual (glassmorphism, paleta, animaciones) no es parte del problema | Consenso en los 4 documentos |

---

## Decisiones aprobadas

Estas decisiones aparecen con consenso total en los 4 documentos estratégicos. No requieren nueva deliberación.

### DA-01 — Corregir título de Tokyo Tunning en Roadmap

**Estado:** APROBADO  
**Componente:** `src/components/Roadmap.jsx`  
**Cambio exacto:**
```
Actual:   title: 'Co-Fundador & Lead de E-commerce'
Aprobado: title: 'Lead de Digitalización & Crecimiento'
```
**Justificación:** Inconsistencia directa con el lenguaje del caso de estudio. Única inconsistencia que destruye credibilidad de forma activa. Aparece como CRÍTICO en todos los documentos.  
**Requiere aprobación de copy:** No. El cambio es una corrección, no una redacción nueva.

---

### DA-02 — Eliminar sección Infraestructura & Seguridad de Skills

**Estado:** APROBADO  
**Componente:** `src/components/Skills.jsx`  
**Cambio exacto:** Eliminar tercer objeto del array `groups`:
```javascript
// ELIMINAR:
{
  Icon: ShieldCheck,
  title: 'Infraestructura & Seguridad',
  primary: ['Linux Hardening', 'Bash Scripting', 'Auditoría de Redes', 'SSH & Permisos'],
  secondary: [],
  secondaryLabel: '',
}
```
Cambiar `md:grid-cols-3` → `md:grid-cols-2`.  
**Justificación:** Cero proyectos que respalden estas skills. Fragmenta la identidad sin aportar credibilidad. Consenso total en los 4 documentos.  
**Requiere aprobación de copy:** No. Es una eliminación.

---

### DA-03 — Eliminar "El Mañana" de About

**Estado:** APROBADO  
**Componente:** `src/components/About.jsx`  
**Cambio exacto:** Eliminar el item con `label: 'El Mañana:'` del primer pilar:
```javascript
// ELIMINAR este item del array items del primer pilar:
{ label: 'El Mañana:', text: 'Full Stack Python, Ciberseguridad y Arquitectura de Sistemas, aplicados a proyectos reales.' }
```
**Justificación:** Señala que el perfil profesional está "en construcción." Reduce confianza en el presente. Consenso en los 4 documentos.  
**Requiere aprobación de copy:** No. Es una eliminación.

---

### DA-04 — Eliminar label "En formación (Back-End)" de Skills

**Estado:** APROBADO  
**Componente:** `src/components/Skills.jsx`  
**Cambio exacto:**
```javascript
// Actual:
secondaryLabel: 'En formación (Back-End)',

// Aprobado — opción A (eliminar subsección):
secondary: [],
secondaryLabel: '',

// Aprobado — opción B (reformular sin señal de formación):
secondaryLabel: 'Scripts & automatización',
```
**Justificación:** Contradice el título "Desarrollador Web" del hero. Señala stack incompleto. Consenso en los 4 documentos.  
**Requiere aprobación de copy:** Solo la decisión A vs B. La opción A es más segura.

---

### DA-05 — Agregar contexto temporal a $15M/mes en Hero

**Estado:** APROBADO  
**Componente:** `src/components/Hero.jsx`  
**Cambio exacto:**
```javascript
// Actual:
{ value: '$15M', label: 'ventas/mes escalados' }

// Aprobado:
{ value: '$15M', label: 'ventas/mes · TT · pico 2025' }
```
**Justificación:** La métrica sin período puede leerse como estado actual del negocio del cliente. Agregar contexto temporal hace la afirmación más precisa sin reducir su impacto.  
**Requiere aprobación de copy:** No. Cambio de label.

---

### DA-06 — No modificar CasoTokyoTunning.jsx

**Estado:** APROBADO — MANTENER SIN CAMBIOS  
**Componente:** `src/pages/CasoTokyoTunning.jsx`  
**Justificación:** Es el activo más fuerte del portafolio. Ya fue iterado con precisión histórica y narrativa. Cualquier modificación adicional introduce riesgo sin beneficio claro. Consenso en los 4 documentos.

---

### DA-07 — No modificar el diseño visual

**Estado:** APROBADO — MANTENER SIN CAMBIOS  
**Alcance:** Glassmorphism, paleta cyan/slate, animaciones Framer Motion, tipografía Outfit/Inter, grid layouts.  
**Justificación:** El diseño no es parte del problema de posicionamiento. Está fuera del scope de estos cambios.

---

### DA-08 — No modificar ADRs ni sección de deuda técnica

**Estado:** APROBADO — MANTENER SIN CAMBIOS  
**Componente:** `src/pages/CasoTokyoTunning.jsx` (secciones 04 y 07)  
**Justificación:** Son los elementos más diferenciadores para un evaluador técnico. Cualquier simplificación reduce su impacto.

---

## Decisiones pendientes

Estas decisiones requieren aprobación de copy antes de implementar.

### DP-01 — Hero: badge, H2 y lead

**Estado:** PENDIENTE — requiere aprobación de copy  
**Componente:** `src/components/Hero.jsx`  
**Propuesta en MINIMUM_VIABLE_REPOSITIONING.md:**

Badge propuesto:
```
"Diagnóstico · Ejecución · Resultados medibles"
```

H2 propuesto:
```
"Resuelvo lo que está frenando tu negocio digital."
```

Lead propuesto:
```
"Cuando el negocio digital tiene tráfico, campañas activas y tecnología
— pero no crece como debería — el problema rara vez está donde parece.
Diagnostico primero. Resuelvo con el medio correcto."
```

**Riesgo documentado:** Si el copy es demasiado abstracto para un PYME owner chileno, puede generar confusión en lugar de reconocimiento. Requiere validación del lenguaje antes de implementar.  
**Bloqueante para:** Todo el Bloque 2 de implementación.

---

### DP-02 — About: rediseño completo de pilares

**Estado:** PENDIENTE — bajo prioridad, requiere copy y decisión  
**Componente:** `src/components/About.jsx`  
**Contexto:** V2 Strategy propone reemplazar los tres pilares actuales por tres centrados en problemas del cliente. MVR lo clasifica como cambio de Fase 2 con riesgo documentado de sobrecorrección.  
**Decisión requerida:** ¿Se rediseñan los pilares? ¿O solo se elimina "El Mañana" (DA-03) y se deja el resto?  
**Recomendación del comité:** Implementar primero DA-03. Evaluar el About resultante antes de decidir si necesita rediseño completo.

---

### DP-03 — CTA: reformular para cliente de retainer

**Estado:** PENDIENTE — baja prioridad  
**Componente:** `src/components/Contact.jsx`  
**Propuesta:** Cambiar "¿Tienes un proyecto en mente?" por copy orientado a diagnóstico.  
**Bloqueante:** Requiere que el posicionamiento del Hero esté funcionando primero. Si el Hero nuevo no atrae al cliente correcto, cambiar el CTA no tiene efecto.  
**Recomendación:** Implementar después de DP-01, no antes.

---

### DP-04 — Roadmap entrada actual: cambiar título

**Estado:** PENDIENTE — baja prioridad  
**Componente:** `src/components/Roadmap.jsx`, entrada `id: 1`  
**Propuesta:** `"Desarrollador Web & Consultor Digital"` → `"Consultor de Operaciones Digitales"`  
**Contexto:** Aparece en Implementation Plan (I-09) y V2 Strategy pero NO en MVR. No es mínimo viable.  
**Recomendación:** Implementar en la misma sesión que DA-01 si se decide hacerlo. Bajo esfuerzo.

---

### DP-05 — Hero code block: reemplazar inventario por proceso

**Estado:** PENDIENTE — baja prioridad  
**Componente:** `src/components/Hero.jsx`  
**Propuesta:** Reemplazar el bloque de código que muestra herramientas por uno que muestra el proceso de diagnóstico.  
**Contexto:** Aparece en V2 Strategy pero no en MVR. Solo visible en desktop. Impacto visual pero no de posicionamiento crítico.  
**Recomendación:** Implementar junto con DP-01 si se aprueba, o diferir indefinidamente.

---

## Contradicciones identificadas y resueltas

| ID | Contradicción | Resolución | Estado |
|---|---|---|---|
| X1 | C2 severity: CRÍTICO (Audit original) vs MEDIA (Audit corregido) | Corrección aceptada por el usuario — $800k era ingreso personal de Felipe, no revenue de TT. Severity = MEDIA. | **RESUELTA** |
| X2 | Hero code block: V2 Strategy propone reemplazarlo / MVR no lo menciona | Clasificado como DP-05 — pendiente, no crítico | **RESUELTA** |
| X3 | Roadmap id:1 título: Implementation Plan (I-09) lo incluye / MVR no | Clasificado como DP-04 — pendiente, puede implementarse junto con DA-01 | **RESUELTA** |
| X4 | About pilares: V2 Strategy propone rediseño completo / MVR lo marca como riesgo | Resolución en dos fases: primero DA-03 (eliminar "El Mañana"), luego evaluar si el resto necesita rediseño | **RESUELTA** |

---

## Riesgos activos

| ID | Riesgo | Probabilidad | Impacto | Mitigación |
|---|---|---|---|---|
| R1 | Copy del Hero demasiado abstracto para PYME owner chileno | Media | Alto | Validar el lead text con el test: "¿un dueño de negocio de 10 personas entiende esto en 5 segundos?" antes de implementar |
| R2 | About V2 pilares usan lenguaje técnico inapropiado | Media | Medio | Implementar solo DA-03 primero. Evaluar antes de rediseño completo |
| R3 | Reducción de volumen de contacto durante la transición | Alta | Bajo-Medio | Esperado. El objetivo es mejorar calidad, no volumen. Monitorear después del deploy |
| R4 | "Digital Operations Consultant" no reconocido por clientes PYME | Media | Alto | Priorizar el problema que resuelve sobre el título. El H2 y lead son más importantes que el badge |
| R5 | Implementar Bloque 2 sin aprobación de copy | Baja | Alto | Control de proceso: no tocar Hero badge/H2/lead hasta tener aprobación explícita |

---

## Cambios concretos por componente

### `src/components/Roadmap.jsx`

| Cambio | Decisión | Estado |
|---|---|---|
| `id:3 title`: "Co-Fundador & Lead de E-commerce" → "Lead de Digitalización & Crecimiento" | DA-01 | **APROBADO — implementar** |
| `id:1 title`: "Desarrollador Web & Consultor Digital" → "Consultor de Operaciones Digitales" | DP-04 | Pendiente |

---

### `src/components/Skills.jsx`

| Cambio | Decisión | Estado |
|---|---|---|
| Eliminar tercer objeto del array `groups` (Infraestructura & Seguridad) | DA-02 | **APROBADO — implementar** |
| Cambiar `md:grid-cols-3` → `md:grid-cols-2` | DA-02 | **APROBADO — implementar** |
| Eliminar `secondaryLabel: 'En formación (Back-End)'` | DA-04 | **APROBADO — implementar** |

---

### `src/components/About.jsx`

| Cambio | Decisión | Estado |
|---|---|---|
| Eliminar item `{ label: 'El Mañana:', text: '...' }` del primer pilar | DA-03 | **APROBADO — implementar** |
| Rediseño completo de los tres pilares | DP-02 | Pendiente — evaluar tras DA-03 |

---

### `src/components/Hero.jsx`

| Cambio | Decisión | Estado |
|---|---|---|
| `label: 'ventas/mes escalados'` → `'ventas/mes · TT · pico 2025'` | DA-05 | **APROBADO — implementar** |
| Badge: "Consultor Digital & Desarrollador Web" → nuevo copy | DP-01 | **Pendiente aprobación de copy** |
| H2: "10 años operando negocios..." → nuevo copy | DP-01 | **Pendiente aprobación de copy** |
| Lead paragraph: nuevo copy | DP-01 | **Pendiente aprobación de copy** |
| Code block: reemplazar inventario por proceso | DP-05 | Pendiente |

---

### `src/components/Contact.jsx`

| Cambio | Decisión | Estado |
|---|---|---|
| Reformular CTA para cliente de retainer | DP-03 | Pendiente — después de DP-01 |

---

### `src/components/Projects.jsx`

| Cambio | Decisión | Estado |
|---|---|---|
| Card TT: cambiar descripción a narrativa de diagnóstico | No clasificado en MVR | Diferido — no es mínimo viable |

---

### `src/pages/CasoTokyoTunning.jsx`

| Cambio | Decisión | Estado |
|---|---|---|
| Cualquier modificación | DA-06 | **BLOQUEADO — no tocar** |

---

## Orden óptimo de implementación

### BLOQUE 1 — Implementable hoy. Sin aprobación requerida.

Tiempo estimado: 20–25 minutos.

```
1. src/components/Roadmap.jsx
   └── DA-01: Co-Fundador → Lead de Digitalización & Crecimiento

2. src/components/Skills.jsx
   ├── DA-02: Eliminar columna Infraestructura & Seguridad
   ├── DA-02: Ajustar grid-cols-3 → grid-cols-2
   └── DA-04: Eliminar label "En formación (Back-End)"

3. src/components/About.jsx
   └── DA-03: Eliminar "El Mañana"

4. src/components/Hero.jsx
   └── DA-05: Temporal context en $15M metric

→ Deploy en Netlify tras este bloque.
```

### BLOQUE 2 — Requiere aprobación de copy del Hero (DP-01).

Tiempo estimado: 30 minutos de código tras aprobación.

```
5. src/components/Hero.jsx
   ├── DP-01: Badge nuevo
   ├── DP-01: H2 nuevo
   └── DP-01: Lead paragraph nuevo

→ Deploy en Netlify tras este bloque.
```

### BLOQUE 3 — Diferido. Evaluar resultado de Bloques 1 y 2 antes de implementar.

```
6. src/components/About.jsx   — DP-02: rediseño de pilares (si se decide)
7. src/components/Contact.jsx — DP-03: CTA reformulado
8. src/components/Roadmap.jsx — DP-04: título entrada actual
9. src/components/Hero.jsx    — DP-05: code block (si se decide)
```

---

## Recomendaciones repetidas consolidadas

Las siguientes recomendaciones aparecen en los cuatro documentos sin variación. No requieren nueva deliberación:

- Corregir Co-Fundador ✓ (DA-01)
- Eliminar Infraestructura & Seguridad ✓ (DA-02)
- Eliminar "El Mañana" ✓ (DA-03)
- No tocar el caso de estudio ✓ (DA-06)
- No tocar el diseño visual ✓ (DA-07)
- Hero es la palanca de mayor impacto por alcance (100% de visitantes) ✓ (fundamento de DP-01)
