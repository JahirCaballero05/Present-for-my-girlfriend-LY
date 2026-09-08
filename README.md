///Actualizacion 07.9.26 original
# 💕 Página Romántica de Cumpleaños

## Cómo usar esta página

### 1. Personalizar los textos
Abre el archivo `script.js` y edita las variables al inicio:
- `FECHA_INICIO` → La fecha en que comenzaron su relación
- `TYPEWRITER_TEXTS` → El texto de la pantalla de bienvenida
- `REASONS` → Las razones por las que la amas
- `TIMELINE` → Los eventos importantes de su relación
- `SURPRISES` → Mensajes secretos que ella desbloqueará
- `QUIZ` → Las preguntas del mini juego

### 2. Cambiar las fotos
1. Copia tus fotos a la carpeta `assets/photos/`
2. En `script.js`, en la sección `PHOTOS`, cambia `src: ""` por el nombre de tu foto
   Ejemplo: `src: "assets/photos/foto1.jpg"`

### 3. Agregar música
1. Copia tu archivo de música MP3 a la carpeta `assets/`
2. Renómbralo como `music.mp3`
3. ¡Listo! La página reproducirá la música automáticamente

### 4. Agregar más cartas al buzón
Ahora las cartas se administran desde `script.js`, en el array `LOVE_LETTERS`. No edites el HTML para añadir cartas nuevas.

Para crear otra carta:
1. Abre `script.js`.
2. Busca `const LOVE_LETTERS = [`.
3. Copia el bloque de una carta existente, pégalo debajo y cambia estos campos:
   - `id` → Debe ser único, sin espacios. Ejemplo: `"aniversario-2026"`.
   - `fecha` → Texto que se verá en el sobre. Ejemplo: `"31 de diciembre de 2026"`.
   - `titulo` → Nombre que aparecerá en el buzón y en la carta.
   - `contenido` → El texto de la carta, escrito en párrafos HTML (`<p>...</p>`).
4. Importante: cada carta debe separarse con una coma `,`.

Ejemplo:
```js
const LOVE_LETTERS = [
  {
    id: "cumpleanos-2026",
    fecha: "14 de agosto de 2026",
    titulo: "Una carta de amor",
    contenido: `
      <p class="letter-salute">Mi amor más hermoso,</p>
      <p>Texto de la primera carta...</p>
      <p class="letter-closing">Con todo mi amor,<br><em>El amor de su vida 💕</em></p>
    `
  },
  {
    id: "aniversario-2026",
    fecha: "31 de diciembre de 2026",
    titulo: "Nuestro aniversario",
    contenido: `
      <p class="letter-salute">Mi vida,</p>
      <p>Aquí escribe la nueva carta...</p>
      <p class="letter-closing">Siempre suyo,<br><em>Su amor 💕</em></p>
    `
  }
];
```

## Cómo abrir la página en tu computadora
Solo abre el archivo `index.html` con tu navegador (Chrome, Firefox, etc.)

## Cómo publicarla gratis en internet

### Opción A: Netlify (recomendado, muy fácil)
1. Ve a https://netlify.com y crea una cuenta gratis
2. Arrastra toda la carpeta al área de "Deploy" en el sitio
3. ¡Ya tienes un link para compartir!

### Opción B: Vercel
1. Ve a https://vercel.com y crea una cuenta gratis
2. Instala Vercel CLI: `npm i -g vercel`
3. Desde la terminal en la carpeta del proyecto: `vercel`
4. Sigue las instrucciones