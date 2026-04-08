// Script.js - Fonctionnalités DW EVENT
document.addEventListener('DOMContentLoaded', function() {
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
  document.querySelectorAll('a[href^=\"#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
    });
  });

  // Theme toggle (exemple)
  document.getElementById('themeToggle')?.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
  });
  
  console.log('✅ DW EVENT script chargé');
});
