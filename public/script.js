// Script.js - Fonctionnalités DW EVENT
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');
  
  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('active');
      mobileMenuBtn.textContent = mobileNav.classList.contains('active') ? '✕' : '☰';
    });
    
    // Close on link click
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        mobileMenuBtn.textContent = '☰';
      });
    });
  }

  // Stats counter (exemple)
  const stats = document.querySelectorAll('.stat-number');
  stats.forEach(stat => {
    stat.textContent = '0';
  });

  // Scroll top
  const scrollTopBtn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('show', window.scrollY > 300);
  });
  scrollTopBtn.addEventListener('click', () => window.scrollTo({top: 0, behavior: 'smooth'}));

  // Nav smooth scroll
  document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({behavior: 'smooth'});
    });
  });

  // Theme toggle (exemple)
  document.getElementById('themeToggle')?.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
  });

  // Mobile viewport fix
  let vh = 0;
  const setVh = () => {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };
  setVh();
  window.addEventListener('resize', setVh);
  window.addEventListener('orientationchange', () => setTimeout(setVh, 100));
  
  console.log('✅ DW EVENT script chargé - Mobile ready');
});
