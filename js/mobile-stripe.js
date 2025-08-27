/**
 * MVGN LABS - PORTFOLIO MÓVIL INSPIRADO EN STRIPE
 * JavaScript para microinteracciones y funcionalidades
 */

class StripePortfolio {
    constructor() {
        this.init();
    }

    init() {
        try {
            this.setupNavigation();
            this.setupSmoothScrolling();
            this.setupAnimations();
            this.setupFormHandling();
            this.setupInteractiveElements();
            this.setupPerformanceOptimizations();
        } catch (error) {
            console.error('Error durante la inicialización:', error);
        }
    }

    /**
     * Configuración de navegación móvil
     */
    setupNavigation() {
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');

        // Verificar que los elementos existan antes de continuar
        if (!navToggle || !navMenu) {
            console.warn('Elementos de navegación no encontrados');
            return;
        }

        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Cambiar icono del botón
            const icon = navToggle.querySelector('i');
            if (icon) {
                if (navMenu.classList.contains('active')) {
                    icon.setAttribute('data-lucide', 'x');
                } else {
                    icon.setAttribute('data-lucide', 'menu');
                }
                
                // Re-inicializar iconos Lucide
                if (typeof lucide !== 'undefined') {
                    lucide.createIcons();
                }
            }
        });

        // Cerrar menú al hacer clic en un enlace
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu && navToggle) {
                    navMenu.classList.remove('active');
                    const icon = navToggle.querySelector('i');
                    if (icon) {
                        icon.setAttribute('data-lucide', 'menu');
                        if (typeof lucide !== 'undefined') {
                            lucide.createIcons();
                        }
                    }
                }
            });
        });

        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', (e) => {
            if (navToggle && navMenu && !navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                const icon = navToggle.querySelector('i');
                if (icon) {
                    icon.setAttribute('data-lucide', 'menu');
                    if (typeof lucide !== 'undefined') {
                        lucide.createIcons();
                    }
                }
            }
        });
    }

    /**
     * Scroll suave para navegación
     */
    setupSmoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        const header = document.querySelector('.header');
        
        if (!header) {
            console.warn('Header no encontrado para scroll suave');
            return;
        }
        
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const headerHeight = header.offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    /**
     * Configuración de animaciones de entrada
     */
    setupAnimations() {
        // Intersection Observer para animaciones de entrada
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

        // Observar elementos para animaciones
        const animatedElements = document.querySelectorAll('.section, .project-card, .skill-item');
        animatedElements.forEach(el => {
            if (el) {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(el);
            }
        });
    }

    /**
     * Manejo del formulario de contacto
     */
    setupFormHandling() {
        const contactForm = document.querySelector('#contact-form');
        
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmission(contactForm);
            });

            // Validación en tiempo real
            const inputs = contactForm.querySelectorAll('input, textarea');
            inputs.forEach(input => {
                if (input) {
                    input.addEventListener('blur', () => this.validateField(input));
                    input.addEventListener('input', () => this.clearFieldError(input));
                }
            });
        }
    }

    /**
     * Manejo del envío del formulario
     */
    handleFormSubmission(form) {
        if (!form) return;
        
        const submitBtn = form.querySelector('button[type="submit"]');
        if (!submitBtn) return;
        
        const originalText = submitBtn.innerHTML;
        
        // Estado de carga
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i data-lucide="loader-2"></i> Enviando...';
        
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }

        // Simular envío (reemplazar con lógica real)
        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
            
            this.showNotification('Mensaje enviado correctamente', 'success');
            
            // Limpiar formulario
            form.reset();
        }, 2000);
    }

    /**
     * Validación de campos del formulario
     */
    validateField(field) {
        if (!field) return;
        
        const value = field.value.trim();
        const fieldName = field.name;
        let isValid = true;
        let errorMessage = '';

        // Remover errores previos
        this.clearFieldError(field);

        // Validaciones específicas
        switch (fieldName) {
            case 'name':
                if (value.length < 2) {
                    isValid = false;
                    errorMessage = 'El nombre debe tener al menos 2 caracteres';
                }
                break;
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    isValid = false;
                    errorMessage = 'Ingresa un email válido';
                }
                break;
            case 'message':
                if (value.length < 10) {
                    isValid = false;
                    errorMessage = 'El mensaje debe tener al menos 10 caracteres';
                }
                break;
        }

        if (!isValid) {
            this.showFieldError(field, errorMessage);
        }

        return isValid;
    }

    /**
     * Mostrar error en campo específico
     */
    showFieldError(field, message) {
        if (!field) return;
        
        // Remover errores previos
        this.clearFieldError(field);

        // Crear elemento de error
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.textContent = message;
        errorDiv.style.cssText = `
            color: #ef4444;
            font-size: 0.875rem;
            margin-top: 0.5rem;
            padding: 0.5rem;
            background: rgba(239, 68, 68, 0.1);
            border-radius: var(--radius-sm);
            border: 1px solid rgba(239, 68, 68, 0.3);
        `;

        // Insertar después del campo
        field.parentNode.insertBefore(errorDiv, field.nextSibling);
        field.style.borderColor = '#ef4444';
    }

    /**
     * Limpiar error de campo específico
     */
    clearFieldError(field) {
        if (!field) return;
        
        const errorDiv = field.parentNode.querySelector('.field-error');
        if (errorDiv) {
            errorDiv.remove();
        }
        field.style.borderColor = '';
    }

    /**
     * Configuración de elementos interactivos
     */
    setupInteractiveElements() {
        // Efectos hover en cards
        const cards = document.querySelectorAll('.project-card, .skill-item');
        cards.forEach(card => {
            if (card) {
                card.addEventListener('mouseenter', () => {
                    card.style.transform = 'translateY(-8px) scale(1.02)';
                });
                
                card.addEventListener('mouseleave', () => {
                    card.style.transform = 'translateY(0) scale(1)';
                });
            }
        });

        // Efectos en botones
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(button => {
            if (button) {
                button.addEventListener('mouseenter', () => {
                    button.style.transform = 'translateY(-2px)';
                });
                
                button.addEventListener('mouseleave', () => {
                    button.style.transform = 'translateY(0)';
                });
            }
        });
    }

    /**
     * Optimizaciones de rendimiento
     */
    setupPerformanceOptimizations() {
        // Throttle para scroll
        let ticking = false;
        
        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    // Lógica de scroll optimizada aquí
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        // Lazy loading para imágenes
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    /**
     * Mostrar notificación
     */
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            background: ${type === 'success' ? 'var(--accent-primary)' : '#ef4444'},
            color: white,
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-lg)',
            zIndex: '10000',
            transform: 'translateX(100%)',
            transition: 'transform 0.3s ease'
        `;

        notification.textContent = message;
        document.body.appendChild(notification);

        // Animación de entrada
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Auto-remover después de 3 segundos
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
}

/**
 * Inicialización cuando el DOM esté listo
 */
document.addEventListener('DOMContentLoaded', () => {
    try {
        // Inicializar el portfolio
        const portfolio = new StripePortfolio();
        
        // Inicializar iconos Lucide
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
        
        // Agregar clase de carga al body
        document.body.classList.add('loaded');
        
        // Log de inicialización
        console.log('🎨 MVGN Portfolio Móvil inspirado en Stripe inicializado');
    } catch (error) {
        console.error('Error durante la inicialización del portfolio:', error);
    }
});

/**
 * Manejo de eventos de carga de página
 */
window.addEventListener('load', () => {
    try {
        // Remover indicador de carga si existe
        const loader = document.querySelector('.loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                if (loader.parentNode) {
                    loader.remove();
                }
            }, 300);
        }
        
        // Inicializar animaciones adicionales
        document.body.classList.add('fully-loaded');
    } catch (error) {
        console.error('Error durante la carga de la página:', error);
    }
});

/**
 * Manejo de errores globales
 */
window.addEventListener('error', (e) => {
    console.error('Error en el portfolio:', e.error);
});

/**
 * Función de utilidad para debounce
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Función de utilidad para throttle
 */
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
