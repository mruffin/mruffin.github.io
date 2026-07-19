document.addEventListener('DOMContentLoaded', function () {
    const nav = document.getElementById('nav');
    const toggle = document.getElementById('navToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    // Scroll shadow on navbar
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 10);
    });

    // Mobile menu toggle
    if (toggle && mobileMenu) {
        toggle.addEventListener('click', () => mobileMenu.classList.toggle('open'));
        mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));
    }

    // Highlight current page in nav (matches data-page on <body> to href)
    const currentPage = document.body.getAttribute('data-page');
    document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
        if (a.getAttribute('data-page') === currentPage) a.classList.add('active');
    });

    // Papers / Talks tab switcher (publications page)
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-tab');
            tabBtns.forEach(b => b.classList.toggle('active', b === btn));
            tabPanels.forEach(p => p.classList.toggle('active', p.id === target));
        });
    });

    // Fade-in on scroll
    const obs = new IntersectionObserver(entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
    }), { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
    document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));
});
