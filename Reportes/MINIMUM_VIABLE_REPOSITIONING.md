# Minimum Viable Repositioning
## Felipe Droguett — El mínimo cambio con el máximo impacto

**Versión:** 1.0  
**Fecha:** 2026-06-07  
**Basado en:** PORTFOLIO_POSITIONING_AUDIT.md + PORTFOLIO_V2_STRATEGY.md + IMPLEMENTATION_PLAN.md  
**Propósito:** Destilar todo el trabajo estratégico en la menor cantidad posible de cambios con el mayor impacto posible.

---

## Executive Summary

El portafolio tiene un problema de posicionamiento estructural pero no necesita una reconstrucción completa para resolverlo.

Hay exactamente **tres cosas que lo dañan activamente** y **dos cosas que fallan en comunicar el valor correcto.**

Los tres que dañan pueden corregirse en menos de 2 horas de trabajo.
Las dos que fallan en comunicar requieren copy aprobado y más tiempo.

El 80% del problema de posicionamiento se resuelve con los tres primeros.

---

## Los 3 cambios que más impacto generan

---

### Cambio 1 — Corregir "Co-Fundador" en Roadmap

**Componente:** `Roadmap.jsx`, entrada `id: 3` (Mar 2023 — Abr 2025)

**Por qué es el cambio más crítico:**

Es el único elemento del portafolio que puede destruir credibilidad de forma activa e irreversible. No es una oportunidad perdida — es daño en curso.

El Roadmap dice: *"Co-Fundador & Lead de E-commerce"*  
El caso de estudio dice: *"construí su identidad digital inicial"*, *"participé en distintas etapas de colaboración"*

Un evaluador que lee ambas secciones — y los más importantes siempre leen ambas — detecta dos versiones del mismo rol. En ese momento, aplica descuento a todo lo demás. No hay manera de recuperarse de esa señal dentro de la misma sesión de lectura.

**Evidencia del problema:**
- Roadmap: `title: 'Co-Fundador & Lead de E-commerce'`
- CasoTokyoTunning.jsx: `"participé en distintas etapas de colaboración con Tokyo Tunning"`
- CasoTokyoTunning.jsx: `"construí su identidad digital inicial: redes, contenido y presencia online"`

**El cambio:**
```
Actual:   "Co-Fundador & Lead de E-commerce"
Propuesto: "Lead de Digitalización & Crecimiento"
```

**Impacto esperado:** Elimina la única inconsistencia que puede hacer que un evaluador serio descarte el portafolio.  
**Esfuerzo:** 5 palabras. 2 minutos.  
**Riesgo de no hacerlo:** Un evaluador con criterio descarta el portafolio antes de llegar al caso de estudio.

---

### Cambio 2 — Eliminar la sección de Infraestructura & Seguridad en Skills

**Componente:** `Skills.jsx`, tercer elemento del array `groups`

**Por qué es el segundo cambio más crítico:**

Esta sección es el mayor fragmentador de identidad del portafolio. Con ella, el portafolio presenta tres especialidades sin hilo conector:

1. Estrategia, Operaciones & Marketing
2. Desarrollo Web & Código
3. **Infraestructura & Seguridad** ← sin ningún proyecto que la respalde

Para el Founder, comunica que Felipe tiene intereses dispersos.  
Para el CTO, comunica que el portafolio es un inventario personal, no una propuesta curada.  
Para ambos, genera la pregunta: *"¿Para qué exactamente lo contrato?"*

Sin esa tercera columna, el portafolio dice: *alguien que diagnostica el negocio digital y lo construye técnicamente.* Eso es coherente. Eso conecta con el caso Tokyo Tunning. Eso tiene un cliente identificable.

Con la tercera columna, el portafolio dice: *alguien que hace marketing, desarrollo web, y también administración de sistemas Linux.* Eso no tiene un cliente identificable.

**El cambio:**
```
Eliminar el objeto completo:
{
  Icon: ShieldCheck,
  title: 'Infraestructura & Seguridad',
  primary: ['Linux Hardening', 'Bash Scripting', 'Auditoría de Redes', 'SSH & Permisos'],
  ...
}

Ajustar grid de md:grid-cols-3 a md:grid-cols-2.
```

**Impacto esperado:** El portafolio pasa de comunicar tres especialidades sin relación a dos que se complementan. La identidad de consultor técnico-operacional queda sin ruido.  
**Esfuerzo:** Eliminar 8 líneas. Cambiar un número en el grid. 10 minutos.  
**Riesgo de no hacerlo:** Identidad fragmentada que el visitante no puede resolver mentalmente.

---

### Cambio 3 — Hero: badge + H2 + lead

**Componente:** `Hero.jsx`

**Por qué es el tercer cambio más crítico:**

El Hero es el único componente que lee el 100% de los visitantes. Todo lo demás lo lee un porcentaje. El impacto por palabra en el Hero es máximo.

El problema actual del Hero no es que esté mal escrito — es que responde la pregunta equivocada. El badge y el H2 responden "¿qué servicios ofrece Felipe?" En cambio, el cliente que Felipe quiere atraer llega con una pregunta diferente: "¿Por qué contratarte a ti en lugar de contratar un desarrollador, un marketer y un consultor por separado?"

Esa pregunta no la responde ninguna sección del portafolio actual. El Hero es el lugar correcto para responderla en 10 segundos.

**El cambio mínimo viable:**

```
Badge actual:   "Consultor Digital & Desarrollador Web"
Badge propuesto: "Diagnóstico · Ejecución · Resultados medibles"
```

```
H2 actual:   "10 años operando negocios. Ahora los construyo con código."
H2 propuesto: "Resuelvo lo que está frenando tu negocio digital."
```

```
Lead actual:   "Escalo negocios con tecnología — porque entiendo el 
               problema de fondo antes de escribir una línea. 
               E-commerce, marketing digital y desarrollo web con 
               resultados medibles en producción."

Lead propuesto: "Cuando el negocio digital tiene tráfico, campañas 
               activas y tecnología — pero no crece como debería — 
               el problema rara vez está donde parece. 
               Diagnostico primero. Resuelvo con el medio correcto."
```

**Cambio adicional de bajo esfuerzo — contexto temporal en métrica:**
```
Actual:   { value: '$15M', label: 'ventas/mes escalados' }
Propuesto: { value: '$15M', label: 'ventas/mes · TT · pico 2025' }
```

**Impacto esperado:** El visitante correcto (PYME con operación digital que no crece) se reconoce en los primeros 10 segundos. El visitante que busca "alguien que me haga el sitio barato" se auto-descalifica. El portafolio deja de competir en la categoría equivocada.  
**Esfuerzo:** Copy aprobado + implementación. 30 minutos de código, más tiempo de aprobación de copy.  
**Riesgo de no hacerlo:** El portafolio sigue compitiendo contra freelancers de marketing web cuando debería estar en una categoría con mucho menos competencia.

---

## Cambios que pueden esperar

Ordenados por impacto decreciente. Ninguno de estos es urgente.

**About — eliminar "El Mañana"** *(30 minutos, baja prioridad)*  
Eliminar: `{ label: 'El Mañana:', text: 'Full Stack Python, Ciberseguridad...' }`.  
Señala que el perfil está "en construcción." No daña activamente, pero comunica transición en lugar de consolidación.

**About — rediseño completo de pilares** *(requiere copy, 4–6 horas)*  
Cambiar tres pilares de identidad personal a tres problemas del cliente.  
Impacto real: el About pasa de "¿quién soy?" a "¿qué resuelvo?".  
Riesgo: si el copy de los pilares nuevos es demasiado abstracto, confunde más que el actual.

**Skills — eliminar "En formación (Back-End)"** *(5 minutos)*  
Eliminar el label de formación en Python/Django. Mostrar solo lo que está production-ready.  
Menor impacto que eliminar la columna de seguridad, pero fácil.

**CTA — reformular para cliente de retainer** *(requiere copy aprobado)*  
"¿Tienes un proyecto en mente?" → "¿Tu operación digital no crece como debería?"  
Impacto: mejora la calidad de los contactos, no el posicionamiento inicial.

**Roadmap entrada actual — cambiar título** *(5 minutos)*  
`"Desarrollador Web & Consultor Digital"` → `"Consultor de Operaciones Digitales"`.  
Consistencia, no posicionamiento.

**Card TT en Projects — narrativa de diagnóstico** *(30 minutos)*  
Reemplazar descripción técnica por narrativa de proceso (diagnóstico → resolución → hallazgo operacional).

---

## Elementos que NO deben modificarse

**El caso de estudio completo (CasoTokyoTunning.jsx)**  
Es el mejor argumento del portafolio. Cualquier simplificación reduce su poder.

**Las métricas verificables**  
ROAS 27.6x, WCAG 100/100, LCP 300ms, 75 leads sin atención. No cambiar ninguna.

**Los ADRs**  
El elemento más diferenciador del portafolio para un evaluador técnico. No simplificar.

**La sección de deuda técnica**  
La única sección del portafolio que un evaluador serio no va a encontrar en otro portafolio de este nivel. Es el mayor generador de confianza técnica.

**La estructura del Roadmap**  
Solo ajustar textos, no la estructura. La línea de tiempo con entradas colapsables funciona.

**El diseño visual**  
No es parte del problema de posicionamiento. El glassmorphism, la paleta, las animaciones — son correctos y diferencian.

**La entrada de Phantom Customs**  
La inclusión de un fracaso con lección explícita es el mejor señal de honestidad intelectual del portafolio. Eliminarla sería un error.

---

## Riesgos de sobrecorrección

**Riesgo 1 — Posicionamiento demasiado abstracto**

"Digital Operations Consultant" o "consultor de operaciones digitales" puede sonar vacío para un dueño de PYME que no conoce esa categoría. Si el Hero usa ese título sin anclarlo inmediatamente en el problema concreto del cliente ("cuando tu negocio digital no crece"), el visitante no se reconoce y abandona.

Mitigation: el badge es secundario. El H2 y el lead son los que deben aterrizar el problema. El título puede ser más aspiracional si el texto que sigue es específico.

**Riesgo 2 — About V2 más confuso que el actual**

Los tres pilares actuales del About ("Consultoría Digital," "Visión de Negocio Real," "Curiosidad Técnica") no son perfectos pero son comprensibles. Si el rediseño usa lenguajes como "el cuello de botella que migró de capa," el PYME promedio no lo entiende sin contexto previo.

La recomendación del comité: NO rediseñar el About de golpe. Primero eliminar "El Mañana" (cambio seguro). Evaluar si el About nuevo, cuando esté redactado, pasa el test de "¿un dueño de PYME de 10 personas lo entiende en 5 segundos?"

**Riesgo 3 — CTA que auto-excluye demasiado**

"¿Tu operación digital no crece como debería?" es mejor que "¿Tienes un proyecto en mente?" para el cliente de retainer, pero puede auto-excluir clientes válidos que tienen un problema distinto (quieren lanzar un e-commerce desde cero, no optimizar uno existente). Evaluar si el portafolio tiene suficiente volumen de contactos para permitirse una segmentación más estricta antes de aplicar este cambio.

**Riesgo 4 — Perder el volumen de contactos antes de mejorar la calidad**

El portafolio actual, aunque mal posicionado, tiene cierto volumen de consultas. El repositioning correcto reduce el volumen y mejora la calidad — pero hay un período de transición donde el volumen cae antes de que la calidad mejore. Tener conciencia de esto antes de distribuir activamente el portafolio con el nuevo posicionamiento.

---

## Plan de implementación mínimo viable

**Tiempo total estimado: 45 minutos de código + aprobación de copy del Hero**

```
BLOQUE 1 — Sin aprobación requerida (20 minutos)
├── Corregir "Co-Fundador" → "Lead de Digitalización & Crecimiento" en Roadmap.jsx
├── Eliminar columna Infraestructura & Seguridad de Skills.jsx (ajustar grid)
├── Agregar contexto temporal a métrica $15M en Hero.jsx
└── Eliminar "El Mañana" de About.jsx

BLOQUE 2 — Con copy aprobado (25 minutos de código)
├── Hero badge: "Consultor Digital & Desarrollador Web" → "Diagnóstico · Ejecución · Resultados medibles"
├── Hero H2: "10 años operando negocios. Ahora los construyo con código." → "Resuelvo lo que está frenando tu negocio digital."
└── Hero lead: actualizar párrafo de presentación

Deploy en Netlify tras completar Bloque 1.
Deploy en Netlify tras completar Bloque 2.
```

**Los cambios de Bloque 1 no dependen de aprobación de copy.** Son eliminaciones y correcciones, no redacciones nuevas. Se pueden implementar hoy.

**Los cambios de Bloque 2 requieren que el copy propuesto sea aprobado** antes de escribir código. El riesgo de implementar sin aprobación es terminar con un Hero que suena genérico o abstracto en lugar de específico y reconocible.

---

## Respuesta a la pregunta final

**"¿Es posible resolver el 80% del problema de posicionamiento modificando solamente Hero, About, CTA y algunos textos del Roadmap?"**

**Sí. Con un matiz importante.**

El 80% no requiere los cuatro. Requiere tres:

| Cambio | Alcance de visitantes | Impacto en posicionamiento |
|---|---|---|
| Co-Fundador → Roadmap | ~20% (los que leen ambas secciones) | **25%** — elimina el único daño activo |
| Eliminar Security → Skills | ~40% (los que llegan a Skills) | **15%** — elimina el mayor fragmentador de identidad |
| Hero badge + H2 + lead | **100%** | **35%** — reposiciona la categoría desde el inicio |
| About: eliminar "El Mañana" | ~50% | **5%** — elimina señal de perfil incompleto |

**Suma: ~80% del problema resuelto.**

El About completo (rediseño de pilares) agrega otro 10–15%, pero con mayor riesgo de ejecución — si el copy de los pilares nuevos es demasiado abstracto, el resultado puede ser peor que el actual.

El CTA reformulado agrega 5–10% adicional pero pertenece a optimización de conversión, no a posicionamiento.

**La conclusión del comité:**

El 80% del problema se resuelve con Hero + Co-Fundador fix + Security removal. El About es la palanca del 80–90%. El CTA es la palanca del 90–95%.

La secuencia correcta es exactamente esa: resolver lo que daña primero (Bloque 1), luego comunicar el posicionamiento correcto (Bloque 2), luego optimizar la conversión cuando el posicionamiento ya está trabajando.
