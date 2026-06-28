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

// ── CARTA ──
function openLetter() {
  document.querySelector('.envelope-front').style.display = 'none';
  const paper = document.getElementById('letterPaper');
  paper.style.display = 'block';
  paper.style.animation = 'fadeUp 0.6s ease both';
}

function setLetterDate() {
  const el = document.getElementById('letterDate');
  if (!el) return;
  const now = new Date();
  const months = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
  el.textContent = `${now.getDate()} de ${months[now.getMonth()]} de ${now.getFullYear()}`;
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
