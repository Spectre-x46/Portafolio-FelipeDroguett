# CASO DE ESTUDIO — TOKYO TUNNING
## Framing definitivo para /caso-tokyo-tunning · Principios aplicados
**Versión:** 2.0 (framing corregido)  
**Fecha:** 7 Junio 2026  
**Propósito:** Documento fuente de verdad para Sprint 4 del portafolio

---

## PRINCIPIOS APLICADOS EN ESTE DOCUMENTO

1. No atribuirme resultados del negocio — delimitar mi aporte con precisión
2. El protagonista es el problema, no yo
3. Lo técnico traducido a impacto de negocio; el ADR es evidencia, no el mensaje
4. Posicionamiento: operador que usa tecnología, no developer que sabe WordPress
5. Mostrar errores, limitaciones y deuda técnica — aumentan credibilidad
6. Estructura de historia, no de hoja de vida
7. Cada afirmación respaldada por documento, métrica o captura

---

## ESTRUCTURA DE LA HISTORIA — 9 PARTES

---

### PARTE 1 — CONTEXTO
*Qué era Tokyo Tunning*

Tokyo Tunning es un negocio de accesorios automotrices ubicado en San Bernardo, Chile. Comenzó como un puesto de feria en el Persa de Buin — ventas presenciales, sin catálogo digital, sin sistema de pagos online.

En el período 2023–2024, el negocio abrió local físico en San Bernardo con elevadores y herramientas de mecánica, y amplió su operación hacia el comercio electrónico. Durante ese proceso, la facturación mensual creció significativamente.

Al momento de este caso de estudio (junio 2026), Tokyo Tunning opera con:
- Tienda física activa en San Bernardo
- Taller de servicios automotrices
- E-commerce en producción con 363 productos
- Revenue mensual que supera los $17.000.000 CLP

---

### PARTE 2 — SITUACIÓN INICIAL
*Qué problemas existían*

Cuando retomé el trabajo con Tokyo Tunning en febrero 2026, el sitio web existía pero tenía problemas que limitaban su efectividad como canal de ventas:

**Problema técnico de accesibilidad**
La auditoría inicial arrojó un score de Lighthouse Accessibility de 37/100. Esto no era solo un número — significaba que el sitio fallaba en criterios básicos de usabilidad: texto con contraste insuficiente (ratio 2.51:1 cuando el mínimo es 4.5:1), elementos interactivos sin etiquetado semántico correcto, galería de producto que ocupaba el 83% del viewport mobile sin mostrar el precio ni el botón de compra.

**Problema de confiabilidad técnica**
El sitio usaba el tema base Basel con múltiples dependencias JavaScript que no estaban siendo utilizadas pero que cargaban de todos modos. Existía una condición de carrera (race condition) en el botón de compra que podía provocar comportamientos inconsistentes: el botón mostraba "AGREGAR AL CARRITO" en situaciones donde el producto no podía comprarse todavía.

**Problema de datos**
En marzo 2026 se detectó un error contable de $4.638.480 CLP por una fórmula mal construida en Google Sheets. No había forma de saber cuándo se había introducido el error ni cuántos períodos anteriores estaban afectados.

**Problema operacional (que apareció después)**
Sin sistema de gestión de leads ni proceso de respuesta, los mensajes de potenciales clientes se acumulaban sin atención. La dimensión real de este problema solo se hizo visible durante el primer evento de alta carga — el CyberDay 2026.

---

### PARTE 3 — MI PARTICIPACIÓN
*Qué responsabilidades asumí*

Mi rol en Tokyo Tunning tiene dos dimensiones distintas que es importante no mezclar:

**Dimensión de marketing y contenido** *(vigente desde 2023)*
Creación de nombre y marca, estrategia de contenido digital, producción audiovisual (grabación, edición, publicación), gestión de campañas Meta Ads, diseño gráfico para comunicaciones.

**Dimensión técnica** *(activa desde febrero 2026)*
Reestructuración completa del sitio web: auditoría formal, corrección de problemas técnicos, construcción del tema PHP custom `tokyo-theme-1`, configuración de WooCommerce con el catálogo completo (363 productos, Webpay Plus, despacho y retiro), implementación de Meta Pixel completo con CAPI.

**Lo que no hice**
No tomé decisiones sobre el mix de productos, los precios, la operación del taller, ni la estrategia comercial general. El crecimiento del negocio responde a múltiples factores — yo aportté en la parte digital y tecnológica. No soy el responsable del resultado del negocio.

---

### PARTE 4 — DIAGNÓSTICO
*Qué descubrí*

La auditoría se estructuró en 9 fases formales usando Playwright MCP y Chrome DevTools para validar en browser real, no en reportes estáticos.

**Hallazgo 1 — El problema de accesibilidad era sistémico, no cosmético**
Los 5 hallazgos críticos de accesibilidad no eran bugs aislados — eran síntomas de que el tema base no había sido auditado con criterio de usuario real. El más grave: la galería del producto en mobile hacía que el precio y el botón de compra fueran invisibles al llegar a la página. Un usuario mobile llegaba a un producto y no veía por qué comprarlo ni cómo hacerlo.

**Hallazgo 2 — El botón de compra tenía comportamiento no determinista**
En productos con variantes (talla, color, especificación), el botón sticky "Agregar al carrito" podía habilitarse antes de que el usuario seleccionara una variante válida. El origen era una diferencia de timing: el botón leía el estado del sistema en t=0ms pero WooCommerce actualizaba ese estado en t=300ms. Resultado: comportamiento que dependía de la velocidad del navegador y del dispositivo.

**Hallazgo 3 — La taxonomía era un pasivo**
El catálogo tenía 94 categorías reales en base de datos, de las cuales un análisis de 165 productos y 388 filas del CSV de exportación WooCommerce reveló 36 categorías legacy sin productos activos. Cada una de esas categorías generaba una URL indexable con 0 contenido — señal negativa para SEO.

**Hallazgo 4 — El cuello de botella principal no era tecnológico**
Este fue el hallazgo más importante del proyecto, y apareció solo durante el CyberDay 2026. El sistema técnico funcionó sin incidentes durante el evento. Lo que falló fue la operación: 75 leads —personas que llegaron con intención de compra, preguntaron por WhatsApp, dejaron comentarios en TikTok, enviaron mensajes por Instagram— no recibieron respuesta oportuna. El canal de WhatsApp estuvo desatendido por más de 8 horas en el segundo día del evento, con 63 mensajes acumulados.

La estimación conservadora de revenue no capturado por falta de atención comercial: **$800.000 – $1.150.000 CLP** sobre un evento que generó $1.936.000 CLP.

La conclusión fue directa: el problema ya no era tecnológico. El cuello de botella era operacional.

---

### PARTE 5 — DECISIONES CLAVE
*Qué se decidió y por qué*

Las decisiones técnicas más importantes están formalizadas en 4 ADRs (Architecture Decision Records). Un ADR documenta el contexto de una decisión, las alternativas consideradas, y las consecuencias aceptadas. La práctica de escribirlos antes de implementar obliga a pensar las consecuencias en lugar de solo resolver el problema inmediato.

**Decisión 1: Sin minicart**
El tema base incluía un drawer lateral que aparecía al agregar un producto. Añadía complejidad de JavaScript, dependencias de librerías externas y potenciales condiciones de carrera. Se decidió eliminar el drawer y llevar al usuario directamente a la página de carrito al hacer click en el ícono. La confirmación de que el producto fue agregado ocurre mediante un toast notification simple.

*Consecuencia aceptada:* El usuario no ve el resumen del carrito sin navegar a la página de carrito. Sin upsell en el momento del ATC.

**Decisión 2: Fragmentos nativos de WooCommerce como fuente de verdad**
El contador de productos en el carrito se actualiza únicamente via el sistema de fragments propio de WooCommerce. No se construyó lógica paralela para manejar ese estado.

*Por qué importa:* Cualquier estado del carrito gestionado en JavaScript custom puede desincronizarse del estado real del servidor. Cuando hay pagos de por medio, una desincronización es un problema de negocio, no solo técnico.

**Decisión 3: Sin dependencias del tema base en producción**
El tema custom `tokyo-theme-1` desregistra todos los scripts del tema Basel antes de cargar los propios. Ningún archivo JavaScript de Basel se carga en el frontend del sitio en producción.

*Resultado:* Reducción de ~60-70KB de JavaScript no utilizado. Sin posibilidad de conflicto entre código Basel y código custom.

**Decisión 4: El componente sticky como suscriptor pasivo**
Para resolver el problema de comportamiento no determinista del botón de compra en productos con variantes, el componente sticky se rediseñó para escuchar únicamente eventos que WooCommerce dispara *después* de resolver su propio estado.

```javascript
// El sticky escucha eventos WC resueltos, no el estado del DOM en tiempo real
jQuery(variationsForm)
  .on('show_variation', function(e, variation, purchasable) {
    if (purchasable) {
      stickyBtn.textContent = 'AGREGAR AL CARRITO';
      stickyBtn.onclick = () => nativeBtn.click(); // delega al botón nativo WC
    }
  })
  .on('hide_variation reset_data', function() {
    stickyBtn.textContent = 'SELECCIONAR OPCIONES';
  });
```

*Validado en 5 escenarios:* sin variante seleccionada, con variante válida, con variante agotada, cambio de variante, reset de selección.

*Deuda técnica aceptada documentada:* el `aria-label` del botón sticky no se actualiza dinámicamente con la variante seleccionada. Registrado como pendiente (TD-P2-A).

---

### PARTE 6 — IMPLEMENTACIÓN
*Qué se construyó*

**Sistema de ecommerce**
- Catálogo de 363 productos con taxonomía reestructurada (de 94 categorías, 36 legacy eliminadas, 52 activas)
- Variantes de producto con lifecycle management (tallas, colores, especificaciones técnicas)
- Checkout con Webpay Plus (Transbank) — pagos en pesos chilenos
- Sistema de despacho (Starken, Chilexpress) y retiro en tienda
- Fragmentos de carrito en tiempo real — el contador se actualiza sin recargar la página

**Tema PHP custom (`tokyo-theme-1`)**
- Templates modulares por tipo de página: home, catálogo, producto, servicios, carrito, checkout
- Sistema de dark mode automotriz: `#121212` fondo, paleta cromática enfocada en legibilidad bajo luz artificial
- Tipografía: Oswald (headings técnicos) + IBM Plex Sans (cuerpo de texto)
- Responsive mobile-first: validado en 390px (iPhone) hasta 2400px

**Analytics y tracking**
- Meta Pixel completo: PageView, ViewContent, AddToCart, InitiateCheckout, Purchase
- CAPI (Conversions API) como respaldo para Purchase — mitiga pérdida de datos por bloqueadores
- Google Analytics 4 integrado

**SEO técnico**
- Schema.org JSON-LD: LocalBusiness + Product + BreadcrumbList
- Canonical tags en todas las URLs del catálogo
- Redirects para 36 categorías legacy y URLs de staging que habían quedado indexadas
- Sitemap y robots.txt configurados

**Documentación del proyecto**
La auditoría generó más de 70 documentos markdown organizados cronológicamente en 10 etapas. Cada etapa incluye diagnóstico, plan de implementación, registro de cambios y validación. Esto no es documentación para mostrar — es el mecanismo de trabajo que permitió detectar la deuda técnica antes de que fuera un problema de producción.

---

### PARTE 7 — RESULTADOS
*Métricas reales*

**Accesibilidad**
| Métrica | Antes | Después |
|---|---|---|
| Lighthouse Accessibility | 37/100 | **100/100** |
| Violaciones WCAG AA | Múltiples | **0** (axe-core 4.11.4) |
| Touch targets < 44px | 8 elementos | **0** |
| Atributo `lang` | Ausente | **es-CL** |
| Emojis en H1/title | Presentes | **Eliminados** |

**Performance**
| Métrica | Valor |
|---|---|
| LCP (Largest Contentful Paint) | **300ms** |
| CLS (Cumulative Layout Shift) | **0.00** |
| Core Web Vitals | **Verdes** |
| Errores en consola | **0** |

*Contexto:* Un sitio WordPress + WooCommerce con tema custom tiene típicamente un LCP de 1.5–3.0 segundos en implementaciones estándar. El valor de 300ms es el resultado de eliminar dependencias no utilizadas y optimizar la carga de recursos.

**CyberDay 2026 — Validación bajo carga real**

El CyberDay 2026 (1–3 junio 2026) fue el primer evento de alta demanda que probó el sistema completo en producción.

| Métrica | Valor |
|---|---|
| Revenue en 3 días | $1.936.000 CLP |
| Inversión Meta Ads | $70.034 CLP |
| ROAS | **27.6x** |
| Benchmark industria (Meta Ads ecommerce Chile) | 3–6x |
| Órdenes procesadas | 23 |
| Ticket promedio | ~$84.000 CLP |
| Incidentes técnicos en el sitio | **0** |

*El dato que importa sobre el ROAS:* un ROAS de 27.6x no puede atribuirse solo a las campañas publicitarias. Depende de que el sistema técnico completo funcione sin fricción — que el catálogo cargue, que el checkout procese, que Webpay no falle, que el pixel registre las conversiones. Si alguna parte falla, el ROAS cae. El sistema no tuvo ningún fallo técnico durante el evento.

**Revenue perdido — El hallazgo que cambió la dirección del proyecto**

El análisis post-evento cuantificó un problema que la tecnología no podía resolver sola: 75 leads sin atención durante el evento representaron entre $800.000 y $1.150.000 CLP de revenue estimado no capturado. Esto sobre un evento que generó $1.936.000 CLP.

*Fuente: Postmortem CyberDay 2026 — análisis de mensajes WhatsApp, DMs TikTok/Instagram, y historial de conversaciones durante el período del evento.*

---

### PARTE 8 — LO QUE APRENDÍ
*Lecciones técnicas y de negocio*

**Lección técnica: documentar la deuda antes de que sea urgente**
El problema de la race condition en el botón de compra existía desde antes de que comenzara la auditoría. No causaba un error visible — simplemente generaba comportamientos inconsistentes que eran difíciles de reproducir. La auditoría sistemática lo detectó en condiciones controladas. Sin metodología de auditoría, ese tipo de problema solo aparece cuando un cliente se queja.

**Lección técnica: la decisión correcta a veces crea deuda**
El ADR-004 eliminó la race condition del sticky ATC, pero documentó explícitamente que el `aria-label` del botón no se actualiza con la variante seleccionada. Esa deuda está registrada. No es ignorancia — es una decisión consciente de qué resolver ahora y qué dejar para después. La diferencia entre deuda técnica y descuido es la documentación.

**Lección de negocio: el cuello de botella puede no ser donde uno mira**
Cuando el sistema técnico funciona y los resultados no llegan, el problema está en otra parte. En el CyberDay, el sitio procesó órdenes sin incidentes. El cuello de botella fue la atención comercial: mensajes sin respuesta, leads sin seguimiento, canales desatendidos durante horas críticas.

Un sistema técnico bien construido libera tiempo para la operación. Pero si la operación no existe como sistema, el tiempo liberado no se capitaliza.

**Lección de negocio: las métricas mal construidas son más peligrosas que la ausencia de métricas**
El error contable de $4.638.480 CLP en marzo 2026 no fue un problema de datos faltantes — fue una fórmula incorrecta en Google Sheets que nadie detectó hasta que los números dejaron de cerrar. Una métrica incorrecta que parece correcta lleva a decisiones sobre información falsa.

---

### PARTE 9 — PRÓXIMA ETAPA
*TTCOS — Sistema Operativo Comercial*

El diagnóstico del CyberDay derivó en un plan estructurado para resolver el problema operacional: TTCOS (Tokyo Tunning Commercial Operating System).

**El problema central:**
El negocio genera ~$17M CLP mensuales pero opera con herramientas de una empresa de $1M. Sin CRM, sin automatizaciones, sin atribución, sin proceso de seguimiento. En el CyberDay, el 40-60% del revenue potencial se perdió por falta de proceso, no por falta de tecnología ni de clientes interesados.

**La arquitectura propuesta:**
Stack: Kommo CRM + Make.com (automatizaciones) + WhatsApp API = $52 USD/mes = 0.29% del revenue mensual.

7 automatizaciones planificadas para atacar los problemas identificados en el postmortem:
- Carrito abandonado (WooCommerce → CRM → WhatsApp)
- Respuesta inmediata a leads (< 15 minutos)
- Encuesta post-venta (D+3)
- Solicitud de reseña (D+7) — meta: 4.5★ en Google Maps
- Upsell complementario (D+30)
- Reactivación de clientes inactivos (D+90)
- Registro de ventas presenciales (atribución digital)

**El roadmap:**
7 sprints progresivos, comenzando por lo más urgente (bandeja unificada de mensajes) y avanzando hacia las automatizaciones más complejas. Diseñado con co-participación del socio operativo para asegurar adopción.

*Estado actual: plan documentado en TTCOS v1.1 — pendiente de aprobación para implementación.*

---

## DEUDA TÉCNICA ACTIVA (transparencia)

Incluir esto en el caso de estudio aumenta la credibilidad. Un profesional que documenta lo que no resolvió genera más confianza que uno que presenta solo lo que funcionó.

| ID | Descripción | Impacto | Estado |
|---|---|---|---|
| DT-01 | `functions.php` de ~2.800 líneas | Mantenibilidad en futuras intervenciones | Identificado, pendiente de refactor |
| DT-02 | Template de catálogo replica lógica nativa WC | Duplicación que puede desincronizarse | Identificado, evaluando migración |
| DT-03 | CSS inline dentro de templates PHP | No puede optimizarse ni hacer tree-shake | Identificado |
| DT-04 | `aria-label` sticky ATC no actualiza con variante | WCAG A (no AA) — accesibilidad mejorable | Documentado en ADR-004 |
| DT-05 | Precio en sticky no actualiza con variante | El usuario no ve el precio actualizado en el sticky | Documentado |

---

## EVIDENCIA DE RESPALDO

Todo lo declarado en este caso de estudio está respaldado por documentación:

| Afirmación | Evidencia |
|---|---|
| Lighthouse Accessibility 37/100 → 100/100 | `07-Evidencia-y-Validacion/informes-rendimiento/lighthouse_pdp-reporte.json` |
| LCP 300ms, CLS 0.00 | `Mi_Historia.md` + reportes Lighthouse |
| 0 violaciones WCAG AA | axe-core 4.11.4 — referenciado en `08-Auditoria-UX-UI-Frontend/` |
| CyberDay: $1.936.000 CLP, ROAS 27.6x | `INFORME_POSTMORTEM_CYBERDAY_2026.md` |
| Inversión Meta Ads: $70.034 CLP | Billing Mastercard ···· 9166 + ···· 6703 (detallados en postmortem) |
| 75 leads sin atención | Análisis mensajes WhatsApp D-2 + DMs TikTok/Instagram CyberDay |
| $800K-$1.15M revenue estimado perdido | `INFORME_POSTMORTEM_CYBERDAY_2026.md` — sección análisis leads |
| Error contable $4.638.480 | `TTCOS_MASTERPLAN.md` — diagnóstico punto de partida |
| Revenue negocio ~$17M/mes | `TTCOS_MASTERPLAN.md` — tabla indicadores |
| 363 productos en WooCommerce | CSV export `wc-product-export-22-5-2026.csv` — 363 filas |
| 4 ADRs formales | `02-Arquitectura-y-Decisiones/ADRs/` — 4 archivos |
| 70+ documentos de auditoría | `audit-reports/` — directorio completo |

---

## COPY LISTO PARA /caso-tokyo-tunning

A continuación el copy final para cada sección de la página, con el framing correcto aplicado. Listo para implementar en React.

---

### HERO DE LA PÁGINA

**Tag:** Caso de estudio · E-commerce + Operación Digital

**Título:**  
De persa a e-commerce:  
la evolución digital de Tokyo Tunning

**Subtítulo:**  
Un proyecto de múltiples etapas donde el trabajo técnico fue solo una parte de la historia.

**Métricas en pills:**  
`ROAS 27.6x · CyberDay 2026` | `WCAG 100/100` | `LCP 300ms` | `363 productos`

**Nota de contexto (texto pequeño):**  
*El crecimiento del negocio responde a múltiples factores. Mi participación fue en la parte digital, técnica y operacional.*

---

### SECCIÓN 1 — EL NEGOCIO

**Título:** El contexto

Tokyo Tunning es un negocio de accesorios automotrices en San Bernardo. Comenzó como un puesto en el Persa de Buin y evolucionó hacia un local físico con taller, un catálogo digital de más de 360 productos, y ventas online activas.

El negocio ha crecido significativamente en los últimos años. Al momento de este caso, la facturación mensual supera los $17.000.000 CLP, con un canal online que opera en paralelo al tráfico presencial.

**[Imagen: screenshot tokyotunning.cl]**

---

### SECCIÓN 2 — EL PROBLEMA

**Título:** Lo que no estaba funcionando

**Card 1 — Accesibilidad**  
La auditoría inicial del sitio arrojó un Lighthouse Accessibility de 37/100. El problema más crítico: en mobile, la galería de producto ocupaba el 83% de la pantalla sin mostrar el precio ni el botón de compra. Un usuario llegaba al producto y no veía por qué comprarlo ni cómo hacerlo.

**Card 2 — Confiabilidad técnica**  
El botón de compra en productos con variantes tenía comportamiento inconsistente: podía habilitarse antes de que el usuario seleccionara una opción válida. El origen era una diferencia de 300ms entre cuándo el código custom leía el estado y cuándo WooCommerce lo actualizaba.

**Card 3 — Datos**  
Se detectó un error contable de $4.638.480 CLP causado por una fórmula incorrecta en Google Sheets. Sin datos confiables, cualquier decisión sobre el negocio se hace sobre información falsa.

**Card 4 — Operación (visible después)**  
El problema de mayor impacto apareció durante el primer evento de alta carga. El sistema técnico funcionó sin incidentes. Lo que falló fue la operación: 75 leads sin respuesta durante el evento, con el canal de WhatsApp desatendido por más de 8 horas.

---

### SECCIÓN 3 — MI PARTICIPACIÓN

**Título:** Qué hice y qué no

**Lo que asumí:**
- Auditoría técnica en 9 fases formales (browser real, no reportes estáticos)
- Reestructuración del tema PHP: `tokyo-theme-1` con 0 dependencias del tema base
- Configuración de WooCommerce: 363 productos, variantes, Webpay Plus, despacho
- SEO técnico: Schema.org, BreadcrumbList, canonical tags, redirects
- Meta Pixel completo con CAPI como respaldo
- Diseño y ejecución de la campaña CyberDay 2026

**Lo que no fue parte de mi rol:**  
Las decisiones sobre mix de productos, precios, operación del taller, y estrategia comercial general pertenecen al negocio. El crecimiento de la facturación responde a múltiples factores que no controlo.

---

### SECCIÓN 4 — DECISIONES TÉCNICAS

**Título:** Las decisiones que importaron

*Introducción:* Cada decisión técnica importante está documentada en un ADR — Architecture Decision Record. No es documentación para mostrar: es el mecanismo que obliga a pensar en las consecuencias antes de implementar.

---

**Decisión 1 — El botón de compra**  
*El problema:* En productos con variantes, el botón sticky "Agregar al carrito" podía activarse antes de que el usuario eligiera qué estaba comprando — dependiendo de la velocidad del navegador y del dispositivo.

*La decisión:* Rediseñar el componente para que escuche únicamente eventos que WooCommerce dispara después de resolver su propio estado, no antes.

*El resultado:* Comportamiento determinista en 5 escenarios validados. La consecuencia aceptada está documentada: el label del botón no cambia en tiempo real con cada variante seleccionada.

`[Ver ADR-004 completo ↓]` *(expandible)*

---

**Decisión 2 — Sin estado paralelo del carrito**  
*El problema:* El código custom del tema base gestionaba el estado del carrito en JavaScript, en paralelo al estado real de WooCommerce. Cualquier desincronización entre ambos podía mostrar un carrito vacío cuando había productos, o viceversa.

*La decisión:* El estado del carrito lo gestiona únicamente WooCommerce via su propio sistema de fragmentos. El código custom solo suscribe y muestra — nunca gestiona estado.

*Por qué importa en un e-commerce:* Un carrito mal contado es un problema de confianza, no solo técnico.

`[Ver ADR-002 completo ↓]` *(expandible)*

---

**Decisión 3 — Sin dependencias del tema base en producción**  
*El problema:* El tema base (Basel) cargaba decenas de archivos JavaScript independientemente de si sus componentes se usaban en la página.

*La decisión:* El tema custom desregistra todos los scripts de Basel antes de cargar los propios. Solo se carga lo que se usa.

*Consecuencia medible:* ~60-70KB de JavaScript eliminado de cada carga de página.

`[Ver ADR-003 completo ↓]` *(expandible)*

---

### SECCIÓN 5 — RESULTADOS

**Título:** Los números

**Subtítulo:** Verificables, con fuente, sin adornos.

---

**Bloque: Accesibilidad**

| Antes | Después |
|---|---|
| Lighthouse 37/100 | **Lighthouse 100/100** |
| Múltiples violaciones WCAG | **0 violaciones WCAG AA** |
| 8 elementos con touch target < 44px | **0** |
| Sin atributo `lang` | **es-CL** |

*Validado con axe-core 4.11.4*

---

**Bloque: Performance**

`LCP 300ms` `CLS 0.00` `Core Web Vitals verdes` `0 errores de consola`

*Contexto: WordPress + WooCommerce tiene típicamente LCP de 1.5–3.0s en implementaciones estándar.*

---

**Bloque: CyberDay 2026**  
*(validación bajo carga real — 1 al 3 de junio 2026)*

`$1.936.000 CLP en 3 días` | `ROAS 27.6x` | `23 órdenes` | `$70.034 CLP invertidos`

*Benchmark Meta Ads ecommerce Chile: 3–6x ROAS*  
*0 incidentes técnicos durante el evento*

---

**Bloque: El hallazgo que no esperaba**

Durante el análisis post-evento se cuantificó un problema que el sistema técnico no podía resolver:

**75 leads sin atención** durante el evento — WhatsApp desatendido 8+ horas, mensajes en TikTok e Instagram sin respuesta.

Estimación de revenue no capturado: **$800.000 – $1.150.000 CLP**

Esto sobre un evento que generó $1.936.000 CLP.

La tecnología había funcionado. El cuello de botella era operacional.

*Esta conclusión cambió la dirección del proyecto: de más trabajo técnico a diseñar el sistema operativo comercial.*

---

### SECCIÓN 6 — LO QUE APRENDÍ

**Título:** Lecciones

**1 — El cuello de botella puede estar donde no se mira**  
Cuando el sistema técnico funciona y los resultados no llegan, el problema está en otra parte. Identificar dónde está el cuello de botella real es más valioso que seguir optimizando lo que ya funciona.

**2 — Documentar la deuda es parte del trabajo**  
Cuatro decisiones técnicas tienen consecuencias negativas documentadas en sus ADRs. No son errores — son compromisos conscientes. La diferencia entre deuda técnica y descuido es que la deuda está registrada y la otra no.

**3 — Las métricas mal construidas son más peligrosas que no tener métricas**  
Un error de $4.6M en una fórmula de Google Sheets pasó desapercibido durante meses. Una métrica incorrecta que parece correcta lleva a tomar decisiones sobre información falsa.

---

### SECCIÓN 7 — PRÓXIMA ETAPA

**Título:** Lo que sigue

El hallazgo del CyberDay derivó en un plan estructurado para resolver el problema operacional: TTCOS, el Sistema Operativo Comercial de Tokyo Tunning.

El objetivo no es más tecnología. Es hacer que la tecnología que ya funciona genere resultados consistentes a través de procesos que no dependan de que alguien esté atento en el momento exacto.

Stack seleccionado: Kommo CRM + Make.com + WhatsApp API → $52 USD/mes → 0.29% del revenue mensual.

7 automatizaciones planificadas. 7 sprints de implementación. Pendiente de aprobación para iniciar.

---

### CTA FINAL

**Ver el sitio en producción:**  
`tokyotunning.cl →`

**¿Tenés un proyecto similar?**  
`Hablemos →`

---

*Documento fuente para Sprint 4 — /caso-tokyo-tunning*  
*Versión 2.0 — Framing corregido según 7 principios*  
*Generado: 7 Junio 2026*
