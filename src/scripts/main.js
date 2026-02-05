import '../styles/main.css';

console.log('MVGN V2 Initialized');

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu-overlay');
    const closeBtn = document.querySelector('.close-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.style.display = 'flex';
        });

        closeBtn.addEventListener('click', () => {
            mobileMenu.style.display = 'none';
        });
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
            mobileMenu.style.display = 'none'; // Close menu on click

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
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
