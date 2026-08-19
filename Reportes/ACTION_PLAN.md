# ACTION PLAN — PORTAFOLIO FELIPE DROGUETT
**Generado:** 7 Junio 2026 | Basado en AUDIT_REPORT.md  
**Priorización:** ROI de conversión / credibilidad / hora invertida

---

## CLASIFICACIÓN

| Prioridad | Tiempo estimado | Impacto |
|---|---|---|
| 🔴 CRÍTICO | Bloqueante | Sin esto, el portfolio no convierte |
| 🟠 ALTO | Esta semana | Aumenta significativamente la confianza |
| 🟡 MEDIO | Este mes | Mejora la calidad percibida |
| 🟢 BAJO | Cuando haya tiempo | Detalle de excelencia |

---

## FASE INMEDIATA — QUICK WINS (< 1 día total)

### QW-1 🔴 Deploy a Netlify
**Problema:** El sitio live sigue corriendo Bootstrap pre-S1 con 4 errores de consola. Todo el trabajo React es invisible para visitantes reales.  
**Acción:** Conectar repo GitHub a Netlify. Build command: `npm run build`. Publish: `dist/`.  
**Tiempo:** 30 min  
**Impacto:** El portfolio existe para el mundo real.

### QW-2 🔴 Fix color contrast footer
**Problema:** Lighthouse axe-core 4.11.4 falla en `footer p.text-slate-500`. Accessibility score: 94 en lugar de 100.  
**Acción:** En `Footer.jsx`, cambiar `text-slate-500` → `text-slate-400`.  
**Tiempo:** 5 min  
**Impacto:** Accessibility 94 → 100.

### QW-3 🔴 Nuevo screenshot del portfolio actual
**Problema:** `proyecto-portfolio.jpg` muestra el sitio viejo (Bootstrap azul). Contradicción visual directa con el stack React declarado.  
**Acción:** Con el sitio local corriendo en 1440px, tomar screenshot de la vista completa del Hero. Reemplazar `/public/assets/proyecto-portfolio.jpg`.  
**Tiempo:** 15 min  
**Impacto:** Elimina la contradicción visual más obvia del portfolio.

### QW-4 🟠 Agregar señal "Disponible para proyectos"
**Problema:** El visitante no sabe si Felipe acepta nuevos clientes o está buscando empleo.  
**Acción:** En el Hero, agregar un segundo badge o modificar el badge existente: dot verde animado + "Disponible para proyectos".  
**Tiempo:** 20 min  
**Impacto:** Reduce fricción para el visitante interesado. Señal de apertura comercial.

### QW-5 🟠 Agregar `loading="lazy"` a imágenes de proyectos
**Problema:** Las imágenes de proyectos cargan al inicio aunque estén below the fold.  
**Acción:** En `Projects.jsx`, agregar `loading="lazy"` a los dos `<img>`.  
**Tiempo:** 5 min  
**Impacto:** Performance LCP mejorado. Buena práctica.

### QW-6 🟠 Preconnect para Google Fonts
**Problema:** Google Fonts carga sin preconnect, añadiendo latencia innecesaria.  
**Acción:** En `index.html`, antes del `<link>` de Google Fonts:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```
**Tiempo:** 5 min  
**Impacto:** -150-300ms de latencia de fuentes.

---

## SPRINT 3 — DIFERENCIACIÓN (esta semana)

### S3.1 🔴 Foto personal
**Problema:** Sin foto = portfolio anónimo = sin confianza para cliente high-ticket o freelance.  
**Acción:** Una foto real. No necesita ser de estudio. Bien iluminada, fondo neutro o contexto de trabajo. Agregar al Hero (al lado del nombre o reemplazando el code block en mobile) o en sección Sobre Mí.  
**Tiempo:** 1 hora (tomar foto + editar básico + integrar)  
**Impacto:** El cambio individual de mayor impacto en percepción de confianza.

### S3.2 🔴 Sección "Sobre Mí" con narrativa de origen
**Problema:** El `#about` actual describe pilares profesionales. No dice quién es Felipe como persona.  
**Acción:** Nueva sección de 3 párrafos con la historia real. Propuesta de apertura:

> *"Crecí en La Portada, San Bernardo. Mis primeras interacciones con computadores fueron en un ciber del barrio — keyloggers, DOS, formateo de PCs. No lo estudié formalmente durante años porque me parecía 'ñoño'. Ese error me costó una década de rodeo por retail, logística y emprendimiento.*
>
> *Ese rodeo me dio algo que ningún bootcamp enseña: sé lo que pasa cuando un sistema de inventario falla un sábado a las 11pm, cuando el carrito de compra no procesa el pago en temporada alta, cuando el negocio creció 2,900% y la tecnología fue el cuello de botella.*
>
> *Hoy construyo los sistemas que antes operaba manualmente. No desarrollo porque aprendí a programar. Desarrollo porque sé exactamente para qué sirve el código."*

**Tiempo:** 2 horas  
**Impacto:** Humaniza el portfolio. Diferencia la narrativa. Crea conexión emocional.

### S3.3 🟠 Sección Servicios
**Problema:** El visitante no sabe exactamente qué puede contratar.  
**Acción:** 3 servicios con descripción de 2 líneas:
- **E-commerce WordPress + WooCommerce** — Desarrollo completo desde catálogo hasta checkout. Stack custom PHP, rendimiento medible, accesibilidad WCAG.
- **Estrategia Digital + Implementación** — Meta Ads, SEO técnico, contenido. No solo la estrategia — también la ejecución.
- **Auditoría de Performance y Accesibilidad** — Lighthouse, Core Web Vitals, axe-core. Reportes formales con ADRs.  
**Tiempo:** 2-3 horas  
**Impacto:** Reduce fricción de conversión. El visitante sabe qué pedir y a qué precio orientarse.

### S3.4 🟠 Analytics GA4
**Problema:** Sin datos, no hay forma de saber qué convierte.  
**Acción:** Insertar script GA4 en `index.html`. Tarda 30 minutos.  
**Tiempo:** 30 min  
**Impacto:** Datos de visitas, fuentes, secciones con más tiempo, CTAs con más clicks.

### S3.5 🟡 Verificar URL LinkedIn
**Problema:** La URL en el portfolio es `linkedin.com/in/fdroguetto/`. Verificar que existe y es correcta.  
**Acción:** Confirmar manualmente en el navegador. Si el slug es diferente, actualizar `Contact.jsx`.  
**Tiempo:** 5 min

---

## SPRINT 4 — CASO DE ESTUDIO TOKYO TUNNING (próximas 2 semanas)

### S4 🔴 Página `/caso-tokyo-tunning` — el diferenciador elite
**Problema:** El trabajo más importante de Felipe es una descripción de 3 líneas.  
**Impacto potencial:** Este caso de estudio es el diferenciador que puede llevar el portfolio de Top 30% a Top 5-10%.  
**Estructura propuesta:**

```
/caso-tokyo-tunning — React Route o página separada

1. CONTEXTO DEL NEGOCIO
   - Puesto de feria automotriz → e-commerce → $15M/mes
   - Por qué la tecnología era el cuello de botella

2. EL PROBLEMA TÉCNICO REAL
   - Sin sistema de ventas online
   - Sin gestión de inventario
   - Sin presencia digital estructurada

3. LAS DECISIONES ARQUITECTÓNICAS (ADRs explicados para no-técnicos)
   - ADR-1: Sin mini-cart (por qué fragmentos WC nativos)
   - ADR-2: Pubsub para ATC (por qué no jQuery simple)
   - ADR-3: Sin dependencias externas Basel
   - ADR-4: Dark mode con CSS custom vs Tailwind puro

4. EL TRABAJO EJECUTADO
   - PHP templates modulares (con código real o snippet)
   - Sistema ATC pub/sub (flowchart o pseudocódigo)
   - 364 productos WooCommerce con Webpay Plus
   - 9 fases de auditoría formal (tabla de hallazgos)

5. MÉTRICAS FINALES
   - Lighthouse Accessibility: 100/100
   - LCP: 300ms
   - CLS: 0.00
   - Core Web Vitals: verdes
   - WCAG AA: 0 violaciones (axe-core 4.10.2)

6. IMPACTO DE NEGOCIO
   - $500K/mes → $15M/mes (+2,900% en 18 meses)
   - 25% de ventas ahora online
   - 100% del tráfico de referencia a tienda física

7. SCREENSHOTS REALES
   - PDP, carrito, checkout, home
   - Antes/después (si hay capturas del estado anterior)

8. LINK AL SITIO EN PRODUCCIÓN
   - https://tokyotunning.cl
```

**Tiempo estimado:** 8-12 horas  
**Nota:** Este sprint tiene el mayor ROI individual del roadmap completo.

---

## MEJORAS TÉCNICAS (cuando haya tiempo libre)

### MT-1 🟡 Convertir imágenes a WebP
**Acción:** Convertir `proyecto-tokyo.jpg` y `proyecto-portfolio.jpg` a WebP con squoosh.app o sharp.  
**Tiempo:** 20 min  
**Impacto:** -30-40% de tamaño de imagen. LCP mejorado.

### MT-2 🟡 Font-display: swap
**Acción:** Agregar `display=swap` al URL de Google Fonts si no está presente.  
**Tiempo:** 5 min  
**Impacto:** Elimina flash de texto invisible durante carga de fuentes.

### MT-3 🟢 Sitemap.xml
**Acción:** Crear `public/sitemap.xml` con la URL del sitio y la fecha de modificación.  
**Tiempo:** 10 min  
**Impacto:** Marginalmente mejor indexación.

### MT-4 🟢 llms.txt
**Acción:** Crear `public/llms.txt` con H1 + descripción del sitio.  
**Tiempo:** 10 min  
**Impacto:** Lighthouse "agentic browsing" score sube. No impacta SEO real.

---

## ESTRATÉGICO (próximos 30-60 días)

### E-1 🟠 GitHub con repos de código real
**Problema:** El perfil Spectre-x46 está en el portfolio pero sin repos sustanciales.  
**Acción:** Hacer público al menos 1 repo con código real:
- Los proyectos del curso Full Stack Python (Talento Digital)
- Un script de automatización de Linux Hardening
- O un subconjunto del tema Tokyo Tunning documentado  
**Impacto:** Transforma "dice que sabe programar" en "puedo ver que sabe programar".

### E-2 🟠 Testimonial de Tokyo Tunning
**Problema:** Todos los logros declarados son afirmaciones propias sin verificación de terceros.  
**Acción:** Solicitar al dueño de TT una frase de 2-3 líneas por escrito: *"Felipe construyó el sistema completo de ventas online. Pasamos de $500K a $15M en 18 meses."*  
**Impacto:** Una frase firmada equivale a 1,000 palabras de descripción propia en términos de confianza.

### E-3 🟡 Formulario de contacto integrado
**Acción:** Integrar Netlify Forms (gratuito) para que el visitante pueda enviar mensaje sin salir del sitio.  
**Impacto:** Reduce fricción de contacto. El visitante que no quiere abrir su cliente de email ahora puede escribir directamente.

---

## ORDEN EXACTO DE IMPLEMENTACIÓN

```
DÍA 1 (HOY):
  1. QW-2 — Fix footer color contrast (5 min)
  2. QW-5 — lazy loading en imágenes (5 min)
  3. QW-6 — preconnect Google Fonts (5 min)
  4. QW-3 — Screenshot nuevo del portfolio actual (15 min)
  5. QW-4 — Badge "Disponible para proyectos" (20 min)
  6. S3.4 — GA4 Analytics script (30 min)
  7. S3.5 — Verificar LinkedIn URL (5 min)
  8. QW-1 — Deploy a Netlify (30 min) ← PRIORIDAD MÁXIMA

DÍA 2-3:
  9. S3.1 — Foto personal (cuando esté disponible)
  10. S3.2 — Sección "Sobre Mí" con narrativa de origen (2h)
  11. S3.3 — Sección Servicios (2-3h)

SEMANA 2:
  12. S4 — Caso de estudio Tokyo Tunning (8-12h)
  13. MT-1 — Convertir imágenes a WebP (20 min)
  14. E-1 — Publicar repos GitHub con código real

MES 1-2:
  15. E-2 — Testimonial de Tokyo Tunning
  16. E-3 — Formulario de contacto Netlify Forms
  17. MT-2, MT-3, MT-4 — Mejoras técnicas menores
```

---

## DEFINICIÓN DE ÉXITO

### Post Quick Wins (Día 1)
El sitio live corre el rebuild React. Accessibility 100. Sin contradicciones visuales.

### Post Sprint 3 (Día 3-5)
El visitante sabe quién es Felipe, por qué es diferente, qué puede contratar, y puede contactarlo en 10 segundos. La foto personal humaniza. Los servicios clarifican la oferta.

### Post Sprint 4 (Semana 2)
El portfolio compite en el mismo plano que perfiles con 5+ años de experiencia, porque documenta trabajo production-grade con rigor de arquitectura senior. **Percentil estimado post-Sprint 4: Top 10%.**

---

## MÉTRICA DE CONVERSIÓN OBJETIVO

Al final de todos los sprints, el portfolio debería generar al menos:
- 1 contacto inbound calificado por semana (con Analytics)
- Tiempo de permanencia > 3 minutos (medible con GA4)
- Bounce rate < 60% (señal de contenido relevante)

Sin Analytics activos, ninguna de estas métricas es medible. **GA4 es prerequisito para cualquier optimización futura.**

---

*Generado: 7 Junio 2026*  
*Próxima revisión: post-deploy a Netlify*
