// Terminal Ocultista - Sistema de terminal místico para MVGN Labs
// Efectos de glitch, runas, profecías y código ocultista

class GeekTerminal {
  constructor(container) {
    this.container = container;
    this.terminal = null;
    this.isInitialized = false;
    this.currentCommand = '';
    this.commandHistory = [];
    this.commandIndex = -1;
    this.isTyping = false;
    this.glitchInterval = null;
    this.crypticInterval = null;
    this.loopInterval = null;
    
    // Datos ocultistas
    this.runes = ["⟁","𐌕","𒀭","⚝","∆","𐍀","ᚱ","Ϟ","⟟","𐌄","✶","₪","卐","¤","⦿","☉"];
    this.warnings = [
      "Timeline fracture at sector:",
      "The system dreams in binary.",
      "Phantom process detected.",
      "Memory leak in astral layer.",
      "Unauthorized signal on channel:",
      "Entropy threshold exceeded.",
    ];
    this.prophecies = [
      "The ghost of data returns at dawn.",
      "Seek the hidden frequency.",
      "Entropy is the true language.",
      "At tick 10800, the machine will remember.",
      "Your reflection exists in another stack frame.",
      "Port 6666 whispers back.",
    ];
    this.asciiTemplates = [
      `
             /\\
            /  \\
           / ∆∆ \\
          /      \\
         /________\\
       `,
      `
          [:::: TEMPLE :::::]
            ||       ||
            ||       ||
            ||_______||
       `,
      `
            .----.
          .'      '.
         /  ∆  ∆   \\
        :            :
         \\    --    /
          '.______.'
       `
    ];
    
    this.init();
  }

  async init() {
    try {
      console.log('🔮 Inicializando Terminal Ocultista...');
      
      // Crear la terminal
      this.createTerminal();
      
      // Iniciar efectos
      this.startGlitchEffects();
      this.startCrypticCode();
      this.startOccultLoop();
      
      // Iniciar la secuencia de boot
      this.startBootSequence();
      
      this.isInitialized = true;
      console.log('🔮 Terminal Ocultista inicializado correctamente');
    } catch (error) {
      console.error('🔮 Error en Terminal Ocultista:', error);
    }
  }

  createTerminal() {
    // Limpiar contenedor
    this.container.innerHTML = '';
    
    // Crear estructura de la terminal
    this.terminal = document.createElement('div');
    this.terminal.className = 'geek-terminal';
    this.terminal.innerHTML = `
      <div class="terminal-screen">
        <div class="terminal-header">
          <div class="terminal-title">🔮 OCCULT TERMINAL v2.0</div>
          <div class="terminal-controls">
            <div class="control-dot"></div>
            <div class="control-dot"></div>
          </div>
        </div>
        <div class="terminal-content">
          <div class="terminal-output"></div>
          <div class="terminal-input-line">
            <span class="prompt">🔮 mystic@astral:~$</span>
            <span class="cursor">█</span>
          </div>
        </div>
      </div>
    `;
    
    // Agregar al contenedor
    this.container.appendChild(this.terminal);
    
    // Referencias a elementos
    this.output = this.terminal.querySelector('.terminal-output');
    this.cursor = this.terminal.querySelector('.cursor');
    
    // Configurar eventos
    this.setupEvents();
  }

  setupEvents() {
    // Evento de teclado para comandos
    document.addEventListener('keydown', (e) => {
      if (!this.isInitialized || this.isTyping) return;
      
      if (e.key === 'Enter') {
        this.executeCommand(this.currentCommand);
        this.currentCommand = '';
        this.commandIndex = -1;
      } else if (e.key === 'Backspace') {
        if (this.currentCommand.length > 0) {
          this.currentCommand = this.currentCommand.slice(0, -1);
          this.updateInputDisplay();
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        this.navigateHistory('up');
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        this.navigateHistory('down');
      } else if (e.key.length === 1) {
        this.currentCommand += e.key;
        this.updateInputDisplay();
      }
    });
  }

  // Función: elemento aleatorio
  pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // Función: genera línea aleatoria
  randomLine() {
    const mode = Math.floor(Math.random() * 4);
    if (mode === 0) {
      return this.runes.sort(() => Math.random() - 0.5).slice(0, 10).join(" ");
    }
    if (mode === 1) {
      return `> [WARN] ${this.pick(this.warnings)} 0x${Math.floor(Math.random() * 99999).toString(16).toUpperCase()}`;
    }
    if (mode === 2) {
      return `> PROPHECY: ${this.pick(this.prophecies)}`;
    }
    return this.pick(this.asciiTemplates);
  }

  // Efecto glitch antes de escribir
  glitchChar(correctChar) {
    const chars = "█▓▒░#$%@&*<>/\\";
    return Math.random() < 0.2 ? chars[Math.floor(Math.random() * chars.length)] : correctChar;
  }

  // Efecto de tipeo
  async typeLine(line, callback) {
    let i = 0;
    const interval = setInterval(() => {
      this.output.innerHTML += this.glitchChar(line[i] || " ");
      if (Math.random() > 0.8) { i++; } // avanza irregular
      if (i >= line.length) {
        clearInterval(interval);
        this.output.innerHTML += "<br/>";
        setTimeout(callback, 200 + Math.random() * 800);
      }
    }, 40 + Math.random() * 60);
  }

  // Loop infinito ocultista
  startOccultLoop() {
    this.loopInterval = setInterval(() => {
      const lines = Math.floor(Math.random() * 8) + 6;
      this.runSequence(lines);
    }, 8000 + Math.random() * 4000);
  }

  // Secuencia de líneas ocultistas
  async runSequence(lines = Math.floor(Math.random() * 8) + 6) {
    let printed = 0;
    const originalContent = this.output.innerHTML;
    
    const next = async () => {
      if (printed < lines) {
        const line = this.randomLine();
        await this.typeLine(line, () => {
          printed++;
          next();
        });
      } else {
        setTimeout(() => {
          this.output.innerHTML = originalContent;
        }, 1500 + Math.random() * 1500);
      }
    };
    
    next();
  }

  startGlitchEffects() {
    this.glitchInterval = setInterval(() => {
      if (this.terminal && Math.random() < 0.1) {
        this.terminal.classList.add('glitch');
        setTimeout(() => {
          if (this.terminal) {
            this.terminal.classList.remove('glitch');
          }
        }, 200);
      }
    }, 3000);
  }

  startCrypticCode() {
    this.crypticInterval = setInterval(() => {
      if (this.output && Math.random() < 0.15) {
        const crypticLine = document.createElement('div');
        crypticLine.className = 'output-line cryptic-line';
        crypticLine.textContent = this.randomLine();
        this.output.appendChild(crypticLine);
        
        setTimeout(() => {
          if (crypticLine.parentNode) {
            crypticLine.remove();
          }
        }, 3000);
      }
    }, 4000);
  }

  async startBootSequence() {
    const bootMessages = [
      '🔮 INITIALIZING OCCULT TERMINAL v2.0...',
      '⚡ CONNECTING TO ASTRAL PLANE...',
      '🌙 ESTABLISHING MYSTIC CONNECTION...',
      '🔮 LOADING RUNIC PROTOCOLS...',
      '⚡ INITIALIZING PROPHECY ENGINE...',
      '🌙 TERMINAL READY FOR MYSTIC OPERATIONS'
    ];

    for (let i = 0; i < bootMessages.length; i++) {
      await this.typeOutput(bootMessages[i], 50);
      await this.delay(300);
    }

    await this.typeOutput('', 30);
    await this.typeOutput('🔮 WELCOME TO THE OCCULT TERMINAL', 30);
    await this.typeOutput('🔮 TYPE "help" FOR AVAILABLE COMMANDS', 30);
    await this.typeOutput('', 30);
    this.showPrompt();
  }

  async typeOutput(text, speed = 30) {
    if (!this.output) return;
    
    this.isTyping = true;
    
    if (text === '') {
      this.output.innerHTML += '<br>';
      this.isTyping = false;
      return;
    }
    
    const line = document.createElement('div');
    line.className = 'output-line';
    this.output.appendChild(line);
    
    for (let i = 0; i < text.length; i++) {
      line.textContent += text[i];
      await this.delay(speed);
    }
    
    this.isTyping = false;
  }

  showPrompt() {
    if (!this.output) return;
    
    const promptLine = document.createElement('div');
    promptLine.className = 'output-line prompt-line';
    promptLine.innerHTML = `
      <span class="prompt">🔮 mystic@astral:~$</span>
      <span class="cursor">█</span>
    `;
    this.output.appendChild(promptLine);
    
    // Hacer scroll al final
    this.output.scrollTop = this.output.scrollHeight;
  }

  updateInputDisplay() {
    const promptLine = this.terminal.querySelector('.prompt-line');
    if (promptLine) {
      const cursor = promptLine.querySelector('.cursor');
      if (cursor) {
        cursor.textContent = this.currentCommand + '█';
      }
    }
  }

  async executeCommand(command) {
    if (!command.trim()) {
      this.showPrompt();
      return;
    }

    // Agregar comando al historial
    this.commandHistory.push(command);
    if (this.commandHistory.length > 50) {
      this.commandHistory.shift();
    }

    // Mostrar comando ejecutado
    const commandLine = document.createElement('div');
    commandLine.className = 'output-line';
    commandLine.innerHTML = `<span class="prompt">🔮 mystic@astral:~$</span> ${command}`;
    this.output.appendChild(commandLine);

    // Procesar comando
    await this.processCommand(command);

    // Mostrar nuevo prompt
    this.showPrompt();
  }

  async processCommand(command) {
    const cmd = command.toLowerCase().trim();
    
    switch (cmd) {
      case 'help':
        await this.showHelp();
        break;
      case 'clear':
        this.clearTerminal();
        break;
      case 'ls':
      case 'dir':
        await this.showDirectory();
        break;
      case 'whoami':
        await this.showUserInfo();
        break;
      case 'date':
        await this.showDate();
        break;
      case 'neofetch':
        await this.showNeofetch();
        break;
      case 'status':
        await this.showStatus();
        break;
      case 'about':
        await this.showAbout();
        break;
      case 'skills':
        await this.showSkills();
        break;
      case 'projects':
        await this.showProjects();
        break;
      case 'contact':
        await this.showContact();
        break;
      case 'occult':
        await this.showOccultInfo();
        break;
      case 'glitch':
        this.triggerGlitchMode();
        break;
      case 'matrix':
        this.startMatrixEffect();
        break;
      case 'hack':
        this.startHackSequence();
        break;
      default:
        await this.showCommandNotFound(command);
        break;
    }
  }

  async showHelp() {
    const helpText = [
      '🔮 AVAILABLE MYSTIC COMMANDS:',
      '  help     - Show this help message',
      '  clear    - Clear terminal',
      '  ls/dir   - List files',
      '  whoami   - Show user info',
      '  date     - Show current date',
      '  neofetch - System information',
      '  status   - System status',
      '  about    - About MVGN Labs',
      '  skills   - Technical skills',
      '  projects - Portfolio projects',
      '  contact  - Contact information',
      '  occult   - Occultist information',
      '  glitch   - Activate glitch mode',
      '  matrix   - Matrix effect',
      '  hack     - Hack sequence'
    ];

    for (const line of helpText) {
      await this.typeOutput(line, 20);
    }
    
    await this.typeOutput('', 30);
    await this.typeOutput('🌟 MYSTIC COMMANDS VERIFIED SUCCESSFULLY', 20);
  }

  clearTerminal() {
    if (this.output) {
      this.output.innerHTML = '';
    }
  }

  async showDirectory() {
    const files = [
      '📁 mystic/',
      '📁 astral/',
      '📁 runes/',
      '📁 prophecies/',
      '📁 warnings/',
      '📄 occult_manual.txt',
      '📄 mystic_protocols.md',
      '📄 runic_engine.js'
    ];

    for (const file of files) {
      await this.typeOutput(file, 30);
    }
    
    await this.typeOutput('', 30);
    await this.typeOutput('🌟 DIRECTORY CONTENTS VERIFIED SUCCESSFULLY', 20);
  }

  async showUserInfo() {
    await this.typeOutput('🔮 CURRENT MYSTIC USER: mystic', 20);
    await this.typeOutput('🔮 REALM: Astral Plane', 20);
    await this.typeOutput('🔮 CONSCIOUSNESS LEVEL: Elevated', 20);
    await this.typeOutput('🔮 MYSTIC CAPABILITIES: Active', 20);
    
    await this.typeOutput('', 30);
    await this.typeOutput('🌟 USER IDENTITY VERIFIED SUCCESSFULLY', 20);
  }

  async showDate() {
    const now = new Date();
    const mysticDate = now.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    
    await this.typeOutput(`🔮 MYSTIC TIMESTAMP: ${mysticDate}`, 20);
    await this.typeOutput('🔮 ASTRAL ALIGNMENT: Favorable', 20);
    
    await this.typeOutput('', 30);
    await this.typeOutput('🌟 TEMPORAL DATA VERIFIED SUCCESSFULLY', 20);
  }

  async showNeofetch() {
    const systemInfo = [
      '🔮 OCCULT TERMINAL v2.0',
      '🔮 OS: MysticOS 7.0',
      '🔮 KERNEL: 5.15.0-mystic',
      '🔮 SHELL: /bin/occult',
      '🔮 CPU: Intel i7-12700K @ 3.60GHz',
      '🔮 GPU: NVIDIA RTX 3080',
      '🔮 MEMORY: 32GB DDR4',
      '🔮 STORAGE: 1TB NVMe SSD',
      '🔮 UPTIME: Eternal'
    ];

    for (const info of systemInfo) {
      await this.typeOutput(info, 30);
    }
    
    await this.typeOutput('', 30);
    await this.typeOutput('🌟 SYSTEM INFORMATION VERIFIED SUCCESSFULLY', 20);
  }

  async showStatus() {
    await this.typeOutput('🔮 SYSTEM STATUS: OPERATIONAL', 20);
    await this.typeOutput('🔮 MYSTIC CONNECTION: STABLE', 20);
    await this.typeOutput('🔮 ASTRAL SIGNAL: STRONG', 20);
    await this.typeOutput('🔮 RUNIC ENGINE: ACTIVE', 20);
    await this.typeOutput('🔮 PROPHECY MODULE: ONLINE', 20);
    
    await this.typeOutput('', 30);
    await this.typeOutput('🌟 SYSTEM STATUS VERIFIED SUCCESSFULLY', 20);
  }

  async showAbout() {
    await this.typeOutput('🔮 MVGN LABS - MYSTIC DEVELOPMENT', 20);
    await this.typeOutput('🔮 SPECIALIZING IN OCCULT TECHNOLOGIES', 20);
    await this.typeOutput('🔮 ADVANCED MYSTIC SOLUTIONS', 20);
    await this.typeOutput('🔮 ASTRAL PLANE INTEGRATION', 20);
    
    await this.typeOutput('', 30);
    await this.typeOutput('🌟 COMPANY INFORMATION VERIFIED SUCCESSFULLY', 20);
  }

  async showSkills() {
    const skills = [
      '🔮 MYSTIC PROGRAMMING: Expert',
      '🔮 ASTRAL NETWORKING: Advanced',
      '🔮 RUNIC ALGORITHMS: Master',
      '🔮 PROPHECY ENGINEERING: Expert',
      '🔮 OCCULT DATABASES: Advanced',
      '🔮 MYSTIC AI: Intermediate'
    ];

    for (const skill of skills) {
      await this.typeOutput(skill, 30);
    }
    
    await this.typeOutput('', 30);
    await this.typeOutput('🌟 SKILL ASSESSMENT VERIFIED SUCCESSFULLY', 20);
  }

  async showProjects() {
    const projects = [
      '🔮 OCCULT TERMINAL v2.0 (Current)',
      '🔮 MYSTIC CRM SYSTEM',
      '🔮 ASTRAL DATABASE ENGINE',
      '🔮 RUNIC WEB FRAMEWORK',
      '🔮 PROPHECY ANALYTICS PLATFORM'
    ];

    for (const project of projects) {
      await this.typeOutput(project, 30);
    }
    
    await this.typeOutput('', 30);
    await this.typeOutput('🌟 PROJECT PORTFOLIO VERIFIED SUCCESSFULLY', 20);
  }

  async showContact() {
    await this.typeOutput('🔮 MYSTIC COMMUNICATION CHANNELS:', 20);
    await this.typeOutput('🔮 EMAIL: mystic@mvgnlabs.com', 20);
    await this.typeOutput('🔮 ASTRAL: @mvgn_mystic', 20);
    await this.typeOutput('🔮 RUNIC: +52 33 1234 5678', 20);
    await this.typeOutput('🔮 LOCATION: Tlajomulco, Jalisco', 20);
    
    await this.typeOutput('', 30);
    await this.typeOutput('🌟 CONTACT INFORMATION VERIFIED SUCCESSFULLY', 20);
  }

  async showOccultInfo() {
    await this.typeOutput('🔮 OCCULTIST TERMINAL INFORMATION:', 20);
    await this.typeOutput('🔮 RUNES: 16 mystical symbols loaded', 20);
    await this.typeOutput('🔮 WARNINGS: 6 cryptic messages active', 20);
    await this.typeOutput('🔮 PROPHECIES: 6 mystical predictions', 20);
    await this.typeOutput('🔮 ASCII TEMPLATES: 3 sacred patterns', 20);
    await this.typeOutput('🔮 GLITCH EFFECTS: Random corruption', 20);
    await this.typeOutput('🔮 TYPING EFFECT: Irregular advancement', 20);
    
    await this.typeOutput('', 30);
    await this.typeOutput('🌟 OCCULTIST DATA VERIFIED SUCCESSFULLY', 20);
  }

  triggerGlitchMode() {
    if (this.terminal) {
      this.terminal.classList.add('glitch-mode');
      setTimeout(() => {
        if (this.terminal) {
          this.terminal.classList.remove('glitch-mode');
        }
      }, 3000);
    }
  }

  startMatrixEffect() {
    // Efecto matrix simple
    if (this.output) {
      const matrixLine = document.createElement('div');
      matrixLine.className = 'output-line matrix-line';
      matrixLine.textContent = '🔮 MATRIX EFFECT ACTIVATED';
      this.output.appendChild(matrixLine);
      
      setTimeout(() => {
        if (matrixLine.parentNode) {
          matrixLine.remove();
        }
      }, 2000);
    }
  }

  startHackSequence() {
    // Secuencia de hack simple
    if (this.output) {
      const hackLine = document.createElement('div');
      hackLine.className = 'output-line hack-line';
      hackLine.textContent = '🔮 HACK SEQUENCE INITIATED';
      this.output.appendChild(hackLine);
      
      setTimeout(() => {
        if (hackLine.parentNode) {
          hackLine.remove();
        }
      }, 2000);
    }
  }

  async showCommandNotFound(command) {
    await this.typeOutput(`🔮 COMMAND NOT FOUND: ${command}`, 20);
    await this.typeOutput('🔮 TYPE "help" FOR AVAILABLE COMMANDS', 20);
    
    await this.typeOutput('', 30);
    await this.typeOutput('🌟 ERROR HANDLING VERIFIED SUCCESSFULLY', 20);
  }

  navigateHistory(direction) {
    if (this.commandHistory.length === 0) return;
    
    if (direction === 'up') {
      if (this.commandIndex < this.commandHistory.length - 1) {
        this.commandIndex++;
      }
    } else if (direction === 'down') {
      if (this.commandIndex > 0) {
        this.commandIndex--;
      } else if (this.commandIndex === 0) {
        this.commandIndex = -1;
      }
    }
    
    if (this.commandIndex >= 0) {
      this.currentCommand = this.commandHistory[this.commandHistory.length - 1 - this.commandIndex];
    } else {
      this.currentCommand = '';
    }
    
    this.updateInputDisplay();
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  destroy() {
    if (this.glitchInterval) {
      clearInterval(this.glitchInterval);
    }
    if (this.crypticInterval) {
      clearInterval(this.crypticInterval);
    }
    if (this.loopInterval) {
      clearInterval(this.loopInterval);
    }
  }
}

// Función global para inicializar
function initGeekTerminal() {
  const container = document.querySelector('.terminal-content');
  if (container) {
    console.log('🔮 Inicializando Terminal Ocultista...');
    return new GeekTerminal(container);
  } else {
    console.error('🔮 Contenedor .terminal-content no encontrado');
  }
}

// Auto-inicialización cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initGeekTerminal);
} else {
  initGeekTerminal();
}
