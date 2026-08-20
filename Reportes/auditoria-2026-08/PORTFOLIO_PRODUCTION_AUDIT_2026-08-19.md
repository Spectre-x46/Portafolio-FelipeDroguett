# AUDITORÍA DE PRODUCCIÓN — felipe-droguett.netlify.app

**Objeto:** https://felipe-droguett.netlify.app/ · versión pública tras el rediseño V3
**Fecha:** 2026-08-19 · **Método:** navegador real contra producción, sin usar localhost
**Bundle auditado:** `index-mjReOTDz.js` · `index-3RQfnu-k.css` — corresponde al commit local `c951fc6`
**Estado:** DIAGNÓSTICO. **Cero cambios implementados.** Sin push, sin deploy, sin tocar GitHub ni LinkedIn.
**Evidencia:** `./evidencia-produccion/`

> **Convención.** **HECHO** = observado o medido en producción. **INTERPRETACIÓN** = qué significa. **IMPACTO** = por qué importa. **RECOMENDACIÓN** = qué haría.
> Donde una afirmación no pude verificarla, lo digo.

---

# 1. RESUMEN EJECUTIVO

## 1.1 Estado general

La versión publicada es sólida. La base técnica está bien: cero errores de consola, cero desbordamiento horizontal, jerarquía de encabezados correcta, 33 elementos enfocables todos con nombre accesible, CLS de 0, cabeceras de seguridad completas, nada sensible expuesto y la anonimización del caso del agente **se sostiene en el bundle publicado**.

**No es una auditoría de rescate.** Es una auditoría de un sitio que funciona, con dos defectos visuales reales que sí bloquean su propósito y un conjunto de deuda conocida.

## 1.2 Los dos hallazgos que importan

**P0-01 — El apellido desaparece en la mayoría de pantallas de escritorio.**
Verificado a 1280×720, 1366×768 y 1536×864: el retrato tapa «DRO» por completo y el hero se lee **`FELIPE ▮ GUETT`**. La hipótesis inicial era «el personaje está un poco grande»; la medición dice algo más preciso y más grave (§3).

**P0-02 — En móviles cortos el párrafo del hero cae sobre la cara.**
Verificado a 320×568 y 360×800: la primera frase se superpone al rostro con contraste degradado (§4).

Ambos afectan al primer viewport, que es donde se decide si alguien sigue leyendo.

## 1.3 Lo que está bien y no hay que tocar

- Anonimización del caso del agente: **sin fugas** en el bundle publicado.
- Sin enlaces cruzados entre los dos casos.
- Nada del proyecto expuesto: ni `Reportes/`, ni `assets-source/`, ni source maps, ni `package.json`.
- Cabeceras de seguridad completas salvo CSP.
- Copy sin frases intercambiables.
- Caché de assets correcta (inmutable, un año).

---

# 2. MÉTODO Y VERIFICACIÓN PREVIA

**HECHO.** Antes de auditar comprobé que producción tuviera realmente V3. El HTML publicado referencia `index-mjReOTDz.js`, el mismo hash del último build local. **Producción está al día.**

**HECHO.** Todas las pruebas visuales y funcionales se hicieron contra la URL pública. El código local se consultó únicamente después, para explicar el origen técnico de lo observado.

---

# 3. P0-01 · EL APELLIDO SE PIERDE EN ESCRITORIO

## 3.1 Confirmación de la hipótesis

**HECHO.** Mediciones en producción, ancho × alto reales:

| Viewport | Relación | Ancho retrato | Alto retrato | Alto retrato / viewport | Invasión sobre la letra | ¿Se lee DROGUETT? |
|---|---|---:|---:|---:|---:|:---:|
| 1280 × 720 | 16:9 | 435 px | 648 px | **90%** | 100% | **NO** |
| 1366 × 768 | 16:9 | 464 px | 692 px | **90%** | ~100% | **NO** |
| 1440 × 900 | 16:10 | 490 px | 730 px | 81% | ~55% | **Sí** |
| 1536 × 864 | 16:9 | 517 px | 778 px | **90%** | 109% | **NO** |
| 1920 × 1080 | 16:9 | 545 px *(tope)* | 812 px | 75% | 44% | **Sí** |

Evidencia: `hero-1280.png`, `hero-1366.png`, `hero-1440.png`, `hero-1536.png`, `hero-1920.png`.

**INTERPRETACIÓN — la hipótesis era correcta pero incompleta.** El problema no es que el personaje sea «un poco grande»: es que **su tamaño y su posición se calculan contra referencias distintas**.

```
tamaño   →  min(34vw, 545px)   … depende del ANCHO
posición →  anclado al borde inferior … depende del ALTO
nombre   →  padding-top: 16svh  … depende del ALTO
```

Como el alto del retrato sale del ancho del viewport, en pantallas **16:9** ese alto equivale a ~90% de la altura disponible y su borde superior sube hasta la banda del texto. En **16:10** equivale a ~81% y queda por debajo.

A 1920 el problema desaparece **por accidente**: el tope de 545 px del `clamp` entra en juego y corta el crecimiento.

**La franja rota es aproximadamente 1265–1600 px de ancho en pantallas 16:9.** Es la resolución de escritorio más común.

## 3.2 Impacto

**IMPACTO — alto.** El hero apuesta todo a que el nombre funcione como elemento gráfico. Si el apellido no se puede reconstruir, la apuesta falla justo donde debía pagar. Un visitante nuevo lee «FELIPE …GUETT» y no retiene el apellido — que es literalmente lo único que el hero pide recordar.

No es un problema estético: es pérdida de función.

## 3.3 Recomendación exacta

**RECOMENDACIÓN.** No reducir el personaje un porcentaje fijo. Eso arreglaría 1366 y rompería el equilibrio a 1920. **Añadir un tope por altura**, que es la variable que realmente falta:

```
antes:   width: clamp(300px, 34vw, 545px)
después: width: min(34vw, 545px, 53svh)
```

Comportamiento resultante (calculado sobre las medidas reales de arriba):

| Viewport | Ancho actual | Ancho propuesto | Cambio | Alto / viewport |
|---|---:|---:|---:|---:|
| 1280 × 720 | 435 px | 382 px | **−12%** | 79% ✅ |
| 1366 × 768 | 464 px | 407 px | **−12%** | 79% ✅ |
| 1440 × 900 | 490 px | 477 px | **−3%** | 79% ✅ |
| 1536 × 864 | 517 px | 458 px | **−11%** | 79% ✅ |
| 1920 × 1080 | 545 px | 545 px | **sin cambio** | 75% ✅ |

Queda dentro del rango 5–10% que planteaste, pero **aplicado donde hace falta y sin tocar donde ya funciona**. El solape se conserva en todos los anchos: el pelo sigue mordiendo la base de las letras, que es el efecto buscado.

**No afecta a móvil.** Ese `clamp` sólo vive en el breakpoint `xl:` (≥1280 px); por debajo el retrato usa otras reglas y otro anclaje.

**Archivo:** `src/components/Hero.jsx`, línea del `<img>` del retrato.

**Verificación pendiente:** confirmar visualmente a 1280, 1366 y 1536 tras el cambio. El valor `53svh` es una derivación aritmética, no una medición.

---

# 4. P0-02 · EL TEXTO DEL HERO CAE SOBRE LA CARA EN MÓVIL

**HECHO.** A **320×568** el párrafo del hero se superpone directamente al rostro. La primera línea cruza los ojos y la nariz. Evidencia: `hero-320.png`.

**HECHO.** A **360×800** mejora pero la primera línea todavía cruza el rostro a la altura de la boca. Evidencia: `hero-360.png`.

**HECHO.** A 390×844 y superiores el problema no aparece.

**INTERPRETACIÓN.** Existe un velo (degradado a negro) entre el retrato y el texto, dimensionado a `52svh` desde el borde inferior. En viewports cortos ese 52% no llega hasta donde está el párrafo, que queda por encima del velo y sobre la cara iluminada.

**IMPACTO — alto.** 320×568 es un iPhone SE; 360×800 es la resolución Android más común del mundo. No es un caso raro. Y el texto afectado es exactamente el que explica a qué se dedica Felipe.

**RECOMENDACIÓN.** Anclar el velo al contenido en lugar de a un porcentaje del viewport, o elevarlo hasta cubrir el bloque de texto. No tocar la composición ni el tamaño del personaje en móvil: ahí la escala funciona bien.

**Archivo:** `src/components/Hero.jsx`, el `<div>` del velo (`h-[52svh] xl:hidden`).

---

# 5. PRIMERA IMPRESIÓN — VISITANTE QUE NO SABE QUIÉN ES FELIPE

Recorrido hecho sin mirar código, simulando llegada desde un enlace compartido.

## A los 5 segundos

**HECHO.** Lo que ocupa la pantalla: un nombre a gran escala, un personaje 3D fotorrealista, dos botones y una franja con tres datos.

**INTERPRETACIÓN.** Se recuerda **la cara y el ámbar**. La página no se parece a un portfolio de desarrollador genérico — eso está conseguido.
Pero en 16:9 **el apellido no se retiene** (§3), así que el elemento con más peso tipográfico entrega menos de lo que promete.

El avatar **ayuda**: no parece decoración porque está integrado en la composición, no pegado en una esquina. Genera curiosidad.

## A los 15 segundos

**HECHO.** El párrafo dice: *«Entré a grabar videos para un negocio. Tres años después sigo ahí: contenido, campañas, tienda online y, desde julio, atención automatizada.»*

**INTERPRETACIÓN.** Se entiende bien y **no suena a plantilla**. Comunica una secuencia, no una lista de servicios. Un extraño sale con: *«hace marketing y también desarrollo, y lleva tiempo en el mismo sitio»* — que es exactamente lo que se buscaba.

Coherente, no disperso. La palabra «automatizada» hace el trabajo de introducir la IA sin decir «IA».

## A los 30–60 segundos

**HECHO.** Al bajar aparece «DOS CASOS EN PROFUNDIDAD», dos tarjetas grandes con estado (`En producción`, `En validación`) y, más abajo, «Otros trabajos» con dos entradas menores.

**INTERPRETACIÓN.** La distinción entre casos principales y trabajos secundarios **se lee sin esfuerzo**: distinto tamaño, distinta tarjeta, distinta densidad. El lead aclara que hay más de dos proyectos.

El contacto está al final, tras toda la evidencia. Para un portfolio es el orden correcto.

---

# 6. AUDITORÍA POR PERSONAS

## A · Recruiter no técnico

**Encuentra:** nombre, una frase clara de a qué se dedica, dos casos con estado, trayectoria colapsable con diez años de historia, formación con **credencial verificable enlazada**, y cuatro vías de contacto.

**INTERPRETACIÓN.** El punto más fuerte para este perfil es la credencial con enlace de verificación: es la única afirmación del sitio que se puede comprobar en un clic sin criterio técnico.

**¿Lo entrevistaría?** **Sí**, con una reserva: la trayectoria está colapsada por defecto y muestra sólo dos entradas. Quien busque «años de experiencia» tiene que pulsar un botón para verlos. Es una decisión deliberada y la sigo defendiendo, pero es la fricción principal para este perfil.

## B · Recruiter técnico

**Encuentra:** Node.js, n8n, LLM, CRM, APIs REST, WooCommerce, PHP, tests; enlace a GitHub en tres sitios; dos casos con profundidad.

**INTERPRETACIÓN.** El sitio ya no proyecta perfil junior. El estado `En validación` con fecha, en vez de un «en producción» genérico, es una señal de honestidad que este perfil reconoce.

**HECHO — contradicción externa.** El portfolio enlaza a GitHub, cuyo estado no audité en esta iteración por indicación expresa. Señalo únicamente que **si el destino no acompaña, el enlace juega en contra**: es el único punto del recorrido donde el sitio cede el control de la impresión.

## C · Tech Lead

**Encuentra:** el grafo del workflow con dos compuertas, la arquitectura por capas, la metodología de evaluación con cifras, los cinco defectos con impacto medido y el capítulo de la auditoría de procedencia.

**INTERPRETACIÓN.** Es el perfil mejor servido. La tabla de «Dónde está hoy» —con *pruebas E2E contra el CRM en vivo: no ejecutadas, no autorizadas* y *envío real a clientes: no*— es exactamente la clase de precisión que este lector busca y casi nunca encuentra.

**Duda que le queda:** el caso describe una arquitectura por capas (`ingress · understanding · policy · composer · egress`) mientras el grafo de la tarjeta muestra una orquestación distinta (`Preprocess → V2RejectGate → TakeoverGate → AI Agent → Validator`). Ambas son reales y de líneas distintas del proyecto, pero **el sitio no lo explica**, y un lector atento puede leerlo como inconsistencia.

## D · Dueño de PyME / cliente de marketing

**Encuentra:** la sección clara de Capacidades, que abre con problemas en lenguaje normal («El negocio no tiene quien lo conozca», «Llegan visitas pero no compran»).

**INTERPRETACIÓN.** El cambio a superficie clara funciona: rompe el ritmo y es donde este visitante se detiene. Las palabras técnicas están subordinadas y no bloquean.

**Reserva.** Ve resultados (27:1, $500K→$15M) pero **no ve un servicio**. No hay ningún punto que diga «esto es lo que puedo hacer por tu negocio y así trabajo». Sale entendiendo que Felipe es bueno, sin saber qué contratarle.

## E · Founder / socio potencial

**INTERPRETACIÓN.** El mejor atendido junto al Tech Lead. La tesis «cada capacidad apareció resolviendo el problema que dejó la anterior» está explícita, y el caso longitudinal la demuestra sobre un solo negocio durante tres años. Eso no se puede simular.

## F · Persona que quiere conocer a Felipe

**INTERPRETACIÓN.** Aquí hay una tensión real y merece decirse.

Se conoce **al profesional** con bastante detalle: cómo piensa, qué le importa, qué admite no saber. Los tres pilares de Criterio y las frases de la trayectoria («fue el año en que aprendí lo que cuesta sostener una operación con el cuerpo») son genuinamente humanos.

Pero **a la persona se la conoce poco**. El avatar 3D es la única representación física y funciona como identidad gráfica, no como presencia: es reconocible pero no cercano. Un retrato estilizado dice «tengo criterio visual»; una fotografía diría «soy este».

**RECOMENDACIÓN — y aquí discrepo del reflejo habitual.** No propongo una sección «Sobre mí»: el sitio ya cuenta quién es a través del trabajo, que es mejor. Lo que sí propondría **evaluar** es una fotografía real pequeña en Trayectoria o Contacto, donde la conversación ya es personal. No en el hero: ahí el avatar está haciendo bien su trabajo.

Es una decisión tuya, no un defecto.

---

# 7. UX

**HECHO — comprobado navegando, no leyendo `href`:**

| Elemento | Resultado |
|---|---|
| Rutas directas `/`, `/caso/tokyo-tunning`, `/caso/agente-comercial` | 200 · resuelven ✅ |
| Ruta antigua `/caso-tokyo-tunning` | 200 · sigue funcionando ✅ |
| Anchors del navbar | Funcionan, con `scroll-mt` correcto ✅ |
| Navbar sticky | Transparente arriba, sólido al bajar ✅ |
| Menú móvil | Abre, cierra al elegir, `aria-expanded` correcto ✅ |
| Enlaces externos | 12, todos `target="_blank"` + `rel="noopener noreferrer"` ✅ |
| Tarjetas apiladas (sticky) | Funcionan en escritorio, desactivadas <1024 px ✅ |
| Restauración de scroll entre rutas | Correcta ✅ |
| Errores de consola | **0** ✅ |

**HECHO — jerarquía de CTA en el hero.** «Ver mi trabajo» es ámbar sólido; «Hablemos» es contorno. **Domina claramente el primero**, que es lo correcto: primero la evidencia, después el contacto.

**HECHO — raíl de evidencia.** Los tres datos (`3 años`, `27:1`, `Full Stack Python`) están al pie del hero, dentro del primer viewport en pantallas ≥800 px de alto.

**INTERPRETACIÓN.** No parece un dashboard: son tres datos con etiqueta en monoespaciada, no tarjetas con iconos. Aporta credibilidad temprana sin competir con el retrato. En viewports cortos queda justo en el borde del fold — aceptable.

---

# 8. UI Y DIRECCIÓN DE ARTE

**HECHO.** Neutro frío `#0B0D10`, un único acento ámbar `#E8A33D`, superficie clara `#F1EFEA` a media página, Outfit display + Inter cuerpo, monoespaciada como etiqueta, secciones numeradas, dos opacidades de línea, tres radios.

**INTERPRETACIÓN — ¿tiene dirección de arte reconocible o sólo está bien diseñado?**

**Tiene dirección.** Tres decisiones la sostienen y ninguna es genérica:
1. El acento ámbar en lugar del cyan por defecto del sector.
2. El corte a superficie clara a mitad del recorrido.
3. El dato siempre acompañado de su metodología (`0,3 s · LCP · Lighthouse, laboratorio · jun 2026`), que convierte el rigor en un elemento visual.

**La prueba del nombre oculto:** si se tapa «Felipe Droguett», quedan el retrato 3D, el sistema de secciones numeradas, el ámbar y el patrón dato+metodología. **Sigue siendo reconocible.** No es una plantilla.

**Reserva honesta:** el sitio es reconocible, no memorable. La diferencia entre ambas cosas está en piezas visuales propias —diagramas, capturas, ilustración de datos— y ahí todavía hay poco.

---

# 9. HERO — AUDITORÍA MICROSCÓPICA

## Nombre
**HECHO.** `min(10.2vw, 12.5rem)` en una línea desde 1280 px. Gradiente vertical mate con color de respaldo si `background-clip:text` no está soportado. Sin recorte en ningún ancho probado. Kerning `-0.05em`, correcto a esa escala.
**Único defecto: la oclusión (§3).**

## Personaje
**HECHO.** WebP de 111 kB, 1100×1639, con `width`/`height` declarados, `fetchpriority="high"` y `<link rel="preload">`. Máscara de degradado en los bordes superior y laterales; en móvil también inferior.
**INTERPRETACIÓN.** **No parece pegado.** La máscara y el pozo oscuro del fondo hacen que el recuadro original desaparezca; no hay borde visible en ningún ancho. La integración está bien resuelta.

## Parallax
**HECHO.** Verificado moviendo el cursor a las cuatro esquinas, centro y saliendo del hero:

| Posición | Transform aplicado |
|---|---|
| Superior izquierda | `−21,12 px, −12,88 px · rotateY −0,768° · rotateX 0,736° · scale 1,008` |
| Superior derecha | `+21,12 px, −12,88 px` |
| Inferior izquierda | `−21,12 px, +12,88 px` |
| Inferior derecha | `+21,12 px, +12,88 px` |
| Centro | identidad (sin transform) |
| Al salir | vuelve a reposo |

Transición de entrada 420 ms, de salida 900 ms. Desactivado en táctil, <1024 px y con `prefers-reduced-motion`.

**INTERPRETACIÓN.** **Perceptible sin distraer.** Se descubre al mover el ratón, no se anuncia. El retorno más lento se nota y da sensación de peso. Sin latencia apreciable: la interpolación la hace el compositor, no un bucle de JavaScript.

## Copy
**HECHO.** `--ink-muted` con partes en `--ink`. Contraste correcto en escritorio.
**Defecto: se superpone al rostro en móviles cortos (§4).**

---

# 10. RESPONSIVE

| Viewport | Resultado |
|---|---|
| 320×568 | ⚠️ **Texto sobre la cara** (§4) |
| 360×800 | ⚠️ Primera línea sobre el rostro (§4) |
| 390×844 | ✅ Composición correcta |
| 430×932 | ✅ |
| 768×1024 | ✅ Nombre en dos líneas, retrato bajo él |
| 1024×768 | ✅ Dos líneas |
| 1280×720 | ❌ **«DRO» oculto** (§3) |
| 1366×768 | ❌ **«DRO» oculto** (§3) |
| 1440×900 | ✅ |
| 1536×864 | ❌ **«DRO» oculto** (§3) |
| 1920×1080 | ✅ |

**HECHO.** Cero desbordamiento horizontal en todos los anchos.

---

# 11. TRABAJO

## 01 · Tokyo Tunning
**HECHO.** Preview real de la tienda, estado `En producción` en verde, período `2023 – 2026`, cinco etiquetas, botón ámbar «Leer el caso». Sticky funcional.
**INTERPRETACIÓN.** La tarjeta transmite escala. La captura, sin embargo, muestra sobre todo una fotografía de producto oscura; comunica «tienda automotriz» pero no comunica «$15M al mes».

## 02 · Agente comercial
**HECHO.** Grafo del workflow con 9 nodos de la columna principal, dos compuertas en ámbar y dos ramas laterales con línea discontinua. Estado `En validación`. Pie explicativo.
**INTERPRETACIÓN.** Un técnico obtiene señal inmediata: ve ramificación, compuertas y dónde entra el modelo. Un no técnico ve una estructura ordenada y el pie le dice qué significa. **Cumple en los dos niveles.**

## 03 · El Telégrafo
**HECHO.** Enlace comprobado: 200. La preview coincide con el sitio real (la llave con «SOS» traducido). La descripción abre con *«Volví al código Morse que aprendí de niño…»*.
**INTERPRETACIÓN.** Lee como proyecto personal real, no como ejercicio académico. La admisión de que la interfaz «le debe bastante al contenido» suma credibilidad.

## 04 · El Bajón de la Cami
**HECHO.** Enlace comprobado: 200. El portfolio declara: estado `Prototipo funcional · pausado`, contexto `Prototipo de menú digital y pedidos · cliente`, y una nota con regla ámbar que dice literalmente *prueba de concepto*, *no el catálogo definitivo*, *imágenes generadas con IA*, *productos demostrativos*, *no corresponden a la oferta real*, *actualmente en pausa*.
**INTERPRETACIÓN.** **Las seis aclaraciones están presentes y son legibles.** No hay confusión posible entre prototipo funcional y estado comercial.

---

# 12. CASE STUDY · TOKYO TUNNING

**HECHO.** Seis capítulos numerados. Toda métrica lleva herramienta, fecha y si es laboratorio o campo. Incluye una nota explícita de que un 100 de Lighthouse **no** demuestra conformidad WCAG y que al remedir hoy da 96.

**INTERPRETACIÓN.** El rigor metodológico es el punto más fuerte del documento. Declarar que tus propias métricas derivaron tras la entrega es poco común y juega a favor.

**HALLAZGO — afirmaciones que dependen de una fuente no verificable.**

**HECHO.** Tres cifras se atribuyen al cliente sin posibilidad de comprobación externa:
- `$500K → $15M al mes` — «reportado por el cliente»
- `≈25% online` — «reportes internos del cliente»
- `$800.000 perdidos` — «estimación del negocio por revisión manual»

**INTERPRETACIÓN.** Las tres **están correctamente etiquetadas**, lo cual es lo correcto. Pero son también las tres cifras más impresionantes del sitio. Un lector escéptico observará que lo verificable es modesto y lo espectacular es auto-reportado.

**IMPACTO — bajo-medio.** No es deshonesto; está declarado. Pero conviene saber que la carga de credibilidad recae sobre la única métrica verificable de forma independiente: el ROAS de plataforma.

**RECOMENDACIÓN.** Ninguna corrección. Si en algún momento hay una captura del panel de anuncios que se pueda anonimizar, sería la pieza que más subiría la credibilidad del caso.

---

# 13. CASE STUDY · AGENTE — ANONIMIZACIÓN

**HECHO — comprobado sobre el chunk publicado `CasoAgente-Bkdp6igw.js`.** Búsqueda de: `tokyo`, `tunning`, nombres de persona, `kommo`, identificadores de workflow, `execution`, `localhost`, puertos `300x`, rutas de webhook, dominios `.netlify.app`, teléfonos chilenos.

**Resultado: cero coincidencias.**

**HECHO.** El chunk del caso de Tokyo Tunning no contiene ninguna referencia a `agente`, `conversacional` ni a la ruta del otro caso. **No hay enlace cruzado en ninguna dirección.**

**HECHO.** El caso nunca usa «en producción». Dice `En validación · no atiende clientes reales`, y su capítulo 8 lista explícitamente *pruebas E2E contra el CRM en vivo: no ejecutadas, no autorizadas* y *envío real a clientes: no, el envío está simulado*.

## 13.1 Riesgo residual que sí existe

**HECHO.** El hero de la home dice: *«Entré a grabar videos para un negocio. Tres años después sigo ahí: contenido, campañas, tienda online y, desde julio, atención automatizada.»*
La tarjeta 01 identifica ese negocio como Tokyo Tunning y menciona que le grabó el contenido.
La tarjeta 02 sitúa el agente en «2026 · en curso».

**INTERPRETACIÓN.** Un lector atento puede encadenar: *el negocio donde lleva tres años* + *desde julio, atención automatizada* + *agente comercial en curso, cliente no divulgado* → **deduce el cliente sin salir de la home**.

**IMPACTO — medio.** La anonimización del case study es impecable; **la narrativa del hero la debilita**. No hay dato filtrado, pero la inferencia está disponible.

**RECOMENDACIÓN.** Decisión tuya, no defecto técnico. Dos salidas: ajustar la frase del hero para no atribuir la automatización al mismo negocio, o pedir autorización y unificar. La segunda es mejor si el cliente accede, porque la continuidad de tres años es tu mejor activo narrativo.

**Archivo si se corrige:** `src/components/Hero.jsx`, párrafo del lead.

---

# 14. MARKETING PERSONAL

**Qué estoy comprando si contacto a Felipe.** La respuesta que da el sitio hoy es *«a alguien que resuelve el problema que tenga el negocio, sea de tráfico, de tienda o de atención»*. Es honesta y coherente, y **no está cerrada**.

**INTERPRETACIÓN.** Para founders y socios eso es una ventaja. Para una pyme que busca contratar algo concreto es una fricción: no hay entregable nombrado en ninguna parte.

**HECHO — prueba antes del CTA.** El contacto está al final, tras dos casos, cuatro capacidades y la trayectoria. **Hay prueba de sobra antes de pedir nada.** No llega tarde: llega en el punto correcto.

**HECHO — lenguaje.** Busqué frases intercambiables. **No encontré ninguna.** Ni «soluciones innovadoras», ni «transformo negocios», ni «apasionado por». El copy más fuerte del sitio —«No vendo una herramienta. Vendo criterio.», «sé lo que se siente ser el responsable de que algo funcione un sábado a las 11 de la noche»— no se puede pegar en otro portfolio.

**Lo más cercano a genérico:** *«Herramientas aprendidas para resolver problemas reales»* ya no existe, y *«Trabajo dentro de negocios que venden online»* (meta description) es correcta pero podría pertenecer a varios perfiles. Es el único punto flojo y está en metadatos, no en pantalla.

---

# 15. CONECTIVIDAD PROFESIONAL

**HECHO — enlaces abiertos y seguidos:**

| Destino | HTTP | Redirección | En pantalla |
|---|---|---|---|
| github.com/Spectre-x46 | 200 | — | Navbar · Contacto · Pie |
| linkedin.com/in/fdroguetto | 999* | — | Navbar · Contacto · Pie |
| acreditta.com/credential/… | 200 | — | Hero · Trayectoria · Pie |
| codigo-morse-online.netlify.app | 200 | — | Trabajo 03 |
| elbajondelacami.netlify.app | 200 | — | Trabajo 04 |
| tokyotunning.cl | 200 | → www | Caso TT |
| mailto + wa.me | — | — | Contacto |

\* LinkedIn devuelve 999 a peticiones automatizadas. Es su respuesta anti-bot estándar, no un enlace roto: en navegador real resuelve.

**HECHO.** 12 enlaces externos, **todos** con `target="_blank"` y `rel="noopener noreferrer"`. Cero enlaces sin nombre accesible. Los iconos del navbar declaran *«GitHub — se abre en una pestaña nueva»*.

**HECHO.** Reparto equilibrado: 3 enlaces por destino. Ninguno como CTA protagonista.

**Observación, sin auditar el destino** (queda para el siguiente sprint): el portfolio ahora **cede impresión** a GitHub en tres puntos. Si ese destino no acompaña al nivel del sitio, los tres enlaces trabajan en contra en vez de a favor.

---

# 16. ACCESIBILIDAD

## 16.1 Lo que está bien

**HECHO.** Un solo `<h1>`. 18 encabezados sin saltos de nivel. Landmarks correctos (`header`, `nav`, `main`, `aside`, `footer`). 33 enfocables, **todos con nombre accesible**. `:focus-visible` en todos. Enlace «Saltar al contenido» con contorno propio. Las cuatro imágenes con `alt` descriptivo y dimensiones declaradas (el retrato con `alt=""`, correcto: es decorativo y está en un contenedor `aria-hidden`). Cero desbordamiento.

## 16.2 Contraste — y una corrección a mi propio trabajo

**HECHO.** Lighthouse sobre producción da **Accesibilidad 96**, con `color-contrast` fallando y **30 elementos** listados.

**HECHO.** Al medir el estado ya asentado —esperando a que terminen todas las transiciones y contabilizando la opacidad acumulada de los ancestros— quedan **3 fallos reales**:

| Elemento | Tamaño | Ratio | Mínimo | ¿Decorativo? |
|---|---|---:|---:|---|
| Índice `03` en «Otros trabajos» (móvil) | 15 px | 3,49 | 4,5 | sí, `aria-hidden` |
| Índice `04` en «Otros trabajos» (móvil) | 15 px | 3,49 | 4,5 | sí, `aria-hidden` |
| `03 — Capacidades` (`.eyebrow-light`) | 13 px | 3,84 | 4,5 | **no** |

**INTERPRETACIÓN.** Los otros 27 elementos que Lighthouse marca son **artefactos de la animación de aparición**: el auditor toma su muestra mientras los bloques están a media transición y calcula el contraste sobre un color mezclado que ningún usuario llega a ver fijo.

**Esto merece decirse con claridad:** en auditorías anteriores reporté «0 fallos de contraste». **Esa medición era incorrecta** — mi script resolvía el fondo tomando el primer ancestro opaco e **ignoraba la opacidad heredada**, y además corría en anchos donde los índices `03`/`04` están ocultos. El script corregido, que acumula capas translúcidas y opacidad de ancestros, encuentra los tres fallos de arriba.

**La animación de aparición hace poco fiable la auditoría automática en las dos direcciones**: antes inflaba el resultado ocultando elementos; ahora lo deprime capturándolos a medio camino.

**IMPACTO — bajo para los dos índices** (decorativos, `aria-hidden`, no transmiten información). **Medio para `.eyebrow-light`**: es texto visible y real.

**RECOMENDACIÓN.** Subir `--ink-deco` para tamaños pequeños y sustituir la opacidad de `.eyebrow-light` por un color explícito, como ya se hizo con `.ink-2` y `.ink-3`.
**Archivos:** `src/index.css` (tokens `--ink-deco` y `.on-light .eyebrow-light`).

## 16.3 Pruebas manuales

**HECHO.** Recorrido con Tab desde el inicio: el orden sigue el orden visual. El enlace de salto aparece primero. `Enter` activa. El menú móvil abre y cierra. `prefers-reduced-motion` desactiva la entrada del hero, el parallax y las apariciones.

**HECHO — robustez del contenido.** Si el usuario hace scroll muy rápido, ningún bloque queda invisible: hay una red de seguridad que revela todo a los 3 segundos. Verificado sin hacer scroll en absoluto: 22 de 22 bloques visibles.

---

# 17. PERFORMANCE (producción, laboratorio)

**HECHO — primera visita sin caché, conexión de escritorio:**

```
FCP ....................... 1.484 ms
LCP ....................... 1.484 ms
CLS ....................... 0
DOMContentLoaded .......... 211 ms
Peticiones ................ 9
Transferido ............... 468 kB
Descomprimido ............. 650 kB
  imágenes ................ 313 kB
  fuentes ................. 79 kB
  JS ...................... 70 kB (comprimido; 231 kB sin comprimir)
  CSS ..................... 5,4 kB
```

**Estos son datos de laboratorio en una sola máquina y una sola conexión. No son datos de usuarios reales.**

**HECHO — el recurso más pesado es `proyecto-tokyo.jpg`, 151,8 kB**, el único que sigue en JPEG. Las tres imágenes en WebP pesan 111, 37 y 13 kB.

**HECHO — el elemento LCP no es el retrato**, sino un enlace (`<a class="inline-flex min-h-[44px]…">`).

**INTERPRETACIÓN.** El `preload` y el `fetchpriority="high"` del retrato **no están comprando LCP**, porque el elemento más grande que pinta primero es texto/UI, no la imagen. No es un defecto —el LCP de 1,48 s está bien— pero significa que ese preload está reservando prioridad de red para algo que no la necesitaba.

**HECHO.** Los case studies siguen en chunks separados y no se descargan en la primera visita. Caché de assets `immutable`, un año. Compresión activa.

**RECOMENDACIÓN.** Convertir `proyecto-tokyo.jpg` a WebP (ahorro estimado ~110 kB, ~24% del peso total). Es el cambio de mejor relación esfuerzo/beneficio de toda la auditoría de rendimiento.
**Archivos:** `public/assets/proyecto-tokyo.jpg`, referencias en `src/components/Work.jsx` y `src/pages/CasoTokyoTunning.jsx`.

---

# 18. SEO E INDEXABILIDAD

## 18.1 Correcto

`<title>`, meta description, `canonical`, `lang="es"`, favicon (`image/svg+xml`), Open Graph completo con `og:image` 1200×630, Twitter card, Schema.org `Person` con `sameAs` (GitHub + LinkedIn) y `hasCredential` enlazando a Acreditta. `robots.txt` correcto. `sitemap.xml` con las tres rutas.

## 18.2 CSR total — medido

**HECHO.** Las tres rutas devuelven **HTML byte-idéntico** (mismo md5, 4.560 bytes). Sin ejecutar JavaScript, el cuerpo no contiene **ni una sola palabra** del contenido. No hay `<noscript>`.

**INTERPRETACIÓN — implicaciones separadas por tipo de consumidor:**

| Consumidor | Efecto |
|---|---|
| Google | Renderiza JS. Indexa bien, con retraso de la cola de renderizado |
| **Previsualizaciones sociales** (WhatsApp, LinkedIn, Slack, Discord, X) | **No ejecutan JS.** Al compartir un case study muestran el título, la descripción y la imagen **de la home** |
| Buscadores sin renderizado (Bing en parte, DuckDuckGo, Brave) | Ven una página vacía |
| Crawlers de IA / agentes | Ven una página vacía |

**IMPACTO — medio, y concentrado en un caso concreto.** El daño real y comprobable es el de las previsualizaciones: compartir `/caso/agente-comercial` en LinkedIn no muestra el caso del agente, muestra la home. Y compartir case studies es exactamente lo que se hace al postular.

**RECOMENDACIÓN.** Prerenderizado estático de las tres rutas en el build. **No lo clasifico como P0**: el sitio se indexa, se ve y funciona. Es P1 por el efecto en previsualizaciones.
**Archivos:** `vite.config.js` (plugin de prerender), `index.html`.

## 18.3 404 blando

**HECHO.** `/ruta-inexistente` devuelve **200** con la aplicación, que renderiza la home.
**INTERPRETACIÓN.** Para un buscador es un *soft 404*: URLs inexistentes responden «éxito».
**IMPACTO — bajo.** Ningún usuario llega ahí, pero ensucia la indexación si alguien enlaza mal.
**RECOMENDACIÓN.** Una ruta `*` con una página 404 real. **Archivo:** `src/App.jsx`.

## 18.4 Detalle menor

**HECHO.** El HTML publicado incluye un comentario de código: *«Estos valores son el punto de partida; cada ruta los sobreescribe con los suyos desde src/lib/useSeo.js»*.
**IMPACTO — cosmético.** Revela una ruta interna sin valor para nadie. **Archivo:** `index.html`.

---

# 19. SEGURIDAD Y EXPOSICIÓN

**HECHO — cabeceras en producción:**

| Cabecera | Valor |
|---|---|
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains; preload` ✅ |
| `X-Frame-Options` | `DENY` ✅ |
| `X-Content-Type-Options` | `nosniff` ✅ |
| `Referrer-Policy` | `strict-origin-when-cross-origin` ✅ |
| `Permissions-Policy` | `geolocation=(), microphone=(), camera=()` ✅ |
| `Content-Security-Policy` | **ausente** |

**HECHO — comprobación de exposición.** Ninguna de estas rutas devuelve el archivo real (todas caen en el fallback de la SPA): `/Reportes/`, la propia auditoría en Markdown, `/assets-source/felipe-3d-original.jpg`, `/src/App.jsx`, `/package.json`, `/.git/config`, `/og-source.html`, y el source map `index-*.js.map`.

**HECHO.** Búsqueda de secretos en el bundle publicado: las coincidencias de `password` provienen del mapa interno de tipos de `<input>` de React DOM; las de `webhook` son etiquetas del propio diagrama y del copy. **Ningún secreto real.**

**INTERPRETACIÓN.** La exposición está bien controlada. La ausencia de CSP es la única brecha, y es de defensa en profundidad, no un agujero.

---

# 20. ERRORES Y CASOS RAROS

**HECHO.** Recarga directa en cada ruta: correcta. Atrás/adelante: correcto. Anchors con hash desde URL: correctos. Redimensionado y cambio de orientación: sin roturas. Consola: **0 mensajes** en las tres rutas. Sin imágenes 404. Fuentes cargan. Favicon con `content-type` correcto.

---

# 21. COMPARACIÓN CON LA AUDITORÍA ANTERIOR

*Leída sólo después de completar la observación de producción.*

## P0 de agosto — estado real hoy

| # | Hallazgo original | Estado |
|---|---|---|
| P0-01 | El agente de IA no existe públicamente | ✅ **Cerrado** — case study completo |
| P0-02 | «ACTUALIDAD» describía feb–jun 2026 | ✅ **Cerrado** |
| P0-03 | Miniatura mostraba el sitio anterior | ✅ **Cerrado** — tarjeta eliminada |
| P0-04 | Bio de GitHub, repos de curso | ⏸️ **Abierto** — fuera de alcance por instrucción |
| P0-05 | `WCAG 100/100` y `LCP 300ms` sin fecha | ✅ **Cerrado** — fechados, con método y nota |
| P0-06 | Sin `og:image` | ✅ **Cerrado** |
| P0-07 | `Skills` omitía el stack real | ✅ **Cerrado** — capacidades con evidencia |
| P0-08 | Portfolio sin versionar | 🟡 **Parcial** — hay historial local, falta remoto |
| P0-09 | Formación descrita como pendiente | ✅ **Cerrado** — credencial verificable enlazada |
| P0-10 | Marketing reducido a 4 chips | ✅ **Cerrado** |
| P0-11 | LinkedIn desalineado | ⏸️ **Abierto** — fuera de alcance |

**9 de 11 cerrados.** Los dos abiertos lo están por decisión explícita.

## P1 relevantes

Cerrados: proyectos en segunda posición (antes 5ª), reparto de peso (Trayectoria 39%→~13%), acceso a los casos (antes enlace de 190×16 px), foco visible, evidencia del hero visible en móvil, favicon, metadatos, dominio *(pendiente)*.

**Deuda que sigue abierta y era conocida:** sin prerender, `proyecto-tokyo.jpg` sin optimizar, sin CSP, sin case study propio de marketing, dominio gratuito, email personal.

## Problemas NUEVOS que introdujo V3

| # | Nuevo | Origen |
|---|---|---|
| 1 | **«DRO» oculto en 16:9** | El retrato del nuevo hero |
| 2 | **Texto sobre la cara en móviles cortos** | El velo del nuevo hero |
| 3 | Tres fallos de contraste en tokens nuevos | `--ink-deco`, `.eyebrow-light` |
| 4 | Inferencia del cliente desde el hero | La narrativa nueva del lead |
| 5 | Mi propio script de contraste daba falsos negativos | Método, no producto |

**INTERPRETACIÓN.** V3 cerró casi toda la deuda estratégica y **creó deuda visual nueva**, concentrada en la pieza que más cambió: el hero. Es el patrón esperable, y los dos defectos son de calibración, no de concepto.

---

# 22. TABLA DE HALLAZGOS

| ID | Área | Hallazgo | Prio | Archivo a tocar |
|---|---|---|---|---|
| PR-01 | Hero | «DRO» oculto en 16:9 (1280/1366/1536) | **P0** | `src/components/Hero.jsx` |
| PR-02 | Hero móvil | Párrafo sobre el rostro a 320 y 360 | **P0** | `src/components/Hero.jsx` |
| PR-03 | SEO/social | CSR total: previsualizaciones de los casos muestran la home | P1 | `vite.config.js`, `index.html` |
| PR-04 | Privacidad | El hero permite inferir el cliente del caso anonimizado | P1 | `src/components/Hero.jsx` |
| PR-05 | A11y | `.eyebrow-light` a 3,84:1 (texto visible) | P1 | `src/index.css` |
| PR-06 | Performance | `proyecto-tokyo.jpg` 152 kB sin convertir a WebP | P1 | `public/assets/`, `Work.jsx`, `CasoTokyoTunning.jsx` |
| PR-07 | A11y | Índices `03`/`04` a 3,49:1 en móvil (decorativos) | P2 | `src/index.css` |
| PR-08 | SEO | 404 blando: rutas inexistentes devuelven 200 | P2 | `src/App.jsx` |
| PR-09 | Contenido | Capas del caso vs. grafo de la tarjeta sin explicar | P2 | `src/pages/CasoAgente.jsx` |
| PR-10 | Marketing | Sin entregable nombrado para cliente pyme | P2 | decisión, no archivo |
| PR-11 | Performance | `preload` del retrato no compra LCP | P3 | `index.html` |
| PR-12 | Seguridad | Sin CSP | P3 | `netlify.toml` |
| PR-13 | Higiene | Comentario de código con ruta interna en el HTML | P3 | `index.html` |
| PR-14 | Contenido | Preview de TT no comunica la escala del caso | P3 | `public/assets/` |
| PR-15 | Identidad | Sin fotografía real en ninguna parte | Decisión | — |

**P0: 2 · P1: 4 · P2: 4 · P3: 4 · Decisión: 1**

---

# 23. PUNTUACIÓN POR DIMENSIÓN

| Dimensión | Nota | Justificación |
|---|:---:|---|
| Primera impresión | **7,5** | Memorable y distinta; penalizada porque el apellido no se lee en 16:9 |
| Dirección de arte | **8,0** | Ámbar sobre neutro, corte a claro, dato con metodología. Coherente y propia |
| Identidad | **7,5** | Pasa la prueba del nombre oculto. Reconocible, todavía no memorable |
| UX | **8,5** | Navegación limpia, rutas correctas, orden de lectura acertado, cero errores |
| UI | **8,0** | Sistema consistente; tres fallos de contraste en tokens nuevos |
| Copy | **9,0** | Sin una sola frase intercambiable. Lo mejor del sitio |
| Marketing personal | **7,0** | Convence de la capacidad; no nombra un entregable |
| Credibilidad | **8,5** | Métricas fechadas y con método; deuda técnica declarada |
| Claridad profesional | **8,0** | Se entiende qué hace en 15 s; la mezcla se lee como secuencia |
| Humanidad | **6,5** | El profesional se conoce bien; la persona menos. Sin fotografía real |
| Recruiter no técnico | **7,5** | Credencial verificable ayuda; la trayectoria colapsada estorba |
| Recruiter técnico | **8,0** | Stack real y visible; depende del destino de GitHub |
| Tech Lead | **9,0** | Arquitectura, fallos medidos, límites declarados. El mejor servido |
| Cliente pyme | **7,0** | La sección clara funciona; falta el «qué contrato» |
| Founder | **8,5** | La cadena causal está explícita y demostrada sobre un caso longitudinal |
| Responsive | **6,5** | Cero overflow, pero dos defectos de composición en tamaños muy comunes |
| Accesibilidad | **8,0** | Semántica, foco y teclado correctos; 3 fallos reales de contraste |
| Performance | **8,0** | LCP 1,48 s, CLS 0, code splitting; una imagen sin optimizar |
| SEO | **7,0** | Metadatos completos; CSR rompe las previsualizaciones de los casos |
| Seguridad | **8,5** | Cabeceras completas salvo CSP; cero exposición |
| Ecosistema externo | **7,0** | Conectividad bien medida; el destino GitHub no auditado y es el eslabón dudoso |

---

# 24. VEREDICTO

**1 · ¿La página representa de verdad a Felipe hoy?**
**Sí.** Muestra las tres capas —marketing y contenido, producto digital, sistemas de IA— con evidencia para cada una y con el estado real de cada cosa. La brecha de seis meses que motivó la primera auditoría está cerrada.

**2 · ¿Qué entiende un extraño?**
Que trabaja dentro de negocios que venden online, que lleva tres años en el mismo sitio, y que empezó grabando videos y terminó automatizando la atención. Lo entiende en unos quince segundos y sin jerga.

**3 · ¿Qué cree que sabe hacer?**
Traer clientes, construir la tienda, automatizar la atención y probar que funciona — literalmente, porque así están nombradas las capacidades y cada una lleva su evidencia enlazada.

**4 · ¿Qué NO queda claro?**
Qué se le contrata exactamente. No hay entregable, formato ni alcance en ninguna parte. Y en 16:9, el apellido.

**5 · ¿Confía en las afirmaciones?**
Sí, y por una razón poco común: el sitio declara sus límites. Dice que el agente no atiende clientes reales, que un 100 de Lighthouse no prueba conformidad WCAG, que las imágenes de un prototipo son generadas con IA. Eso compra más credibilidad que las cifras.

**6 · ¿Lo contactaría un cliente?**
Un founder o una empresa con un problema definido, sí. Una pyme buscando «una página web», probablemente no: no encuentra el producto.

**7 · ¿Lo entrevistaría un recruiter?**
Sí. Con la reserva de que la experiencia está colapsada tras un botón.

**8 · ¿Un tech lead querría abrir GitHub?**
**Sí, y ese es exactamente el riesgo.** El sitio genera la curiosidad y después cede el control. Es el siguiente sprint y es el correcto.

**9 · ¿Tiene identidad propia?**
Sí. Tapando el nombre siguen quedando el retrato, las secciones numeradas, el ámbar y el patrón dato+metodología.

**10 · Las tres cosas que cambiaría**

1. **Poner el tope de altura al retrato** (§3.3). Es una línea de CSS y devuelve el apellido en la resolución de escritorio más común.
2. **Subir el velo del hero en móvil** (§4). El texto que explica a qué se dedica no puede estar sobre una cara.
3. **Prerenderizar las tres rutas.** Compartir un case study en LinkedIn debe mostrar el case study, no la home — y compartir case studies es justo lo que se hace al postular.

Las tres son correcciones acotadas. Ninguna toca la arquitectura ni el contenido.

---

**FIN — auditoría de producción 2026-08-19**

*Cero cambios implementados. Sin push, sin deploy, sin modificar GitHub ni LinkedIn.*
*Evidencia: `./evidencia-produccion/` · 7 capturas de producción.*
