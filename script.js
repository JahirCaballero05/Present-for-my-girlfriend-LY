/* ================================================
   💕 SCRIPT PRINCIPAL - PÁGINA ROMÁNTICA
   
   ÍNDICE DE PERSONALIZACIONES:
   - Línea 10:  FECHA DE INICIO DE LA RELACIÓN
   - Línea 20:  TEXTO del efecto máquina de escribir
   - Línea 35:  RAZONES por las que la amas
   - Línea 80:  FOTOS de la galería
   - Línea 120: LÍNEA DEL TIEMPO de la relación
   - Línea 170: MENSAJES SORPRESA
   - Línea 210: PREGUNTAS del mini juego
================================================ */

// ================================================
// ✏️ PERSONALIZA ESTO: Fecha de inicio de la relación
// Formato: año, mes (0=enero, 11=diciembre), día
// ================================================
const FECHA_INICIO = new Date(2025, 11, 0); // Ejemplo: 15 de abril de 2023

// ================================================
// ✏️ PERSONALIZA ESTO: Texto de la máquina de escribir
// ================================================
const TYPEWRITER_TEXTS = [
  "Feliz Cumpleaños,",
  "Mi amor hermoso 💖",
  "Eres mi todo,",
  "Es el amor de mi vida,"
];

// ================================================
// ✏️ PERSONALIZA ESTO: Razones por las que la amas
// Formato: { icon: "emoji", front: "título visible", text: "texto al hacer clic" }
// ================================================
const REASONS = [
  {
    icon: "🤍",
    front: "Su manera de amarme",
    text: "Porque incluso en la distancia logras hacerme sentir querido, acompañado y en casa contigo."
  },
  {
    icon: "🥺",
    front: "Sus detalles",
    text: "Porque siempre encuentra la forma de alegrarme el día, incluso con las cosas más pequeñas."
  },
  {
    icon: "🌅",
    front: "Sus buenos días",
    text: "Porque despertar y saber de ti hace que cualquier día se sienta muchísimo mejor."
  },
  {
    icon: "📱",
    front: "Nuestras llamadas",
    text: "Porque podría pasar horas escuchándote hablar y aun así sentir que me faltó tiempo contigo."
  },
  {
    icon: "💫",
    front: "Cómo me hace sentir",
    text: "Porque con ustded todo se siente más tranquilo, más bonito y más real."
  },
  {
    icon: "🫶",
    front: "Su cariño",
    text: "Porque cada palabra tuya tiene una forma especial de hacerme sentir amado."
  },
  {
    icon: "🌎",
    front: "Nuestra conexión",
    text: "Porque aunque haya kilómetros entre nosotros, contigo siempre siento cercanía."
  },
  {
    icon: "💕",
    front: "Simplemente tú",
    text: "Porque no necesito razones complicadas para amarte… eres tú y eso ya es suficiente."
  },
  {
    icon: "😊",
    front: "Su sonrisa",
    text: "Porque tienes una sonrisa tan hermosa que podría arreglar incluso mis peores días sin darse cuenta."
  }
];

// ================================================
// ✏️ PERSONALIZA ESTO: Fotos de la galería
// 1. Crea una carpeta "assets/photos/" al lado del archivo index.html
// 2. Agrega tus fotos ahí
// 3. Reemplaza los "src" de abajo con los nombres reales de tus fotos
// Ejemplo: { src: "assets/photos/primer_beso.jpg", caption: "Nuestra primera foto juntos" }
// Si dejas src vacío (""), se mostrará un placeholder bonito con el caption
// ================================================
const PHOTOS = [
  { src: "assets/photos/foto1.jpg",},
  { src: "assets/photos/foto2.jpg",},
  { src: "assets/photos/foto3.jpg",},
  { src: "assets/photos/foto4.jpg",},
  { src: "assets/photos/foto5.jpg",},
  { src: "assets/photos/foto6.jpg",},
  { src: "assets/photos/foto7.jpg",},
  { src: "assets/photos/foto8.jpg",}
];

// ================================================
// ✏️ PERSONALIZA ESTO: Cartas del buzón
// Para agregar una nueva carta, copia un objeto y cambia id, fecha,
// titulo y contenido. El contenido acepta párrafos en HTML sencillo.
// ================================================
const LOVE_LETTERS = [
  {
    id: "cumpleanos-2026",
    fecha: "20 de Mayo de 2026",
    titulo: "Feliz Cumpleaños Mi Amor",
    contenido: `
      <p class="letter-salute">Mi amor más hermoso,</p>

      <p>Hoy cumple años la mujer que convirtió mi mundo en un lugar más cálido.</p>

      <p>Y aunque existan miles de kilómetros entre nosotros, aunque mi voz tenga que cruzar pantallas y mis manos todavía no puedan encontrar las tuyas cada mañana, jamás he sentido a alguien tan cerca de mi alma como a usted.</p>

      <p>A veces me pregunto cómo fue posible que dos vidas tan lejanas terminaran encontrándose de esta manera tan absurda y tan perfecta. Porque desde que llegó a mi vida, algo dentro de mí aprendió a florecer. Los días comenzaron a sentirse distintos, las noches menos vacías, y mi corazón —que antes caminaba sin rumbo— encontró finalmente un lugar donde quedarse.</p>

      <p>Usted.</p>

      <p>No sé si entiende lo profundamente que la amo. No sé si alguna vez lograré explicarlo de la forma correcta. Porque lo que siento por usted no cabe dentro de palabras normales; vive en los pequeños momentos, en las madrugadas compartidas, en las llamadas hasta quedarnos dormidos, en la manera en que mi pecho se calma apenas escucho su voz.</p>

      <p>La amo en todas sus formas, la amo cuando ríe hasta quedarse sin aire, la amo cuando duda de sí misma y aun así sigue adelante, La amo en sus partes más dulces y también en aquellas que intenta esconderle al mundo.</p>

      <p>Y quizás lo más hermoso de todo es que nunca tuve que esforzarme para enamorarme de usted. Mi corazón simplemente la reconoció. Como si hubiera pasado toda mi vida buscándola sin saberlo.</p>

      <p>Hoy, en su cumpleaños, hay tantas cosas que quisiera darle. Me gustaría poder abrazarla fuerte, besar su frente, tomar su mano y quedarme mirándola como alguien que por fin encontró aquello que no sabía que necesitaba para ser feliz.</p>

      <p>Pero mientras llega el día en que pueda amarla sin kilómetros de por medio, quiero que esta carta haga algo por mí: que la abrace donde yo todavía no puedo.</p>

      <p>Gracias por existir, gracias por elegirme, gracias por quedarse conmigo incluso en la distancia, incluso en los días difíciles, incluso cuando el mundo parece demasiado pesado.</p>

      <p>Y sobre todo, gracias por enseñarme que el amor verdadero sí existe, porque desde que usted llegó a mi vida, amar dejó de ser solamente una palabra bonita y se convirtió en la forma más sincera en la que late mi corazón.</p>

      <p>Así que hoy, en el día en que nació la persona más importante de mi vida, solo quiero pedirle una cosa:</p>

      <p>Nunca deje de mirarse con ternura. Nunca olvide lo increíblemente valiosa, hermosa y maravillosa que es. Porque si pudiera verla con mis ojos, entendería por qué hay un hombre aquí que la ama con una intensidad que ni el tiempo, ni la distancia, ni el mundo entero podrían arrancarle del pecho.</p>

      <p>Feliz cumpleaños, mi amor.</p>

      <p>Y ojalá algún día, cuando la vida nos permita finalmente estar frente a frente, pueda leer esta carta mientras descansa entre mis brazos, para que entienda que desde mucho antes de tocar sus manos… yo ya había hecho de usted mi hogar.</p>

      <p class="letter-closing">Con todo mi amor,<br><em>El amor de su vida 💕</em></p>
    `
  },
  {
    id: "Hoy_Te_Amo_Mas_Que_Ayer",
    fecha: "5 de Septiembre de 2026",
    titulo: "TE AMO MAS",
    contenido: `
      <p class="letter-salute">Mi amor,</p>

<p>Hay cosas que uno siente y que, por más que intente explicarlas, siempre terminan siendo más grandes que cualquier palabra. Lo que siento por usted es una de ellas.</p>

<p>No sé exactamente en qué momento dejó de ser simplemente alguien a quien quería y se convirtió en una parte de mí. Solo sé que sucedió. Un día estaba viviendo mi vida y, sin darme cuenta, empecé a encontrarla en todas partes: en mis pensamientos, en mis noches, en las cosas que quería contarle, en las canciones que escuchaba, en las ganas de compartir hasta los momentos más insignificantes de mi día. Y entonces entendí que me había enamorado de usted.</p>

<p>Pero no de una versión perfecta de usted. Me enamoré de usted completa. De lo que conozco y de lo que todavía me falta conocer. De su forma de reír, de su manera de pensar, de sus silencios, de sus contradicciones, de todo aquello que la hace ser exactamente quien es. Y eso es lo que más amo: que no necesito imaginar cómo sería usted para quererla, porque ya existe frente a mí y me basta con conocerla cada día un poco más para volver a enamorarme.</p>

<p>A veces pienso en los kilómetros que existen entre nosotros y me parece absurdo que tanta distancia pueda existir entre dos personas que se sienten tan cerca. Pero entonces recuerdo nuestras noches, nuestras conversaciones, nuestras risas, la manera en que nos acompañamos incluso cuando no podemos tocarnos, y entiendo que hay distancias que solamente existen en un mapa. Porque usted está conmigo.</p>

<p>Está en mis noches cuando es la última persona que quiero ver antes de cerrar los ojos. Está en mis mañanas cuando es de las primeras personas que quiero encontrar. Está en cada pequeño momento que se ha vuelto especial simplemente porque puedo compartirlo con usted. Y quizá nunca pueda explicarle completamente lo que significa eso para mí, pero quiero que sepa algo: yo no quiero solamente los momentos bonitos de usted.</p>

<p>Quiero conocerla cuando esté feliz y cuando no sepa qué sentir. Quiero escucharla cuando tenga algo que decir y respetar su silencio cuando no quiera hablar. Quiero conocer las partes de usted que todavía no conozco, no para cambiarlas, sino porque también son suyas. No quiero un amor perfecto, quiero el nuestro. Ese que se construye poco a poco, que aprende, que se equivoca, que vuelve a intentarlo, que se elige incluso cuando las cosas no son fáciles.</p>

<p>Porque si algo tengo claro es que yo la elegiría. La elegiría entre millones de personas. En otro tiempo, en otra vida. Y si alguna vez vuelve a preguntarse por qué me enamoré de usted, probablemente nunca tenga una respuesta suficientemente buena, porque no fue una sola cosa: fue usted entera.</p>

<p>Fue la forma en que llegó a mi vida y, sin pedir permiso, comenzó a hacerla suya. Fue la manera en que me hizo querer compartir mi mundo con alguien y descubrir que podía sentirme completamente yo mismo junto a otra persona. Fue usted, y todavía lo es. Por eso, cuando le digo que la amo, no quiero que lo escuche como una frase que digo porque es bonita o porque ya forma parte de nuestras conversaciones.</p>

<p>Quiero que entienda que cuando digo "te amo", estoy hablando de todo esto: de mi presente, de mis ganas de seguir conociéndola y de todo lo que todavía nos falta vivir. De las noches que aún nos quedan por compartir, de los abrazos que todavía no hemos podido darnos y de todos los lugares en los que algún día quiero estar a su lado.</p>

<p>La amo con todo lo que soy, mi amor. Y si algún día las palabras se me quedan cortas, mire simplemente la forma en que la sigo eligiendo. Ahí estará todo lo que nunca supe decirle.</p>

<p class="letter-closing">Con todo mi corazón,<br><em>El hombre que tuvo la suerte de encontrarla ❤️</em></p>


    `
  }
];


// ================================================
// ✏️ PERSONALIZA ESTO: Línea del tiempo
// ================================================
const TIMELINE = [
  {
    date: "El primer día",
    emoji: "✨",
    event: "Cuando todo comenzó",
    desc: "27 de Enero de 2024 - El día en que apareció en mi vida y, sin saberlo, cambió todo para siempre."
  },
  {
    date: "Nuestro primer Beso",
    emoji: "💋",
    event: "El primero de muchos",
    desc: "Miercoles 31 de Diciembre de 2025 - Se robo mi primer beso y muchas otras cosas por eso es mi ladrona favorita."
  },
  {
    date: "La primera vez que dije 'te Amo'",
    emoji: "💌",
    event: "Dos palabras infinitas",
    desc: "Lunes 12 de Enero de 2026 - No sé si me di cuenta en el momento, pero ese día cambió todo."
  },
  {
    date: "Nuestra primera llamada",
    emoji: "📱",
    event: "La primera de muchas",
    desc: "Sábado 17 de Enero de 2026 - Esa llamada que no quería terminar. La que me hizo darme cuenta de que era especial."
  },
  {
    date: "Hoy, su cumpleaños",
    emoji: "🎂",
    event: "Un año más a su lado",
    desc: "Y espero que sean muchos, muchos más. Juntos, sin importar la distancia, hasta que estemos juntos por siempre."
  }
];

// ================================================
// ✏️ PERSONALIZA ESTO: Mensajes sorpresa
// ================================================
const SURPRISES = [
  {
    icon: "💌",
    label: "Un pensamiento secreto",
    message: "Pienso en usted incluso cuando no debería estar distraído. Y me alegra."
  },
  {
    icon: "🌙",
    label: "Lo que pienso de noche",
    message: "Antes de dormir, siempre agradezco que exista. Cada noche, sin falta."
  },
  {
    icon: "🔥",
    label: "Mi promesa",
    message: "Prometo seguir siendo el amor de su vida. Y esforzarme para merecerlo cada día."
  },
  {
    icon: "⭐",
    label: "Mi mayor orgullo",
    message: "Poder decir que es mía, que es mi mujer. Que de alguna manera, me elegio a mí. Eso me hace feliz."
  },
  {
    icon: "🌸",
    label: "Lo que más me gusta",
    message: "Cuando esta completamente cómoda conmigo. Sin filtros. Siendo tú. Eso me enamora."
  },
  {
    icon: "💫",
    label: "Mi sueño",
    message: "Que el día que estemos en el mismo lugar, el tiempo se detenga. Y quedarnos ahí."
  },
  {
  icon: "🫶",
  label: "Lo que siento contigo",
  message: "Con usted aprendí que el amor no siempre necesita estar cerca para sentirse real."
},
{
  icon: "💌",
  label: "Mi mayor secreto",
  message: "Que me enamoro de usted cada dia, cada hora, cada minuto, cada segundo, porque estoy locamente, completamente enamorado de usted."
}
];

// ================================================
// ✏️ PERSONALIZA ESTO: Preguntas del mini juego
// Pon la respuesta correcta siempre PRIMERO en el array de opciones
// El script la mezclará automáticamente
// ================================================
const QUIZ = [
    {
    question: "¿En qué pienso primero cuando me despierto?",
    options: ["En ti", "En el desayuno", "En mis tareas", "En dormir más"],
    fact: "Siempre. Sin excepciones. Buenos días, mi amor 💕"
  },
  {
    question: "¿Cuál es mi comida favorita?",
    options: ["Usted", "Hamburguesa", "Pasta", "pizza"],
    fact: "Lo mejor que he comido jamas y me encataria comermela otra vez 👄"
  },
  {
    question: "¿Qué es lo que más me gusta de usted?",
    options: ["Todo de usted preciosa", "Sus ojos", "Su voz", "Sus besos", "Su sonrisa"],
    fact: "Ante mis ojos usted es perfecta. No podría elegir una sola cosa porque todo de usted me encanta 🥰."
  },
  {
    question: "¿Cuándo me di cuenta de que me enamoré?",
    options: ["Al verla por primera vez", "La primera vez que dormimos juntos", "Cuando me robo mi primer beso", "Cuando me dijo que me amaba"],
    fact: "Le dije que no creo en amor a primera vista, pero lo fue 🥺."
  },
  {
  question: "¿Qué es lo que más extraño cuando no estamos juntos?",
  options: ["Todas las anteriores", "Que me diga que me ama", "Que me mire con sus ojos picaros", "Su hermosa sonrisa","Hablar con usted"],
  fact: "Porque estar con usted siempre mejora mis días aunque todo vaya mal 💖"
},
{
  question: "¿Qué haría ahora mismo si pudiera estar con usted?",
  options: ["Robarle muchos besos", "Abrazarla fuerte", "Dormir juntos", "Ver o hacer una película"],
  fact: "La Besaria muchísimo tiempo y no querría soltarla 😭"
},
{
  question: "¿Qué canción me recuerda a usted?",
  options: ["Creep", "Iris", "Alguna de Radiohead", "You are so eautiful"],
  fact: "Porque la hizo mas especial para mi✨"
},
{
  question: "¿Cuantas fotos tengo de usted?",
  options: ["No las suficientes", "Mas de 500", "Pocas", "Muchas"],
  fact: "Sin importar cuantas tenga, quiero muchas mas 🤍"
}
];

// ================================================
// A PARTIR DE AQUÍ ES EL CÓDIGO QUE FUNCIONA TODO
// (No es necesario editar lo que está abajo,
//  a menos que quieras cambios avanzados)
// ================================================

document.addEventListener('DOMContentLoaded', () => {
  initTypewriter();
  initCounter();
  initReasons();
  initGallery();
  initTimeline();
  initSurprises();
  initGame();
  initLetters();
  initFloatingHearts();
  initParticles();
  initScrollReveal();
  initMusicControl();
  initFinale();
  setLetterDate();
});

// ── EFECTO MÁQUINA DE ESCRIBIR ──
function initTypewriter() {
  const el = document.getElementById('typewriter');
  if (!el) return;
  let textIdx = 0, charIdx = 0, deleting = false;

  function type() {
    const current = TYPEWRITER_TEXTS[textIdx];
    if (!deleting) {
      el.textContent = current.substring(0, charIdx + 1);
      charIdx++;
      if (charIdx === current.length) {
        setTimeout(() => { deleting = true; type(); }, 2500);
        return;
      }
    } else {
      el.textContent = current.substring(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        deleting = false;
        textIdx = (textIdx + 1) % TYPEWRITER_TEXTS.length;
      }
    }
    setTimeout(type, deleting ? 60 : 100);
  }
  type();
}

// ── CONTADOR DE TIEMPO ──
function initCounter() {
  function update() {
    const now = new Date();
    const inicio = new Date(FECHA_INICIO);

    let years = now.getFullYear() - inicio.getFullYear();
    let months = now.getMonth() - inicio.getMonth();
    let days = now.getDate() - inicio.getDate();

    // 1. Ajustar si el día actual es menor al día de inicio (mes incompleto)
    if (days < 0) {
      months--;
      // Obtenemos el último día del mes anterior para compensar los días
      const ultimoDiaMesPasado = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
      days += ultimoDiaMesPasado;
    }

    // 2. Ajustar si el mes actual es menor al mes de inicio (año incompleto)
    if (months < 0) {
      years--;
      months += 12;
    }

    // 3. Horas (Diferencia simple entre horas actuales)
    const hours = now.getHours(); 

    animateNumber('cnt-years', years);
    animateNumber('cnt-months', months);
    animateNumber('cnt-days', days);
    animateNumber('cnt-hours', hours);
  }
  
  update();
  setInterval(update, 60000);
}


function animateNumber(id, target) {
  const el = document.getElementById(id);
  if (!el) return;
  const current = parseInt(el.textContent) || 0;
  if (current === target) return;
  const step = Math.ceil(Math.abs(target - current) / 20);
  const dir = target > current ? 1 : -1;
  let val = current;
  const interval = setInterval(() => {
    val += dir * step;
    if ((dir > 0 && val >= target) || (dir < 0 && val <= target)) {
      val = target;
      clearInterval(interval);
    }
    el.textContent = val;
  }, 40);
}

// ── RAZONES ──
function initReasons() {
  const grid = document.getElementById('reasonsGrid');
  if (!grid) return;
  REASONS.forEach((r, i) => {
    const card = document.createElement('div');
    card.className = 'reason-card reveal';
    card.innerHTML = `
      <div class="reason-front">
        <div class="reason-number">${String(i + 1).padStart(2, '0')}</div>
        <div class="reason-icon">${r.icon}</div>
        <div class="reason-hint">${r.front}</div>
      </div>
      <div class="reason-back">
        <p class="reason-text">${r.text}</p>
      </div>
    `;
    card.addEventListener('click', () => card.classList.toggle('flipped'));
    grid.appendChild(card);
  });
}

// ── GALERÍA ──
function initGallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  PHOTOS.forEach((p, i) => {
    const item = document.createElement('div');
    item.className = 'gallery-item reveal';
    if (p.src) {
      item.innerHTML = `
        <img src="${p.src}" alt="${p.caption}" loading="lazy" onerror="this.parentElement.innerHTML=getPlaceholder(${i})">
        <div class="gallery-overlay"><span class="gallery-caption">${p.caption}</span></div>
      `;
      item.addEventListener('click', () => openModal(p.src, p.caption));
    } else {
      item.innerHTML = `
        <div class="gallery-placeholder">
          <div class="photo-num">♡</div>
          <p>${p.caption}</p>
        </div>
      `;
    }
    grid.appendChild(item);
  });
}

function openModal(src, caption) {
  document.getElementById('modalImg').src = src;
  document.getElementById('modalCaption').textContent = caption;
  document.getElementById('photoModal').classList.add('active');
}

function closeModal() {
  document.getElementById('photoModal').classList.remove('active');
}

// ── BUZÓN Y CARTAS ──
let selectedLetter = LOVE_LETTERS[0] || null;

function initLetters() {
  const grid = document.getElementById('mailboxGrid');
  if (!grid) return;

  grid.innerHTML = LOVE_LETTERS.map((letter, index) => `
    <button class="mailbox-card reveal" type="button" onclick="selectLetter('${letter.id}')">
      <span class="mailbox-card-number">${String(index + 1).padStart(2, '0')}</span>
      <span class="mailbox-card-icon">💌</span>
      <span class="mailbox-card-date">${letter.fecha}</span>
      <span class="mailbox-card-title">${letter.titulo}</span>
      <span class="mailbox-card-action">Abrir sobre →</span>
    </button>
  `).join('');

  const envelopeFront = document.querySelector('.envelope-front');
  envelopeFront?.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openLetter();
    }
  });
}

// 🟢 NUEVAS FUNCIONES PARA ABRIR / CERRAR EL BUZÓN PRINCIPAL
function openMailbox() {
  const cover = document.getElementById('mailboxCover');
  const mailbox = document.getElementById('letterMailbox');

  if (cover) cover.style.display = 'none';
  if (mailbox) {
    mailbox.hidden = false;
    mailbox.style.display = 'block';
  }
}

function closeMailbox() {
  const cover = document.getElementById('mailboxCover');
  const mailbox = document.getElementById('letterMailbox');

  if (mailbox) {
    mailbox.style.display = 'none';
    mailbox.hidden = true;
  }
  if (cover) cover.style.display = 'block';
}

function selectLetter(letterId) {
  const letter = LOVE_LETTERS.find(item => item.id === letterId);
  if (!letter) return;

  selectedLetter = letter;
  const mailbox = document.getElementById('letterMailbox');
  const envelope = document.getElementById('letterEnvelope');
  const paper = document.getElementById('letterPaper');

  // Rellenar datos de la carta
  document.getElementById('letterDate').textContent = letter.fecha;
  document.getElementById('letterPaperTitle').textContent = letter.titulo;
  document.getElementById('letterBody').innerHTML = letter.contenido;

  // Ocultar buzón
  if (mailbox) {
    mailbox.style.display = 'none';
    mailbox.hidden = true;
  }

  // Mostrar el contenedor de la carta y el papel directamente
  if (envelope) {
    envelope.hidden = false;
    envelope.style.display = 'block';
  }

  // Ocultar la portada del sobre intermedio e ir directo al papel
  const front = envelope.querySelector('.envelope-front');
  if (front) front.style.display = 'none';
  if (paper) paper.style.display = 'block';
}

function openLetter() {
  if (!selectedLetter) return;
  document.querySelector('.envelope-front').style.display = 'none';
  const paper = document.getElementById('letterPaper');
  paper.style.display = 'block';
}

function returnToMailbox() {
  const mailbox = document.getElementById('letterMailbox');
  const envelope = document.getElementById('letterEnvelope');

  if (envelope) {
    envelope.style.display = 'none';
    envelope.hidden = true;
  }
  if (mailbox) {
    mailbox.hidden = false;
    mailbox.style.display = 'block';
  }
}

function setLetterDate() {
  const el = document.getElementById('letterDate');
  if (el && selectedLetter) el.textContent = selectedLetter.fecha;
}
// ── LÍNEA DEL TIEMPO ──
function initTimeline() {
  const container = document.getElementById('timelineContainer');
  if (!container) return;
  TIMELINE.forEach((item) => {
    const div = document.createElement('div');
    div.className = 'timeline-item';
    div.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div class="timeline-emoji">${item.emoji}</div>
        <div class="timeline-date">${item.date}</div>
        <div class="timeline-event">${item.event}</div>
        <div class="timeline-desc">${item.desc}</div>
      </div>
    `;
    container.appendChild(div);
  });
}

// ── SORPRESAS ──
function initSurprises() {
  const grid = document.getElementById('surprisesGrid');
  if (!grid) return;
  SURPRISES.forEach((s) => {
    const card = document.createElement('div');
    card.className = 'surprise-card reveal';
    card.innerHTML = `
      <div class="surprise-front">
        <div class="surprise-icon">${s.icon}</div>
        <div class="surprise-label">${s.label}</div>
      </div>
      <div class="surprise-back">
        <p class="surprise-message">${s.message}</p>
      </div>
    `;
    card.addEventListener('click', () => {
      card.classList.add('opened');
      createHeartBurst(card);
    });
    grid.appendChild(card);
  });
}

// ── MINI JUEGO ──
let quizIndex = 0, quizScore = 0;
const shuffled = QUIZ.map(q => ({ ...q, shuffled: shuffle([...q.options]) }));

function initGame() {
  renderQuestion();
}

function renderQuestion() {
  const container = document.getElementById('gameContainer');
  if (!container) return;
  const q = shuffled[quizIndex];
  const progress = ((quizIndex) / QUIZ.length * 100).toFixed(0);

  container.innerHTML = `
    <div class="game-progress"><div class="game-progress-bar" style="width:${progress}%"></div></div>
    <div class="game-score">Pregunta ${quizIndex + 1} de ${QUIZ.length} · Puntos: ${quizScore}</div>
    <div class="game-question">
      <div class="q-number">¿Me conoces?</div>
      <div class="q-text">${q.question}</div>
      <div class="q-options">
        ${q.shuffled.map(opt => `<button class="q-option" onclick="answerQuestion('${esc(opt)}')">${opt}</button>`).join('')}
      </div>
    </div>
  `;
}

function answerQuestion(answer) {
  const q = shuffled[quizIndex];
  const correct = q.options[0]; // La primera siempre es la correcta
  const btns = document.querySelectorAll('.q-option');
  btns.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correct) btn.classList.add('correct');
    else if (btn.textContent === answer && answer !== correct) btn.classList.add('wrong');
  });

  if (answer === correct) quizScore++;

  const fact = document.createElement('p');
  fact.style.cssText = 'margin-top:16px;font-style:italic;color:var(--texto-medio);font-size:0.9rem;';
  fact.textContent = q.fact;
  document.querySelector('.game-question').appendChild(fact);

  setTimeout(() => {
    quizIndex++;
    if (quizIndex < QUIZ.length) {
      renderQuestion();
    } else {
      showGameResult();
    }
  }, 2000);
}

function showGameResult() {
  const container = document.getElementById('gameContainer');
  const pct = quizScore / QUIZ.length;
  let emoji, title, text;

  if (pct === 1) {
    emoji = '🏆'; title = '¡Perfecto! Me conoces perfectamente';
    text = 'No me sorprende. Siempre me has entendido mejor que nadie. Eso me hace feliz.';
  } else if (pct >= 0.5) {
    emoji = '💕'; title = '¡Muy bien! Nos conocemos bien';
    text = 'Y vamos a seguir conociéndonos mejor con cada día que pasa. Te lo prometo.';
  } else {
    emoji = '😄'; title = '¡Tenemos mucho por descubrir!';
    text = 'Pero eso es lo bonito. Hay tanto por aprender el uno del otro. Que nunca se acabe.';
  }

  container.innerHTML = `
    <div class="game-result" style="display:block">
      <div class="result-emoji">${emoji}</div>
      <div class="result-title">${title}</div>
      <p class="result-text">${text}</p>
      <p style="color:var(--texto-claro);font-size:0.9rem;margin-bottom:20px">Acertaste ${quizScore} de ${QUIZ.length} preguntas</p>
    </div>
  `;
  launchHearts();
}

// ── CORAZONES FLOTANTES ──
function initFloatingHearts() {
  const container = document.getElementById('floatingHearts');
  if (!container) return;
  const symbols = ['❤', '♡', '💕', '✦', '✧'];
  setInterval(() => {
    const heart = document.createElement('div');
    heart.className = 'heart-float';
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (0.8 + Math.random() * 1) + 'rem';
    heart.style.animationDuration = (6 + Math.random() * 8) + 's';
    heart.style.color = ['#e8a0b4', '#d64f6e', '#c9a96e', '#f5d0dd'][Math.floor(Math.random() * 4)];
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 15000);
  }, 1500);
}

// ── PARTÍCULAS ──
function initParticles() {
  ['particles', 'particles2'].forEach(id => {
    const container = document.getElementById(id);
    if (!container) return;
    const symbols = ['✦', '✧', '❤', '·', '⋆', '♡'];
    for (let i = 0; i < 20; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      p.style.left = Math.random() * 100 + '%';
      p.style.animationDuration = (8 + Math.random() * 15) + 's';
      p.style.animationDelay = Math.random() * 10 + 's';
      p.style.fontSize = (0.6 + Math.random() * 0.8) + 'rem';
      p.style.color = id === 'particles2'
        ? `rgba(${200 + Math.random() * 55}, ${100 + Math.random() * 100}, ${130 + Math.random() * 50}, 0.4)`
        : `rgba(232, 160, 180, ${0.2 + Math.random() * 0.3})`;
      container.appendChild(p);
    }
  });
}

// ── SCROLL REVEAL ──
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal, .timeline-item').forEach(el => observer.observe(el));
}

// ── CONTROL DE MÚSICA ──
function initMusicControl() {
  const btn = document.getElementById('musicBtn');
  const audio = document.getElementById('bgMusic');
  if (!btn || !audio) return;

  btn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play().catch(() => {});
      btn.classList.add('playing');
      btn.querySelector('.music-icon').textContent = '♪';
    } else {
      audio.pause();
      btn.classList.remove('playing');
      btn.querySelector('.music-icon').textContent = '♫';
    }
  });

  // Auto-play al hacer clic en cualquier lugar (política del navegador)
  document.addEventListener('click', function tryPlay() {
    if (audio.paused) {
      audio.play().then(() => {
        btn.classList.add('playing');
        btn.querySelector('.music-icon').textContent = '♪';
      }).catch(() => {});
    }
    document.removeEventListener('click', tryPlay);
  });
}

// ── FINAL ──
function initFinale() {
  const hearts = document.getElementById('finaleHearts');
  if (hearts) hearts.textContent = '❤ ♡ ❤ ♡ ❤';
}

// ── FUEGOS ARTIFICIALES / CONFETI ──
function launchFireworks() {
  const colors = ['#e8a0b4', '#d64f6e', '#c9a96e', '#f5d0dd', '#ffffff', '#ff9eb5'];
  for (let i = 0; i < 80; i++) {
    setTimeout(() => {
      const conf = document.createElement('div');
      const size = (6 + Math.random() * 8) + 'px';
      conf.style.cssText = `
        position: fixed;
        top: -20px;
        left: ${Math.random() * 100}vw;
        width: ${size};
        height: ${size};
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
        z-index: 99999;
        pointer-events: none;
        animation: confettiFall ${2 + Math.random() * 3}s linear forwards;
      `;
      document.body.appendChild(conf);
      setTimeout(() => conf.remove(), 5000);
    }, i * 30);
  }
}

function launchHearts() {
  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      const h = document.createElement('div');
      h.className = 'heart-float';
      h.textContent = ['❤', '💕', '♡'][Math.floor(Math.random() * 3)];
      h.style.left = (20 + Math.random() * 60) + 'vw';
      h.style.animationDuration = '3s';
      h.style.color = '#d64f6e';
      h.style.fontSize = (1 + Math.random() * 1.5) + 'rem';
      document.getElementById('floatingHearts').appendChild(h);
      setTimeout(() => h.remove(), 3500);
    }, i * 100);
  }
}

function createHeartBurst(el) {
  const rect = el.getBoundingClientRect();
  for (let i = 0; i < 8; i++) {
    const h = document.createElement('div');
    h.style.cssText = `position:fixed;left:${rect.left + rect.width/2}px;top:${rect.top + rect.height/2}px;font-size:1.2rem;pointer-events:none;z-index:9999;transition:all 0.8s ease;`;
    h.textContent = '❤';
    document.body.appendChild(h);
    const angle = (i / 8) * Math.PI * 2;
    const dist = 60 + Math.random() * 40;
    setTimeout(() => {
      h.style.transform = `translate(${Math.cos(angle) * dist}px, ${Math.sin(angle) * dist}px) scale(0)`;
      h.style.opacity = '0';
    }, 10);
    setTimeout(() => h.remove(), 800);
  }
}

// ── UTILIDADES ──
function scrollToNext(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function esc(str) {
  return str.replace(/'/g, "\\'").replace(/"/g, '&quot;');
}
