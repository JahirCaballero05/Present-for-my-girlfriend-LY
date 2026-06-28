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

### 4. Personalizar la carta de amor
Abre `index.html` y busca la sección que dice:
`<!-- ✏️ EDITA ESTA CARTA CON TUS PROPIAS PALABRAS -->`
Reemplaza el texto entre esas marcas con tu propia carta.

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