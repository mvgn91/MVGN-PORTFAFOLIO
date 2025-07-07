// Inicializar Lucide Icons
lucide.createIcons();

// Transición entre Landing Page y Portfolio con sello animado y transición elegante
const enterBtn = document.getElementById('enter-portfolio');
const contactBtn = document.getElementById('contact-direct');
const stamp = document.getElementById('persona3-stamp');

// Función para mostrar el sello con animación
function showStamp() {
  stamp.classList.add('show');
  setTimeout(() => {
    stamp.classList.remove('show');
  }, 2000);
}

// Transición al portafolio
enterBtn.addEventListener('click', function() {
  showStamp();
  
  setTimeout(() => {
    const landingPage = document.getElementById('landing-page');
    const portfolioPage = document.getElementById('portfolio-page');
<<<<<<< HEAD
    // Animación de salida elegante: fade + blur
    landingPage.style.transition = 'opacity 0.7s cubic-bezier(.4,1.8,.4,.9), filter 0.7s cubic-bezier(.4,1.8,.4,.9)';
    landingPage.style.opacity = '0';
    landingPage.style.filter = 'blur(18px)';
=======
    
    landingPage.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    landingPage.style.opacity = '0';
    landingPage.style.transform = 'scale(0.95)';
    
>>>>>>> 3a0bad471fec69bc02119d1b7f8b805e3beb092f
    setTimeout(() => {
      landingPage.style.display = 'none';
      portfolioPage.classList.remove('hidden');
      portfolioPage.style.opacity = '0';
<<<<<<< HEAD
      portfolioPage.style.filter = 'blur(18px)';
      portfolioPage.style.transition = 'opacity 1.2s cubic-bezier(.4,1.8,.4,.9), filter 1.2s cubic-bezier(.4,1.8,.4,.9)';
      setTimeout(() => {
        portfolioPage.style.opacity = '1';
        portfolioPage.style.filter = 'blur(0)';
      }, 50);
    }, 700);
  }, 900); // Duración de la animación del sello
=======
      portfolioPage.style.transform = 'translateY(20px)';
      portfolioPage.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      
      setTimeout(() => {
        portfolioPage.style.opacity = '1';
        portfolioPage.style.transform = 'translateY(0)';
      }, 100);
    }, 500);
  }, 800);
});

// Contacto directo desde la ID Card
contactBtn.addEventListener('click', function() {
  showStamp();
  
  setTimeout(() => {
    const message = '¡Hola Armando! Vi tu ID Card y me interesa trabajar contigo en un proyecto. ¿Podemos hablar?';
    const whatsappUrl = `https://wa.me/523322621939?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }, 800);
>>>>>>> 3a0bad471fec69bc02119d1b7f8b805e3beb092f
});

// Scroll suave para navegación interna
document.querySelectorAll('nav a').forEach(enlace => {
  enlace.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const seccion = document.querySelector(href);
      if (seccion) {
        seccion.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// Funcionalidad del formulario de contacto
document.querySelector('.contact-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const formData = new FormData(this);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');
  
  // Crear mensaje personalizado para WhatsApp
  const whatsappMessage = `Hola Armando! Soy ${name} (${email}). ${message}`;
  const whatsappUrl = `https://wa.me/523322621939?text=${encodeURIComponent(whatsappMessage)}`;
  
  // Mostrar confirmación y abrir WhatsApp
  alert(`¡Gracias ${name}! Te redirigiremos a WhatsApp para completar el contacto.`);
  window.open(whatsappUrl, '_blank');
  
  // Limpiar el formulario
  this.reset();
});

// Animación de aparición al hacer scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.project-card, .hero-content, .contact-container').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Efectos adicionales para la ID Card
document.querySelectorAll('.stat-item, .quick-btn').forEach(item => {
  item.addEventListener('mouseenter', function() {
    if (this.classList.contains('stat-item')) {
      this.style.transform = 'translateY(-3px)';
    } else {
      this.style.transform = 'scale(1.1)';
    }
  });
  
  item.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// Efecto de typing para el mensaje de bienvenida
const welcomeTitle = document.querySelector('.welcome-text h2');
if (welcomeTitle) {
  const text = welcomeTitle.textContent;
  welcomeTitle.textContent = '';
  
  let i = 0;
  const typeWriter = () => {
    if (i < text.length) {
      welcomeTitle.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 80);
    }
  };
  
  setTimeout(typeWriter, 1000);
}

// Animación de la barra de experiencia
const experienceBar = document.querySelector('.fill');
if (experienceBar) {
  setTimeout(() => {
    experienceBar.style.width = '85%';
  }, 1500);
}

// Efecto de hover para los botones principales
document.querySelectorAll('.persona3-btn').forEach(btn => {
  btn.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-3px) scale(1.02)';
  });
  
  btn.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// Actualizar iconos después de cambios dinámicos
setTimeout(() => {
  lucide.createIcons();
<<<<<<< HEAD
}, 100);

document.addEventListener('DOMContentLoaded', () => {
  // Selecciona todos los elementos que deben animarse al hacer scroll
  const animatedEls = document.querySelectorAll('.project-card, .hero-content, .hero-stats, .projects-section, .contact-section, .contact-container');
  animatedEls.forEach(el => el.classList.add('portfolio-animate'));

  function revealOnScroll() {
    animatedEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        el.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Revela los que ya están en pantalla
});
=======
}, 100);
>>>>>>> 3a0bad471fec69bc02119d1b7f8b805e3beb092f
