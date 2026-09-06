# Portfolio Web — Felipe Droguett 💻

¡Hola! Bienvenido al repositorio de mi portfolio personal.

Este proyecto es la demostración práctica de mi transición profesional: **de 10 años en Operaciones y Ventas hacia el desarrollo y la automatización comercial**. Aquí no solo hay código, hay una historia de reinvención y aprendizaje constante.

**En vivo:** https://felipe-droguett.netlify.app/

## 🎯 ¿Qué es esto?

Es una página web diseñada para presentar quién soy, qué he hecho y qué estoy aprendiendo. No quería usar una plantilla genérica, así que me esforcé en construir algo que se sienta "mío".

Esta es la **versión 2**, una reescritura completa. La primera versión estaba hecha con HTML, CSS y Bootstrap a mano; sigue disponible en la rama [`v1-bootstrap`](../../tree/v1-bootstrap) porque es parte del recorrido y no quería borrarla. La V2 cambia el enfoque: en vez de una sola página que lo cuenta todo, ahora hay **case studies con su propia URL**, donde explico un proyecto de principio a fin.

## 🛠️ Stack

*   **React 18 + Vite 5** — la base de la aplicación.
*   **Tailwind CSS** — el sistema de diseño, con la paleta y la escala tipográfica definidas en un solo sitio.
*   **React Router 7** — la navegación entre la home y los case studies.
*   **lucide-react** — la iconografía.
*   **Renderizado en servidor + prerender propio** — explicado abajo, porque es la parte de la que más aprendí.

## ⚡ Lo que más me costó: que se pudiera compartir

Una SPA normal devuelve el mismo `index.html` para todas las rutas. Se ve bien en el navegador, pero cuando pegas el enlace de un case study en LinkedIn o WhatsApp, la previsualización muestra el título y la imagen de la portada, no los del proyecto. El enlace queda "mudo".

Para arreglarlo, el build hace tres pasadas:

```
vite build                              → la aplicación para el navegador
vite build --ssr src/entry-server.jsx   → la misma aplicación, renderizable en Node
node scripts/prerender.mjs              → escribe un HTML real por cada ruta
```

El resultado es que `/caso/tokyo-tunning` y `/caso/agente-comercial` tienen cada uno su propio fichero HTML, con sus metadatos escritos dentro. El `netlify.toml` los sirve antes que el comodín de la SPA, que si no se los comería.

## 🚀 Cómo levantarlo

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # build completo: cliente + SSR + prerender
npm run preview  # ver el build ya construido
```

El build queda en `dist/`, que es lo que se publica.

## 📁 Cómo está organizado

```
src/
  components/   secciones de la home (Hero, Work, About, Journey…)
  pages/        los case studies, uno por fichero
  lib/          hooks y utilidades (SEO, parallax, enlaces)
  entry-server.jsx   punto de entrada del renderizado en servidor
scripts/
  prerender.mjs      genera el HTML de cada ruta
Reportes/       auditorías y decisiones de diseño documentadas
```

## 🤝 Sobre el desarrollo y la IA

Este proyecto lo dirijo yo, **Felipe Droguett**, pero creo en usar toda la tecnología disponible.

Trabajé en "pair programming" con **Inteligencia Artificial**, que actuó como un mentor senior: explicándome lo que no entendía, sugiriéndome cómo organizar el código y ayudándome a documentar las decisiones. En la carpeta `Reportes/` están las auditorías que salieron de ese proceso — incluidas las que encontraron problemas en mi propio trabajo.

Es un trabajo honesto de aprendizaje: el código lo entiendo, lo puedo mantener y estoy orgulloso de él.

---
*Desarrollado con esfuerzo, café y muchas ganas de aprender.* 🚀
