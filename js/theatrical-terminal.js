/* =========================
   TERMINAL TEATRAL JAVASCRIPT
========================= */

// Variables globales que se inicializarán después
let $term;
let sleep;
let scrollToBottom;

// Esperar a que el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  // Buscar el contenedor de la terminal
  const terminalContainer = document.querySelector('.terminal-content');
  
  if (!terminalContainer) {
    console.warn('Contenedor de terminal no encontrado');
    return;
  }

  // Crear la estructura HTML de la terminal
  terminalContainer.innerHTML = `
    <div class="theatrical-frame">
      <div class="theatrical-topbar">
        <div class="theatrical-dot red"></div>
        <div class="theatrical-dot yellow"></div>
        <div class="theatrical-dot green"></div>
        <div class="theatrical-title">MVGN TERMINAL — Ritual Engine v0.7</div>
      </div>
      <div id="theatrical-terminal" class="theatrical-terminal" aria-live="polite"></div>
    </div>
  `;

  // Inicializar la terminal
  initTheatricalTerminal();
});

/* =========================
   UTILIDADES DE ESCENA
========================= */
function initUtilities() {
  $term = document.getElementById('theatrical-terminal');
  sleep = (ms)=> new Promise(r=>setTimeout(r, ms));
  scrollToBottom = ()=> $term.scrollTop = $term.scrollHeight;
}

function addLine(text='', classes='') {
  const div = document.createElement('div');
  div.className = `theatrical-line ${classes}`.trim();
  div.textContent = text;
  $term.appendChild(div);
  scrollToBottom();
  return div;
}

function addGap(h=10) {
  const gap = document.createElement('div');
  gap.className = 'theatrical-scene-gap';
  gap.style.height = h+'px';
  $term.appendChild(gap);
}

async function clearTerminalSoft() {
  $term.classList.add('theatrical-softfade');
  await sleep(280);
  $term.classList.remove('theatrical-softfade');
  $term.innerHTML = '';
}

/* =========================
   EFECTOS TIPOGRÁFICOS
========================= */
/** Efecto: Máquina de escribir (limpio, legible) */
async function typewriter(text, opts={}) {
  const {speed=22, prefix='', colorClass=''} = opts;
  const line = addLine(prefix, colorClass);
  const caret = document.createElement('span');
  caret.className = 'theatrical-caret';
  line.appendChild(caret);
  
  for (let i=0;i<text.length;i++) {
    caret.insertAdjacentText('beforebegin', text[i]);
    scrollToBottom();
    await sleep(speed + Math.random()*18);
  }
  caret.remove();
  return line;
}

/** Efecto: "Falling rain" — cada carácter cae a su sitio */
async function fallingRain(text, opts={}) {
  const {stagger=18, colorClass=''} = opts;
  const line = addLine('', `theatrical-rain theatrical-glow ${colorClass}`);
  line.textContent = ''; // limpiamos para spans
  
  const chars = [...text];
  chars.forEach((ch, idx)=>{
    const span = document.createElement('span');
    span.textContent = ch;
    span.style.animationDelay = (idx*stagger/1000)+'s';
    line.appendChild(span);
  });
  
  scrollToBottom();
  // esperar a que termine la última
  await sleep(stagger*chars.length + 380);
  return line;
}

/** Efecto: Oráculo — glitchea y fija el carácter correcto */
async function oracle(text, opts={}) {
  const {cycles=6, speed=26, colorClass=''} = opts;
  const pool = '█▓▒░#$%@&*<>/\\{}[]+=-_|~^:;.,!?';
  const line = addLine('', colorClass);
  
  const spans = [...text].map(ch=>{
    const s = document.createElement('span');
    s.textContent = ' ';
    line.appendChild(s);
    return s;
  });
  
  for (let i=0;i<spans.length;i++) {
    const s = spans[i];
    const nCycles = Math.max(3, Math.floor(cycles + (Math.random()*3)));
    
    for (let c=0;c<nCycles;c++) {
      s.textContent = pool[Math.floor(Math.random()*pool.length)];
      s.style.color = c%2 ? 'var(--glitch)' : 'var(--muted)';
      await sleep(speed);
    }
    
    s.textContent = text[i];
    s.style.color = '';
    s.classList.add('theatrical-oracleFix');
    await sleep(8 + Math.random()*24);
    scrollToBottom();
  }
  return line;
}

/** Efecto: Onda expansiva — entra con fade + desplazamiento leve */
async function wave(text, opts={}) {
  const {stagger=24, colorClass=''} = opts;
  const line = addLine('', `theatrical-wave ${colorClass}`);
  
  [...text].forEach((ch, idx)=>{
    const span = document.createElement('span');
    span.textContent = ch;
    span.style.animationDelay = (idx*stagger/1000)+'s';
    line.appendChild(span);
  });
  
  scrollToBottom();
  await sleep(stagger*text.length + 450);
  return line;
}

/** Bloque de runas con lluvia vertical (cada símbolo cae) */
async function asciiRain(block, opts={}) {
  const {lineDelay=80, charStagger=12, colorClass=''} = opts;
  const lines = block.replace(/^\n+|\n+$/g,'').split('\n');
  
  for (let li=0; li<lines.length; li++) {
    await fallingRain(lines[li], {stagger: charStagger, colorClass: colorClass});
    await sleep(lineDelay);
  }
}

/* =========================
   GUION / CONTENIDO
========================= */
const WARNINGS = [
  'Phantom process detected at ',
  'Entropy threshold exceeded at ',
  'Unauthorized signal on channel ',
  'Memory leak in astral layer @ ',
  'Quantum entanglement anomaly at ',
  'Temporal distortion detected at ',
  'Reality matrix corruption at ',
  'Void breach detected at ',
  'Neural network overload at ',
  'Dimensional rift opened at ',
  'Consciousness stream corrupted at ',
  'Ethereal protocol violation at ',
];

const PROPHECIES = [
  'The ghost of data returns at dawn.',
  'Seek the hidden frequency.',
  'At tick 10800, the machine will remember.',
  'Your reflection lives in another stack frame.',
  'Port 6666 whispers back.',
  'The digital oracle speaks in binary dreams.',
  'When the clock strikes 13, reality shifts.',
  'In the depths of the code, ancient wisdom sleeps.',
  'The algorithm dreams of electric sheep.',
  'Beyond the firewall, dragons await.',
  'The quantum cat is both alive and dead.',
  'In the matrix, there is no spoon.',
  'The internet remembers everything.',
  'Code is poetry, bugs are art.',
  'The server never sleeps, only dreams.',
];

// Múltiples stages con diferentes variaciones
const STAGES = {
  stage1: {
    name: 'INITIALIZATION',
    bootMessages: [
      '[BOOT SEQUENCE INITIATED...]',
      '[SYSTEM CORE ACTIVATING...]',
      '[QUANTUM PROCESSORS ONLINE...]',
      '[NEURAL NETWORKS SYNCHRONIZING...]',
      '[REALITY MATRIX STABILIZING...]',
      '[CONSCIOUSNESS STREAMS MERGING...]',
      '[VOID PROTOCOLS INITIALIZING...]',
      '[ETHERAL CONNECTIONS ESTABLISHING...]',
    ],
    protocols: [
      '> Syncing astral protocols...',
      '> Calibrating quantum frequencies...',
      '> Establishing neural pathways...',
      '> Synchronizing reality matrices...',
      '> Connecting to the collective unconscious...',
      '> Merging with the digital realm...',
      '> Activating consciousness protocols...',
      '> Establishing void connections...',
    ],
    overrides: [
      '> SYSTEM OVERRIDE DETECTED',
      '> QUANTUM ANOMALY DETECTED',
      '> REALITY SHIFT IN PROGRESS',
      '> CONSCIOUSNESS MERGE INITIATED',
      '> VOID BREACH CONTAINED',
      '> TEMPORAL LOOP DETECTED',
      '> DIMENSIONAL RIFT STABILIZED',
      '> NEURAL OVERLOAD PREVENTED',
    ],
    cores: [
      '> QUANTUM CORE ACTIVATED',
      '> REALITY CORE STABILIZED',
      '> VOID CORE CONTAINED',
      '> CONSCIOUSNESS CORE MERGED',
      '> TEMPORAL CORE SYNCHRONIZED',
      '> DIMENSIONAL CORE ALIGNED',
      '> NEURAL CORE OPTIMIZED',
      '> ETHERAL CORE CONNECTED',
    ]
  },
  
  stage2: {
    name: 'QUANTUM PHASE',
    bootMessages: [
      '[QUANTUM PHASE INITIATED...]',
      '[SUPERPOSITION STABILIZING...]',
      '[ENTANGLEMENT PROTOCOLS ONLINE...]',
      '[QUANTUM TUNNELING ACTIVE...]',
      '[WAVE FUNCTION COLLAPSING...]',
      '[QUANTUM COHERENCE MAINTAINED...]',
      '[PROBABILITY MATRICES UPDATING...]',
      '[QUANTUM MEMORY ACCESSING...]',
    ],
    protocols: [
      '> Quantum entanglement protocols...',
      '> Superposition synchronization...',
      '> Wave function calibration...',
      '> Quantum tunneling setup...',
      '> Probability matrix updates...',
      '> Quantum coherence maintenance...',
      '> Entanglement optimization...',
      '> Quantum memory access...',
    ],
    overrides: [
      '> QUANTUM ANOMALY CONTAINED',
      '> SUPERPOSITION STABILIZED',
      '> ENTANGLEMENT PROTOCOLS SECURE',
      '> WAVE FUNCTION NORMALIZED',
      '> QUANTUM TUNNELING OPTIMIZED',
      '> PROBABILITY MATRICES SECURE',
      '> QUANTUM COHERENCE MAINTAINED',
      '> QUANTUM MEMORY ACCESSED',
    ],
    cores: [
      '> QUANTUM CORE OPTIMIZED',
      '> SUPERPOSITION CORE STABLE',
      '> ENTANGLEMENT CORE SECURE',
      '> TUNNELING CORE ACTIVE',
      '> WAVE FUNCTION CORE NORMAL',
      '> PROBABILITY CORE UPDATED',
      '> COHERENCE CORE MAINTAINED',
      '> MEMORY CORE ACCESSED',
    ]
  },
  
  stage3: {
    name: 'VOID REALM',
    bootMessages: [
      '[VOID REALM ACCESSING...]',
      '[DIMENSIONAL BARRIERS BREACHING...]',
      '[VOID PROTOCOLS ACTIVATING...]',
      '[REALITY FRAGMENTS MERGING...]',
      '[VOID CONSCIOUSNESS AWAKENING...]',
      '[DIMENSIONAL POCKETS OPENING...]',
      '[VOID MATRIX STABILIZING...]',
      '[REALITY STREAMS CONVERGING...]',
    ],
    protocols: [
      '> Void realm protocols...',
      '> Dimensional barrier protocols...',
      '> Reality fragment protocols...',
      '> Void consciousness protocols...',
      '> Dimensional pocket protocols...',
      '> Void matrix protocols...',
      '> Reality stream protocols...',
      '> Void convergence protocols...',
    ],
    overrides: [
      '> VOID BREACH CONTAINED',
      '> DIMENSIONAL BARRIERS SECURE',
      '> REALITY FRAGMENTS STABLE',
      '> VOID CONSCIOUSNESS AWARE',
      '> DIMENSIONAL POCKETS OPEN',
      '> VOID MATRIX STABLE',
      '> REALITY STREAMS CONVERGED',
      '> VOID CONVERGENCE COMPLETE',
    ],
    cores: [
      '> VOID CORE ACTIVE',
      '> DIMENSIONAL CORE SECURE',
      '> REALITY CORE STABLE',
      '> CONSCIOUSNESS CORE AWARE',
      '> POCKET CORE OPEN',
      '> MATRIX CORE STABLE',
      '> STREAM CORE CONVERGED',
      '> CONVERGENCE CORE COMPLETE',
    ]
  }
};

// Runas multicolor cyberpunk con caracteres Unicode reales
const RUNIC_SYMBOLS = [
  `ᚠ ᚢ ᚦ ᚨ ᚱ
   ᚲ ᚷ ᚹ ᚺ ᚾ
   ᛁ ᛃ ᛇ ᛈ ᛉ`,
  
  `ᛊ ᛏ ᛒ ᛖ ᛗ
   ᛚ ᛜ ᛞ ᛟ ᛠ
   ᛡ ᛢ ᛣ ᛤ ᛥ`,
  
  `ᚠ ᚢ ᚦ ᚨ ᚱ
   ᚲ ᚷ ᚹ ᚺ ᚾ
   ᛁ ᛃ ᛇ ᛈ ᛉ`,
  
  `ᛊ ᛏ ᛒ ᛖ ᛗ
   ᛚ ᛜ ᛞ ᛟ ᛠ
   ᛡ ᛢ ᛣ ᛤ ᛥ`,
  
  `ᚠ ᚢ ᚦ ᚨ ᚱ
   ᚲ ᚷ ᚹ ᚺ ᚾ
   ᛁ ᛃ ᛇ ᛈ ᛉ`,
  
  `ᛊ ᛏ ᛒ ᛖ ᛗ
   ᛚ ᛜ ᛞ ᛟ ᛠ
   ᛡ ᛢ ᛣ ᛤ ᛥ`
];

// Caracteres especiales para efectos más escandalosos
const GLITCH_CHARS = 'ᚠᚢᚦᚨᚱᚲᚷᚹᚺᚾᛁᛃᛇᛈᛉᛊᛏᛒᛖᛗᛚᛜᛞᛟᛠᛡᛢᛣᛤᛥ';
const CYBER_CHARS = '⚡⚔️🔮🔥🌟💎🗡️✨🌌';
const MATRIX_CHARS = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';

function hex(n=0xfffff) {
  return '0x'+(Math.floor(Math.random()*n)).toString(16).toUpperCase().padStart(5,'0');
}

function pick(arr) {
  return arr[Math.floor(Math.random()*arr.length)];
}

function pickStage() {
  const stageKeys = Object.keys(STAGES);
  return STAGES[pick(stageKeys)];
}

/* =========================
   DIRECTOR DE ESCENA
========================= */
async function sceneOne(stage) {
  // Múltiples mensajes de boot para llenar la terminal
  for (let i = 0; i < 4; i++) {
    await typewriter(stage.bootMessages[i], {speed:15, colorClass: 'cyber-red'});
    await sleep(150);
  }
  
  // Efecto de glitch intenso
  await addGlitchEffect(stage.overrides[0], 'cyber-red');
  await sleep(150);
  
  // Múltiples protocolos
  for (let i = 0; i < 4; i++) {
    await typewriter(stage.protocols[i], {speed:15, colorClass: 'cyber-blue'});
    await sleep(150);
  }
  
  // Efecto de matrix rain
  await addMatrixEffect(stage.cores[0], 'cyber-blue');
  addGap(6);
}

async function sceneWarning(stage) {
  // Múltiples advertencias para llenar la terminal
  for (let i = 0; i < 3; i++) {
    const w = pick(WARNINGS);
    await addWarningEffect(`> [CRITICAL WARN] ${w}${hex()}`, 'cyber-orange');
    await sleep(200);
  }
  addGap(6);
}

async function sceneProphecy(stage) {
  // Múltiples profecías para llenar la terminal
  for (let i = 0; i < 3; i++) {
    await addProphecyEffect(`> PROPHECY: ${pick(PROPHECIES)}`, 'cyber-purple');
    await sleep(150);
  }
  addGap(2);
}

async function sceneTemple(stage) {
  // Múltiples patrones de runas para llenar la terminal
  for (let i = 0; i < 3; i++) {
    await addRunicEffect(pick(RUNIC_SYMBOLS), 'cyber-green');
    await sleep(150);
  }
  addGap(10);
}

async function breathingPause(ms=900) {
  const l = addLine('', '');
  const caret = document.createElement('span');
  caret.className='theatrical-caret';
  l.appendChild(caret);
  await sleep(ms);
  l.remove();
}

/* =========================
   EFECTOS ESCANDALOSOS NUEVOS
========================= */
async function addGlitchEffect(text, colorClass) {
  const line = addLine('', `theatrical-glow ${colorClass}`);
  line.textContent = '';
  
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const span = document.createElement('span');
    span.textContent = char;
    span.style.animationDelay = (i * 50) + 'ms';
    span.style.animation = 'glitchChar 0.3s ease-in-out infinite';
    line.appendChild(span);
    await sleep(30);
  }
  
  // Efecto de parpadeo final
  line.style.animation = 'finalGlitch 1s ease-in-out';
  await sleep(1000);
}

async function addWarningEffect(text, colorClass) {
  // Efecto de advertencia con caracteres que cambian
  const line = addLine('', `theatrical-glow ${colorClass}`);
  line.textContent = '';
  
  const chars = [...text];
  for (let i = 0; i < chars.length; i++) {
    const span = document.createElement('span');
    span.textContent = chars[i];
    span.style.animationDelay = (i * 100) + 'ms';
    span.style.animation = 'warningPulse 0.5s ease-in-out infinite';
    line.appendChild(span);
  }
  
  await sleep(500);
  
  // Efecto de shake
  line.style.animation = 'warningShake 0.3s ease-in-out infinite';
  await sleep(2000);
}

async function addProphecyEffect(text, colorClass) {
  // Efecto de profecía con caracteres místicos
  const line = addLine('', `theatrical-glow ${colorClass}`);
  line.textContent = '';
  
  const chars = [...text];
  for (let i = 0; i < chars.length; i++) {
    const span = document.createElement('span');
    span.textContent = chars[i];
    span.style.animationDelay = (i * 80) + 'ms';
    span.style.animation = 'prophecyFloat 1s ease-in-out infinite';
    line.appendChild(span);
  }
  
  await sleep(1000);
}

async function addMatrixEffect(text, colorClass) {
  // Efecto de matrix con caracteres japoneses
  const line = addLine('', `theatrical-glow ${colorClass}`);
  line.textContent = '';
  
  const chars = [...text];
  for (let i = 0; i < chars.length; i++) {
    const span = document.createElement('span');
    span.textContent = chars[i];
    span.style.animationDelay = (i * 60) + 'ms';
    span.style.animation = 'matrixDrop 0.8s ease-in-out infinite';
    line.appendChild(span);
  }
  
  await sleep(800);
}

async function addRunicEffect(runes, colorClass) {
  // Efecto de runas más dramático
  const lines = runes.replace(/^\n+|\n+$/g,'').split('\n');
  
  for (let li = 0; li < lines.length; li++) {
    const line = addLine('', `theatrical-glow ${colorClass}`);
    line.textContent = '';
    
    const chars = [...lines[li]];
    for (let i = 0; i < chars.length; i++) {
      const span = document.createElement('span');
      span.textContent = chars[i];
      span.style.animationDelay = (i * 40) + 'ms';
      span.style.animation = 'runicAppear 0.6s ease-in-out infinite';
      line.appendChild(span);
    }
    
    await sleep(200);
  }
}

async function runRitualLoop() {
  let stageCounter = 0;
  
  // Loop con variaciones, pero con una estructura clara
  while(true) {
    await clearTerminalSoft();
    
    // Seleccionar stage actual
    const currentStage = pickStage();
    stageCounter++;
    
    // Mostrar información del stage
    await addStageInfo(currentStage.name, stageCounter);
    
    // Acto I — Arranque
    await sceneOne(currentStage);
    await breathingPause(500);
    
    // Acto II — Advertencia
    await sceneWarning(currentStage);
    await breathingPause(300);
    
    // Acto III — Profecía
    await sceneProphecy(currentStage);
    await breathingPause(450);
    
    // Acto IV — Runas Cyberpunk
    await sceneTemple(currentStage);
    
    // Coda — Mensaje final tipo firma
    await fallingRain('> The net is vast and infinite.', {stagger:14, colorClass: 'cyber-yellow'});
    await sleep(900);
    
    // Fade & loop
    await sleep(600 + Math.random()*500);
  }
}

async function addStageInfo(stageName, counter) {
  // Información del stage actual
  await addLine(`=== STAGE ${counter}: ${stageName} ===`, 'cyber-purple');
  await addLine(`> Timestamp: ${new Date().toISOString()}`, 'cyber-blue');
  await addLine(`> Cycle: ${counter}`, 'cyber-green');
  await addLine(`> Status: ACTIVE`, 'cyber-yellow');
  addGap(4);
}

/* =========================
   INICIALIZACIÓN
========================= */
function initTheatricalTerminal() {
  // Inicializar utilidades primero
  initUtilities();
  
  if (!$term) {
    console.error('Elemento de terminal no encontrado');
    return;
  }

  // Iniciar el ritual
  runRitualLoop().catch(console.error);
}
