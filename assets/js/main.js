/* ==========================================================================
   PREMIUM X-RAY & SCAN CENTER - MAIN APP ENTRY POINT
   Initializes site components, verifies image rendering, and binds helpers
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  console.log('X-Ray & Scan Center Medical Portal initialized.');

  // Pre-check images to ensure no broken links
  const allImages = document.querySelectorAll('img');
  allImages.forEach(img => {
    img.addEventListener('error', function () {
      console.warn('Image failed to load:', this.src);
    });
  });

  // Smooth scroll for anchor hash links
  const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
  anchorLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Back-to-top floating button across all pages
  if (!document.getElementById('backToTopBtn')) {
    const backToTopBtn = document.createElement('button');
    backToTopBtn.id = 'backToTopBtn';
    backToTopBtn.className = 'back-to-top-btn';
    backToTopBtn.type = 'button';
    backToTopBtn.setAttribute('aria-label', 'Scroll back to top');
    backToTopBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="18 15 12 9 6 15"/></svg>';
    document.body.appendChild(backToTopBtn);

    const toggleBackToTop = function () {
      if (window.scrollY > 320) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    };

    window.addEventListener('scroll', toggleBackToTop, { passive: true });
    toggleBackToTop();

    backToTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
