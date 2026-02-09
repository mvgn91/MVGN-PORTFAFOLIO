import '../styles/main.css';

console.log('MVGN V2 Initialized');

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // Mobile Navigation Logic (Bottom Nav)
    const navItems = document.querySelectorAll('.mobile-bottom-nav .nav-item');
    const sections = document.querySelectorAll('section[id]');

    function updateActiveNavItem() {
        if (window.innerWidth > 1024) return;

        let currentSectionId = 'hero';
        const scrollPosition = window.scrollY + window.innerHeight / 3; // Trigger earlier

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${currentSectionId}`) {
                item.classList.add('active');
            }
        });
    }

    // Scroll Reveal Logic
    const revealElements = document.querySelectorAll('section, .project-card, .service-card, .about-grid');
    revealElements.forEach(el => el.classList.add('reveal'));

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: unobserve after reveal
                // revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    if (navItems.length > 0) {
        window.addEventListener('scroll', updateActiveNavItem);
        updateActiveNavItem(); // Initial call
    }

    // Profile Card Tilt Effect
    const card = document.querySelector('.profile-card');
    const container = document.querySelector('.hero-section');

    if (card && container) {
        container.addEventListener('mousemove', (e) => {
            if (window.innerWidth > 1024) return; // Only relevant if visible, but logic persists

            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;

            card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });

        container.addEventListener('mouseenter', () => {
            card.style.transition = 'none';
            // Popout
        });

        container.addEventListener('mouseleave', () => {
            card.style.transition = 'all 0.5s ease';
            card.style.transform = `rotateY(0deg) rotateX(0deg)`;
        });
    }

    // Smooth Scroll for Anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const mobileOverlay = document.querySelector('.mobile-menu-overlay');
            if (mobileOverlay) mobileOverlay.style.display = 'none';

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    // Generate GitHub Style Activity Grid
    const ghGrid = document.getElementById('activity-grid');
    if (ghGrid) {
        // Create 20 columns * 7 rows equivalent (approx 140 cells)
        const totalCells = 140;

        for (let i = 0; i < totalCells; i++) {
            const cell = document.createElement('div');
            cell.classList.add('gh-cell');

            // Randomly assign initial activity level
            const rand = Math.random();
            let level = 'l-0';
            if (rand > 0.85) level = 'l-4';
            else if (rand > 0.7) level = 'l-3';
            else if (rand > 0.5) level = 'l-2';
            else if (rand > 0.3) level = 'l-1';

            cell.classList.add(level);
            ghGrid.appendChild(cell);
        }

        // Animate Cells "Living"
        setInterval(() => {
            const cells = document.querySelectorAll('.gh-cell');
            if (cells.length === 0) return;
            const randomCell = cells[Math.floor(Math.random() * cells.length)];

            // Toggle level to simulate activity
            const currentClasses = Array.from(randomCell.classList);
            const currentLevel = currentClasses.find(c => c.startsWith('l-'));

            let newLevel = 'l-0';
            const r = Math.random();
            if (r > 0.6) newLevel = 'l-3';
            else if (r > 0.3) newLevel = 'l-2';
            else newLevel = 'l-1';

            if (currentLevel) randomCell.classList.remove(currentLevel);
            randomCell.classList.add(newLevel);

        }, 80); // Faster updates
    }
});
