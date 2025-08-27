/**
 * MVGN LABS - PORTFOLIO MÓVIL 100% RESPONSIVE
 * JavaScript para funcionalidades y microinteracciones
 * Mobile-First Design System
 */

class ResponsivePortfolio {
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
            this.setupResponsiveFeatures();
            console.log('🎨 MVGN Portfolio Móvil Responsive inicializado');
        } catch (error) {
            console.error('Error durante la inicialización:', error);
        }
    }

    /**
     * Configuración de navegación móvil responsive
     */
    setupNavigation() {
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');

        if (!navToggle || !navMenu) {
            console.warn('Elementos de navegación no encontrados');
            return;
        }

        // Toggle del menú móvil
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Cerrar menú al hacer clic en enlaces
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });

        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });

        // Cerrar menú en resize si está abierto
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 1024 && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }

    /**
     * Actualizar icono del botón de navegación (obsoleto - ahora usa CSS)
     */
    updateNavIcon(toggle, isActive) {
        // Esta función ya no es necesaria, se maneja con CSS
        // Se mantiene por compatibilidad
    }

    /**
     * Scroll suave para navegación
     */
    setupSmoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        const header = document.querySelector('.header');
        
        if (!header) return;
        
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
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observar elementos para animaciones
        const animatedElements = document.querySelectorAll('.section, .project-card, .skill-category');
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
                input.addEventListener('blur', () => this.validateField(input));
                input.addEventListener('input', () => this.clearFieldError(input));
            });
        }
    }

    /**
     * Manejo del envío del formulario
     */
    handleFormSubmission(form) {
        if (!form) return;
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const formStatus = document.getElementById('form-status');
        if (!submitBtn) return;
        
        const originalText = submitBtn.innerHTML;
        
        // Estado de carga
        submitBtn.disabled = true;
        submitBtn.classList.add('loading');
        submitBtn.innerHTML = '<i data-lucide="loader-2"></i> Enviando...';
        
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }

        // Mostrar estado de carga en el nuevo diseño
        if (formStatus) {
            formStatus.textContent = 'Enviando mensaje...';
            formStatus.className = 'form-status loading';
            formStatus.style.display = 'block';
        }

        // Simular envío (reemplazar con lógica real)
        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.classList.remove('loading');
            submitBtn.innerHTML = originalText;
            
            // Mostrar éxito en el nuevo diseño
            if (formStatus) {
                formStatus.textContent = '¡Mensaje enviado con éxito! Te responderé pronto.';
                formStatus.className = 'form-status success';
                formStatus.style.display = 'block';
                
                // Ocultar después de 5 segundos
                setTimeout(() => {
                    formStatus.style.display = 'none';
                }, 5000);
            } else {
                // Fallback al sistema anterior
                this.showNotification('Mensaje enviado correctamente', 'success');
            }
            
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

        this.clearFieldError(field);

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
        
        this.clearFieldError(field);

        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.textContent = message;
        errorDiv.style.cssText = `
            color: #ef4444;
            font-size: 0.875rem;
            margin-top: 0.5rem;
            padding: 0.5rem;
            background: rgba(239, 68, 68, 0.1);
            border-radius: 0.375rem;
            border: 1px solid rgba(239, 68, 68, 0.3);
        `;

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
        const cards = document.querySelectorAll('.project-card, .skill-category');
        cards.forEach(card => {
            if (card) {
                card.addEventListener('mouseenter', () => {
                    if (window.innerWidth >= 768) { // Solo en desktop
                        card.style.transform = 'translateY(-8px) scale(1.02)';
                    }
                });
                
                card.addEventListener('mouseleave', () => {
                    if (window.innerWidth >= 768) {
                        card.style.transform = 'translateY(0) scale(1)';
                    }
                });
            }
        });

        // Efectos en botones
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(button => {
            if (button) {
                button.addEventListener('mouseenter', () => {
                    if (window.innerWidth >= 768) {
                        button.style.transform = 'translateY(-2px)';
                    }
                });
                
                button.addEventListener('mouseleave', () => {
                    if (window.innerWidth >= 768) {
                        button.style.transform = 'translateY(0)';
                    }
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
                    this.handleScrollOptimized();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        // Lazy loading para imágenes
        const images = document.querySelectorAll('img[data-src]');
        if (images.length > 0) {
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
    }

    /**
     * Manejo optimizado del scroll
     */
    handleScrollOptimized() {
        // Lógica de scroll optimizada aquí
        const header = document.querySelector('.header');
        if (header) {
            if (window.scrollY > 100) {
                header.style.background = 'rgba(15, 15, 15, 0.98)';
            } else {
                header.style.background = 'rgba(15, 15, 15, 0.95)';
            }
        }
    }

    /**
     * Configuración de características responsive
     */
    setupResponsiveFeatures() {
        // Detectar cambios de orientación
        window.addEventListener('orientationchange', () => {
            setTimeout(() => {
                this.handleOrientationChange();
            }, 100);
        });

        // Detectar cambios de tamaño de ventana
        window.addEventListener('resize', this.debounce(() => {
            this.handleResize();
        }, 250));
    }

    /**
     * Manejar cambio de orientación
     */
    handleOrientationChange() {
        // Ajustar layout según orientación
        const isPortrait = window.innerHeight > window.innerWidth;
        
        if (isPortrait) {
            document.body.classList.add('portrait');
            document.body.classList.remove('landscape');
        } else {
            document.body.classList.add('landscape');
            document.body.classList.remove('portrait');
        }
    }

    /**
     * Manejar resize de ventana
     */
    handleResize() {
        const width = window.innerWidth;
        
        // Ajustar grid de proyectos según breakpoint
        const projectsGrid = document.querySelector('.projects-grid');
        if (projectsGrid) {
            if (width >= 1440) {
                projectsGrid.style.gridTemplateColumns = 'repeat(4, 1fr)';
            } else if (width >= 1024) {
                projectsGrid.style.gridTemplateColumns = 'repeat(3, 1fr)';
            } else if (width >= 640) {
                projectsGrid.style.gridTemplateColumns = 'repeat(2, 1fr)';
            } else {
                projectsGrid.style.gridTemplateColumns = '1fr';
            }
        }

        // Ajustar grid de skills según breakpoint
        const skillsGrids = document.querySelectorAll('.skills-chips');
        skillsGrids.forEach(grid => {
            if (width >= 1024) {
                grid.style.gridTemplateColumns = 'repeat(6, 1fr)';
            } else if (width >= 640) {
                grid.style.gridTemplateColumns = 'repeat(4, 1fr)';
            } else {
                grid.style.gridTemplateColumns = 'repeat(2, 1fr)';
            }
        });
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
            background: ${type === 'success' ? 'var(--accent-primary)' : '#ef4444'};
            color: white;
            border-radius: 0.5rem;
            box-shadow: 0 8px 24px rgba(0,0,0,0.2);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            font-family: inherit;
            font-size: 0.875rem;
            max-width: 300px;
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

    /**
     * Función de utilidad para debounce
     */
    debounce(func, wait) {
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
}

/**
 * Inicialización cuando el DOM esté listo
 */
document.addEventListener('DOMContentLoaded', () => {
    try {
        // Inicializar el portfolio
        const portfolio = new ResponsivePortfolio();
        
        // Inicializar iconos Lucide
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
        
        // Agregar clase de carga al body
        document.body.classList.add('loaded');
        
        // Log de inicialización
        console.log('🚀 MVGN Portfolio Móvil Responsive cargado');
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
        
        // Log de carga completa
        console.log('✨ Página completamente cargada');
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

/**
 * Función para detectar si es dispositivo móvil
 */
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

/**
 * Función para detectar el tipo de dispositivo
 */
function getDeviceType() {
    const width = window.innerWidth;
    if (width < 640) return 'mobile';
    if (width < 1024) return 'tablet';
    if (width < 1440) return 'desktop';
    return 'desktop-xl';
}

/**
 * Función para ajustar layout según dispositivo
 */
function adjustLayoutForDevice() {
    const deviceType = getDeviceType();
    document.body.setAttribute('data-device', deviceType);
    
    // Ajustes específicos por dispositivo
    switch (deviceType) {
        case 'mobile':
            // Optimizaciones para móvil
            break;
        case 'tablet':
            // Optimizaciones para tablet
            break;
        case 'desktop':
            // Optimizaciones para desktop
            break;
        case 'desktop-xl':
            // Optimizaciones para desktop XL
            break;
    }
}

// Ejecutar ajustes de layout al cargar
document.addEventListener('DOMContentLoaded', adjustLayoutForDevice);
window.addEventListener('resize', throttle(adjustLayoutForDevice, 250));
