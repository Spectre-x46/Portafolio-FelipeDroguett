# AUDITORÍA DE CIERRE — LINKEDIN

**Objeto:** linkedin.com/in/fdroguetto · tras la implementación automática y los ajustes manuales posteriores
**Fecha:** 2026-08-20 · **Método:** perfil autenticado + previsualización del perfil público + móvil 390 px
**Estado:** DIAGNÓSTICO. **Cero cambios implementados** en esta pasada.
**Evidencia:** capturas en el scratchpad de la sesión (`audit-li-top.png`, `audit-li-movil.png`, `audit-li-featured.png`, `audit-foto.png`)

---

## 1 · Veredicto

El perfil está bien construido y cumple su función. La trayectoria se lee correctamente, el
posicionamiento no contradice al portfolio ni a GitHub, y los datos antiguos que motivaron la
fase desaparecieron: no queda «Student» ni «En formación» describiendo el estado actual, ni
«Growth Marketing», ni «Marketing 360», ni pendones y pre-prensa como titular, ni el 2.900%.

Los ajustes manuales de Felipe mejoraron lo que la automatización no pudo tocar: **sector →
«Desarrollo de software»**, **OpenToWork apagado y marco verde retirado**, y headline acortado a
dos segmentos.

Queda **un P0**: un pie de adjunto en Tokyo Tunning que contradice a la propia tarjeta.

**Puntuación: 8,3 / 10**

| Dimensión | Nota |
|---|:---:|
| Claridad profesional | 9,0 |
| Trayectoria legible | 9,0 |
| Puentes y evidencia | 9,0 |
| Defendibilidad de los claims | 8,5 |
| Jerarquía | 8,0 |
| Coherencia entre superficies | 7,5 |
| Presentación visual | 7,0 |

**Decisión: REQUIERE UNA ÚLTIMA CORRECCIÓN** (sólo por el P0).

---

## 2 · Estado verificado del perfil

| Campo | Valor actual | ¿OK? |
|---|---|:---:|
| Nombre | Felipe Droguett Ortiz | ✅ |
| Headline | `Desarrollo web, e-commerce y automatización comercial \| Integraciones, CRM y agentes conversacionales` | ✅ |
| Ubicación | Gran Santiago, Región Metropolitana de Santiago, Chile | ✅ |
| Sector | Desarrollo de software | ✅ |
| URL | linkedin.com/in/fdroguetto | ✅ |
| Perfil público | Activado, todas las secciones en «Permitir» | ✅ |
| OpenToWork | Apagado · marco verde retirado | ✅ |
| Foto | Real, entorno técnico, sin marco | ⚠️ P2 |
| Banner | Nuevo, sistema visual del portfolio | ⚠️ P1 en móvil |
| Acerca de | 4 párrafos, ~1.600 caracteres | ✅ |
| Destacado | Portfolio → Caso Tokyo → GitHub, en ese orden | ⚠️ P1 miniatura |
| Experiencia | 8 entradas | ⚠️ P0 en un adjunto |
| Educación | Duoc UC · UNAB (Contador Auditor, no finalizado) · Talento Digital | ✅ |
| Certificaciones | Bootcamp Full Stack Python (Talento Digital) + Google | ✅ |
| Proyectos | El Telégrafo · tplink-monitor-mode | ✅ |
| Principales aptitudes | Diseño Web · Construcción de Software · Estrategia de marketing · Meta Business Suite · Python | ⚠️ P2 |
| Contacto | Sitio web: portfolio · correo: **hotmail** | ⚠️ P1 |
| Enlaces salientes | 7 comprobados, **todos 200** | ✅ |
| Headline en móvil | Entero, sin desbordamiento horizontal | ✅ |

---

## 3 · Hallazgos

### P0-01 · La tarjeta de Tokyo Tunning se contradice a sí misma

En **Experiencia → Co-Founder & E-commerce Manager · Tokyo Tunning**, el adjunto
«Inicio - Tokyo Tunning» conserva el pie:

> «Actualmente funciona pero no bajo mi operatoria.»

Tres líneas más arriba, la descripción de la misma tarjeta dice:

> «La relación continúa hoy: ya no como cofundador operativo, sino como consultoría externa.»

Contradice además la entrada de consultoría («Cliente principal actual: Tokyo Tunning») y el
portfolio («tres años después sigo ahí»).

Origen: al reescribir la descripción no se revisaron los pies de los adjuntos. Barridos los ocho
adjuntos del perfil, **es el único** con este problema.

**Arreglo:** Experiencia → Tokyo Tunning → adjunto «Inicio - Tokyo Tunning» → editar el pie.
Sugerencia: *«La tienda en producción. Hoy sigo a cargo de ella como consultoría externa.»*

---

### P1-01 · Dos correos distintos entre superficies

- **LinkedIn** (información de contacto): `felipedroguett18@hotmail.com`
- **Portfolio** (`src/components/Contact.jsx` y Schema.org de `index.html`): `felipedroguett18@gmail.com`

Ninguno es falso, pero reparten los mensajes entrantes en dos buzones. Hay que elegir el canónico
y dejarlo igual en las dos superficies.

### P1-02 · En móvil la foto tapa el texto del banner

Medido a 390 px:

```
banner   x = 0 … 390     (sin recorte: la imagen es 4:1 y el hueco 3,98:1)
avatar   x = 28 … 180    → ocupa el 0–46% del ancho del banner
texto    empieza al 38,4% → x = 150   ← 30 px por detrás del avatar
```

Se lee **«…rrollo web · e-commerce / …atización comercial»**: faltan «desa» y «autom».

En escritorio no ocurre — ahí el avatar sólo cubre hasta el 23% del ancho.
**Arreglo:** regenerar el banner con el bloque de texto más allá del 50% del ancho y volver a subirlo.

### P1-03 · La primera tarjeta de Destacado sale sin miniatura

El elemento **Portfolio** —el que abre el embudo— muestra un recuadro gris con icono de imagen rota.
Los otros dos sí tienen miniatura.

Comprobado que **no es culpa del portfolio**: `og-image.png` responde 200 (120 kB) y la home sirve
`og:title`, `og:description` y `og:image` correctos. Es la **caché de enlaces de LinkedIn**, que
guardó una versión antigua de esa URL — la misma que al añadirla rellenó el título con
«Felipe Droguett - Full Stack Developer», el del sitio anterior.

**Arreglo:** pasar `https://felipe-droguett.netlify.app` por el **Post Inspector** de LinkedIn.

---

### P2-01 · La foto es atmosférica, no un retrato

Es una foto real y en contexto técnico, así que cumple lo esencial. Pero la cara ocupa **~25% del
ancho del encuadre**, de perfil tres cuartos y iluminada sólo por los monitores. LinkedIn la muestra
a 152 px en el perfil, **48 px en resultados de búsqueda y ~32 px en comentarios**: ahí no es
identificable.

Además, el registro «código verde sobre negro en habitación oscura» es el que portfolio y GitHub
descartaron a propósito. Es una decisión, no un defecto; se anota el coste.

### P2-02 · Las «Principales aptitudes» no reflejan el titular

Lo único visible en la tarjeta es *Diseño Web · Construcción de Software · Estrategia de marketing ·
Meta Business Suite · Python*. El titular promete e-commerce, automatización, integraciones y CRM:
ninguno aparece. «Diseño Web» y «Construcción de Software» tampoco son términos que Felipe use en
las otras superficies.

La lista completa sí está bien ordenada (PostgreSQL, Django, n8n, API REST, Node.js, WooCommerce,
React.js, PHP, Comercio electrónico, Automatización de procesos, Desarrollo web…), pero esas cinco
son las que se leen.

### P2-03 · El título actual se extiende siete años hacia atrás

`Consultor de e-commerce, desarrollo y automatización comercial · jul 2019 – actualidad · 7 años 2 meses`

En 2019 no había n8n ni LLMs. La descripción lo ordena («Cómo trabajo, en orden») y el About cuenta
la cronología, así que es defendible — es lo normal en un hilo freelance que evoluciona. Es el único
punto donde un lector puntilloso puede preguntar «¿desde 2019?».

---

### P3

- `/caso/tokyo-tunning` responde **301 → `/caso/tokyo-tunning/`** mientras el `canonical` apunta a la
  forma sin barra. El enlace funciona (200 tras un salto, 24.312 B, con su OG propio). La regla de
  reescritura 200 de `_redirects` no llega a aplicarse porque el 301 de URLs bonitas de Netlify va antes.
- La publicación de hace 3 años («Soy un apasionado del Marketing…») queda segunda en Actividad. Es
  histórica y fechada, pero es autodescripción, no un evento, y envejece peor.
- **Destacado no se renderiza en la vista pública sin sesión** (sí Experiencia, Educación,
  Certificaciones, Proyectos, Cursos y Actividad). Es comportamiento de LinkedIn, mitigado porque el
  About nombra las dos URLs en texto plano.

---

## 4 · Lo que quedó bien y no hay que tocar

- **El About.** Los cuatro párrafos funcionan; el segundo cuenta la evolución como hechos encadenados
  sin enunciar la tesis. «Lo que no se puede comprobar, no se declara» es la frase que más distingue.
- **La estructura de Tokyo** (salvo el pie del adjunto): cofundación con fechas verificables,
  continuidad explicada en texto, etapa vigente alojada en la consultoría. Sin hueco cronológico.
  La cautela de las cifras es lo que mantiene creíble la cifra grande.
- **Universidad Andrés Bello**: disciplina «Contador Auditor», campo de título **vacío**, 2016–2017,
  descripción diciendo que no se finalizó. No afirma titulación por ninguna vía.
- **La trayectoria completa**: Falabella 2014 → La Polar → AutoTattersall → Moana Kai y Starken →
  Tokyo Tunning → bootcamp → consultoría técnica actual. Comercial/operación → emprendimientos →
  marketing/e-commerce → desarrollo → integraciones/automatización.
- **Las tres superficies conviven sin repetirse:**
  - LinkedIn: *Desarrollo web, e-commerce y automatización comercial | Integraciones, CRM y agentes conversacionales*
  - GitHub: *Construyo software y automatizaciones para negocios que venden online.*
  - Portfolio: *desarrollo, campañas y automatización comercial*
- **Todos los enlaces salientes responden 200**: portfolio, caso Tokyo, GitHub, El Telégrafo (demo y
  repo), tplink-monitor-mode y la credencial de Acreditta.
- Headline entero en móvil, sin desbordamiento horizontal.

**No tocar:** headline, About, descripción de la consultoría, descripción de Tokyo, Educación,
certificación, orden y textos de Destacado, los dos proyectos, sector, ubicación, OpenToWork, banner
en escritorio, y las seis experiencias históricas.

---

## 5 · Plan para mañana

| # | Acción | Prio | Dónde | Esfuerzo |
|---|---|:---:|---|---|
| 1 | Reescribir el pie del adjunto «Inicio - Tokyo Tunning» | **P0** | LinkedIn → Experiencia → Tokyo | 1 min · manual |
| 2 | Unificar el correo (elegir gmail o hotmail) | **P1** | LinkedIn contacto + `src/components/Contact.jsx` + `index.html` | 2 min + 1 commit |
| 3 | Regenerar el banner con el texto pasado el 50% del ancho | **P1** | Claude lo produce · Felipe lo sube | 10 min |
| 4 | Post Inspector sobre `felipe-droguett.netlify.app` | **P1** | linkedin.com/post-inspector | 1 min · manual |
| 5 | Cambiar 2 de las 5 «Principales aptitudes» por Comercio electrónico y Automatización de procesos | P2 | LinkedIn → Aptitudes (arrastrar) | 1 min · manual |

Las cuatro primeras son objetivas. La quinta admite discusión.

**Con el punto 1 corregido, el perfil está listo para congelar.**

---

## 6 · Después de esto

La superficie está resuelta. El techo ya no es el perfil: son **28 seguidores, 25 contactos y
0 visualizaciones en siete días**. Ninguna corrección de este documento mueve esa aguja — eso es
la fase de red y contenido, que no se ha empezado.

Otros frentes abiertos, ya documentados y fuera del alcance de esta fase:

- **Publicar el código del portfolio** desde un repositorio nuevo y limpio. Bloqueado: el repo local
  tiene 377 archivos versionados, 85 de ellos en `Reportes/` y 248 en `.claude/`.
- **Repasar los 13 repos restantes de GitHub**: 8 sin descripción, ninguno con topics.
- **Reordenar los pins de GitHub** para que Codigo-Morse abra (requiere arrastrar a mano).
- Deuda del portfolio: 404 blando, sin CSP, `og:image` propia del caso del agente, y el
  breakpoint `lg` (1024×768) con el mismo defecto del retrato que se corrigió en `xl`.

---

**FIN — auditoría de cierre de LinkedIn, 2026-08-20**
*Cero cambios implementados en esta pasada.*
